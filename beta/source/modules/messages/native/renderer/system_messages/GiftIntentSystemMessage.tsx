// Module ID: 8339
// Function ID: 8340
// Name: GiftIntentSystemMessage
// Dependencies: [4758, 580, 8340, 8227, 8348, 8209, 8212, 2]
// Exports: createGiftIntentSystemMessage

// Module 8339 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 580 */;
import _modDef8212 from "module_8212" /* 8212 */;
import createCommonMessageDefault from "createCommonMessage" /* 8227 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8340 */;
import createStyles from "createStyles" /* 4758 */;
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
    obj3.ephemeralIndication = tmp(8348).createEphemeralIndication(message);
    const tmpResult = tmp(8348);
    obj3.iconUrl = tmp(8209).getAssetUriForEmbed(_modDef8212);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
