// Module ID: 10867
// Function ID: 10868
// Name: ChannelActionSheetUtils
// Dependencies: [5995, 7287, 5663, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10867 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5663 */;
import ChannelUtils from "ChannelUtils" /* 5995 */;
import ClipboardUtils from "ClipboardUtils" /* 7287 */;
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
