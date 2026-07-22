// Module ID: 7746
// Function ID: 61530
// Name: createGiftIntentSystemMessage
// Dependencies: []
// Exports: createGiftIntentSystemMessage

// Module 7746 (createGiftIntentSystemMessage)
const _module = require(dependencyMap[0]);
let closure_3 = _module.createNativeStyleProperties({ iconTintColor: importDefault(dependencyMap[1]).colors.BACKGROUND_BRAND, iconDividerColor: importDefault(dependencyMap[1]).colors.ICON_STRONG });
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require(dependencyMap[2]);
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const tmp3 = callback(theme);
    obj = {};
    const merged = Object.assign(importDefault(dependencyMap[3])(message));
    obj["giftIntentInfo"] = giftIntentEmbed;
    obj["ephemeralIndication"] = require(dependencyMap[4]).createEphemeralIndication(message);
    const obj3 = require(dependencyMap[4]);
    obj["iconUrl"] = require(dependencyMap[5]).getAssetUriForEmbed(importDefault(dependencyMap[6]));
    obj["iconTintColor"] = tmp3.iconTintColor;
    obj["iconDividerColor"] = tmp3.iconDividerColor;
    return obj;
  }
};
