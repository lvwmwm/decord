// Module ID: 15366
// Function ID: 117032
// Name: getNoticeCTAColor
// Dependencies: []
// Exports: default

// Module 15366 (getNoticeCTAColor)
function getNoticeCTAColor(arg0) {
  if (closure_9.PREMIUM_TIER_0_TRIAL_ENDING === arg0) {
    return Gradients.PREMIUM_TIER_0;
  } else if (closure_9.PREMIUM_TIER_2_TRIAL_ENDING === arg0) {
    return Gradients.PREMIUM_TIER_2_TRI_COLOR;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported notice type: " + arg0);
    throw error;
  }
}
function getNoticeCopy(days, trialPeriod, termsUrl) {
  if (days.days > 0) {
    const intl3 = trialPeriod(dependencyMap[12]).intl;
    let obj = { days: days.days, trialPeriod, termsUrl };
    let formatResult = intl3.format(trialPeriod(dependencyMap[12]).t.GPqVWT, obj);
  } else if (days.hours > 0) {
    const intl2 = trialPeriod(dependencyMap[12]).intl;
    obj = { hours: days.hours, trialPeriod, termsUrl };
    formatResult = intl2.format(trialPeriod(dependencyMap[12]).t.WFMtg1, obj);
  } else {
    const intl = trialPeriod(dependencyMap[12]).intl;
    obj = {};
    const _Math = Math;
    obj.minutes = Math.max(days.minutes, 1);
    obj.trialPeriod = trialPeriod;
    obj.termsUrl = termsUrl;
    formatResult = intl.format(trialPeriod(dependencyMap[12]).t.SxXB42, obj);
  }
  return formatResult;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_6, HelpdeskArticles: closure_7, HorizontalGradient: closure_8, NoticeTypes: closure_9 } = arg1(dependencyMap[3]));
