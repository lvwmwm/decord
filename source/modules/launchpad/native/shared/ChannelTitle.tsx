// Module ID: 15548
// Function ID: 118651
// Dependencies: []

// Module 15548
const importAllResult = importAll(dependencyMap[0]);
const UnreadSetting = arg1(dependencyMap[1]).UnreadSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const obj2 = arg1(dependencyMap[3]);
let closure_6 = obj2.createStyleProperties({ muted: importDefault(dependencyMap[4]).colors.TEXT_MUTED, normal: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_TEXT });
const obj = { muted: importDefault(dependencyMap[4]).colors.TEXT_MUTED, normal: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: importDefault(dependencyMap[4]).colors.REDESIGN_CHANNEL_NAME_TEXT };
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  const arg1 = muted;
  unread = unread.unread;
  const importDefault = unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const dependencyMap = resolvedUnreadSetting;
  const connected = unread.connected;
  const tmp2 = callback();
  const UnreadSetting = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = connected.useMemo(() => {
    let unreadOrConnected = tmp2.normal;
    if (muted) {
      unreadOrConnected = tmp2.muted;
    } else {
      let tmp = unread;
      if (unread) {
        tmp = resolvedUnreadSetting === tmp2.ALL_MESSAGES;
      }
      if (!tmp) {
        tmp = connected;
      }
      if (tmp) {
        unreadOrConnected = tmp2.unreadOrConnected;
      }
    }
    const obj = { "Null": "c5c262e40462204afd9dba1d0529e9ea", "Null": "AttachmentIcon", "Null": "png", color: unreadOrConnected };
    return obj;
  }, items);
  const obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, variant: importDefault(dependencyMap[5])().channelName.text.variant, style: memo };
  let str = "";
  if (null != title) {
    str = title;
  }
  obj.children = str;
  return jsx(arg1(dependencyMap[6]).Text, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default memoResult;
