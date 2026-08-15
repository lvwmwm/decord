// Module ID: 9995
// Function ID: 9996
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4979, 7167, 4093, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9995 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4979) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4979) /* allowChannelAccess */;
  require(7167) /* _copy */.copy(channelPermalink);
  const obj2 = require(7167) /* _copy */;
  require(4093) /* presentAddedFriendToast */.presentLinkCopied();
};
