
document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#code').onkeyup = () => {
        if (document.querySelector('#code').value.length === 4) {
            document.querySelector('#submit').disabled = false; 
        } else {
            document.querySelector('#submit').disabled = true;
        }
    } 
})

const submit_btn = document.getElementById('submit_btn');
const code = document.getElementById('code');
const grid = document.getElementById('gird');

submit_btn.addEventListener("click", () => {
    const grid_item = document.createElement('div');
    grid_item.innerHTML = code.value;
    grid.appendChild(grid_item);
    code.value = "";

})