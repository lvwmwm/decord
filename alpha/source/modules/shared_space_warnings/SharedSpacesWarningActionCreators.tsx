// Module ID: 18642
// Function ID: 18643
// Name: SharedSpacesWarningActionCreators
// Dependencies: [14808, 1087, 1297, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 18642 (SharedSpacesWarningActionCreators)
import Constants from "Constants" /* 1087 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14808 */;
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
