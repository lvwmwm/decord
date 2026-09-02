// Module ID: 14793
// Function ID: 14794
// Name: set
// Dependencies: [673, 2]
// Exports: default

// Module 14793 (set)
import ME from "ME" /* 673 */;
import set from "set" /* 2 */;

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = ME.PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};
