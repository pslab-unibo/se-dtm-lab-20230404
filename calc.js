class Calculator {
    firstOperand;
    secondOperand;
    operator;

    constructor(){        
        this.firstOperand = 0;
        this.secondOperand = 0;
        this.operator = '';    
    }

    setFirstOperand(value){
        this.firstOperand = value;
    }

    setSecondOperand(value){
        this.secondOperand = value;
    }

    setOperator(op){
        this.operator = op;
    }

    getResult(){
        if (this.operator == '+'){
            return this.firstOperand + this.secondOperand;
        } else if (this.operator == '-'){
            return this.firstOperand - this.secondOperand;
        } else if (this.operator == '*'){
            return this.firstOperand * this.secondOperand;
        } else if (this.operator == '/'){
            return this.firstOperand / this.secondOperand;
        } 
    }
}


class CalculatorExt {
    firstOperand;
    secondOperand;
    operator;
    result;

    constructor(){        
        this.firstOperand = 0;
        this.secondOperand = 0;
        this.operator = '';    
    }

    setFirstOperand(value){
        this.firstOperand = value;
    }

    setSecondOperand(value){
        this.secondOperand = value;
    }

    setOperator(op){
        this.operator = op;
    }

    computeResult(){
        if (this.operator == '+'){
            this.result = this.firstOperand + this.secondOperand;
        } else if (this.operator == '-'){
            this.result = this.firstOperand - this.secondOperand;
        } else if (this.operator == '*'){
            this.result = this.firstOperand * this.secondOperand;
        } else if (this.operator == '/'){
            this.result = this.firstOperand / this.secondOperand;
        } 
        this.firstOperand = this.result;
    }

    getCurrentResult(){
        return this.result;
    }
}

/*
let calc = new Calculator();

calc.setFirstOperand(100);
calc.setSecondOperand(5);
calc.setOperator("-");
let res = calc.getResult();

console.log("The result is: " + res);
 */
/* using the second calculator */

let calc2 = new CalculatorExt();

calc2.setFirstOperand(1);
calc2.setOperator("+");
calc2.setSecondOperand(2);
calc2.computeResult();
let res2 = calc2.getCurrentResult();
console.log("The result is: " + res2);

calc2.setOperator("*");
calc2.setSecondOperand("10");
calc2.computeResult();

res2 = calc2.getCurrentResult();
console.log("The result is: " + res2);
