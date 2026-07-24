// Module ID: 12714
// Function ID: 98912
// Name: dismissGdmBlockedUserWarning
// Dependencies: [12710, 653, 507, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 12714 (dismissGdmBlockedUserWarning)
import { setDismissalTimeForChannel as closure_2 } from "useSharedSpacesWarningStore";
import { Endpoints } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  return HTTP.post(obj);
};
