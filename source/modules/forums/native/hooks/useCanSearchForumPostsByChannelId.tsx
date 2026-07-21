// Module ID: 10093
// Function ID: 78157
// Name: useCanSearchForumPostsByChannelId
// Dependencies: []
// Exports: useCanSearchForumPostsByChannelId

// Module 10093 (useCanSearchForumPostsByChannelId)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const arg1 = channelId;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_3.can(constants.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};
