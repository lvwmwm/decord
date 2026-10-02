// Module ID: 10460
// Function ID: 10461
// Name: ChannelActionSheetUtils
// Dependencies: [4982, 6611, 4530, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10460 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4530 */;
import ChannelUtils from "ChannelUtils" /* 4982 */;
import ClipboardUtils from "ClipboardUtils" /* 6611 */;
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
