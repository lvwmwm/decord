// Module ID: 11120
// Function ID: 11121
// Name: ChannelActionSheetUtils
// Dependencies: [6180, 7421, 5838, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11120 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5838 */;
import ChannelUtils from "ChannelUtils" /* 6180 */;
import ClipboardUtils from "ClipboardUtils" /* 7421 */;
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
