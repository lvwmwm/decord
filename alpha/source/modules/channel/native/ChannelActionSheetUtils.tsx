// Module ID: 11499
// Function ID: 11500
// Name: ChannelActionSheetUtils
// Dependencies: [6801, 7538, 5724, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11499 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5724 */;
import ChannelUtils from "ChannelUtils" /* 6801 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
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
