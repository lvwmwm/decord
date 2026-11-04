// Module ID: 10895
// Function ID: 10896
// Name: ChannelActionSheetUtils
// Dependencies: [6026, 7317, 5694, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10895 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5694 */;
import ChannelUtils from "ChannelUtils" /* 6026 */;
import ClipboardUtils from "ClipboardUtils" /* 7317 */;
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
