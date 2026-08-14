// Module ID: 13084
// Function ID: 13085
// Name: dismissGdmBlockedUserWarning
// Dependencies: [13080, 676, 530, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 13084 (dismissGdmBlockedUserWarning)
import { setDismissalTimeForChannel as closure_2 } from "useSharedSpacesWarningStore";
import { Endpoints } from "ME";

const result = require("sendRequest").fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = require(530) /* sendRequest */.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: null };
  obj[1] = require(530) /* sendRequest */.rejectWithMigratedError();
  return HTTP.post(obj);
};
