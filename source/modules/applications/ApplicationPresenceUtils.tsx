// Module ID: 8501
// Function ID: 67873
// Name: shouldDisableUserPresenceInChannel
// Dependencies: [1348, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8501 (shouldDisableUserPresenceInChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(stateFromStores, channelId) {
  let channel = stateFromStores;
  channel = channel.getChannel(channelId);
  let tmp = null != channel && stateFromStores.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === stateFromStores.id);
  }
  return tmp;
};
