// Module ID: 8403
// Function ID: 8404
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 4821, 4969, 587, 8404, 8308, 8263, 8408, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8403 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 587 */;
import createCommonMessageDefault from "createCommonMessage" /* 8308 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8404 */;
import AssetRegistryDefault from "AssetRegistry" /* 8408 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import createStyles from "createStyles" /* 4969 */;
import size from "module_2" /* 2 */;

let tmp3;
const renderer_EmbedUtils = tmp3(8263);
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
