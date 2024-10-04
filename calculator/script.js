const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let firstOperand = "";
let operator = "";
let secondOperand = "";
let boolean = false

function calculate(firstOperand, operator, secondOperand) {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "*") {
        return num1 * num2;
    }
    if (operator === "/") {
        return num1 / num2;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        const buttonText = event.target.textContent;

        // 숫자 버튼이 눌렸을 때
        if (button.classList.contains("number")) {
                if (display.value === "0" || boolean ) {
                    display.value = buttonText;
                    boolean = false
                } else {
                    display.value += buttonText;
                }
            }
        

        // 연산자 버튼이 눌렸을 때
        if (button.classList.contains("operator")) {
            if (firstOperand === null) {
                firstOperand = display.value;
            }else{
                firstOperand = display.value
                operator = buttonText;
                boolean = true
                
                console.log(`First Operand: ${firstOperand}, Operator ${operator}`)
            }
            
            
        }
        
        // ± 버튼 (양수/음수 변경)
        if (buttonText === "±") {
            display.value = display.value * -1;
        }

        // C 버튼 (초기화)
        if (buttonText === "C") {
            firstOperand = "";
            operator = "";
            secondOperand = "";
            display.value = "0";
            boolean = false;
           
        }

        // . 버튼 (소수점 입력)
        if (buttonText === ".") {
            if (!display.value.includes(".")) {
                display.value += ".";
            }
        }

        // = 버튼 (계산 결과 출력)
        if (buttonText === "=") {
            if (firstOperand !== "" && operator !== "") {
                secondOperand = display.value;
                const result = calculate(firstOperand, operator, secondOperand);
                display.value = result;
                firstOperand = "";
                operator = "";
                secondOperand = "";
                boolean = false;
               
            }
        }
    });
})
