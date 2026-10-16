// Module ID: 8325
// Function ID: 8326
// Name: FriendRequestAcceptedSystemMessage
// Dependencies: [2068, 1392, 8199, 8201, 5153, 587, 1128, 8111, 8326, 8203, 2]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 8325 (FriendRequestAcceptedSystemMessage)
import nativeDefault from "native" /* 587 */;
import createStyles from "createStyles" /* 5153 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8111 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8199 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8201 */;
import AssetRegistryDefault from "AssetRegistry" /* 8326 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  let obj5;
  let obj7;
  let tmp18Result2;
  message = message.message;
  const roleStyle = message.roleStyle;
  const channel = ChannelStore.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = UserStore.getUser(recipientId);
      const currentUser = UserStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let formatToPartsResult;
          const obj9 = useAuthorWithProcessedColor;
          const userAuthorWithProcessedColor = obj9.getUserAuthorWithProcessedColor(user, channel);
          const obj = { userId: recipientId, message, author: userAuthorWithProcessedColor, roleStyle };
          const obj2 = { username: userAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj) };
          const content = message.content;
          if (null != content) {
            let tmp6;
            if ("" !== content) {
              let formatToParts2Result;
              const obj3 = { baseTextColor: nativeDefault.colors.TEXT_SUBTLE };
              const createNativeStyleProperties = createStyles.createNativeStyleProperties;
              createStyles;
              const baseTextColor = createNativeStyleProperties(obj3)(message.theme).baseTextColor;
              const intl2 = tmp18(1128).intl;
              const formatToParts2 = intl2.formatToParts;
              const t2 = tmp18(1128).t;
              if (message.author.id === currentUser.id) {
                const v6pQebO = t2["6pQebO"];
                const obj4 = { note: content, formattedNote: obj5 };
                const merged = Object.assign(obj2);
                obj5 = { colorString: userAuthorWithProcessedColor.colorString };
                formatToParts2Result = formatToParts2(v6pQebO, obj4);
              } else {
                const bNrwDM = t2.bNrwDM;
                const obj6 = { note: content, formattedNote: obj7 };
                const merged1 = Object.assign(obj2);
                obj7 = { colorString: userAuthorWithProcessedColor.colorString };
                formatToParts2Result = formatToParts2(bNrwDM, obj6);
              }
              formatToPartsResult = formatToParts2Result;
              tmp6 = baseTextColor;
            }
            const obj8 = { content: formatToPartsResult, iconUrl: tmp18Result2.getAssetUriForEmbed(AssetRegistryDefault), textColor: tmp6 };
            tmp18Result2 = renderer_EmbedUtils;
            const merged2 = Object.assign(tmp21(8203)(message));
            return obj8;
          }
          const intl = tmp18(1128).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp18(1128).t;
          if (message.author.id === currentUser.id) {
            formatToPartsResult = formatToParts(t.REfFZs, obj2);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj2);
          }
        }
      }
      return null;
    }
  }
  return null;
};
