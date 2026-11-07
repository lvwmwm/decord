// Module ID: 11111
// Function ID: 11112
// Name: ChannelActionSheetUtils
// Dependencies: [6178, 7418, 5836, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11111 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5836 */;
import ChannelUtils from "ChannelUtils" /* 6178 */;
import ClipboardUtils from "ClipboardUtils" /* 7418 */;
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
