
import './style.scss';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
// import ButtonClick from './ButtonClick';
// window.ButtonClick=function () {
//     console.log('rg');
// }
window.onload=function () {
    console.log('dget');
    console.log(document.querySelector('#myselect'))
    document.querySelector('#myselect').onchange=function(e){
        console.log('e');
    }
    document.querySelector('#myButton').onclick=function(e){
        console.log('erggfb');
    }
    
}

    // function App() {
    // componentDidMount(){
        // var x,x1,list,notlist,notlis,note, index,onlist,testElement;
        //  x = document.querySelector('#myselect');
        // // x.addEventListener('change', (e) => {
        // //     console.log(e.target.value)
        // // })
        //     x.addEventListener('change', (e) => {
        //     // var x1 = x.selected.value;
        //     console.log('xalan',e.target.value);
        //     list = document.getElementsByClassName(e.target.value);
        //     notlist=document.querySelectorAll('.pic mwc-list-item');
        //     console.log('list.length',list.length);
        //     console.log('notlist.length',notlist.length);
        //     notlis = Object.values(notlist).filter(val => val.className!==e.target.value);
        //     console.log('notlis.length',notlis.length);
        //     for (index = 0; index < notlis.length; ++index) {
        //             notlis[index].style.cssText += 'display:none;';
        //     }
        //     for (index = 0; index < list.length; ++index) {
        //             list[index].style.cssText += 'display:block;';
        //     }


        // })

    // }

    // render(){
        // return (
      
            
        //   );

    // }
  
// }
// var x,x1,list,notlist,notlis,note, index,onlist,testElement;
// x = document.querySelector('#myselect');
//  x.addEventListener('change', () => {
//     var x1 = x.selected.value;
//     console.log('xalan',x1);
//         list = document.getElementsByClassName(x1);
//         notlist=document.querySelectorAll('.pic mwc-list-item');
//         console.log(list.length);
//         console.log(notlist.length);
//         console.log(notlist);
//         notlis = Object.values(notlist).filter(val => val.className!==x1);
//         console.log(notlis.length);
//         for (index = 0; index < notlis.length; ++index) {
//             notlis[index].style.cssText += 'display:none;';
//         }
//         for (index = 0; index < list.length; ++index) {
//             list[index].style.cssText += 'display:block;';
//         }


//  })
// export default App;
