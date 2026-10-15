// Module ID: 10568
// Function ID: 10569
// Name: ChannelActionSheetUtils
// Dependencies: [5474, 7105, 4864, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10568 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 4864 */;
import ChannelUtils from "ChannelUtils" /* 5474 */;
import ClipboardUtils from "ClipboardUtils" /* 7105 */;
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
