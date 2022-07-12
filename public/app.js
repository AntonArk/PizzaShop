
function something()
{
    var x = window.localStorage.getItem('bbb')

    x = x * 1 + 1   // преобразовать строку в число

    window.localStorage.setItem('bbb', x);
    
    alert(x);

}