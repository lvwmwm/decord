// Module ID: 7750
// Function ID: 61564
// Name: createFriendRequestAcceptedSystemMessage
// Dependencies: [1348, 1849, 7649, 7651, 4130, 689, 1212, 7635, 7751, 7652, 2]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 7750 (createFriendRequestAcceptedSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  message = message.message;
  channel = channel.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = authStore.getUser(recipientId);
      const currentUser = authStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let str5 = require(7649) /* getMessageAuthorWithProcessedColor */.getUserAuthorWithProcessedColor(user, channel);
          let obj = { userId: recipientId, message, author: str5, roleStyle: message.roleStyle };
          obj = { username: str5.nick };
          obj.usernameOnClick = importDefault(7651)(obj);
          const content = message.content;
          if (null != content) {
            if ("" !== content) {
              let obj1 = require(4130) /* _createForOfIteratorHelperLoose */;
              obj1 = { baseTextColor: importDefault(689).colors.TEXT_SUBTLE };
              const intl2 = require(1212) /* getSystemLocale */.intl;
              const formatToParts2 = intl2.formatToParts;
              let t = require(1212) /* getSystemLocale */.t;
              if (tmp29) {
                t = {};
                const merged = Object.assign(obj);
                t["note"] = content;
                obj = { colorString: str5.colorString };
                str5 = "formattedNote";
                t["formattedNote"] = obj;
                let formatToParts2Result = formatToParts2(t["6pQebO"], t);
              } else {
                const obj2 = {};
                const merged1 = Object.assign(obj);
                obj2["note"] = content;
                const obj3 = { colorString: `formattedNote`.colorString };
                obj2["formattedNote"] = obj3;
                formatToParts2Result = formatToParts2(t.bNrwDM, obj2);
              }
              const baseTextColor = obj1.createNativeStyleProperties(obj1)(message.theme).baseTextColor;
            }
          }
          const intl = require(1212) /* getSystemLocale */.intl;
          const formatToParts = intl.formatToParts;
          t = require(1212) /* getSystemLocale */.t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj);
          }
          const obj4 = { content: formatToPartsResult };
          const obj10 = require(7649) /* getMessageAuthorWithProcessedColor */;
          obj4.iconUrl = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(7751));
          obj4.textColor = undefined;
          const merged2 = Object.assign(importDefault(7652)(message));
          return obj4;
        }
      }
      return null;
    }
  }
  return null;
};
