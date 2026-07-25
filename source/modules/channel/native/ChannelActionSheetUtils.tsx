// Module ID: 10162
// Function ID: 78599
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4313, 5490, 3831, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10162 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4313) /* _createForOfIteratorHelperLoose */.getChannelPermalink(guild_id, id);
  const obj = require(4313) /* _createForOfIteratorHelperLoose */;
  require(5490) /* _copy */.copy(channelPermalink);
  const obj2 = require(5490) /* _copy */;
  require(3831) /* presentAddedFriendToast */.presentLinkCopied();
};
