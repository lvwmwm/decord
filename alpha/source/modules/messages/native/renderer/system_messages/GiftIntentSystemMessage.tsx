// Module ID: 8078
// Function ID: 8079
// Name: GiftIntentSystemMessage
// Dependencies: [5090, 587, 8079, 7955, 8086, 7863, 7866, 2]
// Exports: createGiftIntentSystemMessage

// Module 8078 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import AssetRegistryDefault from "AssetRegistry" /* 7866 */;
import createCommonMessageDefault from "createCommonMessage" /* 7955 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8079 */;
import EphemeralIndication from "EphemeralIndication" /* 8086 */;
import createStyles from "createStyles" /* 5090 */;
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
