
import '@material/mwc-button';
import '@material/mwc-ripple';
import css from './styles.css';
import setupEventHandlers from './EventHandlers';

let expression = '';
let cursor = 0;
let lastNode = {};
let monitorExpression = '';
let monitorEexpressionCursor = 0;
// const expressionHistory = [];

setupEventHandlers();