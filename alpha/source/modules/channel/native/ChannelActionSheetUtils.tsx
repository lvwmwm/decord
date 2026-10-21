// Module ID: 10811
// Function ID: 10812
// Name: ChannelActionSheetUtils
// Dependencies: [5974, 7262, 5644, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10811 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5644 */;
import ChannelUtils from "ChannelUtils" /* 5974 */;
import ClipboardUtils from "ClipboardUtils" /* 7262 */;
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
