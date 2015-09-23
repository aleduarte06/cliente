/**
 * Created by aleduarte06 on 12/9/15.
 */
var a = function(callback1,callback2){

    data = 'Estoy en el callback 1 ... y tengo un valor calculado'

    callback1(data);


    data1 = 'aca el calback 2........' + 4*4;

    callback2(data1)

};


a(function(dato1){console.log(dato1);}, function(dato2){console.log(dato2);} );