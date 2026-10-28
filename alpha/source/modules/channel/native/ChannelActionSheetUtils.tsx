// Module ID: 10902
// Function ID: 10903
// Name: ChannelActionSheetUtils
// Dependencies: [6030, 7321, 5698, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10902 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5698 */;
import ChannelUtils from "ChannelUtils" /* 6030 */;
import ClipboardUtils from "ClipboardUtils" /* 7321 */;
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
