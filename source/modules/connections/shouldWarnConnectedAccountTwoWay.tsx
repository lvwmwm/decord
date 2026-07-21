// Module ID: 13746
// Function ID: 103996
// Name: set
// Dependencies: []
// Exports: default

// Module 13746 (set)
const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = require(dependencyMap[0]).PlatformTypes);
const set = new Set(items);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};
