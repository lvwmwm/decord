// Module ID: 7702
// Function ID: 61382
// Name: createRoleSubscriptionPurchaseSystemMessage
// Dependencies: []
// Exports: createRoleSubscriptionPurchaseSystemMessage

// Module 7702 (createRoleSubscriptionPurchaseSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SystemChannelFlags = arg1(dependencyMap[2]).SystemChannelFlags;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    const author = message.author;
    const channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const guild = guild.getGuild(guildId);
    let obj = arg1(dependencyMap[3]);
    const guildMemberAvatar = obj.getMessageAuthor(message).guildMemberAvatar;
    let obj1 = arg1(dependencyMap[4]);
    const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        let tmp9 = null != guild;
        if (tmp9) {
          tmp9 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        }
        let obj2 = arg1(dependencyMap[5]);
        if (obj2.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          let obj3 = arg1(dependencyMap[6]);
          const obj5 = arg1(dependencyMap[7]);
          const transformStickerResult = obj3.transformSticker(arg1(dependencyMap[7]).pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    arg1(dependencyMap[8]);
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = arg1(dependencyMap[9]).getGuildMemberAvatarSource(obj, author);
        const obj6 = arg1(dependencyMap[9]);
      }
      obj = { action: "bindOpenRoleSubscriptionOverview", guildId, messageId: message.id };
      let id;
      if (null != channel) {
        id = channel.id;
      }
      obj.channelId = id;
      const roleSubscriptionData2 = message.roleSubscriptionData;
      let prop;
      if (null != roleSubscriptionData2) {
        prop = roleSubscriptionData2.role_subscription_listing_id;
      }
      obj.roleSubscriptionListingId = prop;
      obj1 = {};
      const tmp23Result = tmp23(guildMemberAvatarSource);
      obj2 = { username: messageAuthorWithProcessedColor.nick };
      let tmp32;
      if (null != guildId) {
        tmp32 = guildId;
      }
      obj2.guildId = tmp32;
      obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle: tmp };
      obj2.usernameOnClickHandler = importDefault(dependencyMap[10])(obj3);
      obj2.roleSubscriptionOnClickHandler = obj;
      obj2.roleSubscriptionData = roleSubscriptionData;
      obj1.content = arg1(dependencyMap[7]).getRoleSubscriptionPurchaseSystemMessageContentMobile(obj2);
      obj1.totalMonthsSubscribed = roleSubscriptionData.total_months_subscribed;
      obj1.username = messageAuthorWithProcessedColor.nick;
      obj1.avatarURL = tmp23Result.uri;
      obj1.sticker = transformStickerResult;
      const obj10 = arg1(dependencyMap[7]);
      obj1.stickerLabel = arg1(dependencyMap[7]).getRoleSubscriptionPurchaseStickerCTA(message.id, false);
      const intl = arg1(dependencyMap[11]).intl;
      obj1.welcomeLabel = intl.string(arg1(dependencyMap[11]).t.piPHvY);
      const merged = Object.assign(importDefault(dependencyMap[12])(message));
      return obj1;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
