class StarSign {
    constructor(sign, startArray, endArray) {
        this._sign = sign;
        this._startDate = new Date(`2000-${startArray[1]}-${startArray[0]}T00:00:00`);
        this._endDate = new Date(`2000-${endArray[1]}-${endArray[0]}T00:00:00`);
    }

    get sign() {
        return this._sign;
    }

    get startDate() {
        return this._startDate;
    }

    get endDate() {
        return this._endDate;
    }
}

export {StarSign};