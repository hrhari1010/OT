x=document.getElementById('x')
x2=document.getElementById('x2')
x3=document.getElementById('x3')
x4=document.getElementById('x4')
x5=document.getElementById('x5')
a=document.getElementById('a')
b=document.getElementById('b')
e=document.getElementById('e')
n=document.getElementById('n')
s=document.getElementById('solve')
r=document.getElementById('result')

s.onclick=function(){
    obj={
        'x':x.value,
        'x2':x2.value,
        'x3':x3.value,
        'x4':x4.value,
        'x5':x5.value,
        'a':a.value,
        'b':b.value,
        'e':e.value,
        'n':n.value
    }
    console.log(obj)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://harir.pythonanywhere.com/solve/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}