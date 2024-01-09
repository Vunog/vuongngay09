function solveQuadraticeQuation() {
    var aInput = document.getElementById("inputA");
    var bInput = document.getElementById("inputB");
    var cInput = document.getElementById("inputC");
    var resultElement = document.getElementById("result");
    var deltaElement = document.getElementById("delta");
    var x1Element = document.getElementById("x1");
    var x2Element = document.getElementById("x2");

    // Lấy giá trị từ các ô nhập liệu
    var a = parseFloat(aInput.value);
    var b = parseFloat(bInput.value);
    var c = parseFloat(cInput.value);

    // Kiểm tra các giá trị không hợp lệ 
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.innerText = "Vui Lòng nhập đúng giá trị cho A, B và C";
        return;
    }

    // Giải phương trình bậc hai 
    var delta = b * b - 4 * a * c;
}

if (isNaN(a)) {
    resultElement.innerText = "Gía trị của A không hợp lệ";
    aInput.focus();
    return;
}