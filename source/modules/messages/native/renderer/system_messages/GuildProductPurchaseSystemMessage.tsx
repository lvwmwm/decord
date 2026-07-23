// Module ID: 7711
// Function ID: 61445
// Name: createGuildProductPurchaseSystemMessage
// Dependencies: [3768, 1348, 653, 4360, 7649, 1395, 1392, 7681, 7651, 1212, 7652, 2]
// Exports: createGuildProductPurchaseSystemMessage

// Module 7711 (createGuildProductPurchaseSystemMessage)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MessageTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

export const createGuildProductPurchaseSystemMessage = function createGuildProductPurchaseSystemMessage(message) {
  let obj = {};
  const merged = Object.assign(message);
  obj["message"] = new _callSuper(message.message);
  obj.message.type = MessageTypes.ROLE_SUBSCRIPTION_PURCHASE;
  const purchaseNotification = obj.message.purchaseNotification;
  let product_name;
  if (null != purchaseNotification) {
    const guild_product_purchase = purchaseNotification.guild_product_purchase;
    if (null != guild_product_purchase) {
      product_name = guild_product_purchase.product_name;
    }
  }
  if (null == product_name) {
    return null;
  } else {
    message = obj.message;
    const author = message.author;
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      const guildId = channel.getGuildId();
    }
    let obj1 = require(4360) /* useNullableMessageAuthor */;
    const guildMemberAvatar = obj1.getMessageAuthor(message).guildMemberAvatar;
    let obj2 = require(7649) /* getMessageAuthorWithProcessedColor */;
    const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
    require(1395) /* ensureAvatarSource */;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = require(1392) /* getAvatarURL */.getGuildMemberAvatarSource(obj, author);
        const obj4 = require(1392) /* getAvatarURL */;
      }
      obj = {};
      const tmp9Result = tmp9(guildMemberAvatarSource);
      obj1 = { username: messageAuthorWithProcessedColor.nick };
      obj2 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj1.usernameOnClickHandler = importDefault(7651)(obj2);
      obj1.productName = product_name;
      obj.content = require(7681) /* getGuildProductPurchaseSystemMessageContentMobile */.getGuildProductPurchaseSystemMessageContentMobile(obj1);
      obj.totalMonthsSubscribed = 0;
      obj.username = messageAuthorWithProcessedColor.nick;
      obj.avatarURL = tmp9Result.uri;
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.welcomeLabel = intl.string(require(1212) /* getSystemLocale */.t.s2N5HS);
      const merged1 = Object.assign(importDefault(7652)(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
