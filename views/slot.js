const dateElemenet = document.getElementById('date_id');
const startTime =document.getElementById('start_id');
const endTime =document.getElementById('end_id');
const form =document.getElementById('form_id');
console.log(new Date())

form.addEventListener('submit',addSlot);

 async function addSlot(e){
    e.preventDefault();
    
    const data ={
        _date :e.target.Date.value,
        _start :e.target.Start.value,
        _end :e.target.End.value
    };
   
    
console.log()
    if(new Date(data._date)<new Date()){
        document.body.innerHTML+=('enter valid date')
        console.log('enter valid date');
    }
   
    else if(data._start>data._end){
        document.body.innerHTML+=('enter valid time frame');
        console.log()
    }
    else{
    const res =await axios.post("http://localhost:3001/Slot",data);
    document.body.innerHTML+=(res.data.message);
}
    
    form.reset();
}

