// Module ID: 15010
// Function ID: 15011
// Name: SettingsScreenNotices
// Dependencies: [19, 17, 1390, 21, 5091, 587, 7723, 15011, 15012, 5919, 5918, 5906, 15019, 15020, 558, 576, 2]

// Module 15010 (SettingsScreenNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5918 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5919 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7723 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 15011 */;
import TinyBroncoSettingsNoticesLazy from "TinyBroncoSettingsNoticesLazy" /* 15012 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 15019 */;
import SensitiveContentFiltersNotices from "SensitiveContentFiltersNotices" /* 15020 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
let items1;
let items2;
let obj2;
let tmp;
const AgeVerificationUtils = tmp(5906);
function predicate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGatedResult) {
    const tmpResult = AgeVerificationUtils;
    isFeatureAgeGatedResult = !tmpResult.isAgeVerified();
  }
  return isFeatureAgeGatedResult;
}
const predicate2 = function predicate() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
const predicate3 = function predicate() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGatedResult) {
    const tmpResult = AgeVerificationUtils;
    isFeatureAgeGatedResult = !tmpResult.isAgeVerified();
  }
  return isFeatureAgeGatedResult;
};
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { noticeContainer: obj2, listHeaderNoticeContainer: { marginTop: nativeDefault.space.PX_16 } };
createStyles = createStyles.createStyles;
obj2 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
({ marginTop: nativeDefault.space.PX_16 });
let closure_6 = createStyles(obj);
const obj4 = { SENSITIVE_CONTENT_FILTERS: items, CONTENT_AND_SOCIAL: items1, DATA_AND_PRIVACY: items2 };
items = [{ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, , , ];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
items[1] = { order: 150, predicate: TinyBroncoSettingsNoticesLazy.shouldShowTinyBroncoUnconfirmedNotice, Component: TinyBroncoSettingsNoticesLazy.ContentFiltersUnconfirmedNotice };
({ order: 150, predicate: TinyBroncoSettingsNoticesLazy.shouldShowTinyBroncoUnconfirmedNotice, Component: TinyBroncoSettingsNoticesLazy.ContentFiltersUnconfirmedNotice });
items[2] = { order: 200, predicate, Component: AgeConfirmationNoticeDefault };
({ order: 200, predicate, Component: AgeConfirmationNoticeDefault });
items[3] = { order: 300, predicate: predicate2, Component: SensitiveContentFiltersNotices.SensitiveContentFiltersTeenNotice };
({ order: 300, predicate: predicate2, Component: SensitiveContentFiltersNotices.SensitiveContentFiltersTeenNotice });
items1 = [{ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, ];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
items1[1] = { order: 200, predicate: predicate3, Component: AgeConfirmationNoticeDefault };
({ order: 200, predicate: predicate3, Component: AgeConfirmationNoticeDefault });
items2 = [{ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }];
({ order: 100, predicate: FamilyCenterUtils.isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsScreenNotices(arg0) {
  let arr;
  let isListHeader;
  let screen;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(11);
  ({ screen, isListHeader } = arg0);
  closure_6();
  if (cResult[0] !== screen) {
    let tmp4;
    let tmp5;
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[2] = C;
      tmp4 = C;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[3] = tmp6;
      tmp5 = tmp6;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor(arg0) {
          return arg0.Component;
        }
      }
      cResult[4] = N;
      tmp7 = N;
    } else {
      class N {
        constructor(arg0) {
          return arg0.Component;
        }
      }
    }
    const arr2 = obj4[screen];
    const found = arr2.filter(tmp4);
    const sorted = found.sort(tmp5);
    const mapped = sorted.map(tmp7);
    cResult[0] = screen;
    cResult[1] = mapped;
    arr = mapped;
  } else {
    class N {
      constructor(arg0) {
        return arg0.Component;
      }
    }
  }
  if (0 !== arr.length) {
    class N {
      constructor(arg0) {
        return arg0.Component;
      }
    }
  }
  if (null == null) {
    class N {
      constructor(arg0) {
        return arg0.Component;
      }
    }
  } else {
    class N {
      constructor(arg0) {
        return arg0.Component;
      }
    }
    if (cResult[5] === null) {
      class N {
        constructor(arg0) {
          return arg0.Component;
        }
      }
      if (cResult[8] === tmp11) {
        class N {
          constructor(arg0) {
            return arg0.Component;
          }
        }
        return tmp15;
      }
      const tmp18 = <View style={tmp11}>{tmp12}</View>;
      cResult[8] = tmp11;
      cResult[9] = tmp12;
      cResult[10] = tmp18;
      tmp15 = tmp18;
    }
    cResult[5] = null;
    cResult[6] = screen;
    cResult[7] = jsx(null, {}, screen);
    const tmp14 = jsx(null, {}, screen);
  }
}) : (function SettingsScreenNotices(screen) {
  screen = screen.screen;
  let flag = screen.isListHeader;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [screen];
  const memo = react.useMemo(() => {
    const arr = obj4[screen];
    const found = arr.filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  let tmp4Result = null;
  if (null != memo) {
    const obj = { style: flag ? tmp.listHeaderNoticeContainer : tmp.noticeContainer, children: <memo key={screen} /> };
    tmp4Result = tmp4(View, obj);
  }
  return tmp4Result;
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default tmp3;
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };
