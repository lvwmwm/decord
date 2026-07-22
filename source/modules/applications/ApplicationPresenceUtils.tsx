// Module ID: 8495
// Function ID: 67836
// Name: shouldDisableUserPresenceInChannel
// Dependencies: []
// Exports: shouldDisableUserPresenceInChannel

// Module 8495 (shouldDisableUserPresenceInChannel)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(stateFromStores, channelId) {
  let channel = stateFromStores;
  channel = channel.getChannel(channelId);
  let tmp = null != channel && stateFromStores.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === id.id);
  }
  return tmp;
};
