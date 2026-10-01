// Module ID: 16477
// Function ID: 16478
// Name: guild_channels/ChannelTitle
// Dependencies: [19, 5018, 21, 4836, 576, 9580, 4832, 2]

// Module 16477 (guild_channels/ChannelTitle)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { muted: nativeDefault.colors.TEXT_MUTED, normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT };
let closure_5 = createStyles.createStyleProperties(obj);
const memoResult = react.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  const layout = unread.layout;
  const obj = muted(unread[5]);
  const layoutStyles = obj.getLayoutStyles(layout);
  let tmp2 = closure_5();
  const normal = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = resolvedUnreadSetting.useMemo(() => {
    let color = normal.normal;
    const tmp2 = muted;
    if (tmp2) {
      color = tmp.muted;
    } else {
      const tmp3 = unread && resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES || connected;
      if (tmp3) {
        color = tmp.unreadOrConnected;
      }
    }
    return { color, paddingRight: 4, flexShrink: 1 };
  }, items);
  const obj2 = { variant: layoutStyles.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: title };
  const Text = muted(unread[6]).Text;
  const tmp4 = normal;
  if (title == null) {
    title = "";
  }
  return tmp4(Text, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx");

export default memoResult;
