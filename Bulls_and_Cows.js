
document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#code').onkeyup = () => {
        if (document.querySelector('#code').value.length === 4) {
            document.querySelector('#submit').disabled = false; 
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit =() => {
        const code = document.querySelector('#code').value;
        const grid_item = document.createElement('div'); 
        grid_item.innerHTML = code;    
        document.querySelector('#grid').append(grid_ietm);
        document.querySelector('#code').value = "";

        return false;
    }
})