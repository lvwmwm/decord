// Module ID: 7060
// Function ID: 56449
// Name: getDeviceSpecificString
// Dependencies: []
// Exports: getDeviceSpecificString

// Module 7060 (getDeviceSpecificString)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/intl/overrides/getDeviceSpecificString.tsx");

export const getDeviceSpecificString = function getDeviceSpecificString(arg0, 2Yp7dF) {
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
  const intl = require(dependencyMap[0]).intl;
  return intl.string(tmp);
};
