function BoardMember (name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  
  this.veto = function(){
    return `No, I must disagree`
  }
  
  this.approve(){
    return `You can do that!`
  }
  
  this.doCharity(){
    return `I like to help people`
  }
  
  this.releasePressStatement(){
    return `Your will see great things from Scuber`
  }
  
  this.sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`
  }
}
