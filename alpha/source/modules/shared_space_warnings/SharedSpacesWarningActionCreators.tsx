// Module ID: 18191
// Function ID: 18192
// Name: SharedSpacesWarningActionCreators
// Dependencies: [14003, 1085, 1295, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 18191 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14003 */;
import size from "module_2" /* 2 */;

let closure_2 = SharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  let obj2;
  closure_2(channelId);
  const HTTP = HTTPUtils.HTTP;
  const post = HTTP.post;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return post(obj);
};
