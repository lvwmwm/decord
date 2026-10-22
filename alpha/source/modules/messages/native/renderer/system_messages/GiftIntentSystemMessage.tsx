// Module ID: 8432
// Function ID: 8433
// Name: GiftIntentSystemMessage
// Dependencies: [4969, 587, 8433, 8308, 8440, 8263, 8266, 2]
// Exports: createGiftIntentSystemMessage

// Module 8432 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8263 */;
import AssetRegistryDefault from "AssetRegistry" /* 8266 */;
import createCommonMessageDefault from "createCommonMessage" /* 8308 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8433 */;
import EphemeralIndication from "EphemeralIndication" /* 8440 */;
import createStyles from "createStyles" /* 4969 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_3 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  let tmpResult;
  let tmpResult2;
  ({ message, theme } = message);
  const obj = GiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const obj3 = { giftIntentInfo: giftIntentEmbed, ephemeralIndication: tmpResult.createEphemeralIndication(message), iconUrl: tmpResult2.getAssetUriForEmbed(AssetRegistryDefault) };
    const tmp5 = closure_3(theme);
    const merged = Object.assign(createCommonMessageDefault(message));
    tmpResult = EphemeralIndication;
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    tmpResult2 = renderer_EmbedUtils;
    return obj3;
  }
};
