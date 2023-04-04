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

let calc = new Calculator();

calc.setFirstOperand(100);
calc.setSecondOperand(5);
calc.setOperator("-");
let res = calc.getResult();

console.log("The result is: " + res);
