// Module ID: 9970
// Function ID: 77170
// Name: handleMessagesLongPressChannel
// Dependencies: [4313, 9482, 2]
// Exports: handleMessagesLongPressChannel

// Module 9970 (handleMessagesLongPressChannel)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (null == originalLink) {
      let obj = require(4313) /* _createForOfIteratorHelperLoose */;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: originalLink, guildId, channelId, messageId };
      importDefault(9482)(obj);
    }
  }
};
