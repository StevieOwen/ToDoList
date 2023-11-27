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
     /* remove button*/   
    let remove=document.createElement("button");
    remove.textContent="Remove";
    remove.addEventListener("click",function(e){
        e.preventDefault();
        remove.parentElement.remove();
     })   
     /* mark as important button*/
    let mark=document.createElement("button");
    mark.textContent="Mark as important";
     mark.addEventListener("click",function(e){
        e.preventDefault();
        list_task.insertBefore(mark.parentElement,list_task.firstChild);
        mark.parentElement.classList.toggle("important");
     })
     /* categorized button*/
    let categorized=document.createElement("button");
    categorized.textContent="Categorized";
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
    task.value="";
    div.appendChild(li);
    div.appendChild(remove);
    div.appendChild(mark);
    div.appendChild(categorized);
    div.appendChild(edit);
    list_task.appendChild(div);
    list_task.insertBefore(div, list_task.firstChild);
}

})

