function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
  
function validateName(nombre){
    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    if (!/^[A-Za-z\s]+$/.test(nombre    )) {
        alert('Nombre inválido. Sólo caracteres alfabéticos y espacios están permitidos.');
        return false;
    }
    return true;
}


function validateForm() {
    // Retrieve the input values
    var nombre = document.getElementById("nombre").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
    console.log(nombre)
    // Perform validation
    if (nombre.trim()=="" || !validateName(nombre)) {
        console.log(entró )
        return false; // Prevent form submission
    }
  
    if (celular.trim()== "" || isNaN(celular) || celular[0]=="-") {
        alert("El número de celular no es correcto");
        return false;
    }
  
    if (email.trim() == "" || !validateEmail(email.trim()) ) {
        alert("La dirección de email no es correcta");
        return false;
    }
    
    // Additional validation rules can be added here
    alert("El formulario se envió correctamente")

    // If all validations pass, allow form submission
    return true;
}

 