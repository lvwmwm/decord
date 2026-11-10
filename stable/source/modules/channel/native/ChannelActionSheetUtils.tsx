// Module ID: 10981
// Function ID: 10982
// Name: ChannelActionSheetUtils
// Dependencies: [6046, 7358, 5711, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10981 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5711 */;
import ChannelUtils from "ChannelUtils" /* 6046 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
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
