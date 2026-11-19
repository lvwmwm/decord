// Module ID: 8623
// Function ID: 8624
// Name: UserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: [4641, 4663, 8621, 8622, 8579, 8581, 1113, 8624, 8583, 2]
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 8623 (UserPremiumGuildSubscriptionTierAchievedSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8579 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8581 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8621 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8622 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8624 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildStore from "GuildStore" /* 4663 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
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
        const intl2 = tmp14(1113).intl;
        const formatToParts2 = intl2.formatToParts;
        const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14Result.getTierName(TIER_1), numSubscriptions: tmp13 };
        const GjNvr7 = tmp14(1113).t.GjNvr7;
        tmp14Result = GuildBoostingUtils;
        formatToParts2Result = formatToParts2(GjNvr7, obj2);
      } else {
        const intl = tmp14(1113).intl;
        const formatToParts = intl.formatToParts;
        const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: tmp14Result2.getTierName(TIER_1) };
        const oAYAP7 = tmp14(1113).t.oAYAP7;
        tmp14Result2 = GuildBoostingUtils;
        formatToParts2Result = formatToParts(oAYAP7, obj3);
      }
      const obj4 = { content: formatToParts2Result };
      const merged = Object.assign(tmp11(8583)(message));
      return obj4;
    }
  }
}
