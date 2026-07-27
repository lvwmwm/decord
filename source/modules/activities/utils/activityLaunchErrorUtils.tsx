// Module ID: 10577
// Function ID: 82455
// Name: _getActivityLaunchErrorInfo
// Dependencies: [5, 5663, 653, 1212, 10578, 3804, 5668, 4357, 7836, 2]
// Exports: getActivityLaunchErrorInfo

// Module 10577 (_getActivityLaunchErrorInfo)
import explicitContentFromProto from "explicitContentFromProto";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DevShelfFetchState } from "_isNativeReflectConstruct";
import { AbortCodes } from "ME";

const require = arg1;
function _getActivityLaunchErrorInfo() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let obj = { ClientError: 0, [0]: "ClientError", CallbackError: 1, [1]: "CallbackError", ApiError: 2, [2]: "ApiError" };
const result = require("ME").fileFinishedImporting("modules/activities/utils/activityLaunchErrorUtils.tsx");

export const ActivityLaunchFailErrorType = obj;
export const getActivityLaunchErrorInfo = function getActivityLaunchErrorInfo(error, applicationId) {
  return _getActivityLaunchErrorInfo(...arguments);
};
