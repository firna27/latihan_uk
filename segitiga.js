// const segitigaContainer = document.getElementById("segitigaContainer");
const segitigaForm = document.getElementById
("segitigaForm");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const tampil = document.getElementById("tampilContainer");

const hasilSegitiga = JSON.parse(localStorage.getItem("segitiga")) || [];

const addSegitiga = (alas, tinggi, hasil) => {
    hasilSegitiga.push({
        alas,
        tinggi,
        hasil
    });

    localStorage.setItem("segitiga", JSON.stringify(hasilSegitiga));

    return {alas, tinggi, hasil};
}

const buatSegitiga = ({alas, tinggi, hasil}) => {
    
    const divSegitiga = document.createElement("div");
    const alas1 = document.createElement("p");
    const tinggi1 = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr")

    alas1.innerHTML = "alas : " + alas;
    tinggi1.innerHTML = "tinggi : " + tinggi;
    hasil1.innerHTML = "Luas Segitiga : " + hasil;

    divSegitiga.append(alas1, tinggi1, hasil1, hr);
    tampil.appendChild(divSegitiga);

};

hasilSegitiga.forEach(buatSegitiga);

segitigaForm.onsubmit = e => {
    e.preventDefault();

    const vAlas = alas.value;
    const vTinggi = tinggi.value;
    const Luas = (vAlas*vTinggi)/2;

    const SegitigaBaru = addSegitiga(
        vAlas,
        vTinggi,
        Luas
    );

    buatSegitiga(SegitigaBaru);

    alas.value = "";
    tinggi.value = "";

};
