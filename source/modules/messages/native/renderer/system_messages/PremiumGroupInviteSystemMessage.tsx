// Module ID: 7733
// Function ID: 61496
// Name: createPremiumGroupInviteSystemMessage
// Dependencies: [1194, 1348, 4130, 689, 7734, 7652, 7635, 7738, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 7733 (createPremiumGroupInviteSystemMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { iconTintColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  channel = channel.getChannel(message.getChannelId());
  id = id.getId();
  let obj = require(7734) /* createPremiumGroupInviteEmbed */;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const tmp5 = _createForOfIteratorHelperLoose(theme);
    obj = {};
    const merged = Object.assign(importDefault(7652)(message));
    obj["premiumGroupInviteInfo"] = premiumGroupInviteEmbed;
    obj["iconUrl"] = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(7738));
    obj["iconTintColor"] = tmp5.iconTintColor;
    obj["iconDividerColor"] = tmp5.iconDividerColor;
    return obj;
  }
};
