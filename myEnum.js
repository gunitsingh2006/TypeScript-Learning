// restricts the user choice
// const AISLE =0
// const MIDDLE =1
// const WINDOW=2
// if (seat===0){
// }
// in enum
// Enum definition
// The enum keyword is used to define an enumeration, a distinct type that consists of a set of named constants called the members of the enum.
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW"; //2              12
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
