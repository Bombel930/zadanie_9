const obiekt1 = {
    nazwa: "Laptop",
    waga: 2,
    cena: 3000
};

const obiekt2 = {
    nazwa: "Telefon",
    waga: 0.2,
    cena: 2000
};

const sumaWagi = obiekt1.waga + obiekt2.waga;

let drozszy;

if (obiekt1.cena > obiekt2.cena) {
    drozszy = 1;
} else if (obiekt2.cena > obiekt1.cena) {
    drozszy = 2;
} else {
    drozszy = "Oba obiekty kosztują tyle samo";
}

function wyswietlWynik() {
    document.body.innerHTML = "";

    const naglowek = document.createElement("h1");
    naglowek.textContent = "Informacje o obiektach";
    document.body.appendChild(naglowek);

    const wynik1 = document.createElement("p");
    wynik1.textContent = "Obiekt numer 1 nosi nazwę: " + obiekt1.nazwa;
    document.body.appendChild(wynik1);

    const wynik2 = document.createElement("p");
    wynik2.textContent = "Obiekt numer 2 nosi nazwę: " + obiekt2.nazwa;
    document.body.appendChild(wynik2);

    const wynik3 = document.createElement("p");
    wynik3.textContent = "Oba obiekty w sumie ważą: " + sumaWagi + " kg";
    document.body.appendChild(wynik3);

    const wynik4 = document.createElement("p");
    wynik4.textContent = "Droższym z nich jest obiekt nr: " + drozszy;
    document.body.appendChild(wynik4);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wyswietlWynik);
} else {
    wyswietlWynik();
}