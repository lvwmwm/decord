// Module ID: 7792
// Function ID: 61866
// Name: createGiftIntentSystemMessage
// Dependencies: [4131, 689, 7793, 7687, 7801, 7670, 7673, 2]
// Exports: createGiftIntentSystemMessage

// Module 7792 (createGiftIntentSystemMessage)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3 = _createForOfIteratorHelperLoose.createNativeStyleProperties({ iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG });
let obj = { iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(7793) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const tmp3 = callback(theme);
    obj = {};
    const merged = Object.assign(importDefault(7687)(message));
    obj["giftIntentInfo"] = giftIntentEmbed;
    obj["ephemeralIndication"] = require(7801) /* createEphemeralIndication */.createEphemeralIndication(message);
    const obj3 = require(7801) /* createEphemeralIndication */;
    obj["iconUrl"] = require(7670) /* frozen */.getAssetUriForEmbed(importDefault(7673));
    obj["iconTintColor"] = tmp3.iconTintColor;
    obj["iconDividerColor"] = tmp3.iconDividerColor;
    return obj;
  }
};
