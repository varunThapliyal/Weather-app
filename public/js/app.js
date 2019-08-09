console.log("working fine")



const WeatherForm=document.querySelector('form')
const search=document.querySelector('input')
const message=document.querySelector('#message')


WeatherForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const loc=search.value;
  
  fetch("http://localhost:3000/weather?address="+loc).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            console.log(error);
            return;
        }
        message.textContent='Loading....'
        message.textContent='Your temperature for location '+data.location+' is '+data.temp;
       
    })      

})




})



