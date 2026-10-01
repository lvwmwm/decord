// Module ID: 10418
// Function ID: 10419
// Name: ChannelActionSheetUtils
// Dependencies: [4981, 6610, 4527, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10418 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4527 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const obj = ChannelUtils;
  const channelPermalink = obj.getChannelPermalink(guild_id, id);
  const obj2 = ClipboardUtils;
  obj2.copy(channelPermalink);
  const obj3 = ToastUtils;
  obj3.presentLinkCopied();
};
