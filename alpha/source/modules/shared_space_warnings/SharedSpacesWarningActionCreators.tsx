// Module ID: 19260
// Function ID: 19261
// Name: SharedSpacesWarningActionCreators
// Dependencies: [15305, 1084, 1294, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 19260 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 15305 */;
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
