// Module ID: 10314
// Function ID: 10315
// Name: ChannelActionSheetUtils
// Dependencies: [5410, 6872, 4765, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10314 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4765 */;
import ChannelUtils from "ChannelUtils" /* 5410 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
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
