// Module ID: 7519
// Function ID: 7520
// Name: GiftIntentSystemMessage
// Dependencies: [4836, 576, 7520, 7406, 7528, 7388, 7391, 2]
// Exports: createGiftIntentSystemMessage

// Module 7519 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef7391 from "module_7391" /* 7391 */;
import createCommonMessageDefault from "createCommonMessage" /* 7406 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 7520 */;
import createStyles from "createStyles" /* 4836 */;
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
    obj3.ephemeralIndication = tmp(7528).createEphemeralIndication(message);
    const tmpResult = tmp(7528);
    obj3.iconUrl = tmp(7388).getAssetUriForEmbed(_modDef7391);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
