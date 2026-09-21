// Module ID: 8334
// Function ID: 8335
// Name: GiftIntentSystemMessage
// Dependencies: [4756, 576, 8335, 8222, 8343, 8204, 8207, 2]
// Exports: createGiftIntentSystemMessage

// Module 8334 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8207 from "module_8207" /* 8207 */;
import createCommonMessageDefault from "createCommonMessage" /* 8222 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8335 */;
import createStyles from "createStyles" /* 4756 */;
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
    obj3.ephemeralIndication = tmp(8343).createEphemeralIndication(message);
    const tmpResult = tmp(8343);
    obj3.iconUrl = tmp(8204).getAssetUriForEmbed(_modDef8207);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
