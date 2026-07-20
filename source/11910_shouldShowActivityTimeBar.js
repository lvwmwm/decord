// Module ID: 11910
// Function ID: 92196
// Name: shouldShowActivityTimeBar
// Dependencies: []
// Exports: default

// Module 11910 (shouldShowActivityTimeBar)
const ActivityTypes = require(dependencyMap[0]).ActivityTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

export default function shouldShowActivityTimeBar(type) {
  let tmp = type.type === ActivityTypes.LISTENING;
  if (!tmp) {
    tmp = type.type === ActivityTypes.WATCHING;
  }
  if (tmp) {
    const timestamps = type.timestamps;
    let start;
    if (null != timestamps) {
      start = timestamps.start;
    }
    tmp = null != start;
  }
  if (tmp) {
    tmp = null != type.timestamps.end;
  }
  return tmp;
};
