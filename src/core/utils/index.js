import moment from "moment";

function calculateSumOfNumbers(numbers) {
    return numbers.reduce((value, prev) => {
        return value + prev;
    }, 0);
}

function getFormattedTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a').toString();
}

export { calculateSumOfNumbers, getFormattedTime };
