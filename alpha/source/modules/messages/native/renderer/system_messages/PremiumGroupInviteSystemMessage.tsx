// Module ID: 8075
// Function ID: 8076
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 2065, 5092, 587, 8076, 7982, 7890, 8080, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8075 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 587 */;
import createCommonMessageDefault from "createCommonMessage" /* 7982 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8076 */;
import AssetRegistryDefault from "AssetRegistry" /* 8080 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let tmp3;
const renderer_EmbedUtils = tmp3(7890);
let obj = { iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  let theme;
  let tmp3Result;
  ({ message, theme } = message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  const id = AuthenticationStore.getId();
  const obj = PremiumGroupInviteEmbed;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const obj3 = { premiumGroupInviteInfo: premiumGroupInviteEmbed, iconUrl: tmp3Result.getAssetUriForEmbed(AssetRegistryDefault) };
    const tmp7 = closure_5(theme);
    const merged = Object.assign(createCommonMessageDefault(message));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    tmp3Result = renderer_EmbedUtils;
    return obj3;
  }
};
