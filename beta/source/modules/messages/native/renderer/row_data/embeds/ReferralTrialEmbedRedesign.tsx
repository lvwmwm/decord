// Module ID: 8349
// Function ID: 8350
// Name: ReferralTrialEmbedRedesign
// Dependencies: [2045, 1376, 4456, 7729, 7516, 1078, 1378, 4790, 580, 7519, 8350, 1119, 4635, 2112, 4450, 7728, 8351, 1613, 8241, 8347, 2]
// Exports: createReferralTrialEmbedRedesign

// Module 8349 (ReferralTrialEmbedRedesign)
import nativeDefault from "native" /* 580 */;
import createStyles from "createStyles" /* 4790 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1376 */;
import SubscriptionStore from "SubscriptionStore" /* 4456 */;
import UserOfferStore from "UserOfferStore" /* 7729 */;
import IAPStore from "IAPStore" /* 7516 */;

require = fn;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
let closure_9 = fn(1378).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer) {
  if (null != message.author) {
    const obj2 = { titleColor: nativeDefault.colors.TEXT_DEFAULT, headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_SUBTLE, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.TEXT_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE, linkTextColor: nativeDefault.colors.TEXT_LINK };
    const tmp42 = createStyles.createNativeStyleProperties(obj2)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp42);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp42);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        let userId;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = UserStore.getUser(userId);
        let referrerId;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user1 = UserStore.getUser(referrerId);
        if (null != user) {
          if (null != user1) {
            const name = tmp41(4635).getName(user1);
            const intl10 = tmp39(1119).intl;
            const obj3 = { sender: name, helpdeskArticle: null };
            const tmp41Result = tmp41(4635);
            obj3.helpdeskArticle = tmp41(2112).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const tmp41Result8 = tmp41(2112);
            const intl11 = tmp39(1119).intl;
            const obj4 = { sender: name, helpdeskArticle: null };
            const obj5 = { action: "bindOpenUrl", url: null, linkColor: null };
            const formatToPlainStringResult = intl10.formatToPlainString(tmp39(1119).t.yisueA, obj3);
            obj5.url = tmp41(2112).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj5.linkColor = linkTextColor;
            obj4.helpdeskArticle = obj5;
            const obj6 = { titleText: formatToPlainStringResult, titleColor, headerImageUrl: null, headerText: null, headerColor: null, backgroundColor: null, borderColor: null, learnMoreLink: null };
            const tmp41Result9 = tmp41(2112);
            obj6.headerImageUrl = tmp41(8350);
            const intl12 = tmp39(1119).intl;
            obj6.headerText = intl12.string(tmp39(1119).t.HtTvXA);
            obj6.headerColor = headerTextColor;
            obj6.backgroundColor = backgroundColor;
            obj6.borderColor = backgroundColor;
            obj6.learnMoreLink = intl11.formatToParts(tmp39(1119).t.yisueA, obj4);
            if (null == relevantUserTrialOffer) {
              const obj7 = {};
              const merged = Object.assign(obj6);
              const intl8 = tmp39(1119).intl;
              obj7.bodyText = intl8.string(tmp39(1119).t.eEz1N5);
              obj7.bodyTextColor = bodyTextColor;
              obj7.canBeAccepted = false;
              return obj7;
            } else {
              const userTrialOffer = UserOfferStore.getUserTrialOffer(closure_9);
              IAPStore.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp39(7519).TrialIdToProductOfferId[closure_9]);
              id = undefined;
              if (userTrialOffer != null) {
                id = userTrialOffer.id;
              }
              const tmp7 = relevantUserTrialOffer.id === id && values.every((item) => set.has(item));
              const everyResult = values.every((item) => set.has(item));
              const isPremiumResult = tmp41(4450).isPremium(user);
              let tmp10 = isPremiumResult;
              if (!isPremiumResult) {
                tmp10 = isPremiumResult;
                if (user.id === id) {
                  tmp10 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp41Result10 = tmp41(4450);
              const result = tmp39(7728).hasUserTrialOfferExpired(relevantUserTrialOffer);
              const tmp39Result = tmp39(7728);
              let tmp15 = null == relevantUserTrialOffer.expiresAt;
              const name1 = tmp41(4635).getName(user);
              if (!tmp15) {
                tmp15 = result;
              }
              if (!tmp15) {
                tmp15 = tmp10;
              }
              if (!tmp15) {
                tmp15 = tmp14;
              }
              if (!tmp15) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const referralTrialOfferExpirationCopy = tmp39(8351).getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl = tmp39(1119).intl;
                const tmp39Result5 = tmp39(8351);
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const obj8 = { intervalType: interval, intervalCount: null };
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                let intervalCount;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj9 = { duration: null };
                obj8.intervalCount = intervalCount;
                obj9.duration = tmp39(4450).formatIntervalDuration(obj8);
                const tmp39Result6 = tmp39(4450);
                const replaced = intl.formatToPlainString(tmp39(1119).t.uj94C5, obj9).replace(/\*/g, "");
                const str = intl.formatToPlainString(tmp39(1119).t.uj94C5, obj9);
                const tmp17 = referralTrialOfferExpirationCopy;
              }
              if (tmp10) {
                if (!tmp21) {
                  if (!tmp14) {
                    const intl2 = tmp39(1119).intl;
                    const obj10 = { helpdeskArticle: null };
                    const obj11 = { action: "bindOpenUrl", url: tmp41(2112).getArticleURL(tmp45.REFERRAL_PROGRAM) };
                    obj10.helpdeskArticle = obj11;
                    let formatToPartsResult1 = intl2.formatToParts(tmp39(1119).t.LwCwT9, obj10);
                    const tmp41Result12 = tmp41(2112);
                  }
                  let tmp27 = !result;
                  if (!result) {
                    tmp27 = !tmp10;
                  }
                  if (tmp27) {
                    tmp27 = tmp7;
                  }
                  if (tmp27) {
                    tmp27 = !tmp21;
                  }
                  const obj12 = {};
                  const merged1 = Object.assign(obj6);
                  obj12.bodyText = formatToPlainStringResult1;
                  obj12.structuredBodyText = formatToPartsResult1;
                  obj12.bodyTextColor = bodyTextColor;
                  obj12.subText = tmp17;
                  obj12.subTextColor = subTextColor;
                  obj12.canBeAccepted = tmp27;
                  let tmp31 = obj12;
                  if (tmp27) {
                    const obj13 = {};
                    const merged2 = Object.assign(obj12);
                    obj13.footerText = replaced;
                    obj13.footerTextColor = footerTextColor;
                    obj13.canBeAccepted = tmp27;
                    const intl7 = tmp39(1119).intl;
                    obj13.acceptLabelText = intl7.string(tmp39(1119).t.bXTClc);
                    obj13.acceptLabelColor = acceptLabelColor;
                    obj13.acceptLabelIconUrl = tmp39(8241).getAssetUriForEmbed(tmp41(8347));
                    tmp31 = obj13;
                    const tmp39Result7 = tmp39(8241);
                  }
                  return tmp31;
                }
              }
              if (tmp10) {
                const intl6 = tmp39(1119).intl;
                const obj14 = { username: name1 };
                formatToPlainStringResult1 = intl6.formatToPlainString(tmp39(1119).t["Mptau/"], obj14);
              } else {
                if (result) {
                  if (!tmp14) {
                    const intl3 = tmp39(1119).intl;
                    formatToPlainStringResult1 = intl3.string(tmp39(1119).t["9SNdf4"]);
                  }
                }
                if (!tmp7) {
                  if (!tmp14) {
                    if (!tmp21) {
                      const intl4 = tmp39(1119).intl;
                      const tmp39Result8 = tmp39(1613);
                      const t = tmp39(1119).t;
                      const obj15 = { helpdeskArticle: null };
                      const obj16 = { action: "bindOpenUrl", url: null };
                      const isMetaQuestResult = tmp39(1613).isMetaQuest();
                      const tmp25 = tmp39(1613).isMetaQuest() ? t.yqX4Dr : t["7O7Zg3"];
                      obj16.url = tmp41(2112).getArticleURL(tmp45.REFERRAL_PROGRAM);
                      obj15.helpdeskArticle = obj16;
                      let formatToPartsResult2 = intl4.formatToParts(tmp25, obj15);
                      const tmp41Result13 = tmp41(2112);
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = tmp39(1119).intl;
                const obj17 = { helpdeskArticle: null, username: null };
                const obj18 = { action: "bindOpenUrl", url: tmp41(2112).getArticleURL(tmp45.REFERRAL_PROGRAM) };
                obj17.helpdeskArticle = obj18;
                obj17.username = name;
                formatToPartsResult2 = intl5.formatToParts(tmp39(1119).t.mVzEG8, obj17);
                const tmp41Result14 = tmp41(2112);
              }
              const tmp41Result11 = tmp41(4635);
            }
            const formatToPartsResult = intl11.formatToParts(tmp39(1119).t.yisueA, obj4);
          }
        }
        const obj19 = { titleText: "", titleColor, headerImageUrl: tmp41(8350), headerText: "", headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, bodyText: null, bodyTextColor: null, canBeAccepted: false };
        const intl9 = tmp39(1119).intl;
        obj19.bodyText = intl9.string(tmp39(1119).t.eEz1N5);
        obj19.bodyTextColor = bodyTextColor;
        return obj19;
      }
    }
  }
};
