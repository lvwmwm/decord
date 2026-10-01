// Module ID: 7517
// Function ID: 7518
// Name: FriendRequestAcceptedSystemMessage
// Dependencies: [2045, 1372, 7402, 7404, 4836, 576, 1115, 7388, 7518, 7406, 2]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 7517 (FriendRequestAcceptedSystemMessage)
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4836 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7388 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7402 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7404 */;
import AssetRegistryDefault from "AssetRegistry" /* 7518 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
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
              const intl2 = tmp18(1115).intl;
              const formatToParts2 = intl2.formatToParts;
              const t2 = tmp18(1115).t;
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
            const merged2 = Object.assign(tmp21(7406)(message));
            return obj8;
          }
          const intl = tmp18(1115).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp18(1115).t;
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
