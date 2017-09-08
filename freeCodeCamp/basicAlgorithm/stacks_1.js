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

    for(let i = functions.length - 1; i >= 0; i--){
	
	 if (i === functions.length - 1){
	   temp = functions[i-1](functions[i](param));
	   i -= 1; 
        }else {
	    temp = functions[i](temp);
	}
	
    }
    return temp;
   }
}

console.log(compose(test,aloha,say,yolo)('idho'));
