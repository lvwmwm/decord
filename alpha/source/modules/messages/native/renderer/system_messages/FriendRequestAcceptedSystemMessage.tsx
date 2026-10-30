// Module ID: 8533
// Function ID: 8534
// Name: FriendRequestAcceptedSystemMessage
// Dependencies: [4858, 1384, 8410, 8412, 5009, 575, 1114, 8388, 8534, 8414, 2]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 8533 (FriendRequestAcceptedSystemMessage)
import nativeDefault from "native" /* 575 */;
import createStyles from "createStyles" /* 5009 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8388 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8410 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8412 */;
import AssetRegistryDefault from "AssetRegistry" /* 8534 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export function createFriendRequestAcceptedSystemMessage(message) {
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
              const intl2 = tmp18(1114).intl;
              const formatToParts2 = intl2.formatToParts;
              const t2 = tmp18(1114).t;
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
            const merged2 = Object.assign(tmp21(8414)(message));
            return obj8;
          }
          const intl = tmp18(1114).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp18(1114).t;
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
}
