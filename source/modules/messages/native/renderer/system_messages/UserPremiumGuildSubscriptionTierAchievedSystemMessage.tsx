// Module ID: 7685
// Function ID: 61339
// Name: createUserPremiumGuildSubscriptionTierAchievedSystemMessage
// Dependencies: []
// Exports: createUserPremiumGuildSubscriptionTierAchievedSystemMessage

// Module 7685 (createUserPremiumGuildSubscriptionTierAchievedSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  const channel = channel.getChannel(message.getChannelId());
  if (null == channel) {
    return TIER_1(dependencyMap[2]).createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    const guild = guild.getGuild(channel.getGuildId());
    if (null == guild) {
      return TIER_1(dependencyMap[2]).createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp18 = importDefault(dependencyMap[3])(message);
      const messageAuthorWithProcessedColor = TIER_1(dependencyMap[4]).getMessageAuthorWithProcessedColor(message);
      let obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      const tmp21 = importDefault(dependencyMap[5])(obj);
      obj = {};
      if (tmp18 > 1) {
        const intl2 = TIER_1(dependencyMap[6]).intl;
        const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp21, guildName: guild.name, newTierName: TIER_1(dependencyMap[7]).getTierName(TIER_1), numSubscriptions: tmp18 };
        let formatToPartsResult = intl2.formatToParts(TIER_1(dependencyMap[6]).t.GjNvr7, obj1);
        const obj5 = TIER_1(dependencyMap[7]);
      } else {
        const intl = TIER_1(dependencyMap[6]).intl;
        let obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp21, guildName: guild.name };
        obj2 = TIER_1(dependencyMap[7]);
        obj2.newTierName = obj2.getTierName(TIER_1);
        formatToPartsResult = intl.formatToParts(TIER_1(dependencyMap[6]).t.oAYAP7, obj2);
      }
      obj.content = formatToPartsResult;
      const merged = Object.assign(importDefault(dependencyMap[8])(message));
      return obj;
    }
  }
};
