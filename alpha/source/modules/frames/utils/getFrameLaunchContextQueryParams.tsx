// Module ID: 17179
// Function ID: 17180
// Name: getFrameLaunchContextQueryParams
// Dependencies: [2]
// Exports: default

// Module 17179 (getFrameLaunchContextQueryParams)
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
