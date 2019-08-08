

  var createPolitician = function(name, partyColor){
 
    var politician = {}; // new blank object!
    politician.name = name; // set name property to the value of the name parameter
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    
    
    // method for tallying votes, add to factory function above return statement

    
    politician.tallyUpTotalVotes = function(){
 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
 
};
    
    
      return politician;
   
    
  };

     
var jared = createPolitician("Jared Rzeznik", [245, 141, 136]);
 
var mila = createPolitician("Mila Bonita", [132, 17, 11]);


jared.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
 
mila.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];


jared.electionResults[9] = 1;
mila.electionResults[9] = 28;
 
jared.electionResults[4] = 17;
mila.electionResults[4] = 38;
 
jared.electionResults[43] = 11;
mila.electionResults[43] = 27;
 
console.log(jared.electionResults);
console.log(mila.electionResults);
    
        // calling the method for each politician, add below the code that updates the electionResults arrays.tallyUpTotalVotes();
jared.tallyUpTotalVotes();
mila.tallyUpTotalVotes();
 
//console log total votes
console.log(jared.totalVotes);
console.log(mila.totalVotes);


var setStateResults = function(state){
 
    theStates[state].winner = null;
 
    if (mila.electionResults[state] > jared.electionResults[state]) {
        
        theStates[state].winner = mila; //set winner to the candidate object, not the candidate's name this time
 
    } else if (mila.electionResults[state] < jared.electionResults[state]) {
 
        theStates[state].winner = jared;
 
    }
  
  var stateWinner = theStates[state].winner;
 
          if (stateWinner !== null) {
           theStates[state].rgbColor = stateWinner.partyColor;
          } else {
           theStates[state].rgbColor = [11,32,57];
}

var stateInfoTable = document.getElementById('stateResults');
stateInfoTable.children[0].children[0].children[0];
	
var header = stateInfoTable.children[0].children[0];
header.children[0];
	
var stateName = header.children[0];
stateName.innerText = theStates[state].nameFull;

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
  
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = jared.name;
candidate2Name.innerText = mila.name;
 
candidate1Results.innerText = jared.electionResults[state];
candidate2Results.innerText = mila.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}

};


var winner = "jared or mila";
 
if (jared.totalVotes > mila.totalVotes){
    winner = jared.name;
}else {
    winner = mila.name;
}
 
console.log("AND THE WINNER IS..." + winner + "!!!");
console.log("jared color is: " + jared.partyColor);
console.log("Mila color is: " + mila.partyColor);


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
 
row.children[0].innerText = jared.name;
row.children[1].innerText = jared.totalVotes;
row.children[2].innerText = mila.name;
row.children[3].innerText = mila.totalVotes;
row.children[5].innerText = winner;


 



    
