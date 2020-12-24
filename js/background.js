const body = document.querySelector('body'),
      btn = document.querySelector('.change-background'),
      base = "assets/images/",
      images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

let count = 0;
    i = 0;


const setRandomArray = (n) => {
    let arr = [];
    for(let i = 0; i < 6; i++){
        let random = `${base}${n}/${images[Math.floor(Math.random() * (images.length))]}`;
        arr.push(random)
    }
   return arr
}

const randomImages = [...setRandomArray("morning"),...setRandomArray("day"),...setRandomArray("evening"),...setRandomArray("night")];

const viewBgImage = (data) => {
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {      
        body.style.backgroundImage = `url(${src})`;
    }; 
        
    }

const getImage = (n) => {  
        btn.onclick = null;
        switch(n){
            case "morning": 
                i = 0;
                break;
            case "day": 
                i = 6;
                break;
            case "evening": 
                i = 12;
                break;
            case "night": 
                i = 18;
                break;
        } 
        if(count == 0){
            i
            count++
        }else if(count < 6){
            i++;
            count++
        }else{
            i++;
            count = 1
        }
        console.log(i , count)
        const index = i % randomImages.length;
        const imageSrc = `${randomImages[index]}`;
        viewBgImage(imageSrc);
        setTimeout(() => btn.onclick = getImage,1000)    
}

const setBgGreeting = () =>{
    let time  = new Date(),
    hour = time.getHours();

        if (hour >= 6 && hour < 12){
            getImage("morning")
            greeting.innerText = "Good Morning"
        }else if(hour >= 12 && hour < 18){
            getImage("day")
            greeting.innerText = "Good Day"
        }
        else if(hour >= 18 && hour < 24){
            getImage("evening")
            body.style.color = "white";
            greeting.innerText = "Good Evening"
            
        }else {
            getImage("night");
            body.style.color = "white";
            greeting.innerText = "Good Night"
        }

    }

    setBgGreeting();
    btn.onclick = getImage;
