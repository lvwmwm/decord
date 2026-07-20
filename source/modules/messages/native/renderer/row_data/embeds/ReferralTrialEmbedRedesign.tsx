// Module ID: 7729
// Function ID: 61444
// Name: createReferralTrialEmbedRedesign
// Dependencies: []
// Exports: createReferralTrialEmbedRedesign

// Module 7729 (createReferralTrialEmbedRedesign)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const HelpdeskArticles = arg1(dependencyMap[5]).HelpdeskArticles;
let closure_9 = arg1(dependencyMap[6]).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbedRedesign.tsx");

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
    let obj = { titleColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT, headerTextColor: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE, footerTextColor: importDefault(dependencyMap[8]).colors.TEXT_MUTED, subTextColor: importDefault(dependencyMap[8]).colors.TEXT_SUBTLE, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: importDefault(dependencyMap[8]).colors.WHITE, linkTextColor: importDefault(dependencyMap[8]).colors.TEXT_LINK };
    const tmp75 = theme(dependencyMap[7]).createNativeStyleProperties(obj)(theme);
    ({ titleColor, headerTextColor, bodyTextColor, backgroundColor } = tmp75);
    ({ footerTextColor, subTextColor, acceptLabelColor, linkTextColor } = tmp75);
    const channel = channel.getChannel(message.getChannelId());
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
            const name = importDefault(dependencyMap[12]).getName(user1);
            const intl10 = theme(dependencyMap[11]).intl;
            obj = { sender: name };
            const obj27 = importDefault(dependencyMap[12]);
            obj.helpdeskArticle = importDefault(dependencyMap[13]).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            const obj29 = importDefault(dependencyMap[13]);
            const intl11 = theme(dependencyMap[11]).intl;
            let obj1 = { sender: name };
            let obj2 = { action: "bindOpenUrl" };
            const formatToPlainStringResult = intl10.formatToPlainString(theme(dependencyMap[11]).t.yisueA, obj);
            obj2.url = importDefault(dependencyMap[13]).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
            obj2.linkColor = linkTextColor;
            obj1.helpdeskArticle = obj2;
            let obj3 = { titleText: formatToPlainStringResult, titleColor };
            const obj32 = importDefault(dependencyMap[13]);
            obj3.headerImageUrl = importDefault(dependencyMap[10]);
            const intl12 = theme(dependencyMap[11]).intl;
            obj3.headerText = intl12.string(theme(dependencyMap[11]).t.HtTvXA);
            obj3.headerColor = headerTextColor;
            obj3.backgroundColor = backgroundColor;
            obj3.borderColor = backgroundColor;
            obj3.learnMoreLink = intl11.formatToParts(theme(dependencyMap[11]).t.yisueA, obj1);
            if (null == relevantUserTrialOffer) {
              const obj4 = {};
              const merged = Object.assign(obj3);
              const intl8 = theme(dependencyMap[11]).intl;
              obj4["bodyText"] = intl8.string(theme(dependencyMap[11]).t.eEz1N5);
              obj4["bodyTextColor"] = bodyTextColor;
              obj4["canBeAccepted"] = false;
              return obj4;
            } else {
              const userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              id = undefined;
              if (null != userTrialOffer) {
                id = userTrialOffer.id;
              }
              const tmp8 = relevantUserTrialOffer.id === id && function isReferralTrialProductOfferIdEnabled() {
                const callback = offerIds.getOfferIds();
                const values = Object.values(callback(closure_2[9]).TrialIdToProductOfferId[closure_9]);
                return values.every((arg0) => set.has(arg0));
              }();
              obj = importDefault(dependencyMap[14]);
              const isPremiumResult = obj.isPremium(user);
              let tmp12 = isPremiumResult;
              if (!isPremiumResult) {
                tmp12 = isPremiumResult;
                if (user.id === id) {
                  tmp12 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              obj1 = theme(dependencyMap[15]);
              const result = obj1.hasUserTrialOfferExpired(relevantUserTrialOffer);
              obj2 = importDefault(dependencyMap[12]);
              const name1 = obj2.getName(user);
              if (null != relevantUserTrialOffer.expires_at) {
                if (!result) {
                  if (!tmp12) {
                    if (!tmp19) {
                      obj3 = theme(dependencyMap[16]);
                      const _Date = Date;
                      const referralTrialOfferExpirationCopy = obj3.getReferralTrialOfferExpirationCopy(Date.parse(relevantUserTrialOffer.expires_at));
                      const intl = theme(dependencyMap[11]).intl;
                      let obj5 = {};
                      obj5 = theme(dependencyMap[14]);
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
                      const replaced = intl.formatToPlainString(theme(dependencyMap[11]).t.uj94C5, obj5).replace(/\*/g, "");
                      const str = intl.formatToPlainString(theme(dependencyMap[11]).t.uj94C5, obj5);
                      const tmp20 = referralTrialOfferExpirationCopy;
                    }
                  }
                }
              }
              if (tmp12) {
                if (!tmp80) {
                  if (!tmp19) {
                    const intl2 = theme(dependencyMap[11]).intl;
                    const obj7 = {};
                    const obj8 = { action: "bindOpenUrl" };
                    let obj9 = importDefault(dependencyMap[13]);
                    obj8.url = obj9.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                    obj7.helpdeskArticle = obj8;
                    let formatToPartsResult1 = intl2.formatToParts(theme(dependencyMap[11]).t.LwCwT9, obj7);
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
                    const intl7 = theme(dependencyMap[11]).intl;
                    obj10["acceptLabelText"] = intl7.string(theme(dependencyMap[11]).t.bXTClc);
                    obj10["acceptLabelColor"] = acceptLabelColor;
                    obj10["acceptLabelIconUrl"] = theme(dependencyMap[18]).getAssetUriForEmbed(importDefault(dependencyMap[19]));
                    tmp56 = obj10;
                    const obj21 = theme(dependencyMap[18]);
                  }
                  return tmp56;
                }
              }
              if (tmp12) {
                const intl6 = theme(dependencyMap[11]).intl;
                const obj11 = { username: name1 };
                let formatToPlainStringResult1 = intl6.formatToPlainString(theme(dependencyMap[11]).t.Mptau/, obj11);
              } else {
                if (result) {
                  if (!tmp19) {
                    const intl3 = theme(dependencyMap[11]).intl;
                    formatToPlainStringResult1 = intl3.string(theme(dependencyMap[11]).t.9SNdf4);
                  }
                }
                if (!tmp8) {
                  if (!tmp19) {
                    if (!tmp80) {
                      const intl4 = theme(dependencyMap[11]).intl;
                      obj10 = theme(dependencyMap[17]);
                      const t = theme(dependencyMap[11]).t;
                      const obj12 = {};
                      let obj13 = { action: "bindOpenUrl" };
                      const isMetaQuestResult = obj10.isMetaQuest();
                      obj13 = importDefault(dependencyMap[13]);
                      obj13.url = obj13.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj12.helpdeskArticle = obj13;
                      let formatToPartsResult2 = intl4.formatToParts(obj10.isMetaQuest() ? t.yqX4Dr : t.7O7Zg3, obj12);
                      const tmp41 = obj10.isMetaQuest() ? t.yqX4Dr : t.7O7Zg3;
                    }
                    formatToPartsResult1 = formatToPartsResult2;
                  }
                }
                const intl5 = theme(dependencyMap[11]).intl;
                const obj14 = {};
                const obj15 = { action: "bindOpenUrl" };
                let obj16 = importDefault(dependencyMap[13]);
                obj15.url = obj16.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                obj14.helpdeskArticle = obj15;
                obj14.username = name;
                formatToPartsResult2 = intl5.formatToParts(theme(dependencyMap[11]).t.mVzEG8, obj14);
              }
              const tmp88 = function isReferralTrialProductOfferIdEnabled() {
                const callback = offerIds.getOfferIds();
                const values = Object.values(callback(closure_2[9]).TrialIdToProductOfferId[closure_9]);
                return values.every((arg0) => set.has(arg0));
              }();
            }
            const formatToPartsResult = intl11.formatToParts(theme(dependencyMap[11]).t.yisueA, obj1);
          }
        }
        obj16 = { titleText: "", titleColor, headerImageUrl: importDefault(dependencyMap[10]), headerText: "", headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor };
        const intl9 = theme(dependencyMap[11]).intl;
        obj16.bodyText = intl9.string(theme(dependencyMap[11]).t.eEz1N5);
        obj16.bodyTextColor = bodyTextColor;
        obj16.canBeAccepted = false;
        return obj16;
      }
    }
    const obj24 = theme(dependencyMap[7]);
  }
};
