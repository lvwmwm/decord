// Module ID: 9994
// Function ID: 77275
// Name: handleMessagesLongPressChannel
// Dependencies: []
// Exports: handleMessagesLongPressChannel

// Module 9994 (handleMessagesLongPressChannel)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (null == originalLink) {
      let obj = require(dependencyMap[0]);
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: originalLink, guildId, channelId, messageId };
      importDefault(dependencyMap[1])(obj);
    }
  }
};
