// Module ID: 13872
// Function ID: 13873
// Name: ChannelActionSheetUtils
// Dependencies: [5948, 7545, 5594, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 13872 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5594 */;
import ChannelUtils from "ChannelUtils" /* 5948 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
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
