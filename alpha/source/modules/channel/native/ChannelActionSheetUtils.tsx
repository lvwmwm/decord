// Module ID: 11444
// Function ID: 11445
// Name: ChannelActionSheetUtils
// Dependencies: [6770, 7507, 5693, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 11444 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5693 */;
import ChannelUtils from "ChannelUtils" /* 6770 */;
import ClipboardUtils from "ClipboardUtils" /* 7507 */;
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
