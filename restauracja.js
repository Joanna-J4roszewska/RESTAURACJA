const dropdown = document.querySelector('.dropdown-container');

dropdown.addEventListener('click', function(e) {
    if(window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle('active');
    }
});
const slajdy = document.querySelector('.slajdy');
const obrazy = document.querySelectorAll('.slajdy img');
const btnPoprzedni = document.querySelector('.przycisk.poprzedni');
const btnNastepny = document.querySelector('.przycisk.nastepny');


let licznik = 0;


function aktualizujGalerie() {
    slajdy.style.transform = `translateX(${-licznik * 100}%)`;
    slajdy.style.transition = "transform 0.5s ease-in-out";
}


if (btnNastepny) {
    btnNastepny.addEventListener('click', () => {
        licznik++;
        if (licznik > obrazy.length - 1) {
            licznik = 0;
        }
        
        aktualizujGalerie();
    });
}

if (btnPoprzedni) {
    btnPoprzedni.addEventListener('click', () => {
        licznik--;
        

        if (licznik < 0) {
            licznik = obrazy.length - 1;
        }
        
        aktualizujGalerie();
    });
}