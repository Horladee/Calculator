let display = document.getElementById("display");
let btns = document.querySelectorAll(".btn");
for (let i = 0; i < btns.length; i++) {
  const element = btns[i];
  element.addEventListener('click',function () { 
    switch (element.value) {
      case 'AC':
        display.value = "";
        break;

        case '=':try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "error"
        }
          break;

          case 'DEL' :{
            if (display.value){
            display.value = display.value.slice(0,-1);
            }
          } 
            break;
          
      default:
        display.value += element.value;
        break;
    }
  })
}
