const america=["Halifax","Chicago","Toronto","Cancun","Bogota"];
const europe=["Oslo","Moscow","Madrid","Paris","London"];
const asia=["Dubai","Singapore","Bangkok","Kolkata","Tokyo"];


const continent=document.getElementById("input");

const button=document.querySelector(".btn");


let val=0;
async function weatherCalculation(locate){
    const apiURl=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=8693b0c76a080ece4e7d07e4b2b14df6&&units=metric`);

    const data=await apiURl.json();
    console.log( data);
    const value=`col3${val++}`;
    document.getElementById(value).innerHTML=Math.round(data.main.temp)+"°C";

    

}


let index=0;

  async function findTime(country,state){
     
    
             const location=country+"/"+state;
             const apiKey="XJNNDNW887DB";
             const apiUrl= await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${location}`);
             const data= await apiUrl.json();
        
             console.log(data.formatted);
             const v=`col2${index++}`;
             document.getElementById(v).innerHTML=data.formatted;
        
    }


button.addEventListener('click', () => {
    let cities = [];
    
    if (continent.value == "America") {
        cities = america;
    } else if (continent.value == "Europe") {
        cities = europe;
    } else if (continent.value == "Asia") {
        cities = asia;
    } else {
        const error = "You Entered the Wrong Location. Enter Correct Location.";
        document.querySelector('#label').innerHTML = error;
        return;
    }

    let currentIndex = 0;

    const fetchWeatherAndTime = () => {
        if (currentIndex < cities.length) {
            const city = cities[currentIndex];
            const value = `col1${currentIndex}`;
            document.getElementById(value).innerHTML = city;

            weatherCalculation(city)
                .then(() => findTime(continent.value, city))
                .then(() => {
                    currentIndex++;
                    setTimeout(fetchWeatherAndTime, 1000); 
                })
                
        }
    };

    fetchWeatherAndTime();
});

//catch block - optional 

// .catch(error => {
                //     console.error(error);
                //     currentIndex++;
                //     setTimeout(fetchWeatherAndTime, 1000);
                // });

//previous code


