var addSix = fn(6);
addSix(10);
addSix(21);
// Função para adicionar o número 6 e somar ao número 10 e posteriormente, ao numero 21
function fn(number) {
    return function(six) {
        return number + six
    }
}

//Função duplicate que vai clonar o array
 function duplicate(arr){
    var arr = [1, 2, 3, 4,5];
    return arr.concat(arr)
}
console.log(duplicate())

// Transformando uma string em objeto
   let str = '{"name":"Erick Schimdt","age":32,"height":1.78}';
   let obj = JSON.parse(str)
   console.log(obj)









