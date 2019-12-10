interface mapData {
    name: string;
    description?: string;
    moveOptions?: string[]
}

export class Map {
    private data: mapData[][][] = [
        [
            [
            {
                name: "Upper Left"
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

    getMapData(x: number, y:number, z:number): mapData {
        const cell = this.data[z][y][x];

        cell.moveOptions = []
        if (
            this.data[z][y - 1] !== undefined &&
            this.data[z][y - 1][x] !== undefined
        ) {
            cell.moveOptions.push("N");
        }
        if (
            this.data[z][y + 1] !== undefined &&
            this.data[z][y + 1][x] !== undefined
        ) {
            cell.moveOptions.push("S");
        }
        if (this.data[z][y][x - 1] !== undefined) {
            cell.moveOptions.push("W");
        }
        if (this.data[z][y][x + 1] !== undefined) {
            cell.moveOptions.push("E");
        }

        return cell;
    }
}
