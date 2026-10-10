// Module ID: 17610
// Function ID: 17611
// Name: SettingsNavigator
// Dependencies: [32, 19, 17, 2129, 14944, 1085, 21, 9344, 5092, 587, 558, 576, 17611, 1200, 5088, 1504, 13726, 17612, 6683, 573, 6851, 6878, 14946, 7196, 14947, 6687, 14263, 4818, 6184, 1126, 16840, 17613, 14809, 17614, 38, 2]

// Module 17610 (SettingsNavigator)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import Pressables from "Pressables" /* 6184 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6683 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14946 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16840 */;
import SettingRendererTypes from "SettingRendererTypes" /* 17611 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2129 */;
import UserSettingSearchStore_mod from "UserSettingSearchStore" /* 14944 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9344 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function LeftAlignedHeaderTitle(usePersistentBadge) {
  let items;
  usePersistentBadge = usePersistentBadge.usePersistentBadge;
  const title = usePersistentBadge.title;
  const tmp = closure_13();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp3 = null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer;
  const tmp5 = authStore(Text_Text.Heading, { lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: tmp3, children: title });
  let tmp6 = tmp5;
  const tmp4 = authStore;
  if (null != persistentBadge) {
    const obj = { style: tmp.headerContainerRow, children: items };
    items = [tmp5, ];
    const obj2 = { badge: persistentBadge };
    items[1] = tmp4(closure_14, obj2);
    tmp6 = unpackModuleId(View, obj);
  }
  return tmp6;
}
let react = react_mod;
let View = react_native.View;
let UserSettingSearchStore = UserSettingSearchStore_mod;
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { statusBarSpacer: obj2, headerContainer: obj3, headerContainerRow: obj4, headerTitleWithBadge: { flexShrink: 1 }, backIcon: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, width: "100%" };
obj5 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingHeaderBadge(badge) {
  const obj = react2;
  const cResult = obj.c(1);
  if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: native.BetaSizes.SMALL };
      const BetaTag = tmp(1200).BetaTag;
      const tmp7 = authStore(BetaTag, obj2);
      cResult[0] = tmp7;
      first = tmp7;
    } else {
      first = cResult[0];
    }
    return first;
  }
}) : (function SettingHeaderBadge(badge) {
  if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
    const obj = { size: native.BetaSizes.SMALL };
    const BetaTag = tmp(1200).BetaTag;
    return authStore(BetaTag, obj);
  }
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsNavigator() {
  let Screen;
  let arr4;
  let beforeRemove;
  let closure_0;
  let contentStyle;
  let listeners;
  let params1;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let transitionStart;
  let tmp = _require;
  let tmp2 = params1;
  let obj = require("react");
  const cResult = obj.c(54);
  let tmp4 = closure_13();
  _require = tmp4;
  let obj2 = require("Link");
  const route = obj2.useRoute();
  const params = route.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants2.OVERVIEW;
  }
  const params2 = route.params;
  params1 = undefined;
  if (params2 != null) {
    params1 = params2.params;
  }
  const params3 = route.params;
  let onClose;
  if (params3 != null) {
    onClose = params3.onClose;
  }
  const tmpResult = tmp(tmp2[15]);
  navigation = tmpResult.useNavigation();
  const tmpResult8 = tmp(tmp2[16]);
  const commonTriggerPoint = tmpResult8.useCommonTriggerPoint(tmp(tmp2[17]).OpenUserSettingsTriggerPoint);
  if (cResult[0] !== screen) {
    const fn = function l() {
      let obj3;
      const obj2 = { destinationPane: screen, source: obj3 };
      obj3 = { page: metroImportAll.USER_SETTINGS };
      const obj = UserSettingsUtils;
      const result = obj.trackUserSettingsPaneViewed(obj2);
    };
    const items = [screen];
    cResult[0] = screen;
    cResult[1] = fn;
    cResult[2] = items;
    tmp13 = items;
    tmp12 = fn;
  } else {
    tmp12 = cResult[1];
    tmp13 = cResult[2];
  }
  const effect = navigation.useEffect(tmp12, tmp13);
  if (cResult[3] !== onClose) {
    class T {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    const items1 = [onClose];
    cResult[3] = onClose;
    cResult[4] = T;
    cResult[5] = items1;
    tmp16 = items1;
    tmp15 = T;
  } else {
    class T {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    tmp16 = cResult[5];
  }
  const effect1 = obj5.useEffect(tmp15, tmp16);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    const items2 = [LocaleStore];
    class E {
      constructor() {
        return LocaleStore.locale;
      }
    }
    cResult[6] = items2;
    cResult[7] = E;
    tmp19 = E;
    tmp18 = items2;
  } else {
    class T {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    tmp19 = cResult[7];
  }
  const tmpResult9 = tmp(tmp2[19]);
  const stateFromStores = tmpResult9.useStateFromStores(tmp18, tmp19);
  const tmp22 = screen(tmp2[20]);
  const analyticsLocations = tmp22(screen(tmp2[21]).USER_SETTINGS).analyticsLocations;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    const settingScreens = obj7.getSettingScreens();
    class E {
      constructor() {
        return LocaleStore.locale;
      }
    }
    arr4 = settingScreens;
  } else {
    class T {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        const obj = closure_0(params1[23]);
        return obj.trackAppUIViewed();
      }
    }
    const items3 = [];
    class E {
      constructor() {
        return LocaleStore.locale;
      }
    }
    cResult[10] = items3;
    tmp25 = items3;
    tmp24 = N;
  } else {
    class N {
      constructor() {
        const obj = closure_0(params1[23]);
        return obj.trackAppUIViewed();
      }
    }
    tmp25 = cResult[10];
  }
  const layoutEffect = obj5.useLayoutEffect(tmp24, tmp25);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        const obj = closure_0(params1[23]);
        return obj.trackAppUIViewed();
      }
    }
    const items4 = [];
    class E {
      constructor() {
        return LocaleStore.locale;
      }
    }
    cResult[12] = tmp29;
    tmp28 = tmp29;
    tmp27 = items4;
  } else {
    class N {
      constructor() {
        const obj = closure_0(params1[23]);
        return obj.trackAppUIViewed();
      }
    }
    tmp28 = cResult[12];
  }
  const effect2 = obj5.useEffect(tmp28, tmp27);
  const tmpResult10 = tmp(tmp2[25]);
  const accessibilityNativeStackOptions = tmpResult10.useAccessibilityNativeStackOptions();
  const tmpResult11 = tmp(tmp2[26]);
  const accessibilityNativeStackFocusTracking = tmpResult11.useAccessibilityNativeStackFocusTracking();
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const tmpResult12 = tmp(tmp2[27]);
  const token = tmpResult12.useToken(tmp21(tmp2[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmpResult13 = tmp(tmp2[27]);
  const token1 = tmpResult13.useToken(tmp21(tmp2[9]).colors.BORDER_SUBTLE);
  if (cResult[13] === token) {
    let tmp39;
    let tmp41;
    class N {
      constructor() {
        const obj = closure_0(params1[23]);
        return obj.trackAppUIViewed();
      }
    }
    View = tmp35;
    if (cResult[16] !== tmp4.backIcon) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      cResult[16] = tmp4.backIcon;
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
      cResult[17] = X;
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    class E {
      constructor() {
        return LocaleStore.locale;
      }
    }
    if (cResult[18] !== navigation) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      cResult[18] = navigation;
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
      cResult[19] = tmp38;
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      tmp40[0] = function transitionEnd(data) {
        let isActive = data.data.closing;
        const state = UserSettingSearchStore.getState();
        const query = state.query;
        const obj = UserSettingSearchStore;
        if (isActive) {
          isActive = state.isActive;
        }
        if (isActive) {
          isActive = "" === query;
        }
        if (isActive) {
          obj.setState({ isActive: false });
        }
      };
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
      tmp39 = tmp40;
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      tmp42[0] = function transitionEnd(data) {
        const closing = data.data.closing && null != UserSettingSearchStore.getField("selected");
        if (closing) {
          UserSettingSearchStore.setState({ selected: null });
        }
      };
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
      tmp41 = tmp42;
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    UserSettingSearchStore = tmp41;
    const tmpResult14 = tmp(tmp2[31]);
    const autoSettingsSearchSessionAnalytics = tmpResult14.useAutoSettingsSearchSessionAnalytics();
    const _Symbol3 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      closure_10(screen(tmp2[32]), {});
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    const _Symbol4 = Symbol;
    const statusBarSpacer = tmp4.statusBarSpacer;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      cResult[23] = tmp47;
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      cResult[24] = tmp49;
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    if (cResult[25] !== accessibilityNativeStackOptions) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      tmp51[1] = tmp46;
      tmp51[3] = tmp48;
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
      let merged = Object.assign(accessibilityNativeStackOptions);
      cResult[25] = accessibilityNativeStackOptions;
      cResult[26] = tmp51;
    } else {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
    }
    if (cResult[27] === beforeRemove) {
      class X {
        constructor(navigation) {
          return () => {
            let PressableOpacity;
            let intl;
            let obj2;
            let obj3;
            let obj4;
            const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
            obj2 = {
              onPress() {
                return navigation.goBack();
              },
              accessible: true,
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl2.t["13/7kX"]),
              hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
              children: authStore(View, obj3)
            };
            PressableOpacity = Pressables.PressableOpacity;
            intl = intl2.intl;
            obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
            obj4 = { navigation };
            return authStore(View, obj);
          };
        }
      }
      if (cResult[30] === tmp35) {
        class X {
          constructor(navigation) {
            return () => {
              let PressableOpacity;
              let intl;
              let obj2;
              let obj3;
              let obj4;
              const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
              obj2 = {
                onPress() {
                  return navigation.goBack();
                },
                accessible: true,
                accessibilityRole: "button",
                accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
                children: authStore(View, obj3)
              };
              PressableOpacity = Pressables.PressableOpacity;
              intl = intl2.intl;
              obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
              obj4 = { navigation };
              return authStore(View, obj);
            };
          }
        }
        const _Symbol6 = Symbol;
        class E {
          constructor() {
            return LocaleStore.locale;
          }
        }
        if (cResult[34] !== tmp55) {
          class X {
            constructor(navigation) {
              return () => {
                let PressableOpacity;
                let intl;
                let obj2;
                let obj3;
                let obj4;
                const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
                obj2 = {
                  onPress() {
                    return navigation.goBack();
                  },
                  accessible: true,
                  accessibilityRole: "button",
                  accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                  hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
                  children: authStore(View, obj3)
                };
                PressableOpacity = Pressables.PressableOpacity;
                intl = intl2.intl;
                obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
                obj4 = { navigation };
                return authStore(View, obj);
              };
            }
          }
          let obj3 = { name: constants2.OVERVIEW, options: tmp55, listeners: tmp39, getComponent: tmp57 };
          class E {
            constructor() {
              return LocaleStore.locale;
            }
          }
          cResult[34] = tmp55;
          cResult[35] = closure_10(Screen.Screen, obj3);
          const tmp60 = closure_10(Screen.Screen, obj3);
        } else {
          class X {
            constructor(navigation) {
              return () => {
                let PressableOpacity;
                let intl;
                let obj2;
                let obj3;
                let obj4;
                const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
                obj2 = {
                  onPress() {
                    return navigation.goBack();
                  },
                  accessible: true,
                  accessibilityRole: "button",
                  accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                  hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
                  children: authStore(View, obj3)
                };
                PressableOpacity = Pressables.PressableOpacity;
                intl = intl2.intl;
                obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
                obj4 = { navigation };
                return authStore(View, obj);
              };
            }
          }
        }
        if (cResult[36] === tmp35) {
          class X {
            constructor(navigation) {
              return () => {
                let PressableOpacity;
                let intl;
                let obj2;
                let obj3;
                let obj4;
                const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
                obj2 = {
                  onPress() {
                    return navigation.goBack();
                  },
                  accessible: true,
                  accessibilityRole: "button",
                  accessibilityLabel: intl.string(intl2.t["13/7kX"]),
                  hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
                  children: authStore(View, obj3)
                };
                PressableOpacity = Pressables.PressableOpacity;
                intl = intl2.intl;
                obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
                obj4 = { navigation };
                return authStore(View, obj);
              };
            }
          }
        }
        const mapped = arr4.map((item) => {
          let tmp5;
          let tmp = onClose(item, 2);
          const first = tmp[0];
          let tmp3 = tmp[1];
          let component = tmp3;
          let obj = {
            name: tmp3.route,
            options(navigation) {
              let flag;
              let obj2;
              let obj4;
              let usePersistentBadge;
              function headerTitle(children) {
                const obj = { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge };
                return closure_3_10(LeftAlignedHeaderTitle, obj);
              }
              let obj = { title: obj2.getSettingTitle(first), headerLeft: LocaleStore(navigation), headerBackVisible: false, contentStyle: View, headerShadowVisible: flag };
              navigation = navigation.navigation;
              const navigationOptions = component.navigationOptions;
              flag = undefined;
              obj2 = SettingRendererUtils;
              const tmp = component;
              if (navigationOptions != null) {
                flag = navigationOptions.headerShadowVisible;
              }
              if (flag == null) {
                flag = true;
              }
              if (null != tmp.usePersistentBadge) {
                obj4 = { headerTitle };
                const obj3 = { headerTitle };
              } else {
                obj4 = {};
              }
              const merged = Object.assign(obj4);
              return obj;
            },
            getComponent() {
              component = component.getComponent();
              const tmp2 = _modDef38;
              const tmp3 = null != component;
              tmp2(tmp3, "[Settings Navigator] Invalid component for setting: " + first);
              return component;
            },
            initialParams: tmp5,
            listeners
          };
          tmp5 = undefined;
          Screen = Screen.Screen;
          const tmp4 = closure_1_10;
          if (component === tmp3.route) {
            tmp5 = params1;
          }
          return tmp4(Screen, obj, first);
        });
        cResult[36] = tmp35;
        cResult[37] = tmp36;
        cResult[38] = params1;
        cResult[39] = screen;
        cResult[40] = mapped;
      }
      function re(navigation) {
        let intl;
        const obj = { title: intl.string(intl2.t["3D5yo/"]), headerLeft: LocaleStore(navigation), headerBackVisible: false, headerShadowVisible: false, contentStyle: View };
        navigation = navigation.navigation;
        intl = intl2.intl;
        return obj;
      }
      class E {
        constructor() {
          return LocaleStore.locale;
        }
      }
      cResult[30] = tmp35;
      cResult[31] = tmp36;
      cResult[32] = re;
    }
    let obj4 = { beforeRemove, transitionStart };
    cResult[27] = beforeRemove;
    cResult[28] = transitionStart;
    cResult[29] = obj4;
  }
  const obj6 = { backgroundColor: token, borderTopWidth: 1, borderTopColor: token1 };
  cResult[13] = token;
  cResult[14] = token1;
  cResult[15] = obj6;
}) : (function SettingsNavigator() {
  let Navigator;
  let Screen;
  let beforeRemove;
  let closure_0;
  let closure_4;
  let items4;
  let items5;
  let obj5;
  let obj6;
  let params1;
  let tmp2Result12;
  let tmp2Result13;
  let transitionStart;
  let tmp = closure_13();
  _require = tmp;
  let tmp2 = _require;
  let tmp3 = params1;
  let obj = require("Link");
  const route = obj.useRoute();
  const params = route.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants2.OVERVIEW;
  }
  const params2 = route.params;
  params1 = undefined;
  if (params2 != null) {
    params1 = params2.params;
  }
  const params3 = route.params;
  let onClose;
  if (params3 != null) {
    onClose = params3.onClose;
  }
  const tmp2Result = tmp2(tmp3[15]);
  react = tmp2Result.useNavigation();
  const tmp2Result8 = tmp2(tmp3[16]);
  const commonTriggerPoint = tmp2Result8.useCommonTriggerPoint(tmp2(tmp3[17]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = react.useEffect(() => {
    let obj3;
    obj2 = { destinationPane: screen, source: obj3 };
    obj3 = { page: metroImportAll.USER_SETTINGS };
    const obj = UserSettingsUtils;
    const result = obj.trackUserSettingsPaneViewed(obj2);
  }, items);
  const items1 = [onClose];
  const effect1 = react.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items1);
  const items2 = [closure_6];
  const tmp2Result9 = tmp2(tmp3[19]);
  const stateFromStores = tmp2Result9.useStateFromStores(items2, () => closure_6.locale);
  const tmp13 = screen(tmp3[20]);
  const analyticsLocations = tmp13(screen(tmp3[21]).USER_SETTINGS).analyticsLocations;
  const memo = react.useMemo(() => {
    const obj = closure_0(params1[22]);
    return obj.getSettingScreens();
  }, []);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(params1[23]);
    return obj.trackAppUIViewed();
  }, []);
  const effect2 = react.useEffect(() => {
    const obj = screen(params1[24]);
    return obj.validate();
  }, []);
  const tmp2Result10 = tmp2(tmp3[25]);
  const accessibilityNativeStackOptions = tmp2Result10.useAccessibilityNativeStackOptions();
  const tmp2Result11 = tmp2(tmp3[26]);
  const accessibilityNativeStackFocusTracking = tmp2Result11.useAccessibilityNativeStackFocusTracking();
  let obj2 = { backgroundColor: tmp2Result12.useToken(screen(tmp3[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND), borderTopWidth: 1, borderTopColor: tmp2Result13.useToken(screen(tmp3[9]).colors.BORDER_SUBTLE) };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  tmp2Result12 = tmp2(tmp3[27]);
  const items3 = [tmp.backIcon];
  tmp2Result13 = tmp2(tmp3[27]);
  closure_6 = react.useCallback((navigation) => () => {
    let PressableOpacity;
    let intl;
    let obj3;
    let obj4;
    const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
    obj2 = {
      onPress() {
        return navigation.goBack();
      },
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl2.t["13/7kX"]),
      hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
      children: authStore(View, obj3)
    };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
    obj4 = { navigation };
    return authStore(View, obj);
  }, items3);
  const memo1 = react.useMemo(() => {
    let obj = {
      transitionEnd(data) {
        let isActive = data.data.closing;
        const obj = state;
        state = state.getState();
        const query = state.query;
        if (isActive) {
          isActive = state.isActive;
        }
        if (isActive) {
          isActive = "" === query;
        }
        if (isActive) {
          obj.setState({ isActive: false });
        }
      }
    };
    return obj;
  }, []);
  const listeners = react.useMemo(() => ({
    transitionEnd(data) {
      const closing = data.data.closing && null != listeners.getField("selected");
      if (closing) {
        listeners.setState({ selected: null });
      }
    }
  }), []);
  const tmp2Result14 = tmp2(tmp3[31]);
  const autoSettingsSearchSessionAnalytics = tmp2Result14.useAutoSettingsSearchSessionAnalytics();
  let obj3 = { value: analyticsLocations, children: items4 };
  const AnalyticsLocationProvider = tmp2(tmp3[20]).AnalyticsLocationProvider;
  items4 = [closure_10(screen(tmp3[32]), {}), ];
  let obj4 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape: function handleAccessibilityEscape() {
      const obj = closure_4;
      if (closure_4.canGoBack()) {
        obj.goBack();
      }
    },
    children: closure_11(Navigator, obj5)
  };
  Navigator = Screen.Navigator;
  obj5 = { id: "settings-navigator", screenOptions: obj6, screenListeners: { beforeRemove, transitionStart }, initialRouteName: screen, children: items5 };
  obj6 = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      const obj = { title: children.children };
      return closure_1_10(LeftAlignedHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false }
  };
  let merged = Object.assign(accessibilityNativeStackOptions);
  items5 = [, ];
  const obj7 = {
    name: constants2.OVERVIEW,
    options(navigation) {
      let intl;
      const obj = { title: intl.string(intl2.t["3D5yo/"]), headerLeft: closure_6(navigation), headerBackVisible: false, headerShadowVisible: false, contentStyle: obj2 };
      navigation = navigation.navigation;
      intl = intl2.intl;
      return obj;
    },
    listeners: memo1,
    getComponent() {
      return closure_0(params1[33]).default;
    }
  };
  items5[0] = closure_10(Screen.Screen, obj7);
  items5[1] = memo.map((item) => {
    let tmp;
    let tmp2;
    let tmp4;
    [tmp, tmp2] = item;
    let obj = {
      name: tmp2.route,
      options(navigation) {
        let flag;
        let obj4;
        let usePersistentBadge;
        function headerTitle(children) {
          const obj = { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge };
          return closure_3_10(LeftAlignedHeaderTitle, obj);
        }
        let obj = { title: obj2.getSettingTitle(closure_1_0), headerLeft: closure_6(navigation), headerBackVisible: false, contentStyle: obj2, headerShadowVisible: flag };
        navigation = navigation.navigation;
        obj2 = SettingRendererUtils;
        const navigationOptions = component.navigationOptions;
        flag = undefined;
        const tmp = component;
        if (navigationOptions != null) {
          flag = navigationOptions.headerShadowVisible;
        }
        if (flag == null) {
          flag = true;
        }
        if (null != tmp.usePersistentBadge) {
          obj4 = { headerTitle };
          const obj3 = { headerTitle };
        } else {
          obj4 = {};
        }
        const merged = Object.assign(obj4);
        return obj;
      },
      getComponent() {
        component = component.getComponent();
        const tmp2 = _modDef38;
        const tmp3 = null != component;
        tmp2(tmp3, "[Settings Navigator] Invalid component for setting: " + closure_1_0);
        return component;
      },
      initialParams: tmp4,
      listeners
    };
    tmp4 = undefined;
    let tmp3 = closure_1_10;
    Screen = Screen.Screen;
    if (screen === tmp2.route) {
      tmp4 = params1;
    }
    return tmp3(Screen, obj, tmp);
  });
  items4[1] = closure_10(obj2, obj4);
  return closure_11(AnalyticsLocationProvider, obj3);
}));
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;
