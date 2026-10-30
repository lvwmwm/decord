// Module ID: 12184
// Function ID: 12185
// Name: PortalKeyboardRendererComponent
// Dependencies: [19, 4858, 21, 5075, 6017, 7390, 1624, 12185, 11467, 12353, 12395, 2]

// Module 12184 (PortalKeyboardRendererComponent)
import Fragment from "Fragment" /* 21 */;
import useBackPressHandler from "useBackPressHandler" /* 6017 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7390 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const memoResult = react.memo(function PortalKeyboardRendererComponent(item) {
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
  const tmp3 = state === channelId(5075).TransitionStates.YEETED;
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
      if (tmp(1624).KeyboardTypes.APP_LAUNCHER === type) {
        chatInputRef(12185);
        return <tmp14 context={memo1} chatInputRef={chatInputRef} onClose={cleanUp} transitionState={state} entrypoint={tmp(11467).AppLauncherEntrypoint.TEXT} />;
      } else if (tmp(1624).KeyboardTypes.MEDIA === type) {
        return jsx(chatInputRef(12353), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (tmp(1624).KeyboardTypes.EXPRESSION === type) {
        return jsx(chatInputRef(12395), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;
