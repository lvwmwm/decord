// Module ID: 15656
// Function ID: 119611
// Name: useCanInviteMembers
// Dependencies: [0, 0, 0, 0, 0]
// Exports: useCanInviteMembers

// Module 15656 (useCanInviteMembers)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import { Permissions } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const arg1 = channelId;
  const items = [__exportStarResult1, closure_3];
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
