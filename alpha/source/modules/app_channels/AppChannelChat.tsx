// Module ID: 9535
// Function ID: 9536
// Name: AppChannelChat
// Dependencies: [19, 6277, 6251, 9536, 6279, 558, 576, 504, 584, 2]
// Exports: closeAppChannelChat, openAppChannelChat

// Module 9535 (AppChannelChat)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6279 */;
import SidebarActionCreatorsDefault from "SidebarActionCreators" /* 9536 */;
import react from "react" /* 19 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6277 */;
import ReadStateStore from "ReadStateStore" /* 6251 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAppChannelChatOpen(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const tmp2 = null != closure_0 && ChannelSectionStore.getCurrentSidebarChannelId(tmp) === tmp;
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useIsAppChannelChatOpen(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelSectionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const tmp2 = null != closure_0 && ChannelSectionStore.getCurrentSidebarChannelId(tmp) === tmp;
    return tmp2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCloseAppChannelChatOnFrameDeepLink(arg0) {
  let closure_0;
  let currentSidebarChannelId;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      let handleFrameDeepLinkQueued;
      if (null != handleFrameDeepLinkQueued) {
        handleFrameDeepLinkQueued = function handleFrameDeepLinkQueued(channelId) {
          const tmp2 = channelId.channelId === handleFrameDeepLinkQueued && currentSidebarChannelId.getCurrentSidebarChannelId(tmp) === tmp;
          if (tmp2) {
            const obj = SidebarActionCreatorsDefault;
            obj.closeChannelSidebar(handleFrameDeepLinkQueued);
          }
        };
        const tmp = importDefault;
        let tmp2 = dependencyMap;
        let obj = DispatcherDefault;
        const subscription = obj.subscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
        };
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useCloseAppChannelChatOnFrameDeepLink(arg0) {
  let currentSidebarChannelId;
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    function handleFrameDeepLinkQueued(channelId) {
      const tmp2 = channelId.channelId === handleFrameDeepLinkQueued && currentSidebarChannelId.getCurrentSidebarChannelId(tmp) === tmp;
      if (tmp2) {
        const obj = SidebarActionCreatorsDefault;
        obj.closeChannelSidebar(handleFrameDeepLinkQueued);
      }
    }
    if (null != handleFrameDeepLinkQueued) {
      const tmp = importDefault;
      let tmp2 = dependencyMap;
      let obj = DispatcherDefault;
      const subscription = obj.subscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
      };
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
function closeAppChannelChat(id) {
  const obj = SidebarActionCreatorsDefault;
  obj.closeChannelSidebar(id);
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelChatUnread(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let num;
      const obj = { hasUnread: null != closure_0 && ReadStateStore.hasUnread(tmp), mentionCount: num };
      num = 0;
      if (null != closure_0) {
        num = ReadStateStore.getMentionCount(tmp);
      }
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
}) : (function useAppChannelChatUnread(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let num;
    const obj = { hasUnread: null != closure_0 && ReadStateStore.hasUnread(tmp), mentionCount: num };
    num = 0;
    if (null != closure_0) {
      num = ReadStateStore.getMentionCount(tmp);
    }
    return obj;
  }, items1);
});
const result = size.fileFinishedImporting("modules/app_channels/AppChannelChat.tsx");

export const openAppChannelChat = function openAppChannelChat(guild_id, id, id2) {
  const obj2 = { guildId: guild_id, channelId: id, baseChannelId: id, details: { type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: id2 } };
  const obj = SidebarActionCreatorsDefault;
  ({ type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: id2 });
  obj.openChannelAsSidebar(obj2);
};
export { closeAppChannelChat };
export const useIsAppChannelChatOpen = tmp2;
export const useCloseAppChannelChatOnFrameDeepLink = tmp3;
export const useAppChannelChatUnread = tmp4;
