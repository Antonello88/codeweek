//inserire in globale selettori section o ul ? 

const createApp = (userId, date) => {

    const ulOggi = document.querySelector('#oggi');
    const liEl = document.createElement("li");
    liEl.classList.add("card");
    const nameOggi = document.createElement("h3");

    const data = document.createElement("h3");  //---

    const ulFut = document.querySelector('#futuri');
    const liFut = document.createElement("li");
    liFut.classList.add("card");
    const nameFut = document.createElement("h3");
    
    const ulPast = document.querySelector('#conclusi');
    const liPast = document.createElement("li");
    liPast.classList.add("card");
    const namePast = document.createElement("h3");

    nameOggi.textContent = userId;
    nameFut.textContent = userId;
    namePast.textContent = userId;

    data.textContent = date;  //----

    ulOggi.appendChild(liEl);

    ulFut.appendChild(liFut);

    ulPast.appendChild(liPast);

    liEl.appendChild(nameOggi);
    liFut.appendChild(nameFut);
    liPast.appendChild(namePast);

    liEl.appendChild(data);

}

createApp();


const newData = [];



//Funzione Random Date 
function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-2021'
    var date2 = date2 || '01-03-2022'
    new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

    }
}
randomDate();



for (let i = 1; i <= 20; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    .then(res => res.json())
    .then(data => newData.push(
        {
        id: data.id,
        userId: data.userId,
        title: data.title,
        completed: data.completed,
        date: `${randomDate()}`,
        priority: `${random}`,
        
        }
        
    ))

    const random = Math.floor(Math.random() * 4)

    
}

console.log(newData);












// const getAPIdata = async (URL, index = "") => {
//     const res = await fetch (`${URL}${index}`);
//     return await res.json ();
    
//   };
  
  
//   getAPIdata("https://jsonplaceholder.typicode.com/todos").then((data) => {
    

  
//     // console.log(data);
  
    


//     //sistemare createApp

//     //
  
//     // data.map((element) => createApp(element.userId, element.data))

//     console.log(data);
// });



