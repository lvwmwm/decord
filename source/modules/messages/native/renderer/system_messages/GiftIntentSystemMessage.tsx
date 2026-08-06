// Module ID: 8099
// Function ID: 8100
// Name: createGiftIntentSystemMessage
// Dependencies: [4285, 712, 8100, 7995, 8108, 7978, 7981, 2]
// Exports: createGiftIntentSystemMessage

// Module 8099 (createGiftIntentSystemMessage)
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(8100) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(importDefault(7995)(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(8108);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7978);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(importDefault(7981));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};
