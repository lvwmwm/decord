// Module ID: 8366
// Function ID: 8367
// Name: GiftIntentSystemMessage
// Dependencies: [4788, 576, 8367, 8254, 8375, 8236, 8239, 2]
// Exports: createGiftIntentSystemMessage

// Module 8366 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8239 from "module_8239" /* 8239 */;
import createCommonMessageDefault from "createCommonMessage" /* 8254 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8367 */;
import createStyles from "createStyles" /* 4788 */;
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
    obj3.ephemeralIndication = tmp(8375).createEphemeralIndication(message);
    const tmpResult = tmp(8375);
    obj3.iconUrl = tmp(8236).getAssetUriForEmbed(_modDef8239);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
