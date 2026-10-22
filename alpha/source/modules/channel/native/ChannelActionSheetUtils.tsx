// Module ID: 10836
// Function ID: 10837
// Name: ChannelActionSheetUtils
// Dependencies: [5980, 7270, 5648, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10836 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5648 */;
import ChannelUtils from "ChannelUtils" /* 5980 */;
import ClipboardUtils from "ClipboardUtils" /* 7270 */;
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
