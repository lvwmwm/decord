// Module ID: 7733
// Function ID: 61463
// Name: createReferralTrialEmbedRedeemable
// Dependencies: []
// Exports: createReferralTrialEmbedRedeemable

// Module 7733 (createReferralTrialEmbedRedeemable)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const HelpdeskArticles = arg1(dependencyMap[5]).HelpdeskArticles;
let closure_9 = arg1(dependencyMap[6]).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx");

export const createReferralTrialEmbedRedeemable = function createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer) {
  let acceptLabelColor;
  let backgroundColor;
  let bodyTextColor;
  let footerTextColor;
  let headerTextColor;
  let subTextColor;
  let titleColor;
  if (null != message.author) {
    let obj = { headerTextColor: importDefault(dependencyMap[8]).colors.WHITE, titleColor: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT, footerTextColor: importDefault(dependencyMap[8]).colors.TEXT_MUTED, subTextColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, acceptLabelColor: importDefault(dependencyMap[8]).colors.WHITE };
    const tmp78 = theme(dependencyMap[7]).createNativeStyleProperties(obj)(theme);
    ({ titleColor, bodyTextColor, backgroundColor } = tmp78);
    ({ headerTextColor, footerTextColor, subTextColor, acceptLabelColor } = tmp78);
    const channel = channel.getChannel(message.getChannelId());
    if (null != channel) {
      if (channel.isDM()) {
        obj = { backgroundColor, borderColor: backgroundColor, thumbnailCornerRadius: 3 };
        let obj1 = theme(dependencyMap[10]);
        obj.headerLogoUrl = obj1.getAssetUriForEmbed(importDefault(dependencyMap[11]));
        const intl = theme(dependencyMap[12]).intl;
        obj.headerText = intl.string(theme(dependencyMap[12]).t.gtNqJQ).toLocaleLowerCase();
        obj.headerColor = headerTextColor;
        let obj3 = theme(dependencyMap[10]);
        obj.thumbnailUrl = obj3.getAssetUriForEmbed(importDefault(dependencyMap[13]));
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
            const name = importDefault(dependencyMap[14]).getName(user1);
            const obj30 = importDefault(dependencyMap[14]);
            const name1 = importDefault(dependencyMap[14]).getName(user);
            const intl11 = theme(dependencyMap[12]).intl;
            obj = { senderUserName: name, recipientUserName: name1 };
            const formatToPlainStringResult = intl11.formatToPlainString(theme(dependencyMap[12]).t.IiWKwg, obj);
            if (null == relevantUserTrialOffer) {
              obj1 = {};
              const merged = Object.assign(obj);
              obj1["titleText"] = formatToPlainStringResult;
              obj1["titleColor"] = titleColor;
              const intl9 = theme(dependencyMap[12]).intl;
              obj1["bodyText"] = intl9.string(theme(dependencyMap[12]).t.eEz1N5);
              obj1["bodyTextColor"] = bodyTextColor;
              obj1["canBeAccepted"] = false;
              return obj1;
            } else {
              const userTrialOffer = userTrialOffer.getUserTrialOffer(closure_9);
              id = undefined;
              if (null != userTrialOffer) {
                id = userTrialOffer.id;
              }
              const tmp11 = relevantUserTrialOffer.id === id && function isReferralTrialProductOfferIdEnabled() {
                const callback = offerIds.getOfferIds();
                const values = Object.values(callback(closure_2[9]).TrialIdToProductOfferId[closure_9]);
                return values.every((arg0) => set.has(arg0));
              }();
              let obj4 = importDefault(dependencyMap[15]);
              const isPremiumResult = obj4.isPremium(user);
              let tmp15 = isPremiumResult;
              if (!isPremiumResult) {
                tmp15 = isPremiumResult;
                if (user.id === id) {
                  tmp15 = null != premiumTypeSubscription.getPremiumTypeSubscription();
                }
              }
              let obj5 = theme(dependencyMap[16]);
              const result = obj5.hasUserTrialOfferExpired(relevantUserTrialOffer);
              if (null != relevantUserTrialOffer.expires_at) {
                if (!result) {
                  if (!tmp15) {
                    if (!tmp20) {
                      let obj6 = theme(dependencyMap[17]);
                      const _Date = Date;
                      const referralTrialOfferExpirationCopy = obj6.getReferralTrialOfferExpirationCopy(Date.parse(relevantUserTrialOffer.expires_at));
                      const intl2 = theme(dependencyMap[12]).intl;
                      const obj2 = {};
                      let obj8 = theme(dependencyMap[15]);
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
                      const replaced = intl2.formatToPlainString(theme(dependencyMap[12]).t.uj94C5, obj2).replace(/\*/g, "");
                      const str = intl2.formatToPlainString(theme(dependencyMap[12]).t.uj94C5, obj2);
                      const tmp21 = referralTrialOfferExpirationCopy;
                    }
                  }
                }
              }
              if (tmp15) {
                if (!tmp83) {
                  if (!tmp20) {
                    const intl3 = theme(dependencyMap[12]).intl;
                    obj4 = {};
                    obj5 = { action: "bindOpenUrl" };
                    let obj12 = importDefault(dependencyMap[18]);
                    obj5.url = obj12.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                    obj4.helpdeskArticle = obj5;
                    let formatToPartsResult = intl3.formatToParts(theme(dependencyMap[12]).t.LwCwT9, obj4);
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
                    const intl8 = theme(dependencyMap[12]).intl;
                    obj7["acceptLabelText"] = intl8.string(theme(dependencyMap[12]).t.bXTClc);
                    obj7["acceptLabelColor"] = acceptLabelColor;
                    obj7["acceptLabelIconUrl"] = theme(dependencyMap[10]).getAssetUriForEmbed(importDefault(dependencyMap[20]));
                    tmp57 = obj7;
                    const obj24 = theme(dependencyMap[10]);
                  }
                  return tmp57;
                }
              }
              if (tmp15) {
                const intl7 = theme(dependencyMap[12]).intl;
                obj8 = { username: name1 };
                let formatToPlainStringResult1 = intl7.formatToPlainString(theme(dependencyMap[12]).t.Mptau/, obj8);
              } else {
                if (result) {
                  if (!tmp20) {
                    const intl4 = theme(dependencyMap[12]).intl;
                    formatToPlainStringResult1 = intl4.string(theme(dependencyMap[12]).t.9SNdf4);
                  }
                }
                if (!tmp11) {
                  if (!tmp20) {
                    if (!tmp83) {
                      const intl5 = theme(dependencyMap[12]).intl;
                      let obj13 = theme(dependencyMap[19]);
                      const t = theme(dependencyMap[12]).t;
                      const obj9 = {};
                      const obj10 = { action: "bindOpenUrl" };
                      const isMetaQuestResult = obj13.isMetaQuest();
                      const tmp42 = obj13.isMetaQuest() ? t.yqX4Dr : t.7O7Zg3;
                      obj10.url = importDefault(dependencyMap[18]).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
                      obj9.helpdeskArticle = obj10;
                      let formatToPartsResult1 = intl5.formatToParts(tmp42, obj9);
                      const obj17 = importDefault(dependencyMap[18]);
                    }
                    formatToPartsResult = formatToPartsResult1;
                  }
                }
                const intl6 = theme(dependencyMap[12]).intl;
                const obj11 = {};
                obj12 = { action: "bindOpenUrl", url: importDefault(dependencyMap[18]).getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
                obj11.helpdeskArticle = obj12;
                obj11.username = name;
                formatToPartsResult1 = intl6.formatToParts(theme(dependencyMap[12]).t.mVzEG8, obj11);
                const obj20 = importDefault(dependencyMap[18]);
              }
              const tmp90 = function isReferralTrialProductOfferIdEnabled() {
                const callback = offerIds.getOfferIds();
                const values = Object.values(callback(closure_2[9]).TrialIdToProductOfferId[closure_9]);
                return values.every((arg0) => set.has(arg0));
              }();
            }
            const obj31 = importDefault(dependencyMap[14]);
          }
        }
        obj13 = {};
        const merged3 = Object.assign(obj);
        const intl10 = theme(dependencyMap[12]).intl;
        obj13["bodyText"] = intl10.string(theme(dependencyMap[12]).t.eEz1N5);
        obj13["bodyTextColor"] = bodyTextColor;
        obj13["canBeAccepted"] = false;
        return obj13;
      }
    }
    const obj27 = theme(dependencyMap[7]);
  }
};
