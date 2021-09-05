const submit_btn = document.getElementById('submit_btn');
const code = document.getElementById('code');
const grid = document.getElementById('grid');
let count = 1;
let RandomCode = [];

function getRandom() {
    return Math.floor(Math.random() * 10);
}

function GenerateRandomCode() {
    for (var i = 0; i < 4; i++) {
        RandomCode[i] = getRandom();
        for (var j = 0; j < i; j++) {
            if (RandomCode[i] === RandomCode[j]) {
                i--;
            }
        }
    }
    
}


document.addEventListener('DOMContentLoaded', function(){
    GenerateRandomCode();
    document.querySelector('#submit_btn').disabled = true;
    
    document.querySelector('#code').onkeyup = () => {
        if (document.querySelector('#code').value.length === 4) {
            document.querySelector('#submit_btn').disabled = false; 
        } else {
            document.querySelector('#submit_btn').disabled = true;
        }
    } 
})


//console.log(RandomCode)
//console.log(getRandom());

function CodeRepeatCheck() {
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

function BullsCheck () {
    let Bull = 0;
    for (var i = 0; i < 4; i++) {
        if (code.value[i] === RandomCode[i]) {
            Bull++;
        }
    }
    return Bull;
}

function CowsCheck () {
    let Cow = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if ((code.value[i] === RandomCode[j]) && (i != j)) {
                Cow++;
            }
        }
    }
    return Cow;
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
        result.innerHTML = `${BullsCheck()}Bulls ${CowsCheck}Cows`;
        grid.appendChild(counter);
        grid.appendChild(grid_item);
        grid.appendChild(result);
        code.value = "";
    } else {
        alert(`Please enter nonrepeated code`);
    }
})