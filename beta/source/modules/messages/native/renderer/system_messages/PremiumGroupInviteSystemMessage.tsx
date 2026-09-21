// Module ID: 8305
// Function ID: 8306
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 2041, 4756, 576, 8306, 8222, 8204, 8310, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8305 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 576 */;
import createCommonMessageDefault from "createCommonMessage" /* 8222 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8306 */;
import _modDef8310 from "module_8310" /* 8310 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const renderer_EmbedUtils = tmp3(8204);
require = fn;
const createStyles = fn(4756);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  ({ message, theme } = message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  const id = AuthenticationStore.getId();
  const premiumGroupInviteEmbed = PremiumGroupInviteEmbed.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj3.premiumGroupInviteInfo = premiumGroupInviteEmbed;
    const tmp7 = closure_5(theme);
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8310);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};
