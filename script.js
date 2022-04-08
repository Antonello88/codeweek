

const createAppToday = (obj) => {

    const ul = document.querySelector('#listApp');
    const liEl = document.createElement("li");
    liEl.classList.add("card");
    const priorityApp = document.createElement("h3");

    liEl.textContent = obj.date;
    priorityApp.textContent = obj.priority;
    
    ul.appendChild(liEl);
    liEl.appendChild(priorityApp);
   
}

const createAppPast = (obj) => {

    const ul = document.querySelector('#listPast');
    const liElPast = document.createElement("li");
    liElPast.classList.add("card");
    const priorityPast = document.createElement("h3");

    liElPast.textContent = obj.date;
    priorityPast.textContent = obj.priority;
    
    ul.appendChild(liElPast);
    liElPast.appendChild(priorityPast);
   
}


const createAppFuture = (obj) => {

    const ul = document.querySelector('#listFut');
    const liElFut = document.createElement("li");
    liElFut.classList.add("card");
    const priorityFut = document.createElement("h3");

    liElFut.textContent = obj.date;
    priorityFut.textContent = obj.priority;
    
    ul.appendChild(liElFut);
    liElFut.appendChild(priorityFut);
   
}




//Funzione Random Date 
function randomDate(date1, date2)
   {
    
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    var date1 = date1 || '04-01-2022'
    var date2 = date2 || '04-10-2022'

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


// dataArr = [
//     '04-01-2022',
//     '04-02-2022',
//     '04-03-2022',
//     '04-04-2022',
//     '04-05-2022',
// ]
// dataArr1 = [
//     '05-01-2022',
//     '06-02-2022',
//     '07-03-2022',
//     '09-04-2022',
//     '10-05-2022',
// ]


// const randomDate2 = Math.floor(Math.random() * dataArr.length);


const newData = [];


   fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => res.json())
    .then(data =>     
        { 
         const filterArr =  data.filter(element => element.id <= 10) 
         
         filterArr.forEach(element => 

            newData.push({
            id: element.id,
            userId: element.userId,
            title: element.title,
            completed: element.completed,
            date: `${randomDate()}`,
            priority: `${Math.floor(Math.random() * 4)}`,
            })  
        )
       
            
            const today = "03-08-2022"



            if (randomDate === today) {
                newData.map((element) => createAppToday(element))
            }
            
             else if (randomDate < today) {
                newData.map((element) => createAppPast(element))
            }

             else  {
                newData.map((element) => createAppFuture(element))

            }
        


        
    })
        
    


  
  
    





      


   












 

  








    







