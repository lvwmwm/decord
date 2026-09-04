// Module ID: 16540
// Function ID: 16541
// Name: getFrameLaunchContextQueryParams
// Dependencies: [2]
// Exports: default

// Module 16540 (getFrameLaunchContextQueryParams)
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
