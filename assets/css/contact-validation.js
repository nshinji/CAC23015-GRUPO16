const form = document.getElementById ("formulario_contacto")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const portfolio = document.getElementById ("portfolio")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")

 
form.addEventListener("submit", (e) => {
e.preventDefault ()
validar()

})
 
function validar () {

    // input nombre
    if(form.nombre.value.trim()==0){
        alert("El campo nombre está vacío")
        form.nombre.value="";
        console.log("Campo vacío")
        form.nombre.focus();
        return false;
    }else {
        console.log(nombre.value)
    }
    
    //Input apellido
    if(form.apellido.value.trim()==0){
        alert("El campo apellido está vacío")
        form.apellido.value="";
        console.log("Campo vacío")
        form.apellido.focus();
        return false;
    }else {
        console.log(apellido.value)
    }
    
    //Input email
    if(form.email.value.trim()==0){
        alert("El campo email está vacío")
        form.email.value="";
        console.log("Campo vacío")
        form.email.focus();
        return false;
    }else {
        console.log(email.value)
    }
    
    //CheckBox

    if (form.portfolio[0].checked == true || form.portfolio[1].checked == true || form.portfolio[2].checked == true || form.portfolio[3].checked == true)  
          
       { 
        const checkboxseleccionado = checkbox()
        console.log(checkboxseleccionado)
       } else {
        alert ("Selecciona uno o más portfolios")
        }
           
    //Input asunto
    if(form.asunto.value.trim()==0){
        alert("El campo asunto está vacío")
        form.asunto.value="";
        console.log("Campo vacío")
        form.asunto.focus();
        return false;
    }else {
        console.log(asunto.value)
    }         
 
    //Taxtarea mensaje
    if(form.mensaje.value.trim()==0){
        alert("El campo mensaje está vacío")
        //form.mensaje.value="";
        //console.log("Campo vacío")
        form.asunto.focus();
        return false;
    }else {
    console.log(mensaje.value)
    }       

    form.submit()
    form.reset()
}



function checkbox (){
    let valorcheck = []
    for (let i=0; i < form.portfolio.length; i++) {
        if(form.portfolio[i].checked == true) {
        valorcheck.push(form.portfolio[i].value)
        //console.log(form.portfolio[i].value)
        }
    }   
    return valorcheck;
}