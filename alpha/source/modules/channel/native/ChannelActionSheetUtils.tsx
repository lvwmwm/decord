// Module ID: 10583
// Function ID: 10584
// Name: ChannelActionSheetUtils
// Dependencies: [5476, 7107, 4867, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10583 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4867 */;
import ChannelUtils from "ChannelUtils" /* 5476 */;
import ClipboardUtils from "ClipboardUtils" /* 7107 */;
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
