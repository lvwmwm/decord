// Module ID: 8116
// Function ID: 8117
// Name: createGiftIntentSystemMessage
// Dependencies: [4302, 712, 8117, 8012, 8125, 7995, 7998, 2]
// Exports: createGiftIntentSystemMessage

// Module 8116 (createGiftIntentSystemMessage)
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(8117) /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(importDefault(8012)(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(8125);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7995);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(importDefault(7998));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};
