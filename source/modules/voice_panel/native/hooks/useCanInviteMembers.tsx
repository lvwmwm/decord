// Module ID: 15667
// Function ID: 119693
// Name: useCanInviteMembers
// Dependencies: []
// Exports: useCanInviteMembers

// Module 15667 (useCanInviteMembers)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const arg1 = channelId;
  const items = [closure_2, closure_3];
  const items1 = [channelId];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_3.can(constants.CONNECT, channel);
    }
    if (canResult) {
      canResult = closure_3.can(constants.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};
