function factorialAdd(initNum, addNum, interest, time, nowAge) {
    let amount = initNum
    for (let index = 0; index < time; index++) {
        amount = amount * interest + addNum
    }
    console.log(time + nowAge + 1, "+++++++++++++++++++++" ,amount)
}

factorialAdd(200, 7, 1.17, 10, 24)