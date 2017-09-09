var Stack = function(){
  this.count = 0;
  this.storage = {};

  //push for last state;
  this.push = function(value){
    this.storage[this.count] = value;
    this.count ++;
  }

  this.pop = function(){
    if (this.count === 0){
      return '';
    }
    //min count
    this.count --;

    let result = this.storeage[this.count];
    delete this.storage[this.count];

    return result;
  }

  this.size = function(){
    return this.count;
  }
}
