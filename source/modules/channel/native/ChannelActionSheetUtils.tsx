// Module ID: 10199
// Function ID: 78773
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4312, 5492, 3830, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10199 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4312) /* _createForOfIteratorHelperLoose */.getChannelPermalink(guild_id, id);
  const obj = require(4312) /* _createForOfIteratorHelperLoose */;
  require(5492) /* _copy */.copy(channelPermalink);
  const obj2 = require(5492) /* _copy */;
  require(3830) /* presentAddedFriendToast */.presentLinkCopied();
};
