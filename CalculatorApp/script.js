function appendValue(value) {
    document.getElementById("result").value += value;
}
function calculateResult() {
    const result = document.getElementById("result").value;
    try {
        const calculatedResult = eval(result);
        document.getElementById("result").value=calculatedResult
    }catch(error){
        document.getElementById("result").value = "Error";
    }
}
function clearResult() {
    document.getElementById("result").value = "";
}
