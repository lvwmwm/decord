// Module ID: 16991
// Function ID: 16992
// Name: shouldWarnConnectedAccountTwoWay
// Dependencies: [1072, 2]
// Exports: default

// Module 16991 (shouldWarnConnectedAccountTwoWay)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = Constants.PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  const tmp = set.has(type.type) && type.twoWayLink;
  return tmp;
};
