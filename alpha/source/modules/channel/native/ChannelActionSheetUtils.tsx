// Module ID: 10983
// Function ID: 10984
// Name: ChannelActionSheetUtils
// Dependencies: [6356, 7943, 6014, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10983 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 6014 */;
import ChannelUtils from "ChannelUtils" /* 6356 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
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
