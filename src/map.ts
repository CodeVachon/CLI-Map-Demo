import { Directions } from "./Directions";

interface mapData {
    name: string;
    description?: string;
    moveOptions?: Directions[];
}

export class Map {
    private data: (mapData | undefined)[][][] = [
        [
            [
                {
                    name: "The Void",
                    description:
                        "It's dark, wet, and nasty down here and the rope is getting harder to hold onto."
                }
            ]
        ],
        [
            [
                {
                    name: "Big Dark Hole",
                    description:
                        "You arrive at the edge of large circular void where the land meets the sea.\nYou hear the sounds of salt water rushing in on the far side. Near the beach\nyou see a large Rock with a rope tied to it that leads down into the casem.\nTo the east you can see an old path leading inland."
                },
                {
                    name: "A Crossroads",
                    description:
                        "You arrive at an old crossroads. A worn out directional sign points East,\nWest, and South, but is entirely unledgable. To the East you can hear fast\nmoving waters. To the West to old path leads to higher ground. To the south\nyou see a faint light."
                },
                {
                    name: "Mountain Road",
                    description:
                        "You arrive at an old mountian path that quickly leads to higher ground. The\nair here is thing, and it doesnt seem safe to keep going. To the East the\npath leads to a lower elevation, to the south lies an old forest."
                }
            ],
            [
                {
                    name: "Wide Open Sea",
                    description:
                        "You arrive at a shore of a large and dark sea that seems to stretch to miles\nto the south. to the North is a dark void while to the east you can see a\nfaint light."
                },
                {
                    name: "Circle of Stones",
                    description:
                        "A fire roars in the center of a grouping of tall stones. To the west you can\nhear waves on a shore. to the east you hear a howeling wind. An old path leads\nto the north."
                },
                {
                    name: "Creepy Forest",
                    description:
                        "You are surrounded by hundreds of anciant trees. The wind blows and rustles the\nold branches in a way that sends shivers down your back. The North leads to higher\nground, to the south leads deeper into the forest."
                }
            ],
            [
                {
                    name: "The Panisula",
                    description:
                        "You walk for miles down along a panisula enjoying the stary night sky. There is\nnothing here but calm waters and peaceful thoughts. To the north you can hear more\naggresive waters."
                },
                undefined,
                {
                    name: "Creepy Cabin",
                    description:
                        "You arrive at an old cabin that is near to falling over in the wind. The North\nleads to higher ground."
                }
            ]
        ]
    ];

    getMapData(x: number, y: number, z: number): mapData {
        const cell = this.data[z][y][x];

        if (cell === undefined) {
            return this.getMapData(1, 1, 1);
        }

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
