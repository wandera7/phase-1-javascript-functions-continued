// code your solution here
function mondayWork(task){ 
  return task?`This Monday, I will ${task}.`: `This Monday, I will go to the office.`
}
function saturdayFun(activity){
    return activity?`This Saturday, I want to ${activity}!`: `This Saturday, I want to roller-skate!`

}
function wrapAdjective(name="*"){
    return function(day='special'){
        return `You are ${name}${day}${name}!`

    }
}