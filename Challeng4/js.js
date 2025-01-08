function calculateTip(bill) {
    // Determine the tip rate using a ternary operator
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    const totalValue = bill + tip;
    // Print the result
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
}

// Test data
const bills = [275, 40, 430];

// Call the function for each bill value
bills.forEach(bill => calculateTip(bill));