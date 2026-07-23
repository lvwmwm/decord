// Module ID: 15445
// Function ID: 118776
// Dependencies: [31, 1348, 33, 5606, 1555, 11154, 8182, 15446, 15452, 2]

// Module 15445
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function PortalKeyboardRendererComponent(item) {
  let chatInputRef;
  let cleanUp;
  let state;
  let type;
  item = item.item;
  const channelId = item.channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  channel = channel.getChannel(channelId);
  const items = [channel, channelId];
  const memo = importAllResult.useMemo(() => {
    if (channelId !== channelId(memo[3]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelId(memo[3]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const items1 = [memo];
  const memo1 = importAllResult.useMemo(() => {
    let tmp;
    if (null != memo) {
      const obj = { channel: memo, type: "channel" };
      tmp = obj;
    }
    return tmp;
  }, items1);
  if (null != memo) {
    if (undefined !== memo1) {
      if (channelId(memo[4]).KeyboardTypes.APP_LAUNCHER === type) {
        let obj = { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: channelId(memo[6]).AppLauncherEntrypoint.TEXT };
        return jsx(channel(memo[5]), { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: channelId(memo[6]).AppLauncherEntrypoint.TEXT });
      } else if (channelId(memo[4]).KeyboardTypes.MEDIA === type) {
        obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(channel(memo[7]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else if (channelId(memo[4]).KeyboardTypes.EXPRESSION === type) {
        obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(channel(memo[8]), { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state });
      } else {
        return null;
      }
    }
  }
  return null;
});
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;
