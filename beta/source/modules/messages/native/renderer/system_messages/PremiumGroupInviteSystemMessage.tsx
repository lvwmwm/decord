// Module ID: 8310
// Function ID: 8311
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 2045, 4758, 580, 8311, 8227, 8209, 8315, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8310 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 580 */;
import createCommonMessageDefault from "createCommonMessage" /* 8227 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8311 */;
import _modDef8315 from "module_8315" /* 8315 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const renderer_EmbedUtils = tmp3(8209);
require = fn;
const createStyles = fn(4758);
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8315);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};
