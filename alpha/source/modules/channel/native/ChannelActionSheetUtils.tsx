// Module ID: 10962
// Function ID: 10963
// Name: ChannelActionSheetUtils
// Dependencies: [6041, 7352, 5706, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10962 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5706 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const obj = ChannelUtils;
  const channelPermalink = obj.getChannelPermalink(guild_id, id);
  const obj2 = ClipboardUtils;
  obj2.copy(channelPermalink);
  const obj3 = ToastUtils;
  obj3.presentLinkCopied();
}
