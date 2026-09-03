// Module ID: 16454
// Function ID: 16455
// Name: getFrameLaunchContextQueryParams
// Dependencies: [2]
// Exports: default

// Module 16454 (getFrameLaunchContextQueryParams)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/frames/utils/getFrameLaunchContextQueryParams.tsx");

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
