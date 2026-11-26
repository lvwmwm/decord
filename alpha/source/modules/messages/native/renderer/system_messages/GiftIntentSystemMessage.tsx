// Module ID: 14439
// Function ID: 14440
// Name: GiftIntentSystemMessage
// Dependencies: [5043, 575, 14440, 14373, 14441, 8821, 8598, 2]
// Exports: createGiftIntentSystemMessage

// Module 14439 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 575 */;
import AssetRegistryDefault from "AssetRegistry" /* 8598 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8821 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 14440 */;
import EphemeralIndication from "EphemeralIndication" /* 14441 */;
import createStyles from "createStyles" /* 5043 */;
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
