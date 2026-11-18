// Module ID: 13795
// Function ID: 13796
// Name: ChannelActionSheetUtils
// Dependencies: [5856, 7456, 5504, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 13795 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5504 */;
import ChannelUtils from "ChannelUtils" /* 5856 */;
import ClipboardUtils from "ClipboardUtils" /* 7456 */;
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
