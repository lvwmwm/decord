// Module ID: 16626
// Function ID: 16627
// Name: YouExpiringTrialOfferCard
// Dependencies: [19, 17, 13266, 1074, 6852, 1374, 21, 1091, 4836, 576, 16627, 1241, 1115, 4421, 563, 6867, 6859, 16625, 2111, 4832, 4488, 5435, 1177, 8122, 5293, 6628, 2]
// Exports: default

// Module 16626 (YouExpiringTrialOfferCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1091 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import _modDef4421 from "module_4421" /* 4421 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import useCountdownDefault from "useCountdown" /* 6859 */;
import NoticeActionCreatorsDefault from "NoticeActionCreators" /* 16627 */;
import react from "react" /* 19 */;
import NoticeStore from "NoticeStore" /* 13266 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const HelpdeskUtilsDefault = tmp(2111);
const UserProfileCardDefault = tmp(6628);
const View = react_native.View;
({ AnalyticEvents: metroRequire, HelpdeskArticles: metroImportDefault, HorizontalGradient: metroImportAll, NoticeTypes: c9 } = Constants);
const Gradients = ColorConstants.Gradients;
let closure_11 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = 10 * DurationsDefault.Millis.SECOND;
let createStyles = createStyles_mod;
let obj = { header: { flexDirection: "row", alignItems: "flex-start", marginBottom: 16, marginRight: 32 }, closeButton: { position: "absolute", top: 16, right: 16 }, closeIcon: obj2, linearGradient: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, primaryCTA: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.round, gap: 4 };
let closure_16 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx");

export default function YouExpiringTrialOfferCard(navigateToPremium) {
  let Text;
  let intervalCount;
  let intl4;
  let intl5;
  let items2;
  let linearGradient;
  let obj10;
  let untilAtLeast;
  navigateToPremium = navigateToPremium.navigateToPremium;
  importDefault = undefined;
  dependencyMap = undefined;
  let shouldShowExpiringTrialOfferCard;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const style = navigateToPremium.style;
  let obj = _modDef4421();
  importDefault = obj.add(5, "days");
  const tmp3 = closure_16();
  dependencyMap = tmp3;
  const tmp4 = navigateToPremium;
  let obj2 = navigateToPremium(563);
  let items = [shouldShowExpiringTrialOfferCard];
  const stateFromStores = obj2.useStateFromStores(items, () => shouldShowExpiringTrialOfferCard.getNoticeType());
  let obj3 = navigateToPremium(6867);
  const premiumTrialOffer = obj3.usePremiumTrialOffer();
  let num = 0;
  const tmp7 = useCountdownDefault;
  if (null != premiumTrialOffer) {
    num = 0;
    if (null != premiumTrialOffer.expiresAt) {
      const expiresAt = premiumTrialOffer.expiresAt;
      num = expiresAt.getTime();
    }
  }
  const time = tmp7(num, closure_15);
  const tmp4Result = tmp4(16625);
  shouldShowExpiringTrialOfferCard = tmp4Result.useShouldShowExpiringTrialOfferCard();
  const items1 = [stateFromStores, shouldShowExpiringTrialOfferCard, premiumTrialOffer];
  const effect = stateFromStores.useEffect(() => {
    const tmp = shouldShowExpiringTrialOfferCard && null != stateFromStores && null != premiumTrialOffer;
    if (tmp) {
      const trialId = premiumTrialOffer.trialId;
      const obj2 = { notice_type: stateFromStores, trial_id: trialId };
      const obj = AnalyticsUtilsDefault;
      obj.track(metroRequire.APP_NOTICE_VIEWED, obj2);
    }
  }, items1);
  if (shouldShowExpiringTrialOfferCard) {
    if (null != premiumTrialOffer) {
      if (null != stateFromStores) {
        let PREMIUM_TRIAL;
        let formatResult;
        const getArticleURL = HelpdeskUtilsDefault.getArticleURL;
        HelpdeskUtilsDefault;
        if (premiumTrialOffer.trialId === closure_11) {
          PREMIUM_TRIAL = constants2.NITRO_TRIAL_FOR_ALL;
        } else {
          PREMIUM_TRIAL = constants2.PREMIUM_TRIAL;
        }
        const articleURL = getArticleURL(PREMIUM_TRIAL);
        let obj4 = { style: tmp3.header, children: closure_12(Text, obj10) };
        Text = tmp4(4832).Text;
        const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
        let interval;
        const formatIntervalDuration = tmp4(4488).formatIntervalDuration;
        tmp4(4488);
        const tmp16 = premiumTrialOffer;
        if (subscriptionTrial != null) {
          interval = subscriptionTrial.interval;
        }
        const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
        const obj5 = { intervalType: interval, intervalCount };
        intervalCount = undefined;
        if (subscriptionTrial2 != null) {
          intervalCount = subscriptionTrial2.intervalCount;
        }
        const result = formatIntervalDuration(obj5);
        if (time.days > 0) {
          const intl3 = tmp4(1115).intl;
          const obj6 = { days: time.days, trialPeriod: result, termsUrl: articleURL };
          formatResult = intl3.format(tmp4(1115).t.GPqVWT, obj6);
        } else if (time.hours > 0) {
          const intl2 = tmp4(1115).intl;
          const obj7 = { hours: time.hours, trialPeriod: result, termsUrl: articleURL };
          formatResult = intl2.format(tmp4(1115).t.WFMtg1, obj7);
        } else {
          const intl = tmp4(1115).intl;
          const format = intl.format;
          const _Math = Math;
          const obj8 = { minutes: Math.max(time.minutes, 1), trialPeriod: result, termsUrl: articleURL };
          const SxXB42 = tmp4(1115).t.SxXB42;
          formatResult = format(SxXB42, obj8);
        }
        const obj9 = { children: items2 };
        obj10 = { variant: "heading-sm/medium", color: "text-default", children: formatResult };
        items2 = [closure_12(tmp16, obj4), , ];
        const obj11 = {
          style: tmp3.closeButton,
          accessibilityRole: "button",
          accessibilityLabel: intl4.string(tmp4(1115).t.cpT0Cq),
          hitSlop: { top: 8, right: 8, bottom: 8, left: 8 },
          onPress() {
                  if (null != stateFromStores) {
                    const obj2 = { notice_type: tmp, trial_id: tmp2 };
                    const obj = AnalyticsUtilsDefault;
                    obj.track(metroRequire.APP_NOTICE_CLOSED, obj2);
                  }
                  const obj3 = NoticeActionCreatorsDefault;
                  const obj4 = { untilAtLeast };
                  obj3.dismiss(obj4);
                },
          children: closure_12(tmp4(1177).CloseIcon, size)
        };
        const PressableOpacity = tmp4(5435).PressableOpacity;
        intl4 = tmp4(1115).intl;
        size = { width: 16, height: 16, color: tmp3.closeIcon.color };
        items2[1] = closure_12(PressableOpacity, obj11);
        const obj12 = {
          style: tmp3.primaryCTA,
          text: intl5.string(tmp4(1115).t.J61px0),
          onPress() {
                  if (null != stateFromStores) {
                    const obj2 = { notice_type: tmp, trial_id: tmp2 };
                    const obj = AnalyticsUtilsDefault;
                    obj.track(metroRequire.APP_NOTICE_PRIMARY_CTA_OPENED, obj2);
                  }
                  navigateToPremium();
                },
          renderIcon() {
                  return closure_1_12(navigateToPremium(linearGradient[23]).NitroWheelIcon, { color: "white", size: "sm" });
                },
          renderLinearGradient() {
                  let PREMIUM_TIER_2_TRI_COLOR;
                  let items;
                  const obj = { style: items, start: metroImportAll.START, end: metroImportAll.END, colors: PREMIUM_TIER_2_TRI_COLOR };
                  items = [linearGradient.linearGradient];
                  const tmp = closure_12;
                  const tmp2 = LinearGradientDefault;
                  if (React4.PREMIUM_TIER_0_TRIAL_ENDING === stateFromStores) {
                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
                  } else if (tmp4.PREMIUM_TIER_2_TRIAL_ENDING === stateFromStores) {
                    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
                  } else {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const self = this;
                    const self2 = this;
                    const error = new Error("Unsupported notice type: " + tmp3);
                    throw error;
                  }
                  return tmp(tmp2, obj);
                }
        };
        const ShinyButton = tmp4(1177).ShinyButton;
        intl5 = tmp4(1115).intl;
        items2[2] = closure_12(ShinyButton, obj12);
        const obj13 = { style, children: closure_14(closure_13, obj9) };
        closure_14(closure_13, obj9);
        return closure_12(UserProfileCardDefault, obj13);
      }
    }
    return null;
  } else {
    return null;
  }
};
