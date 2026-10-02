// Module ID: 16613
// Function ID: 16614
// Name: YouScreenNavIconNitroSubscriber
// Dependencies: [32, 19, 6876, 12937, 2048, 21, 558, 576, 7504, 504, 16608, 6807, 2035, 1127, 16610, 8119, 2]

// Module 16613 (YouScreenNavIconNitroSubscriber)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import PremiumNitroNavigationStore2 from "PremiumNitroNavigationStore" /* 12937 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6876 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumNitroNavigationStore = PremiumNitroNavigationStore2;
let dependencyMap, onPress;

let _slicedToArray = _slicedToArray_mod;
const NitroHomeSectionId = PremiumNitroNavigationStore2.NitroHomeSectionId;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let closure_2;
  let closure_3;
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp = onPress;
  let obj = onPress(576);
  const cResult = obj.c(13);
  onPress = onPress.onPress;
  let showReferralNotificationDot = onPress.showReferralNotificationDot;
  const obj2 = onPress(7504);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj2.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferralTrialStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== showReferralNotificationDot) {
    const fn = function c() {
      const obj = { bypassFetch: !showReferralNotificationDot };
      return ReferralTrialStore.getReferralsRemaining(obj);
    };
    const items1 = [showReferralNotificationDot];
    cResult[1] = showReferralNotificationDot;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cooldownDurationMs: tmp(16608).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
    cResult[4] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[4];
  }
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = tmp(6807).useSelectedTimeRecurringDismissibleContent;
  tmp(6807);
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(2035).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  const tmp12 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, tmp9, undefined, true), 2);
  dependencyMap = tmp13;
  const tmp14 = tmp12[0] === tmp(2035).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  _slicedToArray = tmp14;
  if (cResult[5] === tmp12[1]) {
    if (cResult[6] === onPress) {
      let tmp15;
      let tmp16;
      if (cResult[7] === tmp14) {
        tmp15 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1127).intl;
        const stringResult = intl.string(tmp(1127).t.Ipxkog);
        cResult[9] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === tmp15) {
        let tmp18;
        if (cResult[11] === tmp14) {
          tmp18 = cResult[12];
        }
        return tmp18;
      }
      showReferralNotificationDot(16610);
      const tmp22 = <tmp21 IconComponent={tmp(8119).NitroWheelIcon} accessibilityLabel={tmp16} onPress={tmp15} showRedDot={tmp14} />;
      cResult[10] = tmp15;
      cResult[11] = tmp14;
      cResult[12] = tmp22;
      tmp18 = tmp22;
    }
  }
  class C {
    constructor() {
      const tmp = closure_3;
      if (tmp) {
        closure_2(ContentDismissActionType.TAKE_ACTION);
        const obj = { scrollToSectionId: NitroHomeSectionId.REFERRAL_PROGRAM };
        PremiumNitroNavigationStore.setState(obj);
      }
      onPress();
    }
  }
  cResult[5] = tmp12[1];
  cResult[6] = onPress;
  cResult[7] = tmp14;
  cResult[8] = C;
  tmp15 = C;
}) : ((onPress) => {
  let closure_2;
  let closure_3;
  onPress = onPress.onPress;
  let showReferralNotificationDot;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = onPress;
  let obj = onPress(7504);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  const items = [ReferralTrialStore];
  const items1 = [showReferralNotificationDot];
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const obj = { bypassFetch: !showReferralNotificationDot };
    return ReferralTrialStore.getReferralsRemaining(obj);
  }, items1);
  let prop = null;
  const useSelectedTimeRecurringDismissibleContent = tmp(6807).useSelectedTimeRecurringDismissibleContent;
  tmp(6807);
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(2035).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  const obj2 = { cooldownDurationMs: tmp(16608).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp6 = _slicedToArray(useSelectedTimeRecurringDismissibleContent(prop, obj2, undefined, true), 2);
  dependencyMap = tmp7;
  const tmp8 = tmp6[0] === tmp(2035).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  _slicedToArray = tmp8;
  const items2 = [tmp8, tmp6[1], onPress];
  const callback = react.useCallback(() => {
    const tmp = closure_3;
    if (tmp) {
      closure_2(ContentDismissActionType.TAKE_ACTION);
      const obj = { scrollToSectionId: NitroHomeSectionId.REFERRAL_PROGRAM };
      PremiumNitroNavigationStore.setState(obj);
    }
    onPress();
  }, items2);
  showReferralNotificationDot(16610);
  const intl = tmp(1127).intl;
  return <tmp10 IconComponent={tmp(8119).NitroWheelIcon} accessibilityLabel={intl.string(tmp(1127).t.Ipxkog)} onPress={callback} showRedDot={tmp8} />;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;
