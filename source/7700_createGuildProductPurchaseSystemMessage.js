// Module ID: 7700
// Function ID: 61374
// Name: createGuildProductPurchaseSystemMessage
// Dependencies: []
// Exports: createGuildProductPurchaseSystemMessage

// Module 7700 (createGuildProductPurchaseSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MessageTypes = arg1(dependencyMap[2]).MessageTypes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

export const createGuildProductPurchaseSystemMessage = function createGuildProductPurchaseSystemMessage(message) {
  let obj = {};
  const merged = Object.assign(message);
  obj["message"] = new closure_3(message.message);
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
    const channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      const guildId = channel.getGuildId();
    }
    let obj1 = arg1(dependencyMap[3]);
    const guildMemberAvatar = obj1.getMessageAuthor(message).guildMemberAvatar;
    let obj2 = arg1(dependencyMap[4]);
    const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
    arg1(dependencyMap[5]);
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = arg1(dependencyMap[6]).getGuildMemberAvatarSource(obj, author);
        const obj4 = arg1(dependencyMap[6]);
      }
      obj = {};
      const tmp9Result = tmp9(guildMemberAvatarSource);
      obj1 = { username: messageAuthorWithProcessedColor.nick };
      obj2 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj1.usernameOnClickHandler = importDefault(dependencyMap[8])(obj2);
      obj1.productName = product_name;
      obj.content = arg1(dependencyMap[7]).getGuildProductPurchaseSystemMessageContentMobile(obj1);
      obj.totalMonthsSubscribed = 0;
      obj.username = messageAuthorWithProcessedColor.nick;
      obj.avatarURL = tmp9Result.uri;
      const intl = arg1(dependencyMap[9]).intl;
      obj.welcomeLabel = intl.string(arg1(dependencyMap[9]).t.s2N5HS);
      const merged1 = Object.assign(importDefault(dependencyMap[10])(obj));
      return obj;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
