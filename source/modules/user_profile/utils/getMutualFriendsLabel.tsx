// Module ID: 11644
// Function ID: 90372
// Name: getMutualFriendsLabel
// Dependencies: [1212, 2]
// Exports: default

// Module 11644 (getMutualFriendsLabel)
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(require(1212) /* getSystemLocale */.t["0mTJ3j"]);
  } else if (0 === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t.n9g3ay);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    let str = "";
    if (null != arg0) {
      str = arg0;
    }
    obj.count = str;
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["5s9jl+"], obj);
  }
  return stringResult;
};
