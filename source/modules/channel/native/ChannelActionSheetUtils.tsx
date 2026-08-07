// Module ID: 9659
// Function ID: 9660
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4484, 5696, 4001, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 9659 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4484) /* allowChannelAccess */.getChannelPermalink(guild_id, id);
  const obj = require(4484) /* allowChannelAccess */;
  require(5696) /* _copy */.copy(channelPermalink);
  const obj2 = require(5696) /* _copy */;
  require(4001) /* presentAddedFriendToast */.presentLinkCopied();
};
