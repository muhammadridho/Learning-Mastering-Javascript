let word = 'racecard';

function reverseWord(word){
    if (!word) return '';

    let rword = '';
    for(let i = word.length; i > 0; i--){
	   rword += word[i];
    }
    return rword;
}

const test = (param) => `test ${param}`;
const aloha = (param) => `aloha ${param}`;
const say = (param) => `say ${param}`;
const yolo = (param) => `yolo ${param}`;

function compose(...functions){
    return function(param){
    let temp = '';

    for(let i = functions.length - 1; i >= 1; i--){
	        temp = functions[i - 1]( i === functions.length - 1 ? functions[i](param) : temp);
     }
    return temp;
   }
}

console.log(compose(test,aloha,say,yolo)('idho'));
