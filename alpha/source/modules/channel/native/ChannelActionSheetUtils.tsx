// Module ID: 10859
// Function ID: 10860
// Name: ChannelActionSheetUtils
// Dependencies: [5992, 7283, 5660, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10859 (ChannelActionSheetUtils)
import ToastUtils from "ToastUtils" /* 5660 */;
import ChannelUtils from "ChannelUtils" /* 5992 */;
import ClipboardUtils from "ClipboardUtils" /* 7283 */;
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
