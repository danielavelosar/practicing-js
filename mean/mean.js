

function MeanCalculation(array){
    const sum_array = array.reduce(
        function(aggregate = 0, newElement) {
            return aggregate + newElement;
        }
    );

    const mean_array = sum_array / array.length;
    console.log(mean_array);
}

const credits = [
    {name : "P.E", 
    note: 4.5,
    credit:  2,
    },
    {name : "math", 
    note: 5,
    credit:  3,
    },
    {name : "chemistry", 
    note: 4,
    credit:  3,
    },
]


var notesByWeight =  credits.map(
    function(subjet){
        return subjet.note * subjet.credit;
    }
)
var sumNotesByWeight = notesByWeight.reduce(
    function(sum=0, next){
        return sum+next;
    }
);
var creditsArray = credits.map(
    function(subjet){
        return subjet.credit;
    }
)
var creditSum = creditsArray.reduce(
    function(sum = 0, next){
        return sum + next
    }
)

const WeightedAverage = (sumNotesByWeight/creditSum);



console.log(WeightedAverage)


