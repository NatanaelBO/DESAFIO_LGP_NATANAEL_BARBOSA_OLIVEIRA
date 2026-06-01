//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning position if found, -1 if not
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            // Only add if not already in array and limit is 2
            if (carArr.length < 2 && GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            } else if (carArr.length >= 2) {
                alert("Você já selecionou 2 carros para comparar.");
                el.checked = false;
            }
        } else {
            // Remove from array when unchecked
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        let car = carArr[i];

        document.getElementById("compare_image_" + i).innerHTML =
            "<img src='" + car.image + "' style='width:120px;height:80px;object-fit:cover;'>";

        document.getElementById("compare_modelo_" + i).innerHTML = car.nome;
        document.getElementById("compare_alturacacamba_" + i).innerHTML = car.alturaCacamba;
        document.getElementById("compare_alturaveiculo_" + i).innerHTML = car.alturaVeiculo;
        document.getElementById("compare_alturasolo_" + i).innerHTML = car.alturaSolo;
        document.getElementById("compare_capacidadecarga_" + i).innerHTML = car.capacidadeCarga;
        document.getElementById("compare_motor_" + i).innerHTML = car.motor;
        document.getElementById("compare_potencia_" + i).innerHTML = car.potencia;
        document.getElementById("compare_volumecacamba_" + i).innerHTML = car.volumeCacamba;
        document.getElementById("compare_roda_" + i).innerHTML = car.roda;
        document.getElementById("compare_preco_" + i).innerHTML =
            "R$ " + car.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    }
}
