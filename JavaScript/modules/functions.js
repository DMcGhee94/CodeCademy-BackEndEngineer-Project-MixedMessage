let getUsersStarSign = (userBirthDayArray, starSignsArray) => {
    let userBirthDayDate = new Date(`2000-${userBirthDayArray[1]}-${userBirthDayArray[0]}T00:00:00`);
    console.log(userBirthDayDate);

    let filterResult = starSignsArray.filter((starSign) => (userBirthDayDate >= starSign.startDate && userBirthDayDate <= starSign.endDate));

    if (filterResult.length = 1) {
        return filterResult;
    }
};

export {getUsersStarSign};