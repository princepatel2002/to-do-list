var inp = document.querySelector('input')
var textArea = document.querySelector('.textArea')


function add(){
    if(inp.value==''){
        alert('plese enter the text')
    }
    else{
        
        let newElem = document.createElement('ul')
        newElem.innerHTML=`${inp.value}  <b>X</b>`
        textArea.appendChild(newElem)
        inp.value=''
        newElem.querySelector('b').addEventListener('click', function(){
            newElem.remove()
        })
        
    }
}