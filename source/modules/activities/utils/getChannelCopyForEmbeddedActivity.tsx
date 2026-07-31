// Module ID: 9087
// Function ID: 9088
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: [1236, 2]
// Exports: default

// Module 9087 (getChannelCopyForEmbeddedActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1236) /* getSystemLocale */.t["2YCamo"]);
  }
  return stringResult;
};
