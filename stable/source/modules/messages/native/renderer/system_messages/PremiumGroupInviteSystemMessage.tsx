// Module ID: 8151
// Function ID: 8152
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 1957, 4636, 576, 8152, 8068, 8050, 8156, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8151 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 576 */;
import createCommonMessageDefault from "createCommonMessage" /* 8068 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8152 */;
import _modDef8156 from "module_8156" /* 8156 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const renderer_EmbedUtils = tmp3(8050);
require = fn;
const createStyles = fn(4636);
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8156);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};
