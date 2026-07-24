// Module ID: 10229
// Function ID: 78964
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4312, 5490, 3830, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10229 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4312) /* _createForOfIteratorHelperLoose */.getChannelPermalink(guild_id, id);
  const obj = require(4312) /* _createForOfIteratorHelperLoose */;
  require(5490) /* _copy */.copy(channelPermalink);
  const obj2 = require(5490) /* _copy */;
  require(3830) /* presentAddedFriendToast */.presentLinkCopied();
};
