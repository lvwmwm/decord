// Module ID: 8007
// Function ID: 8008
// Name: createGiftIntentSystemMessage
// Dependencies: [4481, 709, 8008, 7895, 8016, 7877, 7880, 2]
// Exports: createGiftIntentSystemMessage

// Module 8007 (createGiftIntentSystemMessage)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import registerAssetDefault from "registerAsset" /* 7880 */;
import createCommonMessageDefault from "createCommonMessage" /* 7895 */;
import createGiftIntentEmbed from "createGiftIntentEmbed" /* 8008 */;
import createCacheKey from "createCacheKey" /* 4481 */;

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: ThemesDefault.colors.BACKGROUND_BRAND, iconDividerColor: ThemesDefault.colors.ICON_STRONG });
let obj = { iconTintColor: ThemesDefault.colors.BACKGROUND_BRAND, iconDividerColor: ThemesDefault.colors.ICON_STRONG };
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  let obj = createGiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(8016);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7877);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(registerAssetDefault);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};
