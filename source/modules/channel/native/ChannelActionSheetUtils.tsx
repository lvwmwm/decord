// Module ID: 9725
// Function ID: 9726
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4486, 5756, 4001, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9725 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4486) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4486) /* allowChannelAccess */;
  require(5756) /* _copy */.copy(channelPermalink);
  const obj2 = require(5756) /* _copy */;
  require(4001) /* presentAddedFriendToast */.presentLinkCopied();
};
