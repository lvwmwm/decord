// Module ID: 9686
// Function ID: 9687
// Name: openChannelSecondaryViewChat
// Dependencies: [19, 1087, 5137, 5136, 9687, 1506, 558, 576, 584, 2]
// Exports: default, getChannelSecondaryViewChatIndex, presentChannelSecondaryViewChat

// Module 9686 (openChannelSecondaryViewChat)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import RootNavigationRef from "RootNavigationRef" /* 5137 */;
import MessageManagerDefault from "MessageManager" /* 9687 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const f103954 = () => {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const obj2 = { guildId, channelId };
    rootNavigationRef.navigate("channel-secondary-view-chat", obj2, { pop: true });
  }
};
const ME = Constants.ME;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDismissChannelSecondaryViewChatOnFrameDeepLink(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      let handleFrameDeepLinkQueued;
      if (null != handleFrameDeepLinkQueued) {
        handleFrameDeepLinkQueued = function handleFrameDeepLinkQueued(channelId) {
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
                  let channelId;
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
                const dispatch = rootNavigationRef.dispatch;
                const obj = { target: rootState.key };
                const StackActions = tmp6(tmp7[5]).StackActions;
                const merged = Object.assign(StackActions.pop(rootState.routes.length - num));
                dispatch(obj);
              }
            }
          }
        };
        const tmp = importDefault;
        let obj = DispatcherDefault;
        const subscription = obj.subscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("FRAME_DEEP_LINK_QUEUED", handleFrameDeepLinkQueued);
        };
      }
    };
    const items = [arg0];
    let num = 0;
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
}) : (function useDismissChannelSecondaryViewChatOnFrameDeepLink(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
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
              let channelId;
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
});
function getChannelSecondaryViewChatIndex(id) {
  _require = id;
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
        let channelId;
        if (result != null) {
          channelId = result.params.channelId;
        }
        return channelId === closure_0;
      });
    }
  }
  return num;
}
function presentChannelSecondaryViewChat(guildId, channelId) {
  _require = guildId;
  let closure_1 = channelId;
  const obj = require("RootNavigationRef");
  const result = obj.runWhenRootNavigationReady(f103954);
}
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
  const result = obj2.runWhenRootNavigationReady(f103954);
};
export { getChannelSecondaryViewChatIndex };
export { presentChannelSecondaryViewChat };
export const useDismissChannelSecondaryViewChatOnFrameDeepLink = tmp2;
