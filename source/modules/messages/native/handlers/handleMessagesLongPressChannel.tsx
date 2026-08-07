// Module ID: 10989
// Function ID: 10990
// Name: handleMessagesLongPressChannel
// Dependencies: [4484, 10990, 2]
// Exports: handleMessagesLongPressChannel

// Module 10989 (handleMessagesLongPressChannel)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      let obj = require(4484) /* allowChannelAccess */;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: null, guildId: null, channelId: null, messageId: null };
      obj[0] = originalLink;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      importDefault(10990)(obj);
    }
  }
};
