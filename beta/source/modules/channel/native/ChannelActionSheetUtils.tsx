// Module ID: 11298
// Function ID: 11299
// Name: ChannelActionSheetUtils
// Dependencies: [4935, 7468, 4489, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11298 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4489 */;
import ChannelUtils from "ChannelUtils" /* 4935 */;
import ClipboardUtils from "ClipboardUtils" /* 7468 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = ChannelUtils.getChannelPermalink(guild_id, id);
  ClipboardUtils.copy(channelPermalink);
  ToastUtils.presentLinkCopied();
};
