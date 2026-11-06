// Module ID: 11125
// Function ID: 11126
// Name: ChannelActionSheetUtils
// Dependencies: [6204, 7441, 5866, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11125 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5866 */;
import ChannelUtils from "ChannelUtils" /* 6204 */;
import ClipboardUtils from "ClipboardUtils" /* 7441 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export function copyGuildChannelOrThreadLink(guild_id, id) {
  const obj = ChannelUtils;
  const channelPermalink = obj.getChannelPermalink(guild_id, id);
  const obj2 = ClipboardUtils;
  obj2.copy(channelPermalink);
  const obj3 = ToastUtils;
  obj3.presentLinkCopied();
}
