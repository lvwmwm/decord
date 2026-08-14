// Module ID: 10427
// Function ID: 10428
// Name: markChannelInvited
// Dependencies: [709, 2]
// Exports: dismissSession, markChannelInvited

// Module 10427 (markChannelInvited)
const result = require("set").fileFinishedImporting("modules/activities/stores/RichPresenceInviteBarActionCreators.tsx");

export const markChannelInvited = function markChannelInvited(activitySessionKey, id) {
  let obj = importDefault(709);
  obj = { type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED", sessionKey: activitySessionKey, channelId: id };
  obj.dispatch(obj);
};
export const dismissSession = function dismissSession(sessionKey) {
  let obj = importDefault(709);
  obj = { type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey };
  obj.dispatch(obj);
};
