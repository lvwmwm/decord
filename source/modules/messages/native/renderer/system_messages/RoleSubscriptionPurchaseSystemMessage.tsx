// Module ID: 7798
// Function ID: 61727
// Name: createRoleSubscriptionPurchaseSystemMessage
// Dependencies: [1348, 1838, 653, 4360, 7738, 7773, 7774, 7768, 1395, 1392, 7740, 1212, 7741, 2]
// Exports: createRoleSubscriptionPurchaseSystemMessage

// Module 7798 (createRoleSubscriptionPurchaseSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { SystemChannelFlags } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    const author = message.author;
    channel = channel.getChannel(message.getChannelId());
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    guild = guild.getGuild(guildId);
    let obj = require(4360) /* useNullableMessageAuthor */;
    const guildMemberAvatar = obj.getMessageAuthor(message).guildMemberAvatar;
    let obj1 = require(7738) /* getMessageAuthorWithProcessedColor */;
    const messageAuthorWithProcessedColor = obj1.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        let tmp9 = null != guild;
        if (tmp9) {
          tmp9 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        }
        let obj2 = require(7773) /* computeIsStickerReplyEnabled */;
        if (obj2.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          let obj3 = require(7774) /* transform */;
          const obj5 = require(7768) /* identityHook */;
          const transformStickerResult = obj3.transformSticker(require(7768) /* identityHook */.pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    require(1395) /* ensureAvatarSource */;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        obj = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = require(1392) /* getAvatarURL */.getGuildMemberAvatarSource(obj, author);
        const obj6 = require(1392) /* getAvatarURL */;
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
      obj2.usernameOnClickHandler = importDefault(7740)(obj3);
      obj2.roleSubscriptionOnClickHandler = obj;
      obj2.roleSubscriptionData = roleSubscriptionData;
      obj1.content = require(7768) /* identityHook */.getRoleSubscriptionPurchaseSystemMessageContentMobile(obj2);
      obj1.totalMonthsSubscribed = roleSubscriptionData.total_months_subscribed;
      obj1.username = messageAuthorWithProcessedColor.nick;
      obj1.avatarURL = tmp23Result.uri;
      obj1.sticker = transformStickerResult;
      const obj10 = require(7768) /* identityHook */;
      obj1.stickerLabel = require(7768) /* identityHook */.getRoleSubscriptionPurchaseStickerCTA(message.id, false);
      const intl = require(1212) /* getSystemLocale */.intl;
      obj1.welcomeLabel = intl.string(require(1212) /* getSystemLocale */.t.piPHvY);
      const merged = Object.assign(importDefault(7741)(message));
      return obj1;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
