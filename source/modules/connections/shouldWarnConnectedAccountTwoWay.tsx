// Module ID: 13990
// Function ID: 13991
// Name: set
// Dependencies: [676, 2]
// Exports: default

// Module 13990 (set)
import set from "set";

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = require("ME").PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};
