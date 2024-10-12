const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((total, batch) => {
    return total + batch;
}, 0); // Starting with an initial value of 0

// Output the total number of batteries
console.log(totalBatteries); // This will log the total count
