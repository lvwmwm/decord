// Module ID: 9612
// Function ID: 9613
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4437, 5623, 3955, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9612 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4437) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4437) /* allowChannelAccess */;
  require(5623) /* _copy */.copy(channelPermalink);
  const obj2 = require(5623) /* _copy */;
  require(3955) /* presentAddedFriendToast */.presentLinkCopied();
};
