// Module ID: 7752
// Function ID: 61567
// Name: createGiftIntentSystemMessage
// Dependencies: [4130, 689, 7753, 7652, 7761, 7635, 7638, 2]
// Exports: createGiftIntentSystemMessage

// Module 7752 (createGiftIntentSystemMessage)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3 = _createForOfIteratorHelperLoose.createNativeStyleProperties({ iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG });
let obj = { iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(7753) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const tmp3 = callback(theme);
    obj = {};
    const merged = Object.assign(importDefault(7652)(message));
    obj["giftIntentInfo"] = giftIntentEmbed;
    obj["ephemeralIndication"] = require(7761) /* createEphemeralIndication */.createEphemeralIndication(message);
    const obj3 = require(7761) /* createEphemeralIndication */;
    obj["iconUrl"] = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(7638));
    obj["iconTintColor"] = tmp3.iconTintColor;
    obj["iconDividerColor"] = tmp3.iconDividerColor;
    return obj;
  }
};
