// Module ID: 14046
// Function ID: 14047
// Name: SharedSpacesWarningActionCreators
// Dependencies: [14042, 1078, 1275, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 14046 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14042 */;
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
