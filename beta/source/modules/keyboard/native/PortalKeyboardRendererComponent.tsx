// Module ID: 16293
// Function ID: 16294
// Name: PortalKeyboardRendererComponent
// Dependencies: [19, 2045, 21, 6642, 1611, 11517, 8712, 16294, 16300, 2]

// Module 16293 (PortalKeyboardRendererComponent)
import Fragment from "Fragment" /* 21 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6642 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function PortalKeyboardRendererComponent(item) {
  let chatInputRef;
  let cleanUp;
  let state;
  let type;
  item = item.item;
  const channelId = item.channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  const channel = ChannelStore.getChannel(channelId);
  const items = [channel, channelId];
  const memo = react.useMemo(() => {
    let FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    if (channelId !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const items1 = [memo];
  const memo1 = react.useMemo(() => {
    let tmp2;
    if (null != memo) {
      tmp2 = { channel: tmp, type: "channel" };
      const obj = { channel: tmp, type: "channel" };
    }
    return tmp2;
  }, items1);
  if (null != memo) {
    if (undefined !== memo1) {
      if (channelId(memo[4]).KeyboardTypes.APP_LAUNCHER === type) {
        channel(memo[5]);
        return <tmp10 context={memo1} chatInputRef={chatInputRef} onClose={cleanUp} transitionState={state} entrypoint={channelId(memo[6]).AppLauncherEntrypoint.TEXT} />;
      } else if (channelId(memo[4]).KeyboardTypes.MEDIA === type) {
        return jsx(channel(memo[7]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (channelId(memo[4]).KeyboardTypes.EXPRESSION === type) {
        return jsx(channel(memo[8]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;
