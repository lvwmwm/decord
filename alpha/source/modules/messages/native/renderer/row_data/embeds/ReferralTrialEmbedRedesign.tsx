// Module ID: 8082
// Function ID: 8083
// Name: ReferralTrialEmbedRedesign
// Dependencies: [2065, 1390, 4775, 7172, 7131, 1085, 1392, 5092, 587, 7126, 8083, 1126, 4962, 2128, 4769, 7171, 8084, 1628, 7890, 8080, 2]
// Exports: createReferralTrialEmbedRedesign

// Module 8082 (ReferralTrialEmbedRedesign)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl13 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import PremiumUtils from "PremiumUtils" /* 4769 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import createStyles from "createStyles" /* 5092 */;
import useTrialOffer from "useTrialOffer" /* 7171 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7890 */;
import AssetRegistryDefault from "AssetRegistry" /* 8080 */;
import _modDef8083 from "module_8083" /* 8083 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8084 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import UserStore from "UserStore" /* 1390 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import UserOfferStore from "UserOfferStore" /* 7172 */;
import IAPStore from "IAPStore" /* 7131 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;

const HelpdeskArticles = Constants.HelpdeskArticles;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

export const createReferralTrialEmbedRedesign = function createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let formatToParts4Result;
  let formatToPlainStringResult;
  let headerTextColor;
  let intervalCount;
  let intl12;
  let intl7;
  let intl8;
  let intl9;
  let linkTextColor;
  let obj10;
  let obj15;
  let obj17;
  let obj4;
  let subTextColor;
  let titleColor;
  let tmp41Result7;
  let tmp44Result12;
  let tmp44Result13;
  let tmp44Result14;
  let tmp44Result8;
  let tmp44Result9;
  if (null != message.author) {
    const obj = { titleColor: nativeDefault.colors.TEXT_DEFAULT, headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_SUBTLE, footerTextColor: nativeDefault.colors.TEXT_MUTED, subTextColor: nativeDefault.colors.TEXT_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: nativeDefault.colors.WHITE, linkTextColor: nativeDefault.colors.TEXT_LINK };
    const createNativeStyleProperties = createStyles.createNativeStyleProperties;
    createStyles;
    const tmp45 = createNativeStyleProperties(obj)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp45);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp45);
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        let userId;
        const getUser = UserStore.getUser;
        const tmp2 = UserStore;
        if (relevantUserTrialOffer != null) {
          userId = relevantUserTrialOffer.userId;
        }
        const user = getUser(userId);
        let referrerId;
        const getUser2 = tmp2.getUser;
        if (relevantUserTrialOffer != null) {
          referrerId = relevantUserTrialOffer.referrerId;
        }
        const user2 = getUser2(referrerId);
        if (null != user) {
          if (null != user2) {
            const tmp44Result = UserUtilsDefault;
            const name = tmp44Result.getName(user2);
            id = user2.id;
            const intl10 = tmp41(1126).intl;
            const formatToPlainString2 = intl10.formatToPlainString;
            const obj2 = { sender: name, helpdeskArticle: tmp44Result8.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
            const yisueA = tmp41(1126).t.yisueA;
            tmp44Result8 = HelpdeskUtilsDefault;
            const formatToPlainString2Result = formatToPlainString2(yisueA, obj2);
            const intl11 = tmp41(1126).intl;
            const formatToParts4 = intl11.formatToParts;
            const obj3 = { sender: name, helpdeskArticle: obj4 };
            obj4 = { action: "bindOpenUrl", url: tmp44Result9.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM), linkColor: linkTextColor };
            const yisueA2 = tmp41(1126).t.yisueA;
            tmp44Result9 = HelpdeskUtilsDefault;
            const obj5 = { titleText: formatToPlainString2Result, titleColor, headerImageUrl: _modDef8083, headerText: intl12.string(intl13.t.HtTvXA), headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, learnMoreLink: formatToParts4Result };
            formatToParts4Result = formatToParts4(yisueA2, obj3);
            intl12 = tmp41(1126).intl;
            if (null == relevantUserTrialOffer) {
              const obj6 = { bodyText: intl8.string(intl13.t.eEz1N5), bodyTextColor, canBeAccepted: false };
              const merged = Object.assign(obj5);
              intl8 = tmp41(1126).intl;
              return obj6;
            } else {
              let replaced;
              let tmp18;
              let formatToPartsResult;
              const userTrialOffer = UserOfferStore.getUserTrialOffer(closure_9);
              const offerIds = IAPStore.getOfferIds();
              const _Object = Object;
              const values = Object.values(tmp41(7126).TrialIdToProductOfferId[closure_9]);
              let id1;
              const id2 = relevantUserTrialOffer.id;
              const everyResult = values.every((item) => set.has(item));
              if (userTrialOffer != null) {
                id1 = userTrialOffer.id;
              }
              const tmp44Result10 = PremiumUtilsDefault;
              const isPremiumResult = tmp44Result10.isPremium(user);
              let tmp11 = isPremiumResult;
              if (!tmp11) {
                tmp11 = isPremiumResult;
                if (user.id === id) {
                  tmp11 = null != SubscriptionStore.getPremiumTypeSubscription();
                }
              }
              const tmp41Result = useTrialOffer;
              const result = tmp41Result.hasUserTrialOfferExpired(relevantUserTrialOffer);
              let tmp16 = null == relevantUserTrialOffer.expiresAt;
              const tmp44Result11 = UserUtilsDefault;
              const name1 = tmp44Result11.getName(user);
              if (!tmp16) {
                tmp16 = result;
              }
              if (!tmp16) {
                tmp16 = tmp11;
              }
              if (!tmp16) {
                tmp16 = tmp15;
              }
              if (!tmp16) {
                const expiresAt = relevantUserTrialOffer.expiresAt;
                const tmp41Result5 = ReferralProgramUtils;
                const referralTrialOfferExpirationCopy = tmp41Result5.getReferralTrialOfferExpirationCopy(expiresAt.getTime());
                const intl = tmp41(1126).intl;
                const formatToPlainString = intl.formatToPlainString;
                const uj94C5 = tmp41(1126).t.uj94C5;
                const subscriptionTrial = relevantUserTrialOffer.subscriptionTrial;
                let interval;
                const formatIntervalDuration = PremiumUtils.formatIntervalDuration;
                PremiumUtils;
                if (subscriptionTrial != null) {
                  interval = subscriptionTrial.interval;
                }
                const subscriptionTrial2 = relevantUserTrialOffer.subscriptionTrial;
                const obj7 = { intervalType: interval, intervalCount };
                intervalCount = undefined;
                if (subscriptionTrial2 != null) {
                  intervalCount = subscriptionTrial2.intervalCount;
                }
                const obj8 = { duration: formatIntervalDuration(obj7) };
                const str = formatToPlainString(uj94C5, obj8);
                replaced = str.replace(/\*/g, "");
                tmp18 = referralTrialOfferExpirationCopy;
              }
              if (tmp11) {
                if (id !== id) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    const intl2 = tmp41(1126).intl;
                    const formatToParts = intl2.formatToParts;
                    const obj9 = { helpdeskArticle: obj10 };
                    obj10 = { action: "bindOpenUrl", url: tmp44Result12.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                    const LwCwT9 = tmp41(1126).t.LwCwT9;
                    tmp44Result12 = HelpdeskUtilsDefault;
                    formatToPartsResult = formatToParts(LwCwT9, obj9);
                  }
                  const obj11 = { bodyText: formatToPlainStringResult, structuredBodyText: formatToPartsResult, bodyTextColor, subText: tmp18, subTextColor, canBeAccepted: !result && !tmp11 && (id2 === id1 && everyResult) && id !== id };
                  const merged1 = Object.assign(obj5);
                  let tmp33 = obj11;
                  if (!result && !tmp11 && (id2 === id1 && everyResult) && id !== id) {
                    const obj12 = { footerText: replaced, footerTextColor, canBeAccepted: !result && !tmp11 && (id2 === id1 && everyResult) && id !== id, acceptLabelText: intl7.string(intl13.t.bXTClc), acceptLabelColor, acceptLabelIconUrl: tmp41Result7.getAssetUriForEmbed(AssetRegistryDefault) };
                    const merged2 = Object.assign(obj11);
                    intl7 = tmp41(1126).intl;
                    tmp33 = obj12;
                    tmp41Result7 = renderer_EmbedUtils;
                  }
                  return tmp33;
                }
              }
              if (tmp11) {
                const intl6 = tmp41(1126).intl;
                const obj13 = { username: name1 };
                formatToPlainStringResult = intl6.formatToPlainString(tmp41(1126).t["Mptau/"], obj13);
              } else {
                if (result) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    const intl3 = tmp41(1126).intl;
                    formatToPlainStringResult = intl3.string(tmp41(1126).t["9SNdf4"]);
                  }
                }
                if (!(id2 === id1 && everyResult)) {
                  if (null == relevantUserTrialOffer.redeemedAt) {
                    let formatToParts2Result;
                    if (id !== id) {
                      const intl4 = tmp41(1126).intl;
                      const formatToParts2 = intl4.formatToParts;
                      const tmp41Result8 = MetaQuestUtils;
                      const isMetaQuestResult = tmp41Result8.isMetaQuest();
                      const t = tmp41(1126).t;
                      const obj14 = { helpdeskArticle: obj15 };
                      obj15 = { action: "bindOpenUrl", url: tmp44Result13.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                      const tmp27 = isMetaQuestResult ? t.yqX4Dr : t["7O7Zg3"];
                      tmp44Result13 = HelpdeskUtilsDefault;
                      formatToParts2Result = formatToParts2(tmp27, obj14);
                    }
                    formatToPartsResult = formatToParts2Result;
                  }
                }
                const intl5 = tmp41(1126).intl;
                const formatToParts3 = intl5.formatToParts;
                const obj16 = { helpdeskArticle: obj17, username: name };
                obj17 = { action: "bindOpenUrl", url: tmp44Result14.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                const mVzEG8 = tmp41(1126).t.mVzEG8;
                tmp44Result14 = HelpdeskUtilsDefault;
                formatToParts2Result = formatToParts3(mVzEG8, obj16);
              }
            }
          }
        }
        const obj18 = { titleText: "", titleColor, headerImageUrl: _modDef8083, headerText: "", headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, bodyText: intl9.string(intl13.t.eEz1N5), bodyTextColor, canBeAccepted: false };
        intl9 = tmp41(1126).intl;
        return obj18;
      }
    }
  }
};
