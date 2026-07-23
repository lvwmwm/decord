// Module ID: 11638
// Function ID: 90348
// Name: getMutualGuildsLabel
// Dependencies: [1212, 2]
// Exports: default

// Module 11638 (getMutualGuildsLabel)
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(count) {
  if (undefined === count) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1212) /* getSystemLocale */.t["4lTDZq"]);
  } else if (0 === count) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t.jpY0X5);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.eE3oep, obj);
  }
  return stringResult;
};
