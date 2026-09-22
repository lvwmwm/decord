// Module ID: 8109
// Function ID: 8110
// Name: UserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: [1957, 1979, 8107, 8108, 8064, 8066, 1114, 4530, 8068, 2]
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 8109 (UserPremiumGuildSubscriptionTierAchievedSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8064 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8066 */;
import createCommonMessageDefault from "createCommonMessage" /* 8068 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8107 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8108 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

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
        const intl2 = tmp14(1114).intl;
        const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14(4530).getTierName(TIER_1), numSubscriptions: tmp13 };
        let formatToPartsResult = intl2.formatToParts(tmp14(1114).t.GjNvr7, obj2);
        const tmp14Result = tmp14(4530);
      } else {
        const intl = tmp14(1114).intl;
        const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14(4530).getTierName(TIER_1) };
        formatToPartsResult = intl.formatToParts(tmp14(1114).t.oAYAP7, obj3);
        const tmp14Result2 = tmp14(4530);
      }
      const obj4 = { content: formatToPartsResult };
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj4;
    }
  }
};
