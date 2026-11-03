// Module ID: 11114
// Function ID: 11115
// Name: ChannelActionSheetUtils
// Dependencies: [6166, 7478, 5831, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11114 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5831 */;
import ChannelUtils from "ChannelUtils" /* 6166 */;
import ClipboardUtils from "ClipboardUtils" /* 7478 */;
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
