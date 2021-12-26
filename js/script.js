document.querySelector("[type='button']").addEventListener("click", ()=>{
    const password = document.querySelector("[type='password']");
    const user = document.querySelector("[type='email']");
    const id = user.value;
    const ed = password.value;

    const error = document.querySelector(".error");
    
    if(id == ""){;
        error.innerHTML ="O Campo Email deve ser preenchido!"
        error.classList.add("error-active");
    }else{
        if(id.indexOf("@") == -1){
           error.innerHTML ="Formato de Email invalido!";
           error.classList.add("error-active");
           error.style.backgroundColor = "#dc143c";
    }else{
        if(ed == ""){
            error.innerHTML="O Campo Senha deve ser preenchido!";
            error.classList.add("error-active")
            error.style.backgroundColor = "#dc143c";
                }else{
                    if(ed.length < 6){
                    error.innerHTML="A senha deve conter pelo menos 6 caracteres!";
                    error.classList.add("error-active")
                    error.style.backgroundColor = "#dc143c";
                    }else{error.innerHTML="SUCESSO!"
                error.style.backgroundColor = "#118AB2";
                error.classList.add("error-active")}
                }

            }
    }
    
    
   
})
const error = document.querySelector(".error");