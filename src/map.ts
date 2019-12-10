import { Directions } from "./Directions";

interface mapData {
    name: string;
    description?: string;
    moveOptions?: Directions[];
}

export class Map {
    private data: mapData[][][] = [
        [
            [
                {
                    name: "The Pit",
                    description: "It's dark and nasty down here..."
                }
            ]
        ],
        [
            [
                {
                    name: "Upper Left",
                    description: "There is a hole in the ground here"
                },
                {
                    name: "Upper Center"
                },
                {
                    name: "Upper Right"
                }
            ],
            [
                {
                    name: "Center Left"
                },
                {
                    name: "Center Center",
                    description: "Start Here"
                },
                {
                    name: "Center Right"
                }
            ],
            [
                {
                    name: "Lower Left"
                },
                {
                    name: "Lower Center"
                },
                {
                    name: "Lower Right"
                }
            ]
        ]
    ];

    getMapData(x: number, y: number, z: number): mapData {
        const cell = this.data[z][y][x];

        cell.moveOptions = [];
        if (
            this.data[z - 1] !== undefined &&
            this.data[z - 1][y] !== undefined &&
            this.data[z - 1][y][x] !== undefined
        ) {
            cell.moveOptions.push(Directions.Down);
        }
        if (
            this.data[z + 1] !== undefined &&
            this.data[z + 1][y] !== undefined &&
            this.data[z + 1][y][x] !== undefined
        ) {
            cell.moveOptions.push(Directions.Up);
        }
        if (
            this.data[z][y - 1] !== undefined &&
            this.data[z][y - 1][x] !== undefined
        ) {
            cell.moveOptions.push(Directions.North);
        }
        if (
            this.data[z][y + 1] !== undefined &&
            this.data[z][y + 1][x] !== undefined
        ) {
            cell.moveOptions.push(Directions.South);
        }
        if (this.data[z][y][x - 1] !== undefined) {
            cell.moveOptions.push(Directions.West);
        }
        if (this.data[z][y][x + 1] !== undefined) {
            cell.moveOptions.push(Directions.East);
        }

        return cell;
    }
}
