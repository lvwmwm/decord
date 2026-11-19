// Module ID: 13777
// Function ID: 13778
// Name: ChannelActionSheetUtils
// Dependencies: [5827, 7426, 5473, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 13777 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5473 */;
import ChannelUtils from "ChannelUtils" /* 5827 */;
import ClipboardUtils from "ClipboardUtils" /* 7426 */;
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
