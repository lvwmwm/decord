// Module ID: 7243
// Function ID: 7244
// Name: getDeviceSpecificString
// Dependencies: [1115, 1610, 2]
// Exports: getDeviceSpecificString

// Module 7243 (getDeviceSpecificString)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

let tmp;
const intl2 = tmp(1115);
const result = size.fileFinishedImporting("modules/intl/overrides/getDeviceSpecificString.tsx");

export const getDeviceSpecificString = function getDeviceSpecificString(arg0, _2Yp7dF) {
  let str = null;
  const obj = MetaQuestUtils;
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
  const intl = intl2.intl;
  return intl.string(tmp3);
};
