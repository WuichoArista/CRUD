 function bajarForm(){
    let form = document.getElementById('form_container');
    form.classList.toggle('form_container_abajo');
}

const producto = []
function agergarProducto(){
    const modelo = document.getElementById('modelo_form').value;
    const marca = document.getElementById('marca_form').value;
    const precio = document.getElementById('precio_form').value;
    const url = document.getElementById('urlImg_form').value
    let id = producto.length + 1
    const obj = {
        id: id,
        modelo: modelo,
        marca: marca,
        pecio: precio,
        url: url,
    };
    producto.push(obj)


    console.log(producto)

    console.log(producto.filter(function(item){
        return item.id === 1
    }))

    imprimirArticuloEnPagina(producto)
}


function imprimirArticuloEnPagina(arregloAImprimir){
    const lugar = document.getElementById('lugarItem')
    lugar.innerHTML = ''
    arregloAImprimir.forEach(function(item,index){
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
                                       <p>${item.precio}</p>
                                   </div>
                                   <div class="producto_info_accion">
                                       <a href="#" id="editar" >Editar</a>
                                       <a href="#" id="borrar">Eliminar</a>
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