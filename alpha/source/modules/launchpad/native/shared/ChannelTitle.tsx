// Module ID: 18724
// Function ID: 18725
// Name: ChannelTitle
// Dependencies: [19, 6776, 21, 5014, 575, 18720, 5624, 2]

// Module 18724 (ChannelTitle)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReadStateConstants from "ReadStateConstants" /* 6776 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let obj = { muted: nativeDefault.colors.TEXT_MUTED, normal: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: nativeDefault.colors.REDESIGN_CHANNEL_NAME_TEXT };
let closure_6 = createStyles.createStyleProperties(obj);
const memoResult = react.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
  const connected = unread.connected;
  const tmp = unread(resolvedUnreadSetting[5])();
  let tmp2 = closure_6();
  const normal = tmp2;
  const items = [unread, tmp2, connected, muted, resolvedUnreadSetting];
  const memo = connected.useMemo(() => {
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
  const obj = { variant: tmp.channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo, children: title };
  const Text = muted(resolvedUnreadSetting[6]).Text;
  const tmp4 = jsx;
  if (title == null) {
    title = "";
  }
  return tmp4(Text, obj);
});
const result = size.fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default memoResult;
