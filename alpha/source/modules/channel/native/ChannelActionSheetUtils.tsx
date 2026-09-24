// Module ID: 11309
// Function ID: 11310
// Name: ChannelActionSheetUtils
// Dependencies: [4974, 7522, 4522, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11309 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4522 */;
import ChannelUtils from "ChannelUtils" /* 4974 */;
import ClipboardUtils from "ClipboardUtils" /* 7522 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
