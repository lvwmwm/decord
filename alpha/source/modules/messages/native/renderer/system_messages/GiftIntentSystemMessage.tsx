// Module ID: 8322
// Function ID: 8323
// Name: GiftIntentSystemMessage
// Dependencies: [5151, 587, 8323, 8200, 8330, 8108, 8111, 2]
// Exports: createGiftIntentSystemMessage

// Module 8322 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8108 */;
import AssetRegistryDefault from "AssetRegistry" /* 8111 */;
import createCommonMessageDefault from "createCommonMessage" /* 8200 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8323 */;
import EphemeralIndication from "EphemeralIndication" /* 8330 */;
import createStyles from "createStyles" /* 5151 */;
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
