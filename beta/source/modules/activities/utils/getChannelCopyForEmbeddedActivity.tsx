// Module ID: 10624
// Function ID: 10625
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1126, 2]
// Exports: default

// Module 10624 (getChannelCopyForEmbeddedActivity)
import intl2 from "intl" /* 1126 */;
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
