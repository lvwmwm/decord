// Module ID: 7702
// Function ID: 7703
// Name: GiftIntentSystemMessage
// Dependencies: [4845, 576, 7703, 7579, 7710, 7561, 7564, 2]
// Exports: createGiftIntentSystemMessage

// Module 7702 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef7564 from "module_7564" /* 7564 */;
import createCommonMessageDefault from "createCommonMessage" /* 7579 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 7703 */;
import createStyles from "createStyles" /* 4845 */;
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
    obj3.ephemeralIndication = tmp(7710).createEphemeralIndication(message);
    const tmpResult = tmp(7710);
    obj3.iconUrl = tmp(7561).getAssetUriForEmbed(_modDef7564);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
