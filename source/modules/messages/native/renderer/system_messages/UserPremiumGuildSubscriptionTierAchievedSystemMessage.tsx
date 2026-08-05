// Module ID: 7894
// Function ID: 7895
// Name: createUserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: [1372, 1862, 7892, 7893, 7851, 7853, 1236, 4147, 7854, 2]
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 7894 (createUserPremiumGuildSubscriptionTierAchievedSystemMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
const result = require("createUserPremiumGuildSubscriptionSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  channel = channel.getChannel(message.getChannelId());
  if (null == channel) {
    return require(7892) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    guild = guild.getGuild(channel.getGuildId());
    if (null == guild) {
      return require(7892) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp13 = importDefault(7893)(message);
      const messageAuthorWithProcessedColor = require(7851) /* getMessageAuthorWithProcessedColor */.getMessageAuthorWithProcessedColor(message);
      let obj = { message: null, author: null, roleStyle: null };
      obj[0] = message;
      obj[1] = messageAuthorWithProcessedColor;
      obj[2] = message.roleStyle;
      const tmp16 = importDefault(7853)(obj);
      if (tmp13 > 1) {
        const intl2 = tmp14(1236).intl;
        obj = { username: null, usernameOnClick: null, guildName: null, newTierName: null, numSubscriptions: null };
        obj[0] = messageAuthorWithProcessedColor.nick;
        obj[1] = tmp16;
        obj[2] = guild.name;
        let tmp14Result = tmp14(4147);
        obj[3] = tmp14Result.getTierName(TIER_1);
        obj[4] = tmp13;
        let formatToPartsResult = intl2.formatToParts(tmp14(1236).t.GjNvr7, obj);
      } else {
        const intl = tmp14(1236).intl;
        const obj1 = { username: null, usernameOnClick: null, guildName: null, newTierName: null };
        obj1[0] = messageAuthorWithProcessedColor.nick;
        obj1[1] = tmp16;
        obj1[2] = guild.name;
        tmp14Result = tmp14(4147);
        obj1[3] = tmp14Result.getTierName(TIER_1);
        formatToPartsResult = intl.formatToParts(tmp14(1236).t.oAYAP7, obj1);
      }
      const obj2 = { content: null };
      obj2[0] = formatToPartsResult;
      const merged = Object.assign(importDefault(7854)(message));
      return obj2;
    }
  }
};
