// Module ID: 11814
// Function ID: 11815
// Name: handleMessagesLongPressChannel
// Dependencies: [6184, 10367, 2]
// Exports: handleMessagesLongPressChannel

// Module 11814 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6184 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10367 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export function handleMessagesLongPressChannel(data) {
  let channelId;
  let guildId;
  let messageId;
  let originalLink;
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      const obj = ChannelUtils;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      const obj2 = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj2);
    }
  }
}
