// Module ID: 10334
// Function ID: 10335
// Name: ChannelActionSheetUtils
// Dependencies: [5414, 6885, 4808, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10334 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4808 */;
import ChannelUtils from "ChannelUtils" /* 5414 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
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
