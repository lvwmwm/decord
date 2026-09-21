// Module ID: 8281
// Function ID: 8282
// Name: RoleSubscriptionPurchaseSystemMessage
// Dependencies: [2041, 2063, 1074, 4988, 8218, 8255, 8256, 8250, 1400, 1397, 8220, 1115, 8222, 2]
// Exports: createRoleSubscriptionPurchaseSystemMessage

// Module 8281 (RoleSubscriptionPurchaseSystemMessage)
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import useMessageAuthor from "useMessageAuthor" /* 4988 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8218 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8220 */;
import createCommonMessageDefault from "createCommonMessage" /* 8222 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
const SystemChannelFlags = fn(1074).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    const author = message.author;
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const guild = GuildStore.getGuild(guildId);
    const guildMemberAvatar = useMessageAuthor.getMessageAuthor(message).guildMemberAvatar;
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        let tmp9 = null != guild;
        if (tmp9) {
          tmp9 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        }
        const tmp5Result = tmp5(8255);
        if (tmp5Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          const tmp5Result7 = tmp5(8256);
          const tmp5Result8 = tmp5(8250);
          const transformStickerResult = tmp5Result7.transformSticker(tmp5(8250).pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      if (null != guildId) {
        const obj3 = { userId: author.id, avatar: guildMemberAvatar, guildId };
        let guildMemberAvatarSource = tmp5(1397).getGuildMemberAvatarSource(obj3, author);
        const tmp5Result10 = tmp5(1397);
      }
      const obj4 = { action: "bindOpenRoleSubscriptionOverview", guildId, messageId: message.id, channelId: null, roleSubscriptionListingId: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj4.channelId = id;
      const roleSubscriptionData2 = message.roleSubscriptionData;
      let prop;
      if (roleSubscriptionData2 != null) {
        prop = roleSubscriptionData2.role_subscription_listing_id;
      }
      obj4.roleSubscriptionListingId = prop;
      const tmp17Result = tmp17(guildMemberAvatarSource);
      const obj5 = { username: messageAuthorWithProcessedColor.nick, guildId: null, usernameOnClickHandler: null, roleSubscriptionOnClickHandler: null, roleSubscriptionData: null };
      const obj6 = { content: null, totalMonthsSubscribed: null, username: null, avatarURL: null, sticker: null, stickerLabel: null, welcomeLabel: null };
      obj5.guildId = guildId;
      const obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle: tmp };
      obj5.usernameOnClickHandler = formatUsernameOnClickDefault(obj7);
      obj5.roleSubscriptionOnClickHandler = obj4;
      obj5.roleSubscriptionData = roleSubscriptionData;
      obj6.content = tmp5(8250).getRoleSubscriptionPurchaseSystemMessageContentMobile(obj5);
      obj6.totalMonthsSubscribed = roleSubscriptionData.total_months_subscribed;
      obj6.username = messageAuthorWithProcessedColor.nick;
      obj6.avatarURL = tmp17Result.uri;
      obj6.sticker = transformStickerResult;
      const tmp5Result11 = tmp5(8250);
      obj6.stickerLabel = tmp5(8250).getRoleSubscriptionPurchaseStickerCTA(message.id, false);
      const intl = tmp5(1115).intl;
      obj6.welcomeLabel = intl.string(tmp5(1115).t.piPHvY);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj6;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
