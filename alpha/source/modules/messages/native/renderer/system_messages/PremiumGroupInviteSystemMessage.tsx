// Module ID: 14435
// Function ID: 14436
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 4892, 5043, 575, 14436, 14380, 8822, 9639, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 14435 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 575 */;
import AssetRegistryDefault from "AssetRegistry" /* 9639 */;
import createCommonMessageDefault from "createCommonMessage" /* 14380 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 14436 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let tmp3;
const renderer_EmbedUtils = tmp3(8822);
let obj = { iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export function createPremiumGroupInviteSystemMessage(message) {
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
}
