function MeanCalculation(array){
    const sum_array = array.reduce(
        function(aggregate = 0, newElement) {
            return aggregate + newElement;
        }
    );

    const mean_array = sum_array / array.length;
    return(mean_array);
}

function MedianCalculation(array){
    array = array.sort()
    const midPosition = parseInt(array.length/2);

if (is_even(array.length)){
    const median1 = array[midPosition]
    const median2 = array[midPosition-1];
    mode = MeanCalculation([median1, median2])
    console.log(mode)

}else{
    console.log(array[midPosition])
}



function is_even(number){
    if (number%2===0){
        return true
    }else {
        return false
    }
}


}