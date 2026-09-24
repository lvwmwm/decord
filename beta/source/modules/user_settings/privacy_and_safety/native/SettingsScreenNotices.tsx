// Module ID: 15090
// Function ID: 15091
// Name: SettingsScreenNotices
// Dependencies: [19, 17, 1376, 21, 4790, 580, 7871, 15091, 15092, 5674, 5675, 5002, 15099, 15100, 558, 568, 2]

// Module 15090 (SettingsScreenNotices)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5002 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5674 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5675 */;
import FamilyCenterSettingsNoticeDefault from "FamilyCenterSettingsNotice" /* 15091 */;
import AgeConfirmationNoticeDefault from "AgeConfirmationNotice" /* 15099 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj2 = { noticeContainer: { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 }, listHeaderNoticeContainer: null };
const obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16 };
obj2.listHeaderNoticeContainer = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const obj5 = { SENSITIVE_CONTENT_FILTERS: null, CONTENT_AND_SOCIAL: null, DATA_AND_PRIVACY: null };
const obj4 = { marginTop: nativeDefault.space.PX_16 };
let items = [{ order: 100, predicate: fn(7871).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, , , ];
const obj6 = { order: 100, predicate: fn(7871).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items[1] = { order: 150, predicate: fn(15092).shouldShowTinyBroncoUnconfirmedNotice, Component: fn(15092).ContentFiltersUnconfirmedNotice };
const obj7 = { order: 150, predicate: fn(15092).shouldShowTinyBroncoUnconfirmedNotice, Component: fn(15092).ContentFiltersUnconfirmedNotice };
items[2] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
const obj8 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
items[3] = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(15100).SensitiveContentFiltersTeenNotice
};
obj5.SENSITIVE_CONTENT_FILTERS = items;
const obj9 = {
  order: 300,
  predicate() {
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return false === nsfwAllowed;
  },
  Component: fn(15100).SensitiveContentFiltersTeenNotice
};
const items1 = [{ order: 100, predicate: fn(7871).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }, ];
const obj10 = { order: 100, predicate: fn(7871).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
items1[1] = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
obj5.CONTENT_AND_SOCIAL = items1;
const obj11 = {
  order: 200,
  predicate() {
    let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = !AgeVerificationUtils.isAgeVerified();
      const tmpResult = AgeVerificationUtils;
    }
    return isFeatureAgeGatedResult;
  },
  Component: AgeConfirmationNoticeDefault
};
const items2 = [{ order: 100, predicate: fn(7871).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault }];
obj5.DATA_AND_PRIVACY = items2;
const ReactCompilerGating = fn(558);
const obj12 = { order: 100, predicate: fn(7871).isParentallyControlled, Component: FamilyCenterSettingsNoticeDefault };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsScreenNotices.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ screen, isListHeader } = arg0);
  closure_6();
  if (cResult[0] !== screen) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[2] = C;
      const tmp4 = C;
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
      const tmp5 = tmp6;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      cResult[4] = tmp8;
      const tmp7 = tmp8;
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    const found = obj5[screen].filter(tmp4);
    const sorted = found.sort(tmp5);
    const mapped = sorted.map(tmp7);
    cResult[0] = screen;
    cResult[1] = mapped;
  } else {
    class C {
      constructor(arg0) {
        return arg0.predicate();
      }
    }
    if (0 !== arr.length) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    }
    if (null == null) {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
    } else {
      class C {
        constructor(arg0) {
          return arg0.predicate();
        }
      }
      if (cResult[5] === tmp13) {
        class C {
          constructor(arg0) {
            return arg0.predicate();
          }
        }
        if (cResult[8] === tmp14) {
          class C {
            constructor(arg0) {
              return arg0.predicate();
            }
          }
          return tmp18;
        }
        const obj2 = { style: tmp14, children: tmp15 };
        const tmp21 = <View style={tmp14}>{tmp15}</View>;
        cResult[8] = tmp14;
        cResult[9] = tmp15;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      }
      const tmp17 = <tmp13 key={screen} />;
      cResult[5] = tmp13;
      cResult[6] = screen;
      cResult[7] = tmp17;
    }
  }
}) : ((screen) => {
  screen = screen.screen;
  let flag = screen.isListHeader;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_6();
  const items = [screen];
  const memo = noop.useMemo(() => {
    const found = obj5[screen].filter((predicate) => predicate.predicate());
    const sorted = found.sort((order, order2) => order.order - order2.order);
    const mapped = sorted.map((Component) => Component.Component);
    let first = null;
    if (0 !== mapped.length) {
      first = mapped[0];
    }
    return first;
  }, items);
  if (null == memo) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj.style = flag ? obj.listHeaderNoticeContainer : obj.noticeContainer;
    obj.children = <memo key={screen} />;
    <View style={null}>{null}</View>;
    const tmp4 = flag ? obj.listHeaderNoticeContainer : obj.noticeContainer;
  }
});
export const SettingsScreen = { SENSITIVE_CONTENT_FILTERS: "SENSITIVE_CONTENT_FILTERS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY" };
