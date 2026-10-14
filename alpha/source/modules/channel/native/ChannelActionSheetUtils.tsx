// Module ID: 10345
// Function ID: 10346
// Name: ChannelActionSheetUtils
// Dependencies: [5419, 6891, 4810, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10345 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4810 */;
import ChannelUtils from "ChannelUtils" /* 5419 */;
import ClipboardUtils from "ClipboardUtils" /* 6891 */;
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
