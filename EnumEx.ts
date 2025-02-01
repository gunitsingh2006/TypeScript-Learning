function getSeatPreference(seat: SeatChoice): string {
    switch (seat) {
        case SeatChoice.AISLE:
            return "You prefer an aisle seat.";
        case SeatChoice.MIDDLE:
            return "You prefer a middle seat.";
        case SeatChoice.WINDOW:
            return "You prefer a window seat.";
        default:
            return "Unknown seat preference.";
    }
}

console.log(getSeatPreference(hcSeat)); // Output: You prefer an aisle seat.