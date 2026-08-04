// Module ID: 7203
// Function ID: 7204
// Name: getDeviceSpecificString
// Dependencies: [1236, 1577, 2]
// Exports: getDeviceSpecificString

// Module 7203 (getDeviceSpecificString)
const result = require("set").fileFinishedImporting("modules/intl/overrides/getDeviceSpecificString.tsx");

export const getDeviceSpecificString = function getDeviceSpecificString(arg0, _2Yp7dF) {
  let str = null;
  if (obj.isMetaQuest()) {
    str = "quest";
  }
  let tmp3 = null;
  if (null != str) {
    tmp3 = arg0[str];
  }
  if (tmp3 == null) {
    tmp3 = _2Yp7dF;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(tmp3);
};
