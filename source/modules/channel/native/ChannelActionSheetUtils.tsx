// Module ID: 10220
// Function ID: 10221
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4372, 5543, 3889, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10220 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4372) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4372) /* allowChannelAccess */;
  require(5543) /* _copy */.copy(channelPermalink);
  const obj2 = require(5543) /* _copy */;
  require(3889) /* presentAddedFriendToast */.presentLinkCopied();
};
