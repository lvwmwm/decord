// Module ID: 17612
// Function ID: 17613
// Name: getFrameLaunchContextQueryParams
// Dependencies: [2]
// Exports: default

// Module 17612 (getFrameLaunchContextQueryParams)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameLaunchContextQueryParams.tsx");

export default function getFrameLaunchContextQueryParams(launch) {
  launch = launch.launch;
  let customId;
  if (launch != null) {
    customId = launch.customId;
  }
  const obj = {};
  if (null != customId) {
    obj.custom_id = launch.launch.customId;
  }
  const launch2 = launch.launch;
  let referrerId;
  if (launch2 != null) {
    referrerId = launch2.referrerId;
  }
  if (null != referrerId) {
    obj.referrer_id = launch.launch.referrerId;
  }
  return obj;
};
