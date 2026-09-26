// Module ID: 14036
// Function ID: 14037
// Name: SharedSpacesWarningActionCreators
// Dependencies: [14032, 1074, 1271, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 14036 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14032 */;
import size from "module_2" /* 2 */;

let closure_2 = SharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  closure_2(channelId);
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(obj);
};
