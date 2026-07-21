// Module ID: 11633
// Function ID: 90298
// Name: getMutualFriendsLabel
// Dependencies: []
// Exports: default

// Module 11633 (getMutualFriendsLabel)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = require(dependencyMap[0]).intl;
    let stringResult = intl3.string(require(dependencyMap[0]).t.0mTJ3j);
  } else if (0 === arg0) {
    const intl2 = require(dependencyMap[0]).intl;
    stringResult = intl2.string(require(dependencyMap[0]).t.n9g3ay);
  } else {
    const intl = require(dependencyMap[0]).intl;
    const obj = {};
    let str = "";
    if (null != arg0) {
      str = arg0;
    }
    obj.count = str;
    stringResult = intl.formatToPlainString(require(dependencyMap[0]).t.5s9jl+, obj);
  }
  return stringResult;
};
