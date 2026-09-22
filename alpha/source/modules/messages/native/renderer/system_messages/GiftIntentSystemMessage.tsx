// Module ID: 8338
// Function ID: 8339
// Name: GiftIntentSystemMessage
// Dependencies: [4757, 576, 8339, 8226, 8347, 8208, 8211, 2]
// Exports: createGiftIntentSystemMessage

// Module 8338 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8211 from "module_8211" /* 8211 */;
import createCommonMessageDefault from "createCommonMessage" /* 8226 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8339 */;
import createStyles from "createStyles" /* 4757 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  const giftIntentEmbed = GiftIntentEmbed.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj3.giftIntentInfo = giftIntentEmbed;
    const tmp5 = closure_3(theme);
    obj3.ephemeralIndication = tmp(8347).createEphemeralIndication(message);
    const tmpResult = tmp(8347);
    obj3.iconUrl = tmp(8208).getAssetUriForEmbed(_modDef8211);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
