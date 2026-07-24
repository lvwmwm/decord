// Module ID: 7846
// Function ID: 61896
// Name: createGiftIntentEmbed
// Dependencies: [7847, 1849, 1851, 4130, 689, 1212, 7851, 3969, 7724, 4067, 7852, 7853, 2]
// Exports: createGiftIntentEmbed

// Module 7846 (createGiftIntentEmbed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { GiftIntentType } from "GuildFeatures";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { headerTextColor: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG, subHeaderTextColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const result = require("GuildFeatures").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

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
      const name = importDefault(3969).getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        let obj = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.headerText = intl.string(require(1212) /* getSystemLocale */.t.CeQIwZ);
        obj = {};
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { numberOfYears: tmp17 };
        obj.text = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.PpG27s, obj);
        const items = [obj];
        obj.subHeaderParts = items;
        let tmp2 = obj;
      } else {
        tmp2 = null;
        if (GiftIntentType.UNSPECIFIED !== giftIntentType) {
          require(7851) /* _sendGiftMessage */.unhandledGiftIntent(giftIntentType);
          tmp2 = null;
          const obj10 = require(7851) /* _sendGiftMessage */;
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
        ({ headerTextColor: obj4.headerTextColor, subHeaderTextColor: obj4.subHeaderTextColor, backgroundColor: obj4.backgroundColor, borderColor: obj4.borderColor } = _createForOfIteratorHelperLoose(theme));
        const tmp8 = _createForOfIteratorHelperLoose(theme);
        obj1.subHeaderIconUrl = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(4067));
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj1.primaryCtaLabel = intl3.string(require(1212) /* getSystemLocale */.t.ilhtIa);
        const obj5 = require(7724) /* frozen */;
        obj1.primaryCtaIconUrl = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7852));
        const obj6 = require(7724) /* frozen */;
        obj1.secondaryCtaIconUrl = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7853));
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj1.secondaryCtaAccessibilityLabel = intl4.string(require(1212) /* getSystemLocale */.t.I5gL2H);
        return obj1;
      }
      const obj9 = importDefault(3969);
    }
  }
};
