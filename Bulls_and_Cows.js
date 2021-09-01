const submit_btn = document.getElementById('submit_btn');
const code = document.getElementById('code');
const grid = document.getElementById('grid');
let count = 1;


document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#submit_btn').disabled = true;
    
    document.querySelector('#code').onkeyup = () => {
        if (document.querySelector('#code').value.length === 4) {
            document.querySelector('#submit_btn').disabled = false; 
        } else {
            document.querySelector('#submit_btn').disabled = true;
        }
    } 
})

function CodeRepeatCheck(code) {
    let en = false;
    let prev = code.value[0];
    for (var i = 1; i < 4; i++) {
        if (code.value[i] === prev) {
            en = false;
        } else {
            en = true;
        }
    }
    return en;
}

submit_btn.addEventListener("click", () => {
    if (CodeRepeatCheck()) {
        const counter = document.createElement('div');
        const grid_item = document.createElement('div');
        const result = document.createElement('div');
        grid_item.className = 'grid-item';
        counter.className = 'grid-item';
        result.className = 'grid-item';
        grid_item.innerHTML = code.value;
        counter.innerHTML = count++;
        result.innerHTML = `Bulls Cows`;
        grid.appendChild(counter);
        grid.appendChild(grid_item);
        grid.appendChild(result);
        code.value = "";
    } else {
        alert(`Please enter nonrepeated code`);
    }
})