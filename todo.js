 const selector1=document.querySelector('#todo-list');
    const selector2=document.getElementById('paragraph');
    const selector4=document.getElementById('date');
     const array=[];
    
 function one(){
  let object={
      name:selector1.value,
      date:selector4.value
     }
  array.push(object);
  console.log(array)
  selector1.value='';
  two();
 }

  
function two(){

  
  let todonew='';
 
  for(let i=0;i<array.length;i++){
    let todo=array[i]  
    const {name,date}=array[i];
   todonew+=`<p>${name} ${date}<button  onclick=" 
   array.splice(${i},1);
    two();">Delete</button></p> `
    console.log(todonew)
  //  localStorage.setItem('todo-list', JSON.stringify(todonew))
   console.log(array)
  
  }
  selector3.innerHTML=todonew;
   
}
