window.onload = function() {
    var countDownDate = new Date().getTime() + 900000 ; // 10 dakika (900000  milisaniye) sonrasının zaman damgası

    var x = setInterval(function() {
        var now = new Date().getTime(); // mevcut zaman damgası

        var distance = countDownDate - now; // kalan süre hesaplanır

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // dakika hesaplanır
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); // saniye hesaplanır

        // sonucu HTML'e yazdırır
        document.getElementById("countdown").innerHTML = "Kalan süre: " + minutes + " dakika " + seconds + " saniye ";

        // zaman aşıldıysa, sonucu yazdırır
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Süre doldu!";
        }
    }, 1000); // her saniyede yenilenir
};