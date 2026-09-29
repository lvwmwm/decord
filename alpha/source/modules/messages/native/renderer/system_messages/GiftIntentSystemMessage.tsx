// Module ID: 7684
// Function ID: 7685
// Name: GiftIntentSystemMessage
// Dependencies: [4836, 576, 7685, 7571, 7693, 7553, 7556, 2]
// Exports: createGiftIntentSystemMessage

// Module 7684 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef7556 from "module_7556" /* 7556 */;
import createCommonMessageDefault from "createCommonMessage" /* 7571 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 7685 */;
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
    obj3.ephemeralIndication = tmp(7693).createEphemeralIndication(message);
    const tmpResult = tmp(7693);
    obj3.iconUrl = tmp(7553).getAssetUriForEmbed(_modDef7556);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
