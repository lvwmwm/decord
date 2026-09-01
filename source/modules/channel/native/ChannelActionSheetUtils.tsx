// Module ID: 10692
// Function ID: 10693
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4666, 5981, 4193, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10692 (copyGuildChannelOrThreadLink)
import set from "set" /* 2 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4193 */;
import allowChannelAccess from "allowChannelAccess" /* 4666 */;
import _copy from "_copy" /* 5981 */;

const result = set.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  const obj = allowChannelAccess;
  _copy.copy(channelPermalink);
  const obj2 = _copy;
  presentAddedFriendToast.presentLinkCopied();
};
