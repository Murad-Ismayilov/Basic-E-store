const mehsullarinYerlesheceyiYer = document.querySelector("#mehsullar")

async function getMelumatlariGetir(){
    const unvan = "https://fakestoreapi.com/products"

    try{            
        const cavab = await fetch(unvan)   

        console.log(cavab)

        const mehsullar = await cavab.json()
        console.log(mehsullar)


        for(let i=0; i<mehsullar.length; i++){
            mehsullarinYerlesheceyiYer.innerHTML +=  `
            <div class="col-12 col-md-6 col-lg-4 ">
            <div class="card my-2 border-0">
                <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-evenly">
                    <h5 class="card-title"> ${mehsullar[i].title } </h5>
                    <p class="card-text"> ${mehsullar[i].description.slice(0, 40)}...</p>
                    <a href="#" class="btn btn-primary"> Read more </a>
                </div>
            </div>
          </div>
                `
        }
    } 


    catch(xeta){ 
        console.log("Xeta: ", xeta.message)
    }


    finally{ 
        console.log("serverde xeta yarandi")
    }
}

window.addEventListener("DOMContentLoaded", getMelumatlariGetir)

const overlayMenyuDivi = document.querySelector(".overlay-menu")

const navbarButtonu = document.querySelector(".navbar-toggler-icon")

const closeIcon = document.querySelector(".bi-x-circle")

closeIcon.addEventListener("click", menyunuBagla)

navbarButtonu.addEventListener("click", navbarMenyunuAc)

function navbarMenyunuAc(){

    overlayMenyuDivi.classList.add("aktiv")

}

function menyunuBagla(){

    overlayMenyuDivi.classList.remove("aktiv")

}

