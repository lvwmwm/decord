// Module ID: 8057
// Function ID: 8058
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 2064, 5091, 587, 8058, 7964, 7872, 8062, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8057 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 587 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8058 */;
import AssetRegistryDefault from "AssetRegistry" /* 8062 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let tmp3;
const renderer_EmbedUtils = tmp3(7872);
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
