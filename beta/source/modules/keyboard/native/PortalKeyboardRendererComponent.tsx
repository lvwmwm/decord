// Module ID: 16991
// Function ID: 16992
// Name: PortalKeyboardRendererComponent
// Dependencies: [19, 2045, 21, 558, 568, 7500, 1614, 12201, 9551, 16992, 16998, 2]

// Module 16991 (PortalKeyboardRendererComponent)
import c from "c" /* 568 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7500 */;
import AppLauncherKeyboardDefault from "AppLauncherKeyboard" /* 12201 */;
import MediaKeyboardDefault from "MediaKeyboard" /* 16992 */;
import ExpressionPickerKeyboardDefault from "ExpressionPickerKeyboard" /* 16998 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ item, state, cleanUp } = arg0);
  ({ channelId, chatInputRef, type } = item);
  if (cResult[0] !== channelId) {
    const channel = ChannelStore.getChannel(channelId);
    cResult[0] = channelId;
    cResult[1] = channel;
    let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
  } else {
    FAKE_PLACEHOLDER_PRIVATE_CHANNEL = cResult[1];
  }
  if (channelId === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    FAKE_PLACEHOLDER_PRIVATE_CHANNEL = tmp(7500).FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }
  if (cResult[2] !== FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
    let tmp8;
    if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
      const obj2 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, type: "channel" };
      tmp8 = obj2;
    }
    cResult[2] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (null != FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
    if (undefined !== tmp6) {
      if (tmp(1614).KeyboardTypes.APP_LAUNCHER === type) {
        if (cResult[4] === chatInputRef) {
          if (cResult[5] === cleanUp) {
            if (cResult[6] === tmp6) {
              if (cResult[7] === state) {
                let tmp17 = cResult[8];
              }
              return tmp17;
            }
          }
        }
        const obj3 = { context: tmp6, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp(9551).AppLauncherEntrypoint.TEXT };
        const tmp21 = jsx(AppLauncherKeyboardDefault, { context: tmp6, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp(9551).AppLauncherEntrypoint.TEXT });
        cResult[4] = chatInputRef;
        cResult[5] = cleanUp;
        cResult[6] = tmp6;
        cResult[7] = state;
        cResult[8] = tmp21;
        tmp17 = tmp21;
      } else if (tmp(1614).KeyboardTypes.MEDIA === type) {
        if (cResult[9] === chatInputRef) {
          if (cResult[10] === cleanUp) {
            if (cResult[11] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
              if (cResult[12] === state) {
                let tmp13 = cResult[13];
              }
              return tmp13;
            }
          }
        }
        const obj4 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state };
        const tmp16 = jsx(MediaKeyboardDefault, { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state });
        cResult[9] = chatInputRef;
        cResult[10] = cleanUp;
        cResult[11] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
        cResult[12] = state;
        cResult[13] = tmp16;
        tmp13 = tmp16;
      } else if (tmp(1614).KeyboardTypes.EXPRESSION === type) {
        if (cResult[14] === chatInputRef) {
          if (cResult[15] === cleanUp) {
            if (cResult[16] === FAKE_PLACEHOLDER_PRIVATE_CHANNEL) {
              if (cResult[17] === state) {
                let tmp9 = cResult[18];
              }
              return tmp9;
            }
          }
        }
        const obj5 = { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state };
        const tmp12 = jsx(ExpressionPickerKeyboardDefault, { channel: FAKE_PLACEHOLDER_PRIVATE_CHANNEL, chatInputRef, onClose: cleanUp, transitionState: state });
        cResult[14] = chatInputRef;
        cResult[15] = cleanUp;
        cResult[16] = FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
        cResult[17] = state;
        cResult[18] = tmp12;
        tmp9 = tmp12;
      } else {
        return null;
      }
    }
  }
  return null;
}) : ((item) => {
  item = item.item;
  const channelId = item.channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  const channel = ChannelStore.getChannel(channelId);
  const items = [channel, channelId];
  const memo = noop.useMemo(() => {
    if (channelId !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const items1 = [memo];
  const memo1 = noop.useMemo(() => {
    let tmp2;
    if (null != memo) {
      const obj = { channel: tmp, type: "channel" };
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  if (null != memo) {
    if (undefined !== memo1) {
      if (channelId(memo[6]).KeyboardTypes.APP_LAUNCHER === type) {
        const obj2 = { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp11(tmp12[8]).AppLauncherEntrypoint.TEXT };
        return jsx(channel(tmp12[7]), { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: tmp11(tmp12[8]).AppLauncherEntrypoint.TEXT });
      } else if (tmp11(tmp12[6]).KeyboardTypes.MEDIA === type) {
        const obj3 = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(channel(tmp12[9]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (tmp11(tmp12[6]).KeyboardTypes.EXPRESSION === type) {
        let obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(channel(tmp12[10]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
}));
