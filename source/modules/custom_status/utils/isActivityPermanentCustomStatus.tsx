// Module ID: 14811
// Function ID: 111647
// Name: isActivityPermanentCustomStatus
// Dependencies: []
// Exports: isActivityPermanentCustomStatus

// Module 14811 (isActivityPermanentCustomStatus)
const ActivityTypes = require(dependencyMap[0]).ActivityTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

export const isActivityPermanentCustomStatus = function isActivityPermanentCustomStatus(type) {
  let tmp = type.type === ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (null != timestamps) {
      end = timestamps.end;
    }
    tmp = null == end;
  }
  return tmp;
};
