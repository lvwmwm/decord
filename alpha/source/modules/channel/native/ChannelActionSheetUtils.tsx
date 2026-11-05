// Module ID: 11170
// Function ID: 11171
// Name: ChannelActionSheetUtils
// Dependencies: [6184, 7496, 5848, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11170 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5848 */;
import ChannelUtils from "ChannelUtils" /* 6184 */;
import ClipboardUtils from "ClipboardUtils" /* 7496 */;
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
