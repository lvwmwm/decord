// Module ID: 14376
// Function ID: 14377
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 4861, 5012, 575, 14377, 14321, 8779, 9596, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 14376 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 575 */;
import AssetRegistryDefault from "AssetRegistry" /* 9596 */;
import createCommonMessageDefault from "createCommonMessage" /* 14321 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 14377 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let tmp3;
const renderer_EmbedUtils = tmp3(8779);
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
