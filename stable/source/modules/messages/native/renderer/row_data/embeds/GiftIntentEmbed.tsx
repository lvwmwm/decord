// Module ID: 7524
// Function ID: 7525
// Name: GiftIntentEmbed
// Dependencies: [7525, 1378, 1380, 4837, 588, 1127, 7529, 4680, 7392, 4533, 7530, 7531, 2]
// Exports: createGiftIntentEmbed

// Module 7524 (GiftIntentEmbed)
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import AssetRegistryDefault from "AssetRegistry" /* 4533 */;
import UserUtilsDefault from "UserUtils" /* 4680 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7392 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 7529 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7530 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 7531 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 7525 */;
import UserStore from "UserStore" /* 1378 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

const GiftIntentType = PremiumConstants.GiftIntentType;
let obj = { headerTextColor: nativeDefault.colors.TEXT_STRONG, subHeaderTextColor: nativeDefault.colors.TEXT_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_6 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export const createGiftIntentEmbed = function createGiftIntentEmbed(message, theme) {
  let giftIntentType;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let recipientUserId;
  const giftingPrompt = message.giftingPrompt;
  if (null == giftingPrompt) {
    return null;
  } else {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    const user = UserStore.getUser(recipientUserId);
    const obj8 = UserStore;
    if (null == user) {
      return null;
    } else {
      let tmp;
      const obj10 = UserUtilsDefault;
      const name = obj10.getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        const obj = { headerText: intl.string(intl5.t.CeQIwZ), subHeaderParts: items };
        intl = intl5.intl;
        const obj2 = { text: intl2.formatToPlainString(intl5.t.PpG27s, obj3) };
        intl2 = intl5.intl;
        items = [obj2];
        tmp = obj;
        obj3 = { numberOfYears: tmp12 };
      } else {
        tmp = null;
        if (tmp13.UNSPECIFIED !== giftIntentType) {
          const obj11 = PremiumGiftingUtils;
          obj11.unhandledGiftIntent(giftIntentType);
          tmp = null;
        }
      }
      if (null == tmp) {
        return null;
      } else {
        const currentUser = obj8.getCurrentUser();
        const _HermesInternal2 = HermesInternal;
        let combined1;
        const combined = "" + user.getAvatarURL(undefined, 40);
        if (null != currentUser) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + currentUser.getAvatarURL(undefined, 40);
        }
        ({ headerText: obj4.headerText, subHeaderParts: obj4.subHeaderParts } = tmp);
        const obj9 = { recipientAvatarUrl: combined, currentUserAvatarUrl: combined1, recipientName: name, headerText: null, subHeaderParts: null, recipientUserId, giftIntentType, headerTextColor: null, subHeaderTextColor: null, backgroundColor: null, borderColor: null, subHeaderIconUrl: obj5.getAssetUriForEmbed(AssetRegistryDefault), primaryCtaLabel: intl3.string(intl5.t.ilhtIa), primaryCtaIconUrl: obj6.getAssetUriForEmbed(AssetRegistryDefault2), secondaryCtaIconUrl: obj7.getAssetUriForEmbed(AssetRegistryDefault3), secondaryCtaAccessibilityLabel: intl4.string(intl5.t.I5gL2H) };
        ({ headerTextColor: obj4.headerTextColor, subHeaderTextColor: obj4.subHeaderTextColor, backgroundColor: obj4.backgroundColor, borderColor: obj4.borderColor } = closure_6(theme));
        closure_6(theme);
        obj5 = renderer_EmbedUtils;
        intl3 = intl5.intl;
        obj6 = renderer_EmbedUtils;
        obj7 = renderer_EmbedUtils;
        intl4 = intl5.intl;
        return obj9;
      }
    }
  }
};
