// Module ID: 10301
// Function ID: 10302
// Name: ChannelActionSheetUtils
// Dependencies: [5411, 6879, 4767, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10301 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4767 */;
import ChannelUtils from "ChannelUtils" /* 5411 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
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
