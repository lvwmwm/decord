// Module ID: 7744
// Function ID: 61527
// Name: createFriendRequestAcceptedSystemMessage
// Dependencies: [7621, 653, 7756, 1212, 1920, 2, 7757, 1212, 2, 653, 664]
// Exports: createFriendRequestAcceptedSystemMessage

// Module 7744 (createFriendRequestAcceptedSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import module_664 from "module_664";

const result = module_664.fileFinishedImporting("modules/messages/native/renderer/system_messages/FriendRequestAcceptedSystemMessage.tsx");

export const createFriendRequestAcceptedSystemMessage = function createFriendRequestAcceptedSystemMessage(message) {
  message = message.message;
  const channel = channel.getChannel(message.channel_id);
  if (null != channel) {
    if (channel.isDM()) {
      const recipientId = channel.getRecipientId();
      const user = authStore.getUser(recipientId);
      const currentUser = authStore.getCurrentUser();
      if (null != user) {
        if (null != currentUser) {
          let str5 = arg1(dependencyMap[2]).getUserAuthorWithProcessedColor(user, channel);
          let obj = { userId: recipientId, message, author: str5, roleStyle: message.roleStyle };
          obj = { username: str5.nick };
          obj.usernameOnClick = importDefault(dependencyMap[3])(obj);
          const content = message.content;
          if (null != content) {
            if ("" !== content) {
              let obj1 = arg1(dependencyMap[4]);
              obj1 = { baseTextColor: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE };
              const intl2 = arg1(dependencyMap[6]).intl;
              const formatToParts2 = intl2.formatToParts;
              let t = arg1(dependencyMap[6]).t;
              if (tmp29) {
                t = {};
                const merged = Object.assign(obj);
                t["note"] = content;
                obj = { colorString: str5.colorString };
                str5 = "formattedNote";
                t["formattedNote"] = obj;
                let formatToParts2Result = formatToParts2(t.6pQebO, t);
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
          const intl = arg1(dependencyMap[6]).intl;
          const formatToParts = intl.formatToParts;
          t = arg1(dependencyMap[6]).t;
          if (message.author.id === currentUser.id) {
            let formatToPartsResult = formatToParts(t.REfFZs, obj);
          } else {
            formatToPartsResult = formatToParts(t.hyPOTm, obj);
          }
          const obj4 = { content: formatToPartsResult };
          const obj10 = arg1(dependencyMap[2]);
          obj4.iconUrl = arg1(dependencyMap[7]).getAssetUriForEmbed(importDefault(dependencyMap[8]));
          obj4.textColor = undefined;
          const merged2 = Object.assign(importDefault(dependencyMap[9])(message));
          return obj4;
        }
      }
      return null;
    }
  }
  return null;
};
