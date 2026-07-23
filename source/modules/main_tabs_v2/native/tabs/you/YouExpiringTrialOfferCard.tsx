// Module ID: 15491
// Function ID: 119249
// Name: getNoticeCTAColor
// Dependencies: [31, 27, 12646, 653, 6671, 1851, 33, 664, 4130, 689, 15492, 675, 1212, 3712, 624, 6686, 6678, 15490, 1920, 4126, 3776, 4660, 1273, 7871, 4554, 5511, 2]
// Exports: default

// Module 15491 (getNoticeCTAColor)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { Gradients } from "items";
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_11 } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
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
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { days: days.days, trialPeriod, termsUrl };
    let formatResult = intl3.format(require(1212) /* getSystemLocale */.t.GPqVWT, obj);
  } else if (days.hours > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { hours: days.hours, trialPeriod, termsUrl };
    formatResult = intl2.format(require(1212) /* getSystemLocale */.t.WFMtg1, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math = Math;
    obj.minutes = Math.max(days.minutes, 1);
    obj.trialPeriod = trialPeriod;
    obj.termsUrl = termsUrl;
    formatResult = intl.format(require(1212) /* getSystemLocale */.t.SxXB42, obj);
  }
  return formatResult;
}
({ AnalyticEvents: closure_6, HelpdeskArticles: closure_7, HorizontalGradient: closure_8, NoticeTypes: closure_9 } = ME);
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = 10 * require("set").Millis.SECOND;
_createForOfIteratorHelperLoose = { header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 }, closeButton: { position: "absolute", top: 16, right: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.closeIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.linearGradient = { width: "100%", height: "100%", position: "absolute", overflow: "hidden" };
_createForOfIteratorHelperLoose.primaryCTA = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, gap: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, gap: 4 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  navigateToPremium = navigateToPremium.navigateToPremium;
  let shouldShowExpiringTrialOfferCard;
  let obj = importDefault(3712)();
  importDefault = obj.add(5, "days");
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj1 = navigateToPremium(624);
  let items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = obj1.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj2 = navigateToPremium(6686);
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  let num = 0;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expires_at) {
      const _Date = Date;
      num = Date.parse(premiumTrialOffer.expires_at);
    }
  }
  const tmp4 = importDefault(6678);
  let obj3 = navigateToPremium(15490);
  shouldShowExpiringTrialOfferCard = obj3.useShouldShowExpiringTrialOfferCard();
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  const effect = stateFromStores.useEffect(() => {
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
      obj.track(outer1_6.APP_NOTICE_VIEWED, obj);
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
        const articleURL = importDefault(1920).getArticleURL(PREMIUM_TRIAL);
        obj1 = { variant: "heading-sm/medium", color: "text-default" };
        const obj14 = importDefault(1920);
        const tmp12 = closure_14;
        const tmp13 = closure_13;
        const tmp15 = premiumTrialOffer;
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
        obj1.children = tmp18(tmp4Result, navigateToPremium(3776).formatIntervalDuration(obj2), articleURL);
        obj.children = callback(navigateToPremium(4126).Text, obj1);
        const items2 = [callback(tmp15, obj), , ];
        obj3 = { style: tmp.closeButton, accessibilityRole: "button" };
        const intl = navigateToPremium(1212).intl;
        obj3.accessibilityLabel = intl.string(navigateToPremium(1212).t.cpT0Cq);
        obj3.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
        obj3.onPress = function onPress() {
          if (null != stateFromStores) {
            let obj = callback(tmp[11]);
            obj = { notice_type: tmp, trial_id: tmp2 };
            obj.track(outer1_6.APP_NOTICE_CLOSED, obj);
          }
          obj = { untilAtLeast: callback };
          callback(tmp[10]).dismiss(obj);
        };
        const obj4 = { width: 16, height: 16, color: tmp.closeIcon.color };
        obj3.children = callback(navigateToPremium(1273).CloseIcon, obj4);
        items2[1] = callback(navigateToPremium(4660).PressableOpacity, obj3);
        const obj5 = { style: tmp.primaryCTA };
        const intl2 = navigateToPremium(1212).intl;
        obj5.text = intl2.string(navigateToPremium(1212).t.J61px0);
        obj5.onPress = function onPress() {
          if (null != stateFromStores) {
            let obj = callback(tmp[11]);
            obj = { notice_type: tmp, trial_id: tmp2 };
            obj.track(outer1_6.APP_NOTICE_PRIMARY_CTA_OPENED, obj);
          }
          navigateToPremium();
        };
        obj5.renderIcon = function renderIcon() {
          return outer1_12(navigateToPremium(tmp[23]).NitroWheelIcon, { color: "white", size: "sm" });
        };
        obj5.renderLinearGradient = function renderLinearGradient() {
          const obj = { style: items, start: outer1_8.START, end: outer1_8.END };
          items = [tmp.linearGradient];
          tmp = callback(tmp[24]);
          obj.colors = outer1_17(stateFromStores);
          return outer1_12(tmp, obj);
        };
        items2[2] = callback(navigateToPremium(1273).ShinyButton, obj5);
        obj.children = items2;
        const obj8 = navigateToPremium(3776);
        const obj6 = { style: navigateToPremium.style, children: tmp12(tmp13, obj) };
        return callback(importDefault(5511), obj6);
      }
    }
    return null;
  } else {
    return null;
  }
  tmp4Result = importDefault(6678)(num, closure_15);
};
