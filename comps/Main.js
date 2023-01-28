import React from  'react'
import ReactDOM from 'react-dom'


export default function Main() {
    return(
        <div className='Main' >
            <input id='pushUps' placeholder='pushUps'/>
            <input id='pullUps' placeholder='pullUps'/>
            
            <button onClick={toggle}> play</button>
            <div id='Main'></div>
        </div>
    )
}



function toggle(){
    // values 
    const pushValue =  document.getElementById("pushUps").value
    const pullValue =  document.getElementById("pullUps").value
    const rule = /^[0-9.]+$/;
    const result = rule.test(pushValue)
    console.log(result)
    //score
        //pushUps workout
    const pushWeak = `Triceps extensions:
3 sets x 10 reps
rest 1 min after each set. 
Inclined push up:
3 sets x 5 reps
rest 1 min after each set
do it slowly and squeeze at the top`
  const pushAvrge = `do 15 crossovers for warm-up to build muscle-mind connection ( being able to activate and focus on the muscle easily), second do push ups 3 sets of 5 rest 30 sec to 1 min after each set, third do push up hold for 15 sec and 5 lateral raises, 30 sec push up hold and 10 lateral raises, 45 sec push up hold and 15 lateral raises`      
  const pushStrong = `do 15 crossovers for warm-up to build muscle-mind connection ( being able to activate and focus on the muscle easily), second do declined push ups 3 sets of 10 rest 1 min after each set, third do 8 pike push ups and 8 lateral raises for 3 sets
`
const pushInter = `do 15 crossovers for warm-up to build    
muscle-mind connection ( being able to activate and focus on the muscle easily), second do declined push ups 4 sets of 12 rest 1 min after each set, 30s pike push-ups,
 30s pike negative,
 30s rest,
30s pseudo push-ups,
 30s lean planche hold,
 30s shoulder touches,
 30s high pike hold,
 30s rest,
 2 pike push-ups, 4 lateral arm raises; 3 pike push-ups, 6 lateral arm raises; 4 pike push-ups, 8 lateral arm raises; 5 pike push-ups, 10 lateral arm raises`
    
    

    
    
    
    
    let score
        //pushUps score
        let pushUpsScore 
if (result) {
   if(pushValue >= 0 && pushValue <= 5) { pushUpsScore = pushWeak}
   else if(pushValue > 5 && pushValue <= 15) {pushUpsScore = pushAvrge}
   else if(pushValue > 15 && pushValue <= 30) {pushUpsScore = pushStrong}
   else {pushUpsScore = pushInter}
        //pullUps score
        let pullUpsScore
   if(pullValue >= 0 && pullValue <= 3) { pullUpsScore = 'weak'}
   else if(pullValue > 3 && pullValue <= 7) {pullUpsScore = 'avrge'}
   else if(pullValue > 7 && pullValue <= 12) {pullUpsScore = 'strong'}
   else {pullUpsScore = 'intermedite'}
}
else {
    return(
        alert('enter a positive number please')
    )
}
   
   //result
   score = pushUpsScore + " " 
    
    
    ReactDOM.render(<h3>{score}</h3>, document.getElementById('Main'))
}