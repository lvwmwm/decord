// Module ID: 15167
// Function ID: 15168
// Name: ChannelActionSheetUtils
// Dependencies: [6354, 7953, 6008, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 15167 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 6008 */;
import ChannelUtils from "ChannelUtils" /* 6354 */;
import ClipboardUtils from "ClipboardUtils" /* 7953 */;
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
