// Module ID: 10937
// Function ID: 10938
// Name: ChannelActionSheetUtils
// Dependencies: [6034, 7345, 5700, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10937 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5700 */;
import ChannelUtils from "ChannelUtils" /* 6034 */;
import ClipboardUtils from "ClipboardUtils" /* 7345 */;
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
