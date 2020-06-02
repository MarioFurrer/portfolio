var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
const boton = document.getElementById("btn");
const conv = document.getElementById("conv");

function chat(){
        conv.innerHTML = `<div class="container">
                                <img src="/w3images/bandmember.jpg" alt="foto">
                                <p>Hola, quiero ordenar una doscena de empanadas. Media de carne y media de jamón y queso</p>
                                <span class="time-right">11:00</span>
                            </div>
                        
                            <div class="container darker">
                                <img src="pages\images\contactoempanadas.png" alt="foto" class="right">
                                <p>¿A qué dirección y a nombre de quién?</p>
                                <span class="time-left">11:01</span>
                            </div>
                        
                            <div class="container">
                                <img src="pages\images\contacto.png" alt="foto">
                                <p>A `+ direccion + ` y a nombre de ` + nombre + ` ` + apellido + `</p>
                                <span class="time-right">11:02</span>
                            </div>
                        
                            <div class="container darker">
                                <img src="pages\images\contactoempanadas.png" alt="foto" class="right">
                                <p>¿Puede pasarme un algún número para avisar en caso de que se retrase el pedido?</p>
                                <span class="time-left">11:05</span>
                            </div>
                            
                            <div class="container">
                                <img src="pages\images\contacto.png" alt="foto">
                                <p> ` + telefono + ` </p>
                                <span class="time-right">11:02</span>
                            </div>

                            <div class="container darker">
                                <img src="pages\images\contactoempanadas.png" alt="foto" class="right">
                                <p>Se lo llevamos en 1 hora mas o menos</p>
                                <span class="time-left">11:05</span>
                            </div>
                            
                            <div class="container">
                                <img src="pages\images\contacto.png" alt="foto">
                                <p>Gracias</p>
                                <span class="time-right">11:06</span>
                            </div>`;
        
}

boton.addEventListener('click', chat);