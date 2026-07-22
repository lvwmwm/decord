// Module ID: 9073
// Function ID: 71165
// Name: getChannelCopyForEmbeddedActivity
// Dependencies: []
// Exports: default

// Module 9073 (getChannelCopyForEmbeddedActivity)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = require(dependencyMap[0]).intl;
    stringResult = intl.string(require(dependencyMap[0]).t.2YCamo);
  }
  return stringResult;
};
