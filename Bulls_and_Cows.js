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


console.log(RandomCode)
//console.log(getRandom());

function CodeRepeatCheck() {  
    var en = false;
    for (var i = 1; i < 4; i++) {
        en = false;
        for (var j = 0; j < i; j++) {
            if (code.value[j] === code.value[i]) {
                //console.log(en);
               // console.log(`repeat`);
                code.value = "";
                en = false;
                return en;
            } else {
                en = true;
            }
        }
    }
   // console.log(en);
    return en;
    
}

function BullsCheck () {
    var Bull = 0;
    for (var i = 0; i < 4; i++) {
        if (code.value[i] == RandomCode[i]) {
            Bull++;
        }
    }
    return Bull;
}

function CowsCheck () {
    var Cow = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if ((code.value[i] == RandomCode[j]) && (i != j)) {
                Cow++;
            }
        }
    }
    return Cow;
}


submit_btn.addEventListener("click", () => {
    const bull = BullsCheck();
    const cow = CowsCheck();
    if (CodeRepeatCheck()) {
        const counter = document.createElement('div');
        const grid_item = document.createElement('div');
        const result = document.createElement('div');
        grid_item.className = 'grid-item';
        counter.className = 'grid-item';
        result.className = 'grid-item';
        grid_item.innerHTML = code.value;
        counter.innerHTML = count++;
        result.innerHTML = `${bull} Bulls ${cow} Cows`;
        grid.appendChild(counter);
        grid.appendChild(grid_item);
        grid.appendChild(result);
        code.value = "";
        
    } else {
        alert(`Please enter nonrepeated code`);
    }
    if (bull === 4) {
        alert(`Bingo!`);
    }
})