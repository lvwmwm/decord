// Module ID: 7066
// Function ID: 56506
// Name: getDeviceSpecificString
// Dependencies: [1212, 1553, 2]
// Exports: getDeviceSpecificString

// Module 7066 (getDeviceSpecificString)
const result = require("set").fileFinishedImporting("modules/intl/overrides/getDeviceSpecificString.tsx");

export const getDeviceSpecificString = function getDeviceSpecificString(arg0, _2Yp7dF) {
  let tmp = _2Yp7dF;
  let str = null;
  if (obj.isMetaQuest()) {
    str = "quest";
  }
  let tmp2 = null;
  if (null != str) {
    tmp2 = arg0[str];
  }
  if (null != tmp2) {
    tmp = tmp2;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(tmp);
};
