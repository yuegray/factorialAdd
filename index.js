function factorialAdd(initNum, addNum, interest, time, nowAge) {
    let amount = initNum
    for (let index = 0; index < time; index++) {
        amount = Math.round(amount * interest + addNum)
    }
    let beforeAmount = initNum
    for (let index = 0; index < time - 1; index++) {
        beforeAmount = Math.round(beforeAmount * interest + addNum)
    }
    morethan = amount - beforeAmount 
    console.log(time + nowAge + 1, "+++++++++++++++++++++" ,amount, beforeAmount, morethan)
}
factorialAdd(50, 6, 1.1548, 5, 24)

