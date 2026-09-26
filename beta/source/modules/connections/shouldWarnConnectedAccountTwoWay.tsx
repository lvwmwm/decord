// Module ID: 15245
// Function ID: 15246
// Name: shouldWarnConnectedAccountTwoWay
// Dependencies: [1074, 2]
// Exports: default

// Module 15245 (shouldWarnConnectedAccountTwoWay)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = Constants.PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};
