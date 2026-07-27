// Module ID: 7747
// Function ID: 61704
// Name: createGuildProductPurchaseSystemMessage
// Dependencies: [3769, 1348, 653, 4361, 7684, 1395, 1392, 7717, 7686, 1212, 7687, 2]
// Exports: createGuildProductPurchaseSystemMessage

// Module 7747 (createGuildProductPurchaseSystemMessage)
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
    let obj1 = require(4361) /* useNullableMessageAuthor */;
    const guildMemberAvatar = obj1.getMessageAuthor(message).guildMemberAvatar;
    let obj2 = require(7684) /* getMessageAuthorWithProcessedColor */;
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
      obj1.usernameOnClickHandler = importDefault(7686)(obj2);
      obj1.productName = product_name;
      obj.content = require(7717) /* getGuildProductPurchaseSystemMessageContentMobile */.getGuildProductPurchaseSystemMessageContentMobile(obj1);
      obj.totalMonthsSubscribed = 0;
      obj.username = messageAuthorWithProcessedColor.nick;
      obj.avatarURL = tmp9Result.uri;
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.welcomeLabel = intl.string(require(1212) /* getSystemLocale */.t.s2N5HS);
      const merged1 = Object.assign(importDefault(7687)(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
