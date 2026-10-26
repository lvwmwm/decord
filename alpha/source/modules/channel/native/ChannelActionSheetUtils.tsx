// Module ID: 10863
// Function ID: 10864
// Name: ChannelActionSheetUtils
// Dependencies: [5994, 7285, 5662, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10863 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5662 */;
import ChannelUtils from "ChannelUtils" /* 5994 */;
import ClipboardUtils from "ClipboardUtils" /* 7285 */;
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
