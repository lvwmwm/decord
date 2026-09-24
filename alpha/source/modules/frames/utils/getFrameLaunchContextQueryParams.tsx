// Module ID: 17068
// Function ID: 17069
// Name: getFrameLaunchContextQueryParams
// Dependencies: [2]
// Exports: default

// Module 17068 (getFrameLaunchContextQueryParams)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameLaunchContextQueryParams.tsx");

export default function getFrameLaunchContextQueryParams(customId) {
  const obj = {};
  if (null != customId.customId) {
    obj.custom_id = customId.customId;
  }
  if (null != customId.referrerId) {
    obj.referrer_id = customId.referrerId;
  }
  return obj;
};
