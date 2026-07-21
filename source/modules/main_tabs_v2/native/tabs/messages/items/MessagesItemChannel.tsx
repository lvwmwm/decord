// Module ID: 14774
// Function ID: 111379
// Name: getMessagesItemChannelSizes
// Dependencies: []
// Exports: getMessagesItemChannelSizes

// Module 14774 (getMessagesItemChannelSizes)
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function MessagesItemChannel(arg0) {
  let isGradientTheme;
  let placeholderHeight;
  let row;
  ({ channelId: closure_0, placeholderHeight } = arg0);
  ({ isGradientTheme, row } = arg0);
  let obj = arg1(dependencyMap[6]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  let isPrivateResult;
  if (null != stateFromStores) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    obj = { channel: stateFromStores, height: placeholderHeight, isGradientTheme };
    let tmp5 = jsx(importDefault(dependencyMap[5]), obj);
  } else {
    obj = { height: placeholderHeight, row };
    tmp5 = jsx(importDefault(dependencyMap[7]), obj);
  }
  return tmp5;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export default memoResult;
export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  let obj = arg1(dependencyMap[3]);
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const scaleTextLineHeightResult1 = arg1(dependencyMap[3]).scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = importDefault(dependencyMap[4]).space.PX_16;
  const PX_32 = importDefault(dependencyMap[4]).space.PX_32;
  obj = { avatar: PX_32 };
  const sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  obj.height = sum + arg1(dependencyMap[5]).MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
  obj.label = scaleTextLineHeightResult;
  obj.labelSecondary = scaleTextLineHeightResult1;
  obj.padding = PX_16;
  return obj;
};
