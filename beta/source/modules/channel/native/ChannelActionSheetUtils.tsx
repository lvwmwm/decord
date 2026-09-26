// Module ID: 11250
// Function ID: 11251
// Name: ChannelActionSheetUtils
// Dependencies: [4933, 7466, 4485, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11250 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4485 */;
import ChannelUtils from "ChannelUtils" /* 4933 */;
import ClipboardUtils from "ClipboardUtils" /* 7466 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
