
//Funzioni Create App.
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
function randomDate(start, end) {
    let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        let today = new Date();
    
     

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    if (d.getTime() > today.getTime())
        return {
            date: [day, month, year].join('/'),
            result: "maggiore"
        }

        if (d.getTime() < today.getTime())
        return {
            date: [day, month, year].join('/'),
            result: "minore"
        }
        if (d.getTime() === today.getTime())
        return {
            date: [day, month, year].join('/'),
            result: "uguale"
        }
}


   fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => res.json())
    .then(data =>     
        { 
         const filterArr =  data.filter(element => element.id <= 20)
         
         filterArr.forEach(element => { 

            const dateResult = randomDate(new Date(2022, 0, 1), new Date(2022, 05, 31));
            const actualDate = dateResult.date;

            const CurrentObject = {
            id: element.id,
            userId: element.userId,
            title: element.title,
            completed: element.completed,
            date: actualDate,
            priority: "Priority" + `${Math.floor(Math.random() * 4)}`,
            }
        
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;


            if (dateResult.result === "uguale") {
                createAppToday(CurrentObject) 
                console.log(`${actualDate} = ${today}` ) 
            
            }
             else if  (dateResult.result === "minore") {
                createAppPast(CurrentObject) 
                console.log(`${actualDate} < ${today}` ) 
             }
             
             else if (dateResult.result === "maggiore") {
                createAppFuture(CurrentObject) 
                console.log(`${actualDate} > ${today}` ) 

            }
        
         }

        
    )})
        
    


  
  
    





      


   












 

  








    







