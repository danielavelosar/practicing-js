
function ModeCalculation(array){
    const countDict = {}

    array.map(
        function(element){
            if(countDict[element]) {
                countDict[element] += 1;
            }else{
                countDict[element] = 1;
            }
        }
    )

    const countArray = Object.entries(countDict).sort(
        function(aggregate, newValue){
            return aggregate[1] - newValue[1];
        }

    );

    const mode = countArray[countArray.length-1]

    return(mode);
}