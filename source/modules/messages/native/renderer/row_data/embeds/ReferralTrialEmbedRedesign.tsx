// Module ID: 7828
// Function ID: 61800
// Name: createReferralTrialEmbedRedesign
// Dependencies: [1348, 1849, 3782, 6688, 5619, 653, 1851, 4130, 689, 5622, 7829, 1212, 3969, 1920, 3776, 6687, 7830, 1553, 7724, 7487, 2]
// Exports: createReferralTrialEmbedRedesign

// Module 7828 (createReferralTrialEmbedRedesign)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_9 } from "GuildFeatures";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let headerTextColor;
  let linkTextColor;
  let subTextColor;
  let titleColor;
  if (null != message.author) {
    let obj = { titleColor: importDefault(689).colors.TEXT_DEFAULT, headerTextColor: importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: importDefault(689).colors.TEXT_SUBTLE, footerTextColor: importDefault(689).colors.TEXT_MUTED, subTextColor: importDefault(689).colors.TEXT_SUBTLE, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: importDefault(689).colors.WHITE, linkTextColor: importDefault(689).colors.TEXT_LINK };
    const tmp75 = require(4130) /* _createForOfIteratorHelperLoose */.createNativeStyleProperties(obj)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp75);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp75);
    channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
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
            const intl10 = require(1212) /* getSystemLocale */.intl;
            obj = { sender: name };
            const obj27 = importDefault(3969);
            obj.helpdeskArticle = importDefault(1920).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const obj29 = importDefault(1920);
            const intl11 = require(1212) /* getSystemLocale */.intl;
            let obj1 = { sender: name };
            let obj2 = { action: "bindOpenUrl" };
            const formatToPlainStringResult = intl10.formatToPlainString(require(1212) /* getSystemLocale */.t.yisueA, obj);
            obj2.url = importDefault(1920).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj2.linkColor = linkTextColor;
            obj1.helpdeskArticle = obj2;
            let obj3 = { titleText: formatToPlainStringResult, titleColor };
            const obj32 = importDefault(1920);
            obj3.headerImageUrl = importDefault(7829);
            const intl12 = require(1212) /* getSystemLocale */.intl;
            obj3.headerText = intl12.string(require(1212) /* getSystemLocale */.t.HtTvXA);
            obj3.headerColor = headerTextColor;
            obj3.backgroundColor = backgroundColor;
            obj3.borderColor = backgroundColor;
            obj3.learnMoreLink = intl11.formatToParts(require(1212) /* getSystemLocale */.t.yisueA, obj1);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj3);
              const intl8 = require(1212) /* getSystemLocale */.intl;
              obj4["bodyText"] = intl8.string(require(1212) /* getSystemLocale */.t.eEz1N5);
              obj4["bodyTextColor"] = bodyTextColor;
              obj4["canBeAccepted"] = false;
              return obj4;
            } else {
              userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              id = undefined;
              if (null != userTrialOffer) {
                id = userTrialOffer.id;
              }
              const tmp8 = relevantUserTrialOffer.id === id && (function isReferralTrialProductOfferIdEnabled() {
                const offerIds = outer1_7.getOfferIds();
                const values = Object.values(outer1_0(outer1_2[9]).TrialIdToProductOfferId[outer1_9]);
                return values.every((arg0) => set.has(arg0));
              })();
              obj = importDefault(3776);
              const isPremiumResult = obj.isPremium(user);
              let tmp12 = isPremiumResult;
              if (!isPremiumResult) {
                tmp12 = isPremiumResult;
                if (user.id === id) {
                  tmp12 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              obj1 = require(6687) /* hasUserTrialOfferExpired */;
              const result = obj1.hasUserTrialOfferExpired(relevantUserTrialOffer);
              obj2 = importDefault(3969);
              const name1 = obj2.getName(user);
              if (null != relevantUserTrialOffer.expires_at) {
                if (!result) {
                  if (!tmp12) {
                    if (!tmp19) {
                      obj3 = require(7830) /* isReferralProgramPopoverSeen */;
                      const _Date = Date;
                      const referralTrialOfferExpirationCopy = obj3.getReferralTrialOfferExpirationCopy(Date.parse(relevantUserTrialOffer.expires_at));
                      const intl = require(1212) /* getSystemLocale */.intl;
                      let obj5 = {};
                      obj5 = require(3776) /* _createForOfIteratorHelperLoose */;
                      const obj6 = {};
                      const subscription_trial = relevantUserTrialOffer.subscription_trial;
                      let interval;
                      if (null != subscription_trial) {
                        interval = subscription_trial.interval;
                      }
                      obj6.intervalType = interval;
                      const subscription_trial2 = relevantUserTrialOffer.subscription_trial;
                      let interval_count;
                      if (null != subscription_trial2) {
                        interval_count = subscription_trial2.interval_count;
                      }
                      obj6.intervalCount = interval_count;
                      obj5.duration = obj5.formatIntervalDuration(obj6);
                      const replaced = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.uj94C5, obj5).replace(/\*/g, "");
                      const str = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.uj94C5, obj5);
                      const tmp20 = referralTrialOfferExpirationCopy;
                    }
                  }
                }
              }
              if (tmp12) {
                if (!tmp80) {
                  if (!tmp19) {
                    const intl2 = require(1212) /* getSystemLocale */.intl;
                    const obj7 = {};
                    const obj8 = { action: "bindOpenUrl" };
                    let obj9 = importDefault(1920);
                    obj8.url = obj9.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                    obj7.helpdeskArticle = obj8;
                    let formatToPartsResult1 = intl2.formatToParts(require(1212) /* getSystemLocale */.t.LwCwT9, obj7);
                  }
                  obj9 = {};
                  const merged1 = Object.assign(obj3);
                  obj9["bodyText"] = formatToPlainStringResult1;
                  obj9["structuredBodyText"] = formatToPartsResult1;
                  obj9["bodyTextColor"] = bodyTextColor;
                  obj9["subText"] = tmp20;
                  obj9["subTextColor"] = subTextColor;
                  obj9["canBeAccepted"] = !result && !tmp12 && tmp8 && !tmp80;
                  let tmp56 = obj9;
                  if (!result && !tmp12 && tmp8 && !tmp80) {
                    let obj10 = {};
                    const merged2 = Object.assign(obj9);
                    obj10["footerText"] = replaced;
                    obj10["footerTextColor"] = footerTextColor;
                    obj10["canBeAccepted"] = tmp52;
                    const intl7 = require(1212) /* getSystemLocale */.intl;
                    obj10["acceptLabelText"] = intl7.string(require(1212) /* getSystemLocale */.t.bXTClc);
                    obj10["acceptLabelColor"] = acceptLabelColor;
                    obj10["acceptLabelIconUrl"] = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7487));
                    tmp56 = obj10;
                    const obj21 = require(7724) /* frozen */;
                  }
                  return tmp56;
                }
              }
              if (tmp12) {
                const intl6 = require(1212) /* getSystemLocale */.intl;
                const obj11 = { username: name1 };
                formatToPlainStringResult1 = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["Mptau/"], obj11);
              } else {
                if (result) {
                  if (!tmp19) {
                    const intl3 = require(1212) /* getSystemLocale */.intl;
                    formatToPlainStringResult1 = intl3.string(require(1212) /* getSystemLocale */.t["9SNdf4"]);
                  }
                }
                if (!tmp8) {
                  if (!tmp19) {
                    if (!tmp80) {
                      const intl4 = require(1212) /* getSystemLocale */.intl;
                      obj10 = require(1553) /* isMetaQuest */;
                      const t = require(1212) /* getSystemLocale */.t;
                      const obj12 = {};
                      let obj13 = { action: "bindOpenUrl" };
                      const isMetaQuestResult = obj10.isMetaQuest();
                      obj13 = importDefault(1920);
                      obj13.url = obj13.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj12.helpdeskArticle = obj13;
                      let formatToPartsResult2 = intl4.formatToParts(obj10.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"], obj12);
                      const tmp41 = obj10.isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = require(1212) /* getSystemLocale */.intl;
                const obj14 = {};
                const obj15 = { action: "bindOpenUrl" };
                let obj16 = importDefault(1920);
                obj15.url = obj16.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                obj14.helpdeskArticle = obj15;
                obj14.username = name;
                formatToPartsResult2 = intl5.formatToParts(require(1212) /* getSystemLocale */.t.mVzEG8, obj14);
              }
              const tmp88 = (function isReferralTrialProductOfferIdEnabled() {
                const offerIds = outer1_7.getOfferIds();
                const values = Object.values(outer1_0(outer1_2[9]).TrialIdToProductOfferId[outer1_9]);
                return values.every((arg0) => set.has(arg0));
              })();
            }
            const formatToPartsResult = intl11.formatToParts(require(1212) /* getSystemLocale */.t.yisueA, obj1);
          }
        }
        obj16 = { titleText: "", titleColor, headerImageUrl: importDefault(7829), headerText: "", headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor };
        const intl9 = require(1212) /* getSystemLocale */.intl;
        obj16.bodyText = intl9.string(require(1212) /* getSystemLocale */.t.eEz1N5);
        obj16.bodyTextColor = bodyTextColor;
        obj16.canBeAccepted = false;
        return obj16;
      }
    }
    const obj24 = require(4130) /* _createForOfIteratorHelperLoose */;
  }
};
