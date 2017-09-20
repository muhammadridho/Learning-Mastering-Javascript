function* listPeople(){
    let i = 0;
    yield i;
    i++;
    yield i;
    i++;
    yield i;
}

const people = listPeople();

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Muhammad', last: 'Ridho', year: 1643 },
    { first: 'Andra', last: 'Satria', year: 2016 },
    { first: 'Nandra', last: 'Juliandra', year: 1998 }
]
console.log(people.next());
