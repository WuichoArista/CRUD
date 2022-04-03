 //Para Mostrar el Formulario-----------------------------------------------------------------------------------------
 function mostrarform(opcion){
     const form = document.getElementById('form_container');
     const btnEditar = document.getElementById('editar_form')
     const btnAgregar = document.getElementById('agregar_form')
     const contenedor = document.getElementById('alert_container')
     if(opcion == 'agregar'){
        form.classList.add('form_container_mostrar');
        btnAgregar.classList.remove('agregar_form_novisto')
        btnEditar.classList.remove('editar_form_visto')
    }else if (opcion === 'editar'){
        form.classList.toggle('form_container_mostrar');
        btnAgregar.classList.add('agregar_form_novisto')
        btnEditar.classList.add('editar_form_visto')
    }else if(opcion === 'cerrar') {
        form.classList.remove('form_container_mostrar');
    }else if (opcion === 'cerrar alert'){
        contenedor.classList.remove('alert_container_mostrar')
    }
}



//Para agreagr los ITEMS-----------------------------------------------------------------------------------------
class objeto {
    constructor(modelo,marca,precio,url) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.url = url;
    }
}
const producto = []
function agergarProducto(){
    let modelo = document.getElementById('modelo_form').value;
    let marca = document.getElementById('marca_form').value;
    let precio = document.getElementById('precio_form').value;
    let url = document.getElementById('urlImg_form').value
    let obj = new objeto (modelo,marca,precio,url)
    const resultIndex = producto.findIndex(function(item, index){ 
        return item.modelo.toLowerCase() === modelo.toLowerCase()
    })
    if(resultIndex === -1){
        producto.push(obj)
        imprimirArticuloEnPagina(producto)
        mostrarform('cerrar')
    } else{
        mostrarform('cerrar')
        let contenedor = document.getElementById('alert_container')
        contenedor.classList.add('alert_container_mostrar')
        let lugarAlert = document.getElementById('alert_container_info')
        lugarAlert.innerHTML=''
        let nodoAlert = document.createElement ('p')
        let textAlert = document.createTextNode(`El elemento: ${modelo}, ya existe`)
        nodoAlert.appendChild(textAlert)
        lugarAlert.appendChild(nodoAlert)

    }    
}



//Para Imprimir los ITEMS-----------------------------------------------------------------------------------------
function imprimirArticuloEnPagina(arregloAImprimir){
    const lugar = document.getElementById('lugarItem')
    lugar.innerHTML = ''
    arregloAImprimir.forEach( function (item) {
        lugar.innerHTML += ` <div class="producto" id = "${item.id}">
                               <div class="producto_imagen">
                                   <img src="${item.url}" alt="">
                               </div>
                               <div class="producto_info">
                                   <div class="producto_info_modelo">
                                       <p>${item.modelo}</p>
                                   </div>
                                   <div class="producto_info_marca">
                                       <h3>Marca: </h3>
                                       <p>${item.marca}</p>
                                   </div>
                                   <div class="producto_info_precio">
                                       <h3>Precio: </h3>
                                       <p>$ ${item.precio}</p>
                                   </div>
                                   <div class="producto_info_accion">
                                       <a href="#" id="editar" onclick="editarItem(producto, '${item.modelo}', '${item.marca}')">Editar</a>
                                       <a href="#" id="borrar" onclick="eliminarItem(producto, '${item.modelo}', '${item.marca}')" >Eliminar</a>
                                   </div>
                               </div>
                           </div>`
       })
       //Opcion 2
    /* arregloAImprimir.forEach(function(item,index){
    let nodoProducto = document.createElement('div')
        nodoProducto.setAttribute('id', item.id)
        nodoProducto.setAttribute('class','producto')

    let nodoImagen = document.createElement('div')
        nodoImagen.setAttribute('class', 'producto_imagen')
    
    let nodoImagenImage = document.createElement('img')
        nodoImagenImage.setAttribute('src', item.url) 
    let nodoProductoInfo = document.createElement('div')
        nodoProductoInfo.setAttribute('class', 'producto_info')

    let ProductoTitulo = document.createElement('div')
        ProductoTitulo.setAttribute('class', 'producto_info_modelo')

    let titulo = document.createElement('p')
    let tituloNodo = document.createTextNode(item.modelo) 

        titulo.appendChild(tituloNodo)
        ProductoTitulo.appendChild(titulo)
        nodoProductoInfo.appendChild(ProductoTitulo)
        nodoImagen.appendChild(nodoImagenImage)
        nodoProducto.appendChild(nodoImagen)
        nodoProducto.appendChild(nodoProductoInfo)
        lugar.appendChild(nodoProducto)
    })
     */
}



//Para eliminar los ITEMS-----------------------------------------------------------------------------------------
function eliminarItem (arreglo,modelo,marca) {
    arreglo.forEach(function (item,index) {
        if( item.modelo === modelo && item.marca === marca ) {
            arreglo.splice( index,1 )
            imprimirArticuloEnPagina( producto )
        }
    })
}

//Para buscar los ITEMS-----------------------------------------------------------------------------------------
function buscar () {
    let valorBuscador = document.getElementById('buscador').value
    console.log(valorBuscador)
    const productoFiltro = producto.filter( function(item) {return item.modelo == valorBuscador || item.marca == valorBuscador})
    imprimirArticuloEnPagina(productoFiltro)
}



//Para Editar los ITEMS-----------------------------------------------------------------------------------------
function editarItem (arreglo,modelo,marca) {
    arreglo.map(function(item,index){   
        if(item.modelo === modelo && item.marca === marca){
            mostrarform('editar');
            let btnEditarForm = document.getElementById('editar_form');
                  btnEditarForm.onclick = function(){
                    let modelo = document.getElementById('modelo_form').value;
                    let marca = document.getElementById('marca_form').value;
                    let precio = document.getElementById('precio_form').value;
                    let url = document.getElementById('urlImg_form').value;         
                    let objEditar = new objeto(modelo,marca,precio,url);
                     producto.splice(index,1,objEditar);
                     imprimirArticuloEnPagina( producto );
                     mostrarform('cerrar');
                    }
        }
    }) 
}


