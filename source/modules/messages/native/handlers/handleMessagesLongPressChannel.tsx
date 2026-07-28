// Module ID: 10010
// Function ID: 77300
// Name: handleMessagesLongPressChannel
// Dependencies: [4347, 9522, 2]
// Exports: handleMessagesLongPressChannel

// Module 10010 (handleMessagesLongPressChannel)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (null == originalLink) {
      let obj = require(4347) /* _createForOfIteratorHelperLoose */;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: originalLink, guildId, channelId, messageId };
      importDefault(9522)(obj);
    }
  }
};
