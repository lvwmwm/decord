// Module ID: 14918
// Function ID: 112351
// Dependencies: []

// Module 14918
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UnreadSetting = arg1(dependencyMap[4]).UnreadSetting;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = {};
obj = { marginVertical: arg1(dependencyMap[3]).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.container = obj;
let closure_8 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let selected = guildId.selected;
  let importDefault;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4, closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const directoryChannelIds = directoryChannelIds.getDirectoryChannelIds(guildId);
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = channel.getChannel(directoryChannelIds[0]);
    }
    return channel;
  });
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  importDefault = id;
  if (!selected) {
    selected = id === guildId.selectedChannelId;
  }
  const items1 = [guildId, id];
  [][0] = id;
  const callback = importAllResult.useCallback(() => {
    guildId(closure_2[9]).transitionToGuild(guildId, id);
  }, items1);
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { onPress: callback, onLongPress: tmp5, style: tmp.container, accessible: true, accessibilityRole: "button" };
    obj = { channel: stateFromStores };
    obj.accessibilityLabel = importDefault(dependencyMap[12])(obj);
    const obj1 = { selected };
    obj.accessibilityState = obj1;
    obj.channel = stateFromStores;
    obj.selected = selected;
    obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
    tmp6 = jsx(importDefault(dependencyMap[11]), obj);
    const tmp10 = importDefault(dependencyMap[11]);
  }
  return tmp6;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_sidebar/native/DirectoryChannel.tsx");

export default memoResult;
