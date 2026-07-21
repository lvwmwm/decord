// Module ID: 14935
// Function ID: 112447
// Name: handlePress
// Dependencies: []

// Module 14935 (handlePress)
function handlePress() {
  let obj = importDefault(dependencyMap[6]);
  obj = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD" };
  const intl = arg1(dependencyMap[7]).intl;
  obj.content = intl.string(arg1(dependencyMap[7]).t./ZjyYE);
  obj.icon = importDefault(dependencyMap[8]);
  obj.open(obj);
}
const importAllResult = importAll(dependencyMap[0]);
const UnreadSetting = arg1(dependencyMap[2]).UnreadSetting;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = {};
obj = { marginVertical: arg1(dependencyMap[1]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.container = obj;
let closure_6 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = callback();
  const callback = importAllResult.useCallback(() => {
    const result = channel(closure_2[10]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true };
  const tmp2 = importDefault(dependencyMap[9])(channel);
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[7]).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(importDefault(dependencyMap[11]), obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default memoResult;
