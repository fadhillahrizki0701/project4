const city = document.getElementById("city");
        const condition = document.getElementById("condition");
        const temperature = document.getElementById("temperature");
        const wind = document.getElementById("wind");

        const input=document.getElementById("input");
        const button_src=document.getElementById("btn_search");

        button_src.onclick = function() {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=0ac677e5a786e599aac60c36adb62a2d&units=metric")
           
            .then((response)=> response.json()) 
            .then((response)=>{
              
                console.log(response)

                city.innerHTML = response.name
                condition.innerHTML = response.weather[0].description
                temperature.innerHTML = response.main.temp+"°С"
                wind.innerHTML = response.wind.speed+ " Km/H"
            })
            
            .catch(err => alert("Don't use symbols!"))//digunakan untuk handling error jika inputan berupa simbol
        }

        

        var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
 
    document.getElementById("tampil").innerHTML = tampilTanggal;