// Module ID: 8392
// Function ID: 8393
// Name: RoleSubscriptionPurchaseSystemMessage
// Dependencies: [4824, 4846, 1084, 6367, 8317, 8356, 8357, 8348, 1417, 1414, 8319, 1125, 8321, 2]
// Exports: createRoleSubscriptionPurchaseSystemMessage

// Module 8392 (RoleSubscriptionPurchaseSystemMessage)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1417 */;
import useMessageAuthor from "useMessageAuthor" /* 6367 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8317 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8319 */;
import createCommonMessageDefault from "createCommonMessage" /* 8321 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8348 */;
import useIsStickerReplyEnabled from "useIsStickerReplyEnabled" /* 8356 */;
import transformSticker2 from "transformSticker" /* 8357 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildStore from "GuildStore" /* 4846 */;
import size from "module_2" /* 2 */;

const SystemChannelFlags = Constants.SystemChannelFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx");

export const createRoleSubscriptionPurchaseSystemMessage = function createRoleSubscriptionPurchaseSystemMessage(message) {
  let id;
  let intl;
  let obj7;
  let prop;
  let tmp5Result12;
  message = message.message;
  const roleSubscriptionData = message.roleSubscriptionData;
  if (null == roleSubscriptionData) {
    return null;
  } else {
    let transformStickerResult;
    const author = message.author;
    const channel = ChannelStore.getChannel(message.getChannelId());
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const guild = GuildStore.getGuild(guildId);
    const obj = useMessageAuthor;
    const guildMemberAvatar = obj.getMessageAuthor(message).guildMemberAvatar;
    const obj2 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj2.getMessageAuthorWithProcessedColor(message);
    if (null != guildId) {
      if (null != channel) {
        const tmp9 = null != guild && !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
        const tmp5Result = useIsStickerReplyEnabled;
        if (tmp5Result.computeIsStickerReplyEnabled(guildId, channel, message, tmp9)) {
          const transformSticker = transformSticker2.transformSticker;
          transformSticker2;
          const tmp5Result8 = GuildRoleSubscriptionSystemMessageUtils;
          transformStickerResult = transformSticker(tmp5Result8.pickRoleSubscriptionPurchaseSticker(message.id));
        }
      }
    }
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      let guildMemberAvatarSource;
      if (null != guildId) {
        const obj3 = { userId: author.id, avatar: guildMemberAvatar, guildId };
        const tmp5Result10 = AvatarUtils;
        guildMemberAvatarSource = tmp5Result10.getGuildMemberAvatarSource(obj3, author);
      }
      const obj4 = { action: "bindOpenRoleSubscriptionOverview", guildId, messageId: message.id, channelId: id, roleSubscriptionListingId: prop };
      id = undefined;
      const tmp18Result = tmp18(guildMemberAvatarSource);
      if (channel != null) {
        id = channel.id;
      }
      const roleSubscriptionData2 = message.roleSubscriptionData;
      prop = undefined;
      if (roleSubscriptionData2 != null) {
        prop = roleSubscriptionData2.role_subscription_listing_id;
      }
      const obj5 = { username: messageAuthorWithProcessedColor.nick, guildId, usernameOnClickHandler: formatUsernameOnClickDefault(obj7), roleSubscriptionOnClickHandler: obj4, roleSubscriptionData };
      const getRoleSubscriptionPurchaseSystemMessageContentMobile = GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageContentMobile;
      GuildRoleSubscriptionSystemMessageUtils;
      const obj6 = { content: getRoleSubscriptionPurchaseSystemMessageContentMobile(obj5), totalMonthsSubscribed: roleSubscriptionData.total_months_subscribed, username: messageAuthorWithProcessedColor.nick, avatarURL: tmp18Result.uri, sticker: transformStickerResult, stickerLabel: tmp5Result12.getRoleSubscriptionPurchaseStickerCTA(message.id, false), welcomeLabel: intl.string(intl2.t.piPHvY) };
      obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle: tmp };
      tmp5Result12 = GuildRoleSubscriptionSystemMessageUtils;
      intl = tmp5(1125).intl;
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj6;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
};
