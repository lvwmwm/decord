// Module ID: 11262
// Function ID: 11263
// Name: ChannelActionSheetUtils
// Dependencies: [4903, 7436, 4457, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11262 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4457 */;
import ChannelUtils from "ChannelUtils" /* 4903 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
