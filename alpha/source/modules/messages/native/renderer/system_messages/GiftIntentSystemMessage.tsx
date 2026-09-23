// Module ID: 8420
// Function ID: 8421
// Name: GiftIntentSystemMessage
// Dependencies: [4827, 576, 8421, 8308, 8429, 8290, 8293, 2]
// Exports: createGiftIntentSystemMessage

// Module 8420 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8293 from "module_8293" /* 8293 */;
import createCommonMessageDefault from "createCommonMessage" /* 8308 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8421 */;
import createStyles from "createStyles" /* 4827 */;
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
    obj3.ephemeralIndication = tmp(8429).createEphemeralIndication(message);
    const tmpResult = tmp(8429);
    obj3.iconUrl = tmp(8290).getAssetUriForEmbed(_modDef8293);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
