// Module ID: 7848
// Function ID: 7849
// Name: createGiftIntentSystemMessage
// Dependencies: [4189, 712, 7849, 7743, 7857, 7726, 7729, 2]
// Exports: createGiftIntentSystemMessage

// Module 7848 (createGiftIntentSystemMessage)
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(7849) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(importDefault(7743)(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(7857);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7726);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(importDefault(7729));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};
