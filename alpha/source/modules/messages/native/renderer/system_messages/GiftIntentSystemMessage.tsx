// Module ID: 14264
// Function ID: 14265
// Name: GiftIntentSystemMessage
// Dependencies: [4917, 575, 14265, 14198, 14266, 8680, 8457, 2]
// Exports: createGiftIntentSystemMessage

// Module 14264 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 575 */;
import AssetRegistryDefault from "AssetRegistry" /* 8457 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8680 */;
import createCommonMessageDefault from "createCommonMessage" /* 14198 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 14265 */;
import EphemeralIndication from "EphemeralIndication" /* 14266 */;
import createStyles from "createStyles" /* 4917 */;
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
