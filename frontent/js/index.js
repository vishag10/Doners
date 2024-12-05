const todos=[];

document.getElementById("submit").addEventListener("click",(ev)=>{
    let name = document.getElementById('name').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let blood = document.getElementById('blood').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    todos.push({name,gender,blood,address,number});
     document.getElementById('name').value=``;
     document.querySelector('input[name="gender"]:checked').value=``;
     document.getElementById('blood').value=``;
     document.getElementById('address').value=``;
     document.getElementById('number').value=``;
    
 
    var data = JSON.stringify(todos);
    console.log(data);
    localStorage.setItem('added-items', data);
    

})
 
