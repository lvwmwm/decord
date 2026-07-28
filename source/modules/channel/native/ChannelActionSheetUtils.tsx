// Module ID: 10203
// Function ID: 78733
// Name: copyGuildChannelOrThreadLink
// Dependencies: [4347, 5525, 3865, 2]
// Exports: copyGuildChannelOrThreadLink

// Module 10203 (copyGuildChannelOrThreadLink)
const result = require("presentAddedFriendToast").fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(4347) /* _createForOfIteratorHelperLoose */.getChannelPermalink(guild_id, id);
  const obj = require(4347) /* _createForOfIteratorHelperLoose */;
  require(5525) /* _copy */.copy(channelPermalink);
  const obj2 = require(5525) /* _copy */;
  require(3865) /* presentAddedFriendToast */.presentLinkCopied();
};
