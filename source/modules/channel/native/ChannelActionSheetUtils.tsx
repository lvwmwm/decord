// Module ID: 9943
// Function ID: 9944
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4630, 5928, 4161, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9943 (copyGuildChannelOrThreadLink)
import set from "set" /* 2 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4161 */;
import allowChannelAccess from "allowChannelAccess" /* 4630 */;
import _copy from "_copy" /* 5928 */;

const result = set.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  const obj = allowChannelAccess;
  _copy.copy(channelPermalink);
  const obj2 = _copy;
  presentAddedFriendToast.presentLinkCopied();
};
