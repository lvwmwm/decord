// Module ID: 7728
// Function ID: 61656
// Name: createUserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: [1348, 1838, 7726, 7727, 7684, 7686, 1212, 4023, 7687, 2]
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 7728 (createUserPremiumGuildSubscriptionTierAchievedSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("createUserPremiumGuildSubscriptionSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  channel = channel.getChannel(message.getChannelId());
  if (null == channel) {
    return require(7726) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    guild = guild.getGuild(channel.getGuildId());
    if (null == guild) {
      return require(7726) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp18 = importDefault(7727)(message);
      const messageAuthorWithProcessedColor = require(7684) /* getMessageAuthorWithProcessedColor */.getMessageAuthorWithProcessedColor(message);
      let obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      const tmp21 = importDefault(7686)(obj);
      obj = {};
      if (tmp18 > 1) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp21, guildName: guild.name, newTierName: require(4023) /* _createForOfIteratorHelperLoose */.getTierName(TIER_1), numSubscriptions: tmp18 };
        let formatToPartsResult = intl2.formatToParts(require(1212) /* getSystemLocale */.t.GjNvr7, obj1);
        const obj5 = require(4023) /* _createForOfIteratorHelperLoose */;
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        let obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp21, guildName: guild.name };
        obj2 = require(4023) /* _createForOfIteratorHelperLoose */;
        obj2.newTierName = obj2.getTierName(TIER_1);
        formatToPartsResult = intl.formatToParts(require(1212) /* getSystemLocale */.t.oAYAP7, obj2);
      }
      obj.content = formatToPartsResult;
      const merged = Object.assign(importDefault(7687)(message));
      return obj;
    }
  }
};
