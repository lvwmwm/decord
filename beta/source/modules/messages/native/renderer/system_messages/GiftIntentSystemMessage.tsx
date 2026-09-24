// Module ID: 8371
// Function ID: 8372
// Name: GiftIntentSystemMessage
// Dependencies: [4790, 580, 8372, 8259, 8380, 8241, 8244, 2]
// Exports: createGiftIntentSystemMessage

// Module 8371 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 580 */;
import _modDef8244 from "module_8244" /* 8244 */;
import createCommonMessageDefault from "createCommonMessage" /* 8259 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8372 */;
import createStyles from "createStyles" /* 4790 */;
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
    obj3.ephemeralIndication = tmp(8380).createEphemeralIndication(message);
    const tmpResult = tmp(8380);
    obj3.iconUrl = tmp(8241).getAssetUriForEmbed(_modDef8244);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
