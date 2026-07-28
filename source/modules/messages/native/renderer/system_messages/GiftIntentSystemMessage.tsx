// Module ID: 7828
// Function ID: 61957
// Name: createGiftIntentSystemMessage
// Dependencies: [4165, 689, 7829, 7723, 7837, 7706, 7709, 2]
// Exports: createGiftIntentSystemMessage

// Module 7828 (createGiftIntentSystemMessage)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3 = _createForOfIteratorHelperLoose.createNativeStyleProperties({ iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG });
let obj = { iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(7829) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const tmp3 = callback(theme);
    obj = {};
    const merged = Object.assign(importDefault(7723)(message));
    obj["giftIntentInfo"] = giftIntentEmbed;
    obj["ephemeralIndication"] = require(7837) /* createEphemeralIndication */.createEphemeralIndication(message);
    const obj3 = require(7837) /* createEphemeralIndication */;
    obj["iconUrl"] = require(7706) /* frozen */.getAssetUriForEmbed(importDefault(7709));
    obj["iconTintColor"] = tmp3.iconTintColor;
    obj["iconDividerColor"] = tmp3.iconDividerColor;
    return obj;
  }
};
