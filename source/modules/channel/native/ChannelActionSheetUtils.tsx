// Module ID: 9771
// Function ID: 9772
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4526, 5795, 4061, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9771 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4526) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4526) /* allowChannelAccess */;
  require(5795) /* _copy */.copy(channelPermalink);
  const obj2 = require(5795) /* _copy */;
  require(4061) /* presentAddedFriendToast */.presentLinkCopied();
};
