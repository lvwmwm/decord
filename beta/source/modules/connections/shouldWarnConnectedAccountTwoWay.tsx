// Module ID: 14488
// Function ID: 14489
// Name: shouldWarnConnectedAccountTwoWay
// Dependencies: [1086, 2]
// Exports: default

// Module 14488 (shouldWarnConnectedAccountTwoWay)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = Constants.PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  const tmp = set.has(type.type) && type.twoWayLink;
  return tmp;
};
