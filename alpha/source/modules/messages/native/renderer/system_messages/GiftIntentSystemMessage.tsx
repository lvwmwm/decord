// Module ID: 7513
// Function ID: 7514
// Name: GiftIntentSystemMessage
// Dependencies: [4829, 576, 7514, 7401, 7522, 7383, 7386, 2]
// Exports: createGiftIntentSystemMessage

// Module 7513 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef7386 from "module_7386" /* 7386 */;
import createCommonMessageDefault from "createCommonMessage" /* 7401 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 7514 */;
import createStyles from "createStyles" /* 4829 */;
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
    obj3.ephemeralIndication = tmp(7522).createEphemeralIndication(message);
    const tmpResult = tmp(7522);
    obj3.iconUrl = tmp(7383).getAssetUriForEmbed(_modDef7386);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
