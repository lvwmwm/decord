// Module ID: 7712
// Function ID: 7713
// Name: FriendRequestAcceptedSystemMessage
// Dependencies: [2045, 1372, 7597, 7599, 4866, 576, 1115, 7583, 7713, 7601, 2]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 7712 (FriendRequestAcceptedSystemMessage)
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7583 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7597 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7599 */;
import _modDef7713 from "module_7713" /* 7713 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = UserStore.getUser(recipientId);
      const currentUser = UserStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let colorString = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
          const obj = { userId: recipientId, message, author: colorString, roleStyle: message.roleStyle };
          let obj2 = { username: colorString.nick, usernameOnClick: formatUsernameOnClickDefault(obj) };
          let content = message.content;
          if (null != content) {
            if ("" !== content) {
              const obj3 = { baseTextColor: tmp17(576).colors.TEXT_SUBTLE };
              const intl2 = tmp15(1115).intl;
              const formatToParts2 = intl2.formatToParts;
              let t1 = tmp15(1115).t;
              if (tmp18) {
                t1 = {};
                obj2 = Object.assign(obj2);
                t1.note = content;
                content = { colorString: null };
                colorString = colorString.colorString;
                content.colorString = colorString;
                t1.formattedNote = content;
                let formatToParts2Result = formatToParts2(t1["6pQebO"], t1);
              } else {
                const obj4 = {};
                const merged = Object.assign(obj2);
                obj4.note = content;
                const obj5 = { colorString: colorString.colorString };
                obj4.formattedNote = obj5;
                formatToParts2Result = formatToParts2(t1.bNrwDM, obj4);
              }
              const baseTextColor = tmp15(4866).createNativeStyleProperties(obj3)(message.theme).baseTextColor;
              const tmp15Result = tmp15(4866);
            }
          }
          const intl = tmp15(1115).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp15(1115).t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj2);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj2);
          }
          const obj6 = { content: formatToPartsResult, iconUrl: null, textColor: null };
          obj6.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7713);
          obj6.textColor = undefined;
          const merged1 = Object.assign(tmp17(7601)(message));
          return obj6;
        }
      }
      return null;
    }
  }
  return null;
};
