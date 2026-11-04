// Module ID: 11162
// Function ID: 11163
// Name: ChannelActionSheetUtils
// Dependencies: [6181, 7494, 5845, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11162 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5845 */;
import ChannelUtils from "ChannelUtils" /* 6181 */;
import ClipboardUtils from "ClipboardUtils" /* 7494 */;
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
