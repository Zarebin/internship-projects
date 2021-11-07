import { create, all } from 'mathjs';
const math = create(all);

math.config({
    number: 'BigNumber',
    precision: 11,
    predictable: true,
});


const setMonitorPrimaryExpression = (innerHTML) => {
    const monitor = document.getElementById('primary');
    monitor.innerHTML = innerHTML;
};
const setMonitorSecondaryExpression = (innerHTML) => {
    const monitor = document.getElementById('secondary');
    monitor.innerHTML = innerHTML;
};
function isValidButton(lastButton, currentButton) {
    return true;
}

function pushCurrentButton(buttonsHistory, e) {
    let currentButton = {
        id: e.target.id,
        type: e.target.className,
        value: e.target.getAttribute('value'),
        label: e.target.label,
        monitorValue: e.target.getAttribute('monitor-value'),
    };
    buttonsHistory.push(currentButton)
}

export default () => {
    let ans = 0;
    let expression = '';
    let cursor = 0;
    let monitorExpression = '';
    let monitorCursor = 0;
    let buttonsHistory = [];

    const buttons = document.querySelectorAll('.operand,.operator,.function');
    for (let button of buttons) {
        button.addEventListener('click', (e) => {

            let currentButton = {
                id: e.target.id,
                type: e.target.className,
                value: e.target.getAttribute('value'),
                label: e.target.label,
                monitorValue: e.target.getAttribute('monitor-value'),
            };
            if (buttonsHistory.length !== 0) {
                if (buttonsHistory[buttonsHistory.length - 1].id === 'equals' && currentButton.type !== 'operator') {
                    expression = '';
                    monitorExpression = '';
                }
            }
            if (currentButton.id === 'ans') {
                currentButton.value = ans;
                currentButton.monitorValue = 'Ans';
            }
            if (isValidButton(buttonsHistory, currentButton)) {
                const start = expression.slice(0, cursor);
                const end = expression.slice(cursor, expression.length);
                expression = start + currentButton.value + end;
                cursor += currentButton.value.length;

                const monitorStart = monitorExpression.slice(0, monitorCursor);
                const monitorEnd = monitorExpression.slice(monitorCursor, monitorExpression.length);
                monitorExpression = monitorStart + currentButton.monitorValue + monitorEnd;
                monitorCursor += currentButton.monitorValue.length;

                if (currentButton.type === 'function') {
                    cursor--;
                    monitorCursor--;
                }
                buttonsHistory.push(currentButton);
            }
            setMonitorSecondaryExpression('Ans' + '=' + ans);
            setMonitorPrimaryExpression(monitorExpression);
        });
    }

    const equalsButton = document.getElementById('equals');
    equalsButton.addEventListener('click', (e) => {
        let result = math.evaluate(expression);
        if (!Number.isNaN(result)) {
            setMonitorSecondaryExpression(monitorExpression);
            setMonitorPrimaryExpression(result);
            ans = result;
            monitorExpression = '' + ans;
            expression = '' + ans;
            pushCurrentButton(buttonsHistory, e);
        }
    });

    const closeParenthesisButton = document.getElementById('close-parenthesis');
    closeParenthesisButton.addEventListener('click', (e) => {
        if (expression.length !== cursor) {
            cursor++;
            monitorCursor++;
            pushCurrentButton(buttonsHistory, e);
        }
    });

    const ansButton = document.getElementById('ans')

    const ceButton = document.getElementById('ce');
    ceButton.addEventListener('click', () => {
        const lastButton = buttonsHistory.pop();
        if (lastButton !== undefined) {
            if (lastButton.type === 'operand' || lastButton.type === 'operator' || lastButton.type === 'function') {
                const start = expression.slice(0, expression.lastIndexOf(lastButton.value));
                const end = expression.slice(expression.lastIndexOf(lastButton.value) + lastButton.value.length, expression.length);
                expression = start + end;
                cursor -= lastButton.value.length;

                const monitorStart = monitorExpression.slice(0, monitorExpression.lastIndexOf(lastButton.monitorValue));
                const monitorEnd = monitorExpression.slice(monitorExpression.lastIndexOf(lastButton.monitorValue) + lastButton.monitorValue.length, monitorExpression.length);
                monitorExpression = monitorStart + monitorEnd;
                monitorCursor -= lastButton.monitorValue.length;

                if (lastButton.type === 'function') {
                    cursor++;
                    monitorCursor++;
                }
            } else if (lastButton.id === 'equals') {
                expression = '';
                cursor = 0;
                monitorExpression = '';
                monitorCursor = 0;
                buttonsHistory = [];
                setMonitorSecondaryExpression('Ans' + '=' + ans);
            } else if (lastButton.id === 'close-parenthesis') {
                cursor--;
                monitorCursor--;
            }
        }
        setMonitorPrimaryExpression(monitorExpression.length === 0 ? 0 : monitorExpression);
    });
};