// Module ID: 10886
// Function ID: 10887
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4673, 7130, 4193, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10886 (copyGuildChannelOrThreadLink)
import set from "set" /* 2 */;
import presentAddedFriendToast from "presentAddedFriendToast" /* 4193 */;
import allowChannelAccess from "allowChannelAccess" /* 4673 */;
import _copy from "_copy" /* 7130 */;

const result = set.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = allowChannelAccess.getChannelPermalink(guild_id, id);
  const obj = allowChannelAccess;
  _copy.copy(channelPermalink);
  const obj2 = _copy;
  presentAddedFriendToast.presentLinkCopied();
};
