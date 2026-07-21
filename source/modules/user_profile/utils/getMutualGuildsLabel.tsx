// Module ID: 11627
// Function ID: 90286
// Name: getMutualGuildsLabel
// Dependencies: []
// Exports: default

// Module 11627 (getMutualGuildsLabel)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(count) {
  if (undefined === count) {
    const intl3 = require(dependencyMap[0]).intl;
    let stringResult = intl3.string(require(dependencyMap[0]).t.4lTDZq);
  } else if (0 === count) {
    const intl2 = require(dependencyMap[0]).intl;
    stringResult = intl2.string(require(dependencyMap[0]).t.jpY0X5);
  } else {
    const intl = require(dependencyMap[0]).intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(require(dependencyMap[0]).t.eE3oep, obj);
  }
  return stringResult;
};
