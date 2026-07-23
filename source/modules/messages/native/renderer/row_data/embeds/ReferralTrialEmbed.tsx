// Module ID: 7744
// Function ID: 61534
// Name: createReferralTrialEmbedRedeemable
// Dependencies: [1348, 1849, 3782, 6688, 5621, 653, 1851, 4130, 689, 5624, 7635, 7172, 1212, 7745, 3969, 3776, 6687, 7742, 1920, 1553, 7738, 2]
// Exports: createReferralTrialEmbedRedeemable

// Module 7744 (createReferralTrialEmbedRedeemable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_9 } from "GuildFeatures";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let headerTextColor;
  let subTextColor;
  let titleColor;
  if (null != message.author) {
    let obj = { headerTextColor: importDefault(689).colors.WHITE, titleColor: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: importDefault(689).colors.TEXT_DEFAULT, footerTextColor: importDefault(689).colors.TEXT_MUTED, subTextColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: importDefault(689).colors.WHITE };
    const tmp78 = require(4130) /* _createForOfIteratorHelperLoose */.createNativeStyleProperties(obj)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp78);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp78);
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = { backgroundColor, borderColor: backgroundColor, thumbnailCornerRadius: 3 };
        let obj1 = require(7635) /* frozen */;
        obj.headerLogoUrl = obj1.getAssetUriForEmbed(importDefault(7172));
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.headerText = intl.string(require(1212) /* getSystemLocale */.t.gtNqJQ).toLocaleLowerCase();
        obj.headerColor = headerTextColor;
        let obj3 = require(7635) /* frozen */;
        obj.thumbnailUrl = obj3.getAssetUriForEmbed(importDefault(7745));
        let user_id;
        if (null != relevantUserTrialOffer) {
          user_id = relevantUserTrialOffer.user_id;
        }
        const user = authStore.getUser(user_id);
        let referrer_id;
        if (null != relevantUserTrialOffer) {
          referrer_id = relevantUserTrialOffer.referrer_id;
        }
        const user1 = authStore.getUser(referrer_id);
        if (null != user) {
          if (null != user1) {
            const name = importDefault(3969).getName(user1);
            const obj30 = importDefault(3969);
            const name1 = importDefault(3969).getName(user);
            const intl11 = require(1212) /* getSystemLocale */.intl;
            obj = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(require(1212) /* getSystemLocale */.t.IiWKwg, obj);
            if (null == relevantUserTrialOffer) {
              obj1 = {};
              const merged = Object.assign(obj);
              obj1["titleText"] = formatToPlainStringResult;
              obj1["titleColor"] = titleColor;
              const intl9 = require(1212) /* getSystemLocale */.intl;
              obj1["bodyText"] = intl9.string(require(1212) /* getSystemLocale */.t.eEz1N5);
              obj1["bodyTextColor"] = bodyTextColor;
              obj1["canBeAccepted"] = false;
              return obj1;
            } else {
              userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              id = undefined;
              if (null != userTrialOffer) {
                id = userTrialOffer.id;
              }
              const tmp11 = relevantUserTrialOffer.id === id && (function isReferralTrialProductOfferIdEnabled() {
                const offerIds = outer1_7.getOfferIds();
                const values = Object.values(outer1_0(outer1_2[9]).TrialIdToProductOfferId[outer1_9]);
                return values.every((arg0) => set.has(arg0));
              })();
              let obj4 = importDefault(3776);
              const isPremiumResult = obj4.isPremium(user);
              let tmp15 = isPremiumResult;
              if (!isPremiumResult) {
                tmp15 = isPremiumResult;
                if (user.id === id) {
                  tmp15 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              let obj5 = require(6687) /* hasUserTrialOfferExpired */;
              const result = obj5.hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (null != relevantUserTrialOffer.expires_at) {
                if (!result) {
                  if (!tmp15) {
                    if (!tmp20) {
                      let obj6 = require(7742) /* isReferralProgramPopoverSeen */;
                      const _Date = Date;
                      const referralTrialOfferExpirationCopy = obj6.getReferralTrialOfferExpirationCopy(Date.parse(relevantUserTrialOffer.expires_at));
                      const intl2 = require(1212) /* getSystemLocale */.intl;
                      const obj2 = {};
                      let obj8 = require(3776) /* _createForOfIteratorHelperLoose */;
                      obj3 = {};
                      const subscription_trial = relevantUserTrialOffer.subscription_trial;
                      let interval;
                      if (null != subscription_trial) {
                        interval = subscription_trial.interval;
                      }
                      obj3.intervalType = interval;
                      const subscription_trial2 = relevantUserTrialOffer.subscription_trial;
                      let interval_count;
                      if (null != subscription_trial2) {
                        interval_count = subscription_trial2.interval_count;
                      }
                      obj3.intervalCount = interval_count;
                      obj2.duration = obj8.formatIntervalDuration(obj3);
                      const replaced = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.uj94C5, obj2).replace(/\*/g, "");
                      const str = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.uj94C5, obj2);
                      const tmp21 = referralTrialOfferExpirationCopy;
                    }
                  }
                }
              }
              if (tmp15) {
                if (!tmp83) {
                  if (!tmp20) {
                    const intl3 = require(1212) /* getSystemLocale */.intl;
                    obj4 = {};
                    obj5 = { action: "bindOpenUrl" };
                    let obj12 = importDefault(1920);
                    obj5.url = obj12.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                    obj4.helpdeskArticle = obj5;
                    let formatToPartsResult = intl3.formatToParts(require(1212) /* getSystemLocale */.t.LwCwT9, obj4);
                  }
                  obj6 = {};
                  const merged1 = Object.assign(obj);
                  obj6["titleText"] = formatToPlainStringResult;
                  obj6["titleColor"] = titleColor;
                  obj6["bodyText"] = formatToPlainStringResult1;
                  obj6["structuredBodyText"] = formatToPartsResult;
                  obj6["bodyTextColor"] = bodyTextColor;
                  obj6["subText"] = tmp21;
                  obj6["subTextColor"] = subTextColor;
                  obj6["canBeAccepted"] = !result && !tmp15 && tmp11 && !tmp83;
                  let tmp57 = obj6;
                  if (!result && !tmp15 && tmp11 && !tmp83) {
                    const obj7 = {};
                    const merged2 = Object.assign(obj6);
                    obj7["footerText"] = replaced;
                    obj7["footerTextColor"] = footerTextColor;
                    obj7["canBeAccepted"] = tmp53;
                    const intl8 = require(1212) /* getSystemLocale */.intl;
                    obj7["acceptLabelText"] = intl8.string(require(1212) /* getSystemLocale */.t.bXTClc);
                    obj7["acceptLabelColor"] = acceptLabelColor;
                    obj7["acceptLabelIconUrl"] = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(7738));
                    tmp57 = obj7;
                    const obj24 = require(7635) /* frozen */;
                  }
                  return tmp57;
                }
              }
              if (tmp15) {
                const intl7 = require(1212) /* getSystemLocale */.intl;
                obj8 = { username: name1 };
                formatToPlainStringResult1 = intl7.formatToPlainString(require(1212) /* getSystemLocale */.t["Mptau/"], obj8);
              } else {
                if (result) {
                  if (!tmp20) {
                    const intl4 = require(1212) /* getSystemLocale */.intl;
                    formatToPlainStringResult1 = intl4.string(require(1212) /* getSystemLocale */.t["9SNdf4"]);
                  }
                }
                if (!tmp11) {
                  if (!tmp20) {
                    if (!tmp83) {
                      const intl5 = require(1212) /* getSystemLocale */.intl;
                      let obj13 = require(1553) /* isMetaQuest */;
                      const t = require(1212) /* getSystemLocale */.t;
                      const obj9 = {};
                      const obj10 = { action: "bindOpenUrl" };
                      const isMetaQuestResult = obj13.isMetaQuest();
                      const tmp42 = obj13.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj10.url = importDefault(1920).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj9.helpdeskArticle = obj10;
                      let formatToPartsResult1 = intl5.formatToParts(tmp42, obj9);
                      const obj17 = importDefault(1920);
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = require(1212) /* getSystemLocale */.intl;
                const obj11 = {};
                obj12 = { action: "bindOpenUrl", url: importDefault(1920).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj11.helpdeskArticle = obj12;
                obj11.username = name;
                formatToPartsResult1 = intl6.formatToParts(require(1212) /* getSystemLocale */.t.mVzEG8, obj11);
                const obj20 = importDefault(1920);
              }
              const tmp90 = (function isReferralTrialProductOfferIdEnabled() {
                const offerIds = outer1_7.getOfferIds();
                const values = Object.values(outer1_0(outer1_2[9]).TrialIdToProductOfferId[outer1_9]);
                return values.every((arg0) => set.has(arg0));
              })();
            }
            const obj31 = importDefault(3969);
          }
        }
        obj13 = {};
        const merged3 = Object.assign(obj);
        const intl10 = require(1212) /* getSystemLocale */.intl;
        obj13["bodyText"] = intl10.string(require(1212) /* getSystemLocale */.t.eEz1N5);
        obj13["bodyTextColor"] = bodyTextColor;
        obj13["canBeAccepted"] = false;
        return obj13;
      }
    }
    const obj27 = require(4130) /* _createForOfIteratorHelperLoose */;
  }
};
