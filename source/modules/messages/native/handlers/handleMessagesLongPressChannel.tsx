// Module ID: 10187
// Function ID: 10188
// Name: handleMessagesLongPressChannel
// Dependencies: [4438, 9704, 2]
// Exports: handleMessagesLongPressChannel

// Module 10187 (handleMessagesLongPressChannel)
const result = require("set").fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      let obj = require(4438) /* allowChannelAccess */;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: null, guildId: null, channelId: null, messageId: null };
      obj[0] = originalLink;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      importDefault(9704)(obj);
    }
  }
};
