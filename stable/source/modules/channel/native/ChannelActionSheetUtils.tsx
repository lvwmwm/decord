// Module ID: 10336
// Function ID: 10337
// Name: ChannelActionSheetUtils
// Dependencies: [5414, 6886, 4808, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10336 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4808 */;
import ChannelUtils from "ChannelUtils" /* 5414 */;
import ClipboardUtils from "ClipboardUtils" /* 6886 */;
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
