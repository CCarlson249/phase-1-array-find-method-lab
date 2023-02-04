// code your solution here
function superbowlWin(record) {
    const victory = record.find(recordFind => recordFind.result === 'W');
    return victory ? victory.year : undefined;
}