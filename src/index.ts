import { Map } from "./map";
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";

class Character {
    position = {
        x: 1,
        y: 1,
        z: 0
    };

    constructor(private map: Map) {}

    describeLocation(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const { x, y, z } = this.position;

            const cell = this.map.getMapData(x, y, z);

            console.log("");
            console.log(chalk.bold.magenta(cell.name));
            if (cell.description) {
                console.log(cell.description);
            }
            console.log("");

            const answers = await inquirer.prompt([
                {
                    name: "direction",
                    message: "Which Direction would you like to go?",
                    type: "list",
                    choices: cell.moveOptions
                }
            ]);

            if (String(answers.direction).toLowerCase() === "w") {
                this.position.x = x - 1;
            }
            if (String(answers.direction).toLowerCase() === "e") {
                this.position.x = x + 1;
            }
            if (String(answers.direction).toLowerCase() === "n") {
                this.position.y = y - 1;
            }
            if (String(answers.direction).toLowerCase() === "s") {
                this.position.y = y + 1;
            }

            return this.describeLocation()
                .then(resolve)
                .catch(reject);
        });
    }
}

async function init() {
    console.log(figlet.textSync("Map"));
    const Player = new Character(new Map());

    await Player.describeLocation();
}

init();
