import inquirer from "inquirer";

const random: number = Math.floor(Math.random() * 10);
type answerType = {
    guess: number
}

async function promptGuess() {
    const answer: answerType = await inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "What's your guess number?",
            validate: (input) => {
                const parsed = parseInt(input);
                if (!isNaN(parsed) && parsed >= 0 && parsed <= 10) {
                    return true;
                } else {
                    return "Please enter a number between 0 and 10.";
                }
            }
        }
    ]);

    if (answer.guess === random) {
        console.log(`Congrats, You've gussed the right numeber!`);
    } else {
        console.log(`Oops! The right number was ${random}`);
        await promptGuess();
    }
}

promptGuess();
