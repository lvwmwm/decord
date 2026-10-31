// Module ID: 9829
// Function ID: 9830
// Name: openChannelSecondaryViewChat
// Dependencies: [19, 1072, 5199, 5198, 9830, 1498, 572, 2]
// Exports: default, getChannelSecondaryViewChatIndex, presentChannelSecondaryViewChat, useDismissChannelSecondaryViewChatOnFrameDeepLink

// Module 9829 (openChannelSecondaryViewChat)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import MessageManagerDefault from "MessageManager" /* 9830 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const f95658 = () => {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const obj2 = { guildId, channelId };
    rootNavigationRef.navigate("channel-secondary-view-chat", obj2, { pop: true });
  }
};
const ME = Constants.ME;
let result = size.fileFinishedImporting("modules/app_channels/native/openChannelSecondaryViewChat.tsx");

export default function openChannelSecondaryViewChat(guildId, channelId) {
  let tmp3 = null;
  const fetchMessages = MessageManagerDefault.fetchMessages;
  if (guildId !== ME) {
    tmp3 = guildId;
  }
  let obj = { guildId: tmp3, channelId };
  const messages = fetchMessages(obj);
  _require = guildId;
  importDefault = channelId;
  let obj2 = require("RootNavigationRef");
  const result = obj2.runWhenRootNavigationReady(f95658);
};
export function getChannelSecondaryViewChatIndex(channelId) {
  _require = channelId;
  const obj = require("RootNavigationRef");
  const rootNavigationRef = obj.getRootNavigationRef();
  let num = -1;
  if (null != rootNavigationRef) {
    num = -1;
    if (rootNavigationRef.isReady()) {
      const routes = rootNavigationRef.getRootState().routes;
      num = routes.findIndex((item) => {
        const obj = handleFrameDeepLinkQueued(closure_2_2[3]);
        const result = obj.coerceChannelSecondaryViewChatRoute(item);
        channelId = undefined;
        if (result != null) {
          channelId = result.params.channelId;
        }
        return channelId === closure_0;
      });
    }
  }
  return num;
}
export function presentChannelSecondaryViewChat(guildId, channelId) {
  _require = guildId;
  let closure_1 = channelId;
  const obj = require("RootNavigationRef");
  const result = obj.runWhenRootNavigationReady(f95658);
}
export function useDismissChannelSecondaryViewChatOnFrameDeepLink(channelId) {
  let closure_0 = channelId;
  const items = [channelId];
  const effect = react.useEffect(() => {
    function handleFrameDeepLinkQueued(channelId) {
      if (channelId.channelId === handleFrameDeepLinkQueued) {
        const obj2 = handleFrameDeepLinkQueued(dependencyMap[2]);
        const rootNavigationRef = obj2.getRootNavigationRef();
        const tmp6 = handleFrameDeepLinkQueued;
        handleFrameDeepLinkQueued = tmp;
        const obj4 = handleFrameDeepLinkQueued(dependencyMap[2]);
        const rootNavigationRef1 = obj4.getRootNavigationRef();
        let num = -1;
        const tmp7 = dependencyMap;
        if (null != rootNavigationRef1) {
          num = -1;
          if (rootNavigationRef1.isReady()) {
            const routes = rootNavigationRef1.getRootState().routes;
            num = routes.findIndex((item) => {
              const obj = handleFrameDeepLinkQueued(closure_2_2[3]);
              const result = obj.coerceChannelSecondaryViewChatRoute(item);
              channelId = undefined;
              if (result != null) {
                channelId = result.params.channelId;
              }
              return channelId === closure_0;
            });
          }
        }
        if (null != rootNavigationRef) {
          if (-1 !== num) {
            const rootState = rootNavigationRef.getRootState();
            let obj = { target: rootState.key };
            const dispatch = rootNavigationRef.dispatch;
            const StackActions = tmp6(tmp7[5]).StackActions;
            const merged = Object.assign(StackActions.pop(rootState.routes.length - num));
            dispatch(obj);
          }
        }
      }
    }
    if (null != handleFrameDeepLinkQueued) {
      const tmp = importDefault;
      let obj = DispatcherDefault;
      const subscription = obj.subscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
      };
    }
  }, items);
}
