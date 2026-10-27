// Module ID: 8364
// Function ID: 8365
// Name: UserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: [4824, 4846, 8362, 8363, 8317, 8319, 1125, 8365, 8321, 2]
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 8364 (UserPremiumGuildSubscriptionTierAchievedSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8317 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8319 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8362 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8363 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8365 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildStore from "GuildStore" /* 4846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  let tmp14Result;
  let tmp14Result2;
  message = message.message;
  const roleStyle = message.roleStyle;
  const channel = ChannelStore.getChannel(message.getChannelId());
  if (null == channel) {
    const obj8 = UserPremiumGuildSubscriptionSystemMessage;
    return obj8.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
    if (null == guild) {
      const obj7 = UserPremiumGuildSubscriptionSystemMessage;
      return obj7.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      let formatToParts2Result;
      const tmp13 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
      const obj9 = useAuthorWithProcessedColor;
      const messageAuthorWithProcessedColor = obj9.getMessageAuthorWithProcessedColor(message);
      const obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
      const tmp16 = formatUsernameOnClickDefault(obj);
      const tmp11 = importDefault;
      if (tmp13 > 1) {
        const intl2 = tmp14(1125).intl;
        const formatToParts2 = intl2.formatToParts;
        const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14Result.getTierName(TIER_1), numSubscriptions: tmp13 };
        const GjNvr7 = tmp14(1125).t.GjNvr7;
        tmp14Result = GuildBoostingUtils;
        formatToParts2Result = formatToParts2(GjNvr7, obj2);
      } else {
        const intl = tmp14(1125).intl;
        const formatToParts = intl.formatToParts;
        const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14Result2.getTierName(TIER_1) };
        const oAYAP7 = tmp14(1125).t.oAYAP7;
        tmp14Result2 = GuildBoostingUtils;
        formatToParts2Result = formatToParts(oAYAP7, obj3);
      }
      const obj4 = { content: formatToParts2Result };
      const merged = Object.assign(tmp11(8321)(message));
      return obj4;
    }
  }
};
