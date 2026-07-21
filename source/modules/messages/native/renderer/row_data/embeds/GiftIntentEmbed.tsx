// Module ID: 7746
// Function ID: 61510
// Name: createGiftIntentEmbed
// Dependencies: []
// Exports: createGiftIntentEmbed

// Module 7746 (createGiftIntentEmbed)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const GiftIntentType = arg1(dependencyMap[2]).GiftIntentType;
let obj = arg1(dependencyMap[3]);
obj = { headerTextColor: importDefault(dependencyMap[4]).colors.TEXT_STRONG, subHeaderTextColor: importDefault(dependencyMap[4]).colors.TEXT_SUBTLE, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED };
let closure_6 = obj.createNativeStyleProperties(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export const createGiftIntentEmbed = function createGiftIntentEmbed(message, theme) {
  let giftIntentType;
  let recipientUserId;
  const giftingPrompt = message.giftingPrompt;
  if (null == giftingPrompt) {
    return null;
  } else {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    const user = authStore.getUser(recipientUserId);
    if (null == user) {
      return null;
    } else {
      const name = importDefault(dependencyMap[7]).getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        let obj = {};
        const intl = theme(dependencyMap[5]).intl;
        obj.headerText = intl.string(theme(dependencyMap[5]).t.CeQIwZ);
        obj = {};
        const intl2 = theme(dependencyMap[5]).intl;
        obj = { numberOfYears: tmp17 };
        obj.text = intl2.formatToPlainString(theme(dependencyMap[5]).t.PpG27s, obj);
        const items = [obj];
        obj.subHeaderParts = items;
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (GiftIntentType.UNSPECIFIED !== giftIntentType) {
          theme(dependencyMap[6]).unhandledGiftIntent(giftIntentType);
          tmp2 = null;
          const obj10 = theme(dependencyMap[6]);
        }
      }
      if (null == tmp2) {
        return null;
      } else {
        const currentUser = authStore.getCurrentUser();
        const _HermesInternal2 = HermesInternal;
        let combined1;
        const combined = "" + user.getAvatarURL(undefined, 40);
        if (null != currentUser) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + currentUser.getAvatarURL(undefined, 40);
        }
        const obj1 = { recipientAvatarUrl: combined, currentUserAvatarUrl: combined1, recipientName: name };
        ({ headerText: obj4.headerText, subHeaderParts: obj4.subHeaderParts } = tmp2);
        obj1.recipientUserId = recipientUserId;
        obj1.giftIntentType = giftIntentType;
        ({ headerTextColor: obj4.headerTextColor, subHeaderTextColor: obj4.subHeaderTextColor, backgroundColor: obj4.backgroundColor, borderColor: obj4.borderColor } = callback(theme));
        const tmp8 = callback(theme);
        obj1.subHeaderIconUrl = theme(dependencyMap[8]).getAssetUriForEmbed(importDefault(dependencyMap[9]));
        const intl3 = theme(dependencyMap[5]).intl;
        obj1.primaryCtaLabel = intl3.string(theme(dependencyMap[5]).t.ilhtIa);
        const obj5 = theme(dependencyMap[8]);
        obj1.primaryCtaIconUrl = theme(dependencyMap[8]).getAssetUriForEmbed(importDefault(dependencyMap[10]));
        const obj6 = theme(dependencyMap[8]);
        obj1.secondaryCtaIconUrl = theme(dependencyMap[8]).getAssetUriForEmbed(importDefault(dependencyMap[11]));
        const intl4 = theme(dependencyMap[5]).intl;
        obj1.secondaryCtaAccessibilityLabel = intl4.string(theme(dependencyMap[5]).t.I5gL2H);
        return obj1;
      }
      const obj9 = importDefault(dependencyMap[7]);
    }
  }
};
