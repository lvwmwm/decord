// Module ID: 13746
// Function ID: 13747
// Name: ChannelActionSheetUtils
// Dependencies: [5829, 7425, 5475, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 13746 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5475 */;
import ChannelUtils from "ChannelUtils" /* 5829 */;
import ClipboardUtils from "ClipboardUtils" /* 7425 */;
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
