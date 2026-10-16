// Module ID: 10580
// Function ID: 10581
// Name: ChannelActionSheetUtils
// Dependencies: [5477, 7109, 4867, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10580 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4867 */;
import ChannelUtils from "ChannelUtils" /* 5477 */;
import ClipboardUtils from "ClipboardUtils" /* 7109 */;
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
