// Module ID: 11143
// Function ID: 11144
// Name: ChannelActionSheetUtils
// Dependencies: [6210, 7451, 5868, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11143 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5868 */;
import ChannelUtils from "ChannelUtils" /* 6210 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
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
