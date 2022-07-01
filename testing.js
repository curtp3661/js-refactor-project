function returnSevens(max) {
    let arr = []
    for (let i = 0; i < max; i++) {
        if (i % 7 === 0) {
            arr.push(i)
        }
    }   return arr

};

returnSevens(80);
