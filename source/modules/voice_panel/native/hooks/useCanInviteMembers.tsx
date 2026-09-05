// Module ID: 17102
// Function ID: 17103
// Name: useCanInviteMembers
// Dependencies: [1957, 4199, 1085, 563, 2]
// Exports: useCanInviteMembers

// Module 17102 (useCanInviteMembers)
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import closure_3 from "getUncachedChannelPermissions" /* 4199 */;
import { Permissions } from "sum" /* 1085 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const _require = channelId;
  const items = [closure_2, closure_3];
  const items1 = [channelId];
  return _require(563).useStateFromStores(items, () => {
    const channel = closure_1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.CONNECT, channel);
    }
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};
