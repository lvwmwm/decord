// Module ID: 10889
// Function ID: 10890
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1113, 2]
// Exports: default

// Module 10889 (getChannelCopyForEmbeddedActivity)
import intl2 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t["2YCamo"]);
  }
  return stringResult;
};
