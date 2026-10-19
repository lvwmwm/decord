// Module ID: 10643
// Function ID: 10644
// Name: ChannelActionSheetUtils
// Dependencies: [5514, 7162, 4903, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10643 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4903 */;
import ChannelUtils from "ChannelUtils" /* 5514 */;
import ClipboardUtils from "ClipboardUtils" /* 7162 */;
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
