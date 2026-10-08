// Module ID: 17957
// Function ID: 17958
// Name: SharedSpacesWarningActionCreators
// Dependencies: [13857, 1085, 1294, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 17957 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 13857 */;
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
