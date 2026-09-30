// Module ID: 7643
// Function ID: 7644
// Name: UserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: [2045, 2067, 7641, 7642, 7597, 7599, 1115, 4758, 7601, 2]
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 7643 (UserPremiumGuildSubscriptionTierAchievedSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7597 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7599 */;
import createCommonMessageDefault from "createCommonMessage" /* 7601 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 7641 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 7642 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.getChannelId());
  if (null == channel) {
    return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
    if (null == guild) {
      return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp13 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
      const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
      const obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      const tmp16 = formatUsernameOnClickDefault(obj);
      if (tmp13 > 1) {
        const intl2 = tmp14(1115).intl;
        const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14(4758).getTierName(TIER_1), numSubscriptions: tmp13 };
        let formatToPartsResult = intl2.formatToParts(tmp14(1115).t.GjNvr7, obj2);
        const tmp14Result = tmp14(4758);
      } else {
        const intl = tmp14(1115).intl;
        const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14(4758).getTierName(TIER_1) };
        formatToPartsResult = intl.formatToParts(tmp14(1115).t.oAYAP7, obj3);
        const tmp14Result2 = tmp14(4758);
      }
      const obj4 = { content: formatToPartsResult };
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj4;
    }
  }
};
