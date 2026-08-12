// Module ID: 8217
// Function ID: 8218
// Name: createGiftIntentSystemMessage
// Dependencies: [4344, 712, 8218, 8113, 8226, 8096, 8099, 2]
// Exports: createGiftIntentSystemMessage

// Module 8217 (createGiftIntentSystemMessage)
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(8218) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(importDefault(8113)(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(8226);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(8096);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(importDefault(8099));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};
