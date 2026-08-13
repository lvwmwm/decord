// Module ID: 9775
// Function ID: 9776
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4527, 5796, 4061, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9775 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4527) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4527) /* allowChannelAccess */;
  require(5796) /* _copy */.copy(channelPermalink);
  const obj2 = require(5796) /* _copy */;
  require(4061) /* presentAddedFriendToast */.presentLinkCopied();
};
