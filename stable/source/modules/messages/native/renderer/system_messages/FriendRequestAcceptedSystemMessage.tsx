// Module ID: 8179
// Function ID: 8180
// Name: FriendRequestAcceptedSystemMessage
// Dependencies: [1957, 1371, 8064, 8066, 4636, 576, 1114, 8050, 8180, 8068, 2]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 8179 (FriendRequestAcceptedSystemMessage)
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8050 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8064 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8066 */;
import _modDef8180 from "module_8180" /* 8180 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

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
              const intl2 = tmp15(1114).intl;
              const formatToParts2 = intl2.formatToParts;
              let t1 = tmp15(1114).t;
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
              const baseTextColor = tmp15(4636).createNativeStyleProperties(obj3)(message.theme).baseTextColor;
              const tmp15Result = tmp15(4636);
            }
          }
          const intl = tmp15(1114).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp15(1114).t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj2);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj2);
          }
          const obj6 = { content: formatToPartsResult, iconUrl: null, textColor: null };
          obj6.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8180);
          obj6.textColor = undefined;
          const merged1 = Object.assign(tmp17(8068)(message));
          return obj6;
        }
      }
      return null;
    }
  }
  return null;
};
