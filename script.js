//your JS code here. If required.
// Adding an event listener to the button
document.getElementById("btn").addEventListener("click", () => {
    const input = document.getElementById("ip").value; // Get the user input
    const outputDiv = document.getElementById("output");
    
    // Function to create a promise that resolves after a specified time with a value
    function createPromise(value, delay) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), delay);
        });
    }

    // Step 1: Get the input value
    createPromise(Number(input), 2000)
        .then((number) => {
            outputDiv.innerText = `Result: ${number}`;
            return createPromise(number * 2, 1000); // Multiply by 2
        })
        .then((number) => {
            outputDiv.innerText = `Result: ${number}`;
            return createPromise(number - 3, 1000); // Subtract 3
        })
        .then((number) => {
            outputDiv.innerText = `Result: ${number}`;
            return createPromise(number / 2, 1000); // Divide by 2
        })
        .then((number) => {
            outputDiv.innerText = `Result: ${number}`;
            return createPromise(number + 10, 1000); // Add 10
        })
        .then((finalResult) => {
            outputDiv.innerText = `Final Result: ${finalResult}`; // Display final result
        })
        .catch((error) => {
            outputDiv.innerText = `Error: ${error.message}`; // Handle errors
        });
});
