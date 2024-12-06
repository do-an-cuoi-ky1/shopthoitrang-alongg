function calculateSize() {
    // Lấy giá trị từ input và chuyển thành số
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const chest = parseFloat(document.getElementById('chest').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const legLength = parseFloat(document.getElementById('legLength').value);

    let shirtSize = "";
    let pantsSize = "";

    // Kiểm tra nếu các giá trị chưa được nhập đầy đủ
    if (isNaN(height) || isNaN(weight) || isNaN(chest) || isNaN(waist) || isNaN(legLength)) {
        document.getElementById('result').innerText = "Vui lòng nhập đầy đủ các số đo!";
        return;
    }

    // Xác định size áo
    if (chest >= 92 && chest <= 100 && height >= 160 && height <= 167 && weight >= 50 && weight <= 60) {
        shirtSize = "S";
    } else if (chest >= 96 && chest <= 104 && height >= 163 && height <= 170 && weight >= 55 && weight <= 65) {
        shirtSize = "M";
    } else if (chest >= 100 && chest <= 108 && height >= 165 && height <= 172 && weight >= 65 && weight <= 75) {
        shirtSize = "L";
    } else if (chest >= 104 && chest <= 112 && height >= 170 && height <= 180 && weight >= 75 && weight <= 90) {
        shirtSize = "XL";
    } else if (chest >= 106 && chest <= 114 && height >= 170 && height <= 190 && weight >= 85 && weight <= 100) {
        shirtSize = "XLL";
    } else {
        shirtSize = "Không xác định (hãy kiểm tra lại số đo)";
    }

    // Xác định size quần
    if (waist >= 68 && waist <= 72 && legLength <= 82) {
        pantsSize = "S (26-28)";
    } else if (waist >= 74 && waist <= 78 && legLength <= 83) {
        pantsSize = "M (29-31)";
    } else if (waist >= 82 && waist <= 84 && legLength <= 84) {
        pantsSize = "L (32-33)";
    } else if (waist >= 87 && legLength <= 85) {
        pantsSize = "XL (34)";
    } else {
        pantsSize = "Không xác định (hãy kiểm tra lại số đo)";
    }

    // Hiển thị kết quả
    document.getElementById('result').innerText = `Size áo của bạn: ${shirtSize}\nSize quần của bạn: ${pantsSize}`;
}
