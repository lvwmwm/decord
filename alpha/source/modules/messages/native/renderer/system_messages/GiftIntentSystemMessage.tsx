// Module ID: 9261
// Function ID: 9262
// Name: GiftIntentSystemMessage
// Dependencies: [5243, 575, 9262, 9126, 9269, 8588, 9107, 2]
// Exports: createGiftIntentSystemMessage

// Module 9261 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 575 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8588 */;
import AssetRegistryDefault from "AssetRegistry" /* 9107 */;
import createCommonMessageDefault from "createCommonMessage" /* 9126 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 9262 */;
import EphemeralIndication from "EphemeralIndication" /* 9269 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_3 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export function createGiftIntentSystemMessage(message) {
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
}
