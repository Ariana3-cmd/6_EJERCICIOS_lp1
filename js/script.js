$(document).ready(function() {
    $('#boton').click(function() {
        agregar();
    });   
});

var n =$('#nombre');
var t =$('#telefono');
var c =$('#correo');
var c =$('#acción');
var item =0;

function agregar(){
    item++;
    var fila ='<tr><td>'+ item+ '</td><td>'+ t.val()+'</td><td>'+ t.val()+'</td><td>'+ t.val()+'</td><td>a</tr>';
    $('#tbd').append(fila);
}