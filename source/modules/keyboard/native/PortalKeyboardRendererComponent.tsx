// Module ID: 15320
// Function ID: 116559
// Dependencies: []

// Module 15320
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo(function PortalKeyboardRendererComponent(item) {
  let chatInputRef;
  let cleanUp;
  let state;
  let type;
  item = item.item;
  const channelId = item.channelId;
  const arg1 = channelId;
  ({ chatInputRef, type } = item);
  ({ state, cleanUp } = item);
  const channel = channel.getChannel(channelId);
  const importDefault = channel;
  const items = [channel, channelId];
  const memo = importAllResult.useMemo(() => {
    if (channelId !== channelId(memo[3]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
      let FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channel;
    } else {
      FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelId(memo[3]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
    }
    return FAKE_PLACEHOLDER_PRIVATE_CHANNEL;
  }, items);
  const dependencyMap = memo;
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
      if (arg1(dependencyMap[4]).KeyboardTypes.APP_LAUNCHER === type) {
        let obj = { context: memo1, chatInputRef, onClose: cleanUp, transitionState: state, entrypoint: arg1(dependencyMap[6]).AppLauncherEntrypoint.TEXT };
        return jsx(importDefault(dependencyMap[5]), obj);
      } else if (arg1(dependencyMap[4]).KeyboardTypes.MEDIA === type) {
        obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(importDefault(dependencyMap[7]), obj);
      } else if (arg1(dependencyMap[4]).KeyboardTypes.EXPRESSION === type) {
        obj = { channel: memo, chatInputRef, onClose: cleanUp, transitionState: state };
        return jsx(importDefault(dependencyMap[8]), obj);
      } else {
        return null;
      }
    }
  }
  return null;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/keyboard/native/PortalKeyboardRendererComponent.tsx");

export default memoResult;
