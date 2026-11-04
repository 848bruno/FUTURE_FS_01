
function getSiteTenure(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    // Validate the start date
    if (isNaN(start.getTime())) {
        throw new Error("Invalid start date");
    }

    let years = now.getFullYear() - start.getFullYear();

    const anniversaryThisYear = new Date(start);
    anniversaryThisYear.setFullYear(now.getFullYear());

    if (now < anniversaryThisYear) {
        years--;
        anniversaryThisYear.setFullYear(now.getFullYear() - 1);
    }

    const diffTime = Math.abs(now - anniversaryThisYear);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return {
        years,
        days,
        formatted: `${years} year${years !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`
    };
}

// Test the function
const joinDate = "2024-01-15";

const tenure = getSiteTenure(joinDate);

console.log(tenure);
