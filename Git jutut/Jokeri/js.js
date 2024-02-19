document.addEventListener('DOMContentLoaded', function () {
    var LaskuRivi = 0;
    document.getElementById('UusiRiviNappi').addEventListener('click', function () {
        lisaaUusiRivi();
    });
    function lisaaUusiRivi() {
        var taulukko = document.getElementById('jokeriTaulukko');

        var rivi = taulukko.insertRow();
        
        for (var i = 0; i < 7; i++) {

            var solu = rivi.insertCell();
            solu.innerHTML = Math.floor(Math.random() * 10);
        }
        LaskuRivi++;
        document.getElementById('arvotutRivit').textContent = 'Arvottuja rivejä: ' + LaskuRivi;
    }
});
