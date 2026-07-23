// Module ID: 15784
// Function ID: 121866
// Name: useCanInviteMembers
// Dependencies: [1348, 3758, 482, 624, 2]
// Exports: useCanInviteMembers

// Module 15784 (useCanInviteMembers)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/voice_panel/native/hooks/useCanInviteMembers.tsx");

export const useCanInviteMembers = function useCanInviteMembers(channelId) {
  const _require = channelId;
  const items = [_isNativeReflectConstruct, closure_3];
  const items1 = [channelId];
  return _require(624).useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_4.CONNECT, channel);
    }
    if (canResult) {
      canResult = outer1_3.can(outer1_4.CREATE_INSTANT_INVITE, channel);
    }
    return canResult;
  }, items1);
};
