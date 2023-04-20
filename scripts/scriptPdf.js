
const nombres = document.getElementById('nombres');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const registroDatos = document.getElementById('registroDatos');
registroDatos.addEventListener('submit',validador)


function validador(e) {
    e.preventDefault();
    let expNombres=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    let expCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(!expNombres.test(nombres.value)) {
        alert('Error en el campo nombres..!');
        nombres.style.backgroundColor = "#facba4";
        return;
    }
    if(!expCorreo.test(correo.value)){
        alert('Error en el campo Correo ..!');
        correo.style.backgroundColor = "#facba4";
    } 
    if(mensaje.value.length == 0 || mensaje.value.length > 50){
        alert('Error en el campo Mensaje: Maximo 150 caracteres..!');
        mensaje.style.backgroundColor = "#facba4";
        return;
    }

   generarPDF();
}

 
function generarPDF(){
    
    let imagen='../images/letraS.png';

    const doc = new jsPDF();
    let logo = new Image();
    logo.src = imagen;

    logo.onload = () => { 
            doc.setFontSize(12);
            doc.setFont("times","bold");
            doc.setFontType('italic');
            doc.addImage(logo,'png',10,11,10,10);
            doc.text("ouvenis, velas y Aromas",18,20);
            doc.line(18,21,60,21);

            doc.setFontSize(10);
            doc.setFont("arial","bold");
            doc.text("DATOS DEL CORREO ELECTRONICO",75,30);
            doc.setDrawColor(101,68,108);
            doc.line(75,31,139,31);
            doc.line(75,32,139,32);

            doc.setTextColor(101,68,108);
            doc.text("Nombre completo  :",40,50);
            doc.text("Correo Electronico:",40,60);
            doc.text("Mensaje                .:",40,70);

            doc.setTextColor(0);
            doc.text(nombres.value,80,50);
            doc.text(correo.value,80,60);
            doc.text(mensaje.value,80,70);
            

            doc.save("prueba.pdf");
            limpiar();
        
    }
    
} 

function limpiar(){
    nombres.value ="";
    correo.value ="";
    mensaje.value="";
}
