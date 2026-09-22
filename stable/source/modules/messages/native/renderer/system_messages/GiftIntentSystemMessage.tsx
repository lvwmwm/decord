// Module ID: 8181
// Function ID: 8182
// Name: GiftIntentSystemMessage
// Dependencies: [4636, 576, 8182, 8068, 8190, 8050, 8053, 2]
// Exports: createGiftIntentSystemMessage

// Module 8181 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8053 from "module_8053" /* 8053 */;
import createCommonMessageDefault from "createCommonMessage" /* 8068 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8182 */;
import createStyles from "createStyles" /* 4636 */;
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
    obj3.ephemeralIndication = tmp(8190).createEphemeralIndication(message);
    const tmpResult = tmp(8190);
    obj3.iconUrl = tmp(8050).getAssetUriForEmbed(_modDef8053);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
