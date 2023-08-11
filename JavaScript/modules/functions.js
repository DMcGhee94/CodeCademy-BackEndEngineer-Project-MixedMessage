let getUsersStarSign = (userBirthDayArray, starSignsArray) => {
    let userBirthDayDate = new Date(`2000-${userBirthDayArray[1]}-${userBirthDayArray[0]}T12:00:00`);
    console.log(userBirthDayDate);

    let filterResult = starSignsArray.filter((starSign) => (userBirthDayDate >= starSign.startDate && userBirthDayDate <= starSign.endDate));
    console.log(filterResult);

    if (filterResult.length === 1) {
        return filterResult[0];
    }
};

let randomArrayResult = inputArray => {
    return inputArray[Math.floor(Math.random() * inputArray.length)];
};

export { getUsersStarSign, randomArrayResult };