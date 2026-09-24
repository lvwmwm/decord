// Module ID: 17278
// Function ID: 17279
// Name: YouScreenNavIconNitroSubscriber
// Dependencies: [32, 19, 7731, 13702, 2042, 21, 558, 568, 8352, 504, 17273, 7664, 2031, 1119, 17275, 8970, 2]

// Module 17278 (YouScreenNavIconNitroSubscriber)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7731 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 13702 */;

const require = fn;
const NitroHomeSectionId = fn(13702).NitroHomeSectionId;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = onPress(568).c(13);
  onPress = onPress.onPress;
  let showReferralNotificationDot = onPress.showReferralNotificationDot;
  let obj = onPress(568);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj2.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferralTrialStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== showReferralNotificationDot) {
    const fn = function c() {
      return ReferralTrialStore.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot });
    };
    const items1 = [showReferralNotificationDot];
    cResult[1] = showReferralNotificationDot;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  obj2 = onPress(8352);
  const stateFromStores = onPress(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cooldownDurationMs: tmp(17273).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
    cResult[4] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult = onPress(504);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(2031).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  const tmp11 = _slicedToArray(onPress(7664).useSelectedTimeRecurringDismissibleContent(prop, tmp9, undefined, true), 2);
  dependencyMap = tmp12;
  const tmp13 = tmp11[0] === onPress(2031).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  _slicedToArray = tmp13;
  if (cResult[5] === tmp11[1]) {
    if (cResult[6] === onPress) {
      if (cResult[7] === tmp13) {
        let tmp14 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t.Ipxkog);
        cResult[9] = stringResult;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp14) {
        if (cResult[11] === tmp13) {
          let tmp17 = cResult[12];
        }
        return tmp17;
      }
      const obj4 = { IconComponent: tmp(8970).NitroWheelIcon, accessibilityLabel: tmp15, onPress: tmp14, showRedDot: tmp13 };
      const tmp21 = jsx(showReferralNotificationDot(17275), { IconComponent: tmp(8970).NitroWheelIcon, accessibilityLabel: tmp15, onPress: tmp14, showRedDot: tmp13 });
      cResult[10] = tmp14;
      cResult[11] = tmp13;
      cResult[12] = tmp21;
      tmp17 = tmp21;
      const tmp20 = showReferralNotificationDot(17275);
    }
  }
  class C {
    constructor() {
      if (closure_3) {
        tmp = closure_2;
        tmp2 = ContentDismissActionType;
        tmp3 = closure_2(ContentDismissActionType.TAKE_ACTION);
        tmp4 = closure_6;
        obj = { scrollToSectionId: null };
        tmp5 = NitroHomeSectionId;
        obj.scrollToSectionId = NitroHomeSectionId.REFERRAL_PROGRAM;
        setStateResult = closure_6.setState(obj);
      }
      tmp7 = onPress();
      return;
    }
  }
  cResult[5] = tmp11[1];
  cResult[6] = onPress;
  cResult[7] = tmp13;
  cResult[8] = C;
  tmp14 = C;
}) : ((onPress) => {
  onPress = onPress.onPress;
  let showReferralNotificationDot;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  obj = onPress(8352);
  const items = [ReferralTrialStore];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = onPress(504).useStateFromStores(items, () => ReferralTrialStore.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  const tmpResult = onPress(504);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = tmp(2031).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  const tmpResult2 = onPress(7664);
  const tmp5 = _slicedToArray(tmpResult2.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: onPress(17273).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS }, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === onPress(2031).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  _slicedToArray = tmp7;
  const items2 = [tmp7, tmp5[1], onPress];
  const callback = noop.useCallback(() => {
    if (closure_3) {
      closure_2(ContentDismissActionType.TAKE_ACTION);
      const obj = { scrollToSectionId: NitroHomeSectionId.REFERRAL_PROGRAM };
      PremiumNitroNavigationStore.setState(obj);
    }
    onPress();
  }, items2);
  const obj3 = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const obj2 = { cooldownDurationMs: onPress(17273).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  obj3.IconComponent = onPress(8970).NitroWheelIcon;
  const intl = tmp(1119).intl;
  obj3.accessibilityLabel = intl.string(onPress(1119).t.Ipxkog);
  obj3.onPress = callback;
  obj3.showRedDot = tmp7;
  return jsx(showReferralNotificationDot(17275), { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null });
}));
