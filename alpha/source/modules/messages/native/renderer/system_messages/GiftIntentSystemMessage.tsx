// Module ID: 8105
// Function ID: 8106
// Name: GiftIntentSystemMessage
// Dependencies: [5092, 587, 8106, 7983, 8113, 7891, 7894, 2]
// Exports: createGiftIntentSystemMessage

// Module 8105 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7891 */;
import AssetRegistryDefault from "AssetRegistry" /* 7894 */;
import createCommonMessageDefault from "createCommonMessage" /* 7983 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8106 */;
import EphemeralIndication from "EphemeralIndication" /* 8113 */;
import createStyles from "createStyles" /* 5092 */;
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
