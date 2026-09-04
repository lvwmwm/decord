// Module ID: 13663
// Function ID: 13664
// Name: dismissGdmBlockedUserWarning
// Dependencies: [13659, 673, 527, 2]
// Exports: dismissGdmBlockedUserWarning

// Module 13663 (dismissGdmBlockedUserWarning)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 527 */;
import ME from "ME" /* 673 */;
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore" /* 13659 */;

let closure_2 = useSharedSpacesWarningStore.setDismissalTimeForChannel;
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.post(obj);
};
