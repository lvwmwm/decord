// Module ID: 9643
// Function ID: 9644
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4467, 5677, 3984, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9643 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4467) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4467) /* allowChannelAccess */;
  require(5677) /* _copy */.copy(channelPermalink);
  const obj2 = require(5677) /* _copy */;
  require(3984) /* presentAddedFriendToast */.presentLinkCopied();
};
