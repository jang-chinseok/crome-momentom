const Bg = document.querySelector(".bgImage");

const ImgNum=7;

const imgLilst=
            ["https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg",
              "https://cdn.pixabay.com/photo/2021/05/29/18/59/petra-6294051_960_720.jpg",
              "https://cdn.pixabay.com/photo/2020/11/01/14/38/sea-5703965__340.jpg",
              "https://cdn.pixabay.com/photo/2021/01/21/21/48/mountain-ranges-5938639__340.jpg",
              "https://cdn.pixabay.com/photo/2021/04/28/09/44/book-6213537__340.jpg",
              "https://cdn.pixabay.com/photo/2020/08/07/10/22/trees-5470297__340.jpg",
              "https://cdn.pixabay.com/photo/2021/05/24/11/56/lake-6278825__340.jpg",
              "https://cdn.pixabay.com/photo/2021/05/14/15/17/mountain-6253669__340.jpg"
            ];

function paintImage(imgNum){
    Bg.src =imgLilst[imgNum]; 
    console.log(imgNum);
    /*image.classList.add("bgImage");
    Bg.prepend(image);*/
}




function genRandom() {
    const number = Math.floor(Math.random() * ImgNum);
    paintImage(number);
    return number;
    
  }
 

  function init(){
      const randomNumber = genRandom();
      paintImage(randomNumber);

    setInterval(genRandom, 5000);
  }

  init();