// Module ID: 10920
// Function ID: 10921
// Name: ChannelActionSheetUtils
// Dependencies: [6293, 7877, 5951, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10920 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5951 */;
import ChannelUtils from "ChannelUtils" /* 6293 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
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
