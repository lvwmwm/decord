// Module ID: 15649
// Function ID: 119587
// Name: useCanInviteMembers
// Dependencies: [0, 0, 0, 0, 0]
// Exports: useCanInviteMembers

// Module 15649 (useCanInviteMembers)
import closure_2 from "result";
import closure_3 from "result";
import { Permissions } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

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
