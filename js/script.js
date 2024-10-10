console.log('Nyambung ini');

function validateForm() {
    console.log('validasi berhasil')
    var inputSuhu = document.getElementById('input-suhu').value;

    if (inputSuhu == ''){
        alert ('silahkan masukkan angka');
    } else {
        calculate(inputSuhu);
    }
}

function calculate(value){
    var result = parseInt(value)* 9/5 + 32;
    document.getElementById('hasil-suhu').value = result;
    document.getElementById('how-to-suhu').value = value + ' x 9/5 + 32 = ' + result;
}

function reset (){
    document.getElementById('input-suhu').value = '';
    document.getElementById('hasil-suhu').value = '';
    document.getElementById('how-to-suhu').value = '';

}

var isFahrenheitToCelsius = true;  // Flag untuk menentukan arah konversi

function reverse() {
    var inputSuhu = document.getElementById("input-suhu").value;
    var instruction = document.getElementById("instruction");
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var hasilSuhu = document.getElementById("hasil-suhu");
    var howToSuhu = document.getElementById("how-to-suhu");

    if (isFahrenheitToCelsius) {
        // Jika input dalam Fahrenheit, konversi ke Celsius
        var celsius = (parseInt(inputSuhu) * 9/5) + 32;
        hasilSuhu.value = celsius.toFixed(2);  // Format 2 angka desimal
        howToSuhu.value = inputSuhu + ' x 9/5 + 32 = ' + celsius.toFixed(2);
        instruction.textContent = "Masukkan suhu derajat Celsius (°C) ke kotak di bawah. Lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Fahrenheit (°F)";
        cel.textContent = "Celcius (°C)";
        fah.textContent = "Fahrenheit (°F)";
    } else {
        // Jika input dalam Celsius, konversi ke Fahrenheit
        var celsius = (parseInt(inputSuhu) - 32) * 5 / 9;
        hasilSuhu.value = celsius.toFixed(2);  // Format 2 angka desimal
        howToSuhu.value = inputSuhu + ' - 32 x 5/9 = ' + celsius.toFixed(2);
        instruction.textContent = "Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah. Lalu klik tombol Konversi untuk mendapatkan hasil konversi dalam bentuk Celsius (°C)";
        cel.textContent = "Fahrenheit (°F)";
        fah.textContent = "Celsius (°C)";
    }

    // Ubah arah konversi untuk pemanggilan berikutnya
    isFahrenheitToCelsius = !isFahrenheitToCelsius;
}
