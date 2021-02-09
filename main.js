
const passengers = [
    {
    name : "Jan",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "Halina",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Janusz",
    isDog :  false,
    sex : "men"   
    },
    {
    name : "Agnieszka",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Paweł",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "Ewelina",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Ireneusz",
    isDog :  false,
    sex : "men"   
    },
    {
    name : "Daria",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Jonasz",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "Karolina",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Judasz",
    isDog :  false,
    sex : "men"   
    },
    {
    name : "Beata",
    isDog :  false,
    sex : "women"   
    },
]

        function displayPassenger() {

            for(i=0; i <= passengers.length; i++) {

                const gridPassengers  = document.getElementById("passengerGrid")

                const createDivPassenger = document.createElement("div")
                const h2Name = document.createElement("h2")
                const paragrafSex = document.createElement("p")
                const paragrafIsDog = document.createElement("p")

                createDivPassenger.setAttribute("class", "divPassenger")
                h2Name.setAttribute("class", "namePassenger")              
                paragrafSex.setAttribute("class", "passengerInfo")
                paragrafIsDog.setAttribute("class", "passengerInfo")

                h2Name.innerText = "Imię: " + passengers[i].name

                paragrafSex.innerText = "Płeć: " + passengers[i].sex

                const isDog = passengers[i].isDog ? "Jest pies" : "Nie ma psa"

                paragrafIsDog.innerText = isDog

                createDivPassenger.append(h2Name)
                createDivPassenger.append(paragrafSex)
                createDivPassenger.append(paragrafIsDog)

                gridPassengers.append(createDivPassenger)

            }

        }