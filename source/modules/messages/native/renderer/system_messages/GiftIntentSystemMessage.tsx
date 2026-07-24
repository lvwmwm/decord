// Module ID: 7845
// Function ID: 61894
// Name: createGiftIntentSystemMessage
// Dependencies: [4130, 689, 7846, 7741, 7854, 7724, 7727, 2]
// Exports: createGiftIntentSystemMessage

// Module 7845 (createGiftIntentSystemMessage)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3 = _createForOfIteratorHelperLoose.createNativeStyleProperties({ iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG });
let obj = { iconTintColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, iconDividerColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(7846) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const tmp3 = callback(theme);
    obj = {};
    const merged = Object.assign(importDefault(7741)(message));
    obj["giftIntentInfo"] = giftIntentEmbed;
    obj["ephemeralIndication"] = require(7854) /* createEphemeralIndication */.createEphemeralIndication(message);
    const obj3 = require(7854) /* createEphemeralIndication */;
    obj["iconUrl"] = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7727));
    obj["iconTintColor"] = tmp3.iconTintColor;
    obj["iconDividerColor"] = tmp3.iconDividerColor;
    return obj;
  }
};
