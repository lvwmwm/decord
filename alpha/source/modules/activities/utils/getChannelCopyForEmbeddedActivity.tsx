// Module ID: 10338
// Function ID: 10339
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1115, 2]
// Exports: default

// Module 10338 (getChannelCopyForEmbeddedActivity)
import util from "util" /* 1115 */;
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
