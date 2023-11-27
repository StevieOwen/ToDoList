let task=document.querySelector("#task");
let add=document.querySelector("#add");
let list_task=document.querySelector("#list_task");
let task_container=document.querySelector("#task_container");

//Function add task  
add.addEventListener("click",function(e){
    e.preventDefault();
    if(task.value==""){
        task.placeholder="you should write a task before";
        task.style.borderColor="red";
    }else{
    let li=document.createElement("li");
    let div=document.createElement("div");
    let span1=document.createElement("span");
    let span2=document.createElement("span");
     /* remove button*/   
    let remove=document.createElement("button");
    remove.textContent="Remove";
    remove.classList.add("but");
    remove.addEventListener("click",function(e){
        e.preventDefault();
        remove.parentElement.remove();  
     }) 

     /* mark as important button*/
    let mark=document.createElement("button");
    mark.textContent="Mark as important";
    mark.classList.add("but");
     mark.addEventListener("click",function(e){
        e.preventDefault();
        list_task.insertBefore(mark.parentElement,list_task.firstChild);
        mark.parentElement.classList.toggle("important");
        
     })

     /* categorized button*/
    let categorized=document.createElement("button");
    categorized.textContent="Categorized";
    categorized.classList.add("but");
    categorized.addEventListener("click",function(e){
        e.preventDefault();
        let ul=document.createElement("ul");
        let h3=document.createElement("h3");
        ul.appendChild(h3);
        task_container.appendChild(ul);
        task.placeholder="Write the categorie here";
        task.style.borderColor="red";
        let ok=document.createElement("button");
         ok.textContent="Ok";
        let first_form=document.querySelector("#first_form");
        first_form.appendChild(ok);
        ok.addEventListener("click",function(d){
            d.preventDefault();
            h3.textContent=task.value;
            task.value="";
            ul.appendChild(categorized.parentElement);
            
        })
        
    })

    /*edit button*/
     let edit=document.createElement("button");
     edit.textContent="Edit";
     edit.classList.add("but");
     edit.addEventListener("click", function(e){
        e.preventDefault();
        task.placeholder="write your change here";
        task.style.borderColor="red";
         let ok=document.createElement("button");
         ok.textContent="Ok";
        let first_form=document.querySelector("#first_form");
        first_form.appendChild(ok);
        ok.addEventListener("click",function(d){
            d.preventDefault();
            li.textContent=task.value;
            task.value="";
            
        })
        
        })

    li.textContent=task.value;
    li.style.textTransform='capitalize';
    task.value="";
    
    span1.classList.add("check_box");
    span1.addEventListener("click",function(e){
        e.preventDefault();   
        span1.style.display="none";
        span2.style.display="inline-block"
        li.style.textDecoration="line-through";
        span2.classList.add("click");
        mark.disabled=true;
        edit.disabled=true;
        categorized.disabled=true;
        mark.classList.add("disable");
        edit.classList.add("disable");
        categorized.classList.add("disable");
        
    })
    span2.addEventListener("click",function(e){
        e.preventDefault();
        span2.style.display="none";
        span1.style.display="inline-block";
        span1.classList.add("check_box");
        li.style.textDecoration="none";
        mark.disabled=false;
        edit.disabled=false;
        categorized.disabled=false;
        mark.classList.remove("disable");
        edit.classList.remove("disable");
        categorized.classList.remove("disable");
        
    })
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(li);
    div.appendChild(remove);
    div.appendChild(mark);
    div.appendChild(categorized);
    div.appendChild(edit);
    div.classList.add("list_items");
    list_task.appendChild(div);
    list_task.insertBefore(div, list_task.firstChild);
    
}

})



function saveData(){
    localStorage.setItem('data', list_task.innerHTML);
}

function getData(){
    list_task.innerHTML=localStorage.getItem('data');
}