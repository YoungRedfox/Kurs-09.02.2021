
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
    }
]

        function displayPassenger() {

            for(i=0; i < passengers.length; i++) {

                

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

                if(passengers[i].sex == "women") {
                    sexPasseneger = "Kobieta" 
                } else {
                    sexPasseneger = "Mężczyzna" 
                }

                paragrafSex.innerText = "Płeć: " + sexPasseneger

                const isDog = passengers[i].isDog ? "Ma psa" : "Nie ma psa"

                paragrafIsDog.innerText = isDog

                createDivPassenger.append(h2Name)
                createDivPassenger.append(paragrafSex)
                createDivPassenger.append(paragrafIsDog)

                gridPassengers.append(createDivPassenger)

            }

        }

        function displayPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
            

            for(i=0; i < res.length; i++) {

            const postsList = document.getElementsByClassName("postsList")
               
            const divPost = document.createElement("div")
            const titlePost = document.createElement("h4")
            const bodyPost = document.createElement("p")
            const idPost = document.createElement("p")

            divPost.setAttribute("class", 'divPost')
            titlePost.setAttribute("class", 'titlePost')
            idPost.setAttribute("class", 'idPost')
            bodyPost.setAttribute("class", 'bodyPost')

            titlePost.innerText = "Tytuł: " + res[i].title
            idPost.innerText = "ID użytkownika: " + res[i].userId
            bodyPost.innerHTML = res[i].body

            divPost.append(titlePost)
            divPost.append(idPost)
            divPost.append(bodyPost)

            postsList[0].append(divPost)

            }

        })
    }

    function displayImage(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(res => {
            

            for(i=0; i < res.length; i++) {

                const imageGrid = document.getElementById("imageGrid")

                const divCard = document.createElement("div")

                const image = document.createElement("img")

                const divCardBody = document.createElement("div")

                const h5TitleImage = document.createElement("h5")

                divCard.setAttribute("class", "card myCard")

                image.setAttribute("class", "card-img-top")

                image.src = res[i].thumbnailUrl

                console.log(image)

                divCardBody.setAttribute("class", "card-body")

                h5TitleImage.setAttribute("class", "card-title")

                h5TitleImage.innerText = res[i].title

                divCardBody.append(h5TitleImage)

                divCard.append(image)
                divCard.append(divCardBody)

                imageGrid.append(divCard)
            }
        })
    }