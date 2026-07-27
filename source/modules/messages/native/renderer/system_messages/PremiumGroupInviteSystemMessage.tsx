// Module ID: 7769
// Function ID: 61755
// Name: createPremiumGroupInviteSystemMessage
// Dependencies: [1194, 1348, 4131, 689, 7770, 7687, 7670, 6571, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 7769 (createPremiumGroupInviteSystemMessage)
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
  let obj = require(7770) /* createPremiumGroupInviteEmbed */;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const tmp5 = _createForOfIteratorHelperLoose(theme);
    obj = {};
    const merged = Object.assign(importDefault(7687)(message));
    obj["premiumGroupInviteInfo"] = premiumGroupInviteEmbed;
    obj["iconUrl"] = require(7670) /* frozen */.getAssetUriForEmbed(importDefault(6571));
    obj["iconTintColor"] = tmp5.iconTintColor;
    obj["iconDividerColor"] = tmp5.iconDividerColor;
    return obj;
  }
};
