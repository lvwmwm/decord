// Module ID: 10621
// Function ID: 10622
// Name: ChannelActionSheetUtils
// Dependencies: [5011, 6806, 4557, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10621 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4557 */;
import ChannelUtils from "ChannelUtils" /* 5011 */;
import ClipboardUtils from "ClipboardUtils" /* 6806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
