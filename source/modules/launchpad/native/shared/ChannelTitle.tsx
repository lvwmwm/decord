// Module ID: 15665
// Function ID: 120824
// Dependencies: [31, 4326, 33, 4130, 689, 15659, 4126, 2]

// Module 15665
import importAllResult from "result";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyleProperties({ muted: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, normal: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHANNEL_NAME_TEXT });
let obj = { muted: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, normal: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, unreadOrConnected: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHANNEL_NAME_TEXT };
const memoResult = importAllResult.memo(function ChannelTitle(unread) {
  let muted;
  let title;
  ({ title, muted } = unread);
  unread = unread.unread;
  const resolvedUnreadSetting = unread.resolvedUnreadSetting;
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
    const obj = { color: unreadOrConnected, paddingRight: 4, flexShrink: 1 };
    return obj;
  }, items);
  let obj = { variant: unread(resolvedUnreadSetting[5])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo };
  let str = "";
  if (null != title) {
    str = title;
  }
  obj.children = str;
  return jsx(muted(resolvedUnreadSetting[6]).Text, { variant: unread(resolvedUnreadSetting[5])().channelName.text.variant, lineClamp: 1, maxFontSizeMultiplier: 1.75, style: memo });
});
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/ChannelTitle.tsx");

export default memoResult;
