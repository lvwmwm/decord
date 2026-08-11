// Module ID: 11061
// Function ID: 11062
// Name: handleMessagesLongPressChannel
// Dependencies: [4486, 11062, 2]
// Exports: handleMessagesLongPressChannel

// Module 11061 (handleMessagesLongPressChannel)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      let obj = require(4486) /* allowChannelAccess */;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: null, guildId: null, channelId: null, messageId: null };
      obj[0] = originalLink;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      importDefault(11062)(obj);
    }
  }
};
