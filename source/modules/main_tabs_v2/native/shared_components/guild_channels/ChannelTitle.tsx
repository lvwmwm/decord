// Module ID: 15228
// Function ID: 114972
// Dependencies: []

// Module 15228
const importAllResult = importAll(dependencyMap[0]);
const UnreadSetting = arg1(dependencyMap[1]).UnreadSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const obj2 = arg1(dependencyMap[3]);
let closure_5 = obj2.createStyleProperties({ muted: importDefault(dependencyMap[4]).colors.TEXT_MUTED, normal: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_TEXT });
const obj = { muted: importDefault(dependencyMap[4]).colors.TEXT_MUTED, normal: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_TEXT };
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  const arg1 = muted;
  unread = unread.unread;
  const dependencyMap = unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  const UnreadSetting = connected;
  let obj = arg1(dependencyMap[5]);
  const layoutStyles = obj.getLayoutStyles(unread.layout);
  const tmp2 = callback();
  const jsx = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = resolvedUnreadSetting.useMemo(() => {
    let unreadOrConnected = tmp2.normal;
    if (muted) {
      unreadOrConnected = tmp2.muted;
    } else {
      let tmp = unread;
      if (unread) {
        tmp = resolvedUnreadSetting === connected.ALL_MESSAGES;
      }
      if (!tmp) {
        tmp = connected;
      }
      if (tmp) {
        unreadOrConnected = tmp2.unreadOrConnected;
      }
    }
    const obj = { -1801050300: true, -179023775: true, -78029668: true, color: unreadOrConnected };
    return obj;
  }, items);
  obj = { -985534194: null, 1392510081: null, -1314149359: null, variant: layoutStyles.channelName.text.variant, style: memo };
  let str = "";
  if (null != title) {
    str = title;
  }
  obj.children = str;
  return jsx(arg1(dependencyMap[6]).Text, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx");

export default memoResult;
