// Module ID: 9255
// Function ID: 9256
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1236, 2]
// Exports: default

// Module 9255 (getChannelCopyForEmbeddedActivity)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["2YCamo"]);
  }
  return stringResult;
};
