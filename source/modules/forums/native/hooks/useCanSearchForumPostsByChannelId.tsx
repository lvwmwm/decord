// Module ID: 10102
// Function ID: 78221
// Name: useCanSearchForumPostsByChannelId
// Dependencies: [1348, 3758, 653, 566, 2]
// Exports: useCanSearchForumPostsByChannelId

// Module 10102 (useCanSearchForumPostsByChannelId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx");

export const useCanSearchForumPostsByChannelId = function useCanSearchForumPostsByChannelId(channelId) {
  const _require = channelId;
  const items = [_isNativeReflectConstruct, closure_3];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_2.getChannel(closure_0);
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_4.READ_MESSAGE_HISTORY, channel);
    }
    return canResult;
  });
};
