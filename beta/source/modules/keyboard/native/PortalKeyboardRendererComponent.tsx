// Module ID: 11848
// Function ID: 11849
// Name: PortalKeyboardRendererComponent
// Dependencies: [19, 2068, 21, 558, 576, 4922, 5472, 7200, 1631, 11849, 10949, 12050, 12092, 2]

// Module 11848 (PortalKeyboardRendererComponent)
import Fragment from "Fragment" /* 21 */;
import useBackPressHandler from "useBackPressHandler" /* 5472 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7200 */;
import AppLauncherKeyboardDefault from "AppLauncherKeyboard" /* 11849 */;
import MediaKeyboardDefault from "MediaKeyboard" /* 12050 */;
import ExpressionPickerKeyboardDefault from "ExpressionPickerKeyboard" /* 12092 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PortalKeyboardRendererComponent(arg0) {
  let channelId;
  let chatInputRef;
  let cleanUp;
  let closure_1;
  let item;
  let state;
  let obj = chatInputRef(576);
  const cResult = obj.c(23);
  ({ item, state, cleanUp } = arg0);
  ({ channelId, chatInputRef } = item);
  const type = item.type;
  const tmp4 = state === chatInputRef(4922).TransitionStates.YEETED;
  importDefault = tmp4;
  if (cResult[0] === chatInputRef) {
    let tmp5;
    let tmp6;
    let FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    let tmp11;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
    if (cResult[4] !== channelId) {
      const channel = ChannelStore.getChannel(channelId);
      cResult[4] = channelId;
      cResult[5] = channel;
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = cResult[5];
    }
    if (channelId === chatInputRef(7200).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = tmp(7200).FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    if (cResult[6] !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
      let tmp13;
      if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
        tmp13 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, type: "channel" };
        const obj2 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, type: "channel" };
      }
      cResult[6] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
      if (undefined !== tmp11) {
        if (chatInputRef(1631).KeyboardTypes.APP_LAUNCHER === type) {
          if (cResult[8] === chatInputRef) {
            if (cResult[9] === cleanUp) {
              if (cResult[10] === tmp11) {
                let tmp23;
                if (cResult[11] === state) {
                  tmp23 = cResult[12];
                }
                return tmp23;
              }
            }
          }
          AppLauncherKeyboardDefault;
          const tmp27 = <tmp26 context={tmp11} chatInputRef={chatInputRef} onClose={cleanUp} transitionState={state} entrypoint={chatInputRef(10949).AppLauncherEntrypoint.TEXT} />;
          cResult[8] = chatInputRef;
          cResult[9] = cleanUp;
          cResult[10] = tmp11;
          cResult[11] = state;
          cResult[12] = tmp27;
          tmp23 = tmp27;
        } else if (chatInputRef(1631).KeyboardTypes.MEDIA === type) {
          if (cResult[13] === chatInputRef) {
            if (cResult[14] === cleanUp) {
              if (cResult[15] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
                let tmp19;
                if (cResult[16] === state) {
                  tmp19 = cResult[17];
                }
                return tmp19;
              }
            }
          }
          const tmp22 = jsx(MediaKeyboardDefault, { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state });
          cResult[13] = chatInputRef;
          cResult[14] = cleanUp;
          cResult[15] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
          cResult[16] = state;
          cResult[17] = tmp22;
          tmp19 = tmp22;
        } else if (chatInputRef(1631).KeyboardTypes.EXPRESSION === type) {
          if (cResult[18] === chatInputRef) {
            if (cResult[19] === cleanUp) {
              if (cResult[20] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
                let tmp15;
                if (cResult[21] === state) {
                  tmp15 = cResult[22];
                }
                return tmp15;
              }
            }
          }
          const tmp18 = jsx(ExpressionPickerKeyboardDefault, { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state });
          cResult[18] = chatInputRef;
          cResult[19] = cleanUp;
          cResult[20] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
          cResult[21] = state;
          cResult[22] = tmp18;
          tmp15 = tmp18;
        } else {
          return null;
        }
      }
    }
    return null;
  }
  const fn = function u() {
    let ref;
    if (!closure_1) {
      const obj = useBackPressHandler;
      return obj.subscribeToBackPress(() => {
        const current = ref.current;
        current.closeCustomKeyboard();
        return true;
      });
    }
  };
  const items = [chatInputRef, tmp4];
  cResult[0] = chatInputRef;
  cResult[1] = tmp4;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function PortalKeyboardRendererComponent(item) {
  let cleanUp;
  let closure_2;
  let state;
  item = item.item;
  const channelId = item.channelId;
  const chatInputRef = item.chatInputRef;
  const type = item.type;
  ({ state, cleanUp } = item);
  dependencyMap = undefined;
  let channel;
  let memo;
  let tmp = channelId;
  let tmp2 = dependencyMap;
  const tmp3 = state === channelId(4922).TransitionStates.YEETED;
  dependencyMap = tmp3;
  const items = [chatInputRef, tmp3];
  const layoutEffect = channel.useLayoutEffect(() => {
    let ref;
    if (!closure_2) {
      const obj = useBackPressHandler;
      return obj.subscribeToBackPress(() => {
        const current = ref.current;
        current.closeCustomKeyboard();
        return true;
      });
    }
  }, items);
  channel = memo.getChannel(channelId);
  const items1 = [channel, channelId];
  memo = channel.useMemo(() => {
    let FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    if (channelId !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items1);
  const items2 = [memo];
  const memo1 = channel.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = { channel: tmp, type: "channel" };
      const obj = { channel: tmp, type: "channel" };
    }
    return tmp2;
  }, items2);
  if (null != memo) {
    if (undefined !== memo1) {
      if (tmp(1631).KeyboardTypes.APP_LAUNCHER === type) {
        chatInputRef(11849);
        return <tmp14 context={memo1} chatInputRef={chatInputRef} onClose={cleanUp} transitionState={state} entrypoint={tmp(10949).AppLauncherEntrypoint.TEXT} />;
      } else if (tmp(1631).KeyboardTypes.MEDIA === type) {
        return jsx(chatInputRef(12050), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (tmp(1631).KeyboardTypes.EXPRESSION === type) {
        return jsx(chatInputRef(12092), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
}));
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;
