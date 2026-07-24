// Module ID: 10041
// Function ID: 77551
// Name: handleMessagesLongPressChannel
// Dependencies: [4312, 9561, 2]
// Exports: handleMessagesLongPressChannel

// Module 10041 (handleMessagesLongPressChannel)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (null == originalLink) {
      let obj = require(4312) /* _createForOfIteratorHelperLoose */;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: originalLink, guildId, channelId, messageId };
      importDefault(9561)(obj);
    }
  }
};
