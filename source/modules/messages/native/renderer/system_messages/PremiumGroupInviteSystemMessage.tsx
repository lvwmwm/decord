// Module ID: 7726
// Function ID: 61437
// Name: createPremiumGroupInviteSystemMessage
// Dependencies: []
// Exports: createPremiumGroupInviteSystemMessage

// Module 7726 (createPremiumGroupInviteSystemMessage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let obj = arg1(dependencyMap[2]);
obj = { iconTintColor: importDefault(dependencyMap[3]).colors.ICON_STRONG, iconDividerColor: importDefault(dependencyMap[3]).colors.ICON_STRONG };
let closure_5 = obj.createNativeStyleProperties(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  const channel = channel.getChannel(message.getChannelId());
  const id = id.getId();
  let obj = arg1(dependencyMap[4]);
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const tmp5 = callback(theme);
    obj = {};
    const merged = Object.assign(importDefault(dependencyMap[5])(message));
    obj["premiumGroupInviteInfo"] = premiumGroupInviteEmbed;
    obj["iconUrl"] = arg1(dependencyMap[6]).getAssetUriForEmbed(importDefault(dependencyMap[7]));
    obj["iconTintColor"] = tmp5.iconTintColor;
    obj["iconDividerColor"] = tmp5.iconDividerColor;
    return obj;
  }
};