const Gradients = arg1(dependencyMap[4]).Gradients;
let closure_11 = arg1(dependencyMap[5]).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[6]));
let closure_15 = 10 * importDefault(dependencyMap[7]).Millis.SECOND;
let obj = arg1(dependencyMap[8]);
obj = { header: { "Null": "isArray", "Null": "no", "Null": "content", "Null": "a" }, closeButton: { "Bool(false)": false, "Bool(false)": 0, "Bool(false)": 0 } };
obj = { color: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.closeIcon = obj;
obj.linearGradient = { "Null": false, "Null": false, "Null": false, "Null": false };
const tmp3 = arg1(dependencyMap[6]);
obj.primaryCTA = { borderRadius: importDefault(dependencyMap[9]).radii.round, gap: 4 };
let closure_16 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[9]).radii.round, gap: 4 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  const arg1 = navigateToPremium.navigateToPremium;
  let closure_5;
  let obj = importDefault(dependencyMap[13])();
  const importDefault = obj.add(5, "days");
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  const React = stateFromStores;
  let obj2 = arg1(dependencyMap[15]);
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  const View = premiumTrialOffer;
  let num = 0;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expires_at) {
      const _Date = Date;
      num = Date.parse(premiumTrialOffer.expires_at);
    }
  }
  const tmp4 = importDefault(dependencyMap[16]);
  let obj3 = arg1(dependencyMap[17]);
  const shouldShowExpiringTrialOfferCard = obj3.useShouldShowExpiringTrialOfferCard();
  closure_5 = shouldShowExpiringTrialOfferCard;
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  const effect = React.useEffect(() => {
    let tmp = shouldShowExpiringTrialOfferCard;
    if (shouldShowExpiringTrialOfferCard) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null != premiumTrialOffer;
    }
    if (tmp) {
      let obj = callback(tmp[11]);
      obj = { notice_type: stateFromStores, trial_id: premiumTrialOffer.trial_id };
      obj.track(constants.APP_NOTICE_VIEWED, obj);
    }
  }, items1);
  if (shouldShowExpiringTrialOfferCard) {
    if (null != premiumTrialOffer) {
      if (null != stateFromStores) {
        if (premiumTrialOffer.trial_id === closure_11) {
          let PREMIUM_TRIAL = constants.NITRO_TRIAL_FOR_ALL;
        } else {
          PREMIUM_TRIAL = constants.PREMIUM_TRIAL;
        }
        obj = {};
        obj = { style: tmp.header };
        const articleURL = importDefault(dependencyMap[18]).getArticleURL(PREMIUM_TRIAL);
        obj1 = { hasMaxConnections: null, isBoostOnlySubscription: "153e24032a5a8790888aef41caaf4b2c" };
        const obj14 = importDefault(dependencyMap[18]);
        const tmp12 = closure_14;
        const tmp13 = closure_13;
        const tmp15 = View;
        const tmp18 = getNoticeCopy;
        obj2 = {};
        const subscription_trial = premiumTrialOffer.subscription_trial;
        let interval;
        if (null != subscription_trial) {
          interval = subscription_trial.interval;
        }
        obj2.intervalType = interval;
        const subscription_trial2 = premiumTrialOffer.subscription_trial;
        let interval_count;
        if (null != subscription_trial2) {
          interval_count = subscription_trial2.interval_count;
        }
        obj2.intervalCount = interval_count;
        obj1.children = tmp18(tmp4Result, arg1(dependencyMap[20]).formatIntervalDuration(obj2), articleURL);
        obj.children = callback(arg1(dependencyMap[19]).Text, obj1);
        const items2 = [callback(tmp15, obj), , ];
        obj3 = { style: tmp.closeButton, accessibilityRole: "button" };
        const intl = arg1(dependencyMap[12]).intl;
        obj3.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.cpT0Cq);
        obj3.hitSlop = {};
        obj3.onPress = function onPress() {
          if (null != stateFromStores) {
            let obj = callback(tmp[11]);
            obj = { notice_type: tmp, trial_id: tmp2 };
            obj.track(constants.APP_NOTICE_CLOSED, obj);
          }
          obj = { untilAtLeast: callback };
          callback(tmp[10]).dismiss(obj);
        };
        const obj4 = { color: tmp.closeIcon.color };
        obj3.children = callback(arg1(dependencyMap[22]).CloseIcon, obj4);
        items2[1] = callback(arg1(dependencyMap[21]).PressableOpacity, obj3);
        const obj5 = { style: tmp.primaryCTA };
        const intl2 = arg1(dependencyMap[12]).intl;
        obj5.text = intl2.string(arg1(dependencyMap[12]).t.J61px0);
        obj5.onPress = function onPress() {
          if (null != stateFromStores) {
            let obj = callback(tmp[11]);
            obj = { notice_type: tmp, trial_id: tmp2 };
            obj.track(constants.APP_NOTICE_PRIMARY_CTA_OPENED, obj);
          }
          navigateToPremium();
        };
        obj5.renderIcon = function renderIcon() {
          return callback2(navigateToPremium(tmp[23]).NitroWheelIcon, { "Null": 12, "Null": 4 });
        };
        obj5.renderLinearGradient = function renderLinearGradient() {
          const obj = { style: items, start: constants2.START, end: constants2.END };
          const items = [tmp.linearGradient];
          const tmp = callback(tmp[24]);
          obj.colors = callback3(stateFromStores);
          return callback2(tmp, obj);
        };
        items2[2] = callback(arg1(dependencyMap[22]).ShinyButton, obj5);
        obj.children = items2;
        const obj8 = arg1(dependencyMap[20]);
        const obj6 = { style: navigateToPremium.style, children: tmp12(tmp13, obj) };
        return callback(importDefault(dependencyMap[25]), obj6);
      }
    }
    return null;
  } else {
    return null;
  }
  const tmp4Result = importDefault(dependencyMap[16])(num, closure_15);
};
