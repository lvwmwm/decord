// Module ID: 7851
// Function ID: 7852
// Name: createGiftIntentSystemMessage
// Dependencies: [4189, 712, 7852, 7746, 7860, 7729, 7732, 2]
// Exports: createGiftIntentSystemMessage

// Module 7851 (createGiftIntentSystemMessage)
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(7852) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(importDefault(7746)(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(7860);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7729);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(importDefault(7732));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};
