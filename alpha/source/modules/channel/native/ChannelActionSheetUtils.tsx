// Module ID: 10667
// Function ID: 10668
// Name: ChannelActionSheetUtils
// Dependencies: [5952, 7234, 5624, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10667 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5624 */;
import ChannelUtils from "ChannelUtils" /* 5952 */;
import ClipboardUtils from "ClipboardUtils" /* 7234 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const obj = ChannelUtils;
  const channelPermalink = obj.getChannelPermalink(guild_id, id);
  const obj2 = ClipboardUtils;
  obj2.copy(channelPermalink);
  const obj3 = ToastUtils;
  obj3.presentLinkCopied();
};
