// Module ID: 11345
// Function ID: 11346
// Name: ChannelActionSheetUtils
// Dependencies: [6675, 7412, 5598, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11345 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5598 */;
import ChannelUtils from "ChannelUtils" /* 6675 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
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
