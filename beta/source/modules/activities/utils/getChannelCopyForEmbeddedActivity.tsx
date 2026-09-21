// Module ID: 11194
// Function ID: 11195
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1119, 2]
// Exports: default

// Module 11194 (getChannelCopyForEmbeddedActivity)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = util.intl;
    stringResult = intl.string(util.t["2YCamo"]);
  }
  return stringResult;
};
