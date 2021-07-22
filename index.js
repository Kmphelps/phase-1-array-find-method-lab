const record = [
    {year: "2018", result: "L"},
    {year: "1969", result: "W"},
    {year: "2016", result: "N/A"}
  ] 

function findWin(item) {
    return item.result === "W";
}

function superbowlWin(array) {
    const record = array.find(findWin);
    return record ? record.year : undefined;
}






