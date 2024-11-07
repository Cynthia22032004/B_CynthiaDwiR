// function myFirst(){
//     myDisplayer("Good bye");   
// }

// function mySecond(callback){
//     myDisplayer("Hello");
//     callback();
// }

// function myDisplayer(message) {
//     console.log(message);
// }

// mySecond(myFirst);

// console.log("paragraf 1");
// setTimeout(() =>{
//  console.log(Paragraf)   
// }
// )

// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
//   }
//   setInterval(setTime, 1000);
//   console.log("Program Finish");

function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }
        
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        
        const result = a / b;
        return result;
        
    } catch (error) {
        console.error("Error:", error.message);
        return error.message;
    }
}


function performDivision() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const result = divideNumbers(num1, num2);

    document.getElementById("result").textContent = result;
}
