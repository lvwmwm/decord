// Module ID: 8424
// Function ID: 8425
// Name: GiftIntentSystemMessage
// Dependencies: [4829, 576, 8425, 8312, 8433, 8294, 8297, 2]
// Exports: createGiftIntentSystemMessage

// Module 8424 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8297 from "module_8297" /* 8297 */;
import createCommonMessageDefault from "createCommonMessage" /* 8312 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8425 */;
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
    obj3.ephemeralIndication = tmp(8433).createEphemeralIndication(message);
    const tmpResult = tmp(8433);
    obj3.iconUrl = tmp(8294).getAssetUriForEmbed(_modDef8297);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
