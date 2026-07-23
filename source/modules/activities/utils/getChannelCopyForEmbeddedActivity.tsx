// Module ID: 9080
// Function ID: 71206
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1212, 2]
// Exports: default

// Module 9080 (getChannelCopyForEmbeddedActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["2YCamo"]);
  }
  return stringResult;
};
