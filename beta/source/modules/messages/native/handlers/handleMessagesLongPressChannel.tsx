// Module ID: 11863
// Function ID: 11864
// Name: handleMessagesLongPressChannel
// Dependencies: [4933, 11864, 2]
// Exports: handleMessagesLongPressChannel

// Module 11863 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4933 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      originalLink = ChannelUtils.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      const obj2 = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj2);
    }
  }
};
