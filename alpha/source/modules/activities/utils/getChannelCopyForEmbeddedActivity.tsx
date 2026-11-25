// Module ID: 11330
// Function ID: 11331
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1112, 2]
// Exports: default

// Module 11330 (getChannelCopyForEmbeddedActivity)
import intl2 from "intl" /* 1112 */;
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
