// Module ID: 17301
// Function ID: 17302
// Name: DevToolsQuickActionsScreen
// Dependencies: [32, 5, 19, 17, 5005, 6531, 1390, 2065, 1204, 1206, 1389, 7828, 1084, 13843, 1391, 10965, 1207, 21, 5004, 587, 13927, 13842, 5904, 15949, 6707, 17302, 1999, 17318, 11018, 4837, 4840, 16312, 16314, 15271, 5699, 17193, 558, 576, 6072, 1630, 504, 4832, 17322, 17209, 7023, 7331, 1199, 16897, 5011, 16957, 17323, 10154, 1125, 9545, 6948, 6939, 7087, 13016, 13013, 5698, 13017, 17324, 7097, 1254, 562, 584, 1381, 2]

// Module 17301 (DevToolsQuickActionsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import ThemeConstants from "ThemeConstants" /* 1207 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import UserSettings from "UserSettings" /* 4832 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4837 */;
import dismissible_content from "dismissible_content" /* 4840 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5904 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import Constants2 from "Constants" /* 10965 */;
import NUFActionCreators from "NUFActionCreators" /* 13842 */;
import NUFConstants from "NUFConstants" /* 13843 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 13927 */;
import requestReviewModalDefault from "requestReviewModal" /* 15271 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 15949 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17209 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 17323 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6531 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1390 */;
import LocaleStore from "LocaleStore" /* 2065 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;
import UserStore from "UserStore" /* 1389 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7828 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap, updateLocaleResult, updateLocaleResult1;

let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_23;
let obj2;
let obj3;
function handleNewUserOnboarding() {
  obj = nuf_NUFActionCreators;
  obj.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  const obj2 = NUFActionCreators;
  obj2.startOnboarding();
}
function handleThemeChange(arg0) {
  obj = UserSettingsActionCreatorsDefault;
  obj.updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  const setPrefersReducedMotion = AccessibilityActionCreators.setPrefersReducedMotion;
  AccessibilityActionCreators;
  if (arg0) {
    str = "reduce";
  }
  const result = setPrefersReducedMotion(str);
}
function launchPasskeyPromoSheet() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const promise = asyncRequire(17318, dependencyMap.paths);
  promise.then((result) => {
    const _default = result.default;
    result = _default.openPasskeyUpsellPromoSheet();
  });
}
function showVibingWumpus() {
  obj = ModalActionCreatorsDefault;
  const obj2 = {
    onClose() {

    }
  };
  obj.pushLazy(asyncRequire(11018, dependencyMap.paths), obj2, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  obj = UserSettingsProtoActionCreators;
  const result = obj.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const obj2 = UserSettingsProtoActionCreators;
  const result1 = obj2.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", async (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const items = [asyncRequire(16312, dependencyMap.paths), asyncRequire(16314, dependencyMap.paths)];
  const allResult = all(items);
  allResult.then((result) => {
    const iter = result[Symbol.iterator]();
    let nextResult;
    if (iter !== undefined) {
      nextResult = iter.next();
    }
    let nextResult1;
    let tmp4 = tmp;
    const _default = nextResult.default;
    if (!tmp4) {
      tmp4 = tmp6;
      if (!tmp4) {
        nextResult1 = iter.next();
        tmp4 = tmp6;
      }
    }
    const TwoFAModalSetupSections = nextResult1.TwoFAModalSetupSections;
    if (!tmp4) {
      iter.return();
    }
    _default.open(TwoFAModalSetupSections.SUCCESS);
  });
}
function handleShowAppRatingModal() {
  return obj(...arguments);
}
let obj = function _handleShowAppRatingModal() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: requestReviewModalDefault(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          tmp = value;
          let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
          const open = closure_129_1(closure_129_2[34]).open;
          const tmp22 = closure_129_1(closure_129_2[34]);
          if (!tmp.ok) {
            const _HermesInternal = HermesInternal;
            str2 = "Review request failed: " + tmp.error;
          }
          obj = { text: str2, icon: closure_129_0(closure_129_2[35]).WrenchIcon };
          open("DEV_APP_RATING_REQUEST", obj);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const ThemeTypes = Constants.ThemeTypes;
const NewUserTypes = NUFConstants.NewUserTypes;
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = Constants2.VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = ThemeConstants.SystemThemeState;
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles(obj);
function launchMFA() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const promise = asyncRequire(17302, dependencyMap.paths);
  promise.then((openMFAModal) => {
    let items;
    obj = { ticket: "ticket", methods: items };
    items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsQuickActionsScreen() {
  let currentUser;
  let locale;
  let premiumTypeOverride;
  let setting;
  let showDevWidget;
  let socket;
  let stateFromStores;
  let theme;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  let useSystemTheme;
  let usingSystemTheme;
  const tmp2 = stateFromStores;
  obj = locale(stateFromStores[37]);
  const cResult = obj.c(102);
  const tmp4 = closure_24();
  let obj2 = locale(stateFromStores[38]);
  const isCheckpointEnabled = obj2.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  showDevWidget(stateFromStores[39])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore, LocaleStore, , ];
    items[2] = UnsyncedUserSettingsStore;
    items[3] = DevToolsSettingsStore;
    class R {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
    cResult[0] = items;
    cResult[1] = R;
    tmp7 = items;
    tmp8 = R;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = locale(tmp2[40]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
  ({ theme, usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class O {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = O;
    tmp15 = O;
    class R {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
  } else {
    tmp15 = cResult[3];
    tmp14 = cResult[2];
  }
  const tmpResult4 = locale(tmp2[40]);
  stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OverridePremiumTypeStore];
    class B {
      constructor() {
        return closure_1_9.getPremiumTypeOverride();
      }
    }
    cResult[4] = items2;
    cResult[5] = B;
    tmp19 = B;
    class R {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
  } else {
    tmp19 = cResult[5];
    tmp18 = cResult[4];
  }
  const tmpResult5 = locale(tmp2[40]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp18, tmp19);
  [tmp23, _asyncToGenerator] = stateFromStores1(setting.useState(false), 2);
  stateFromStores1(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = tmp(tmp2[41]).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class X {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[6] = items3;
    cResult[7] = X;
    tmp26 = X;
    class R {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
  } else {
    tmp26 = cResult[7];
    tmp25 = cResult[6];
  }
  const tmpResult6 = locale(tmp2[40]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp25, tmp26);
  if (cResult[8] !== locale) {
    class J {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[22]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[22]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
    cResult[8] = locale;
    class X {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[9] = J;
  } else {
    class J {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[22]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[22]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
  }
  if (tmp23) {
    class J {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[22]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[22]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[22]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[22]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
      closure_21(locale(tmp2[42]).default, {});
      class X {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
    } else {
      class J {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[22]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[22]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
    }
    class X {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
  } else {
    class J {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[22]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[22]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
    const container = tmp4.container;
    if (cResult[11] !== tmp30) {
      class J {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[22]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[22]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
      tmp32[0] = tmp30;
      class X {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
      cResult[12] = tmp32;
    } else {
      class J {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[22]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[22]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
    }
    class X {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    const items4 = [tmp4.content, tmp31];
    cResult[13] = tmp4.content;
    class R {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
    cResult[14] = tmp31;
    cResult[15] = items4;
  }
}) : (function DevToolsQuickActionsScreen() {
  let TableRow21;
  let closure_2;
  let closure_3;
  let currentUser;
  let intl;
  let intl2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let locale;
  let obj44;
  let obj9;
  let premiumTypeOverride;
  let setting;
  let showDevWidget;
  let socket;
  let tmp2Result;
  let tmp9;
  let useReducedMotion;
  let useSystemTheme;
  let usingSystemTheme;
  const tmp = closure_24();
  const tmp2 = locale;
  const tmp3 = dependencyMap;
  obj = locale(6072);
  let isCheckpointEnabled = obj.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  const tmp6 = showDevWidget(1630)();
  let obj2 = locale(504);
  const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  const theme = stateFromStoresObject.theme;
  let obj3 = locale(504);
  const items1 = [UserStore];
  dependencyMap = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj4 = locale(504);
  const items2 = [OverridePremiumTypeStore];
  _slicedToArray = obj4.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  [tmp9, _asyncToGenerator] = _slicedToArray(setting.useState(false), 2);
  const tmp8 = _slicedToArray(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = locale(4832).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  let obj5 = locale(504);
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = obj5.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp9) {
    return closure_21(tmp2(17322).default, {});
  } else {
    const tmp13 = closure_22;
    let obj6 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
    items4 = [tmp.content, ];
    let obj7 = { paddingBottom: tmp.content.padding + tmp6.bottom };
    items4[1] = obj7;
    const tmp15 = closure_21;
    const obj8 = { title: "General", hasIcons: false, children: closure_21(tmp2(7331).TableSwitchRow, obj9) };
    const TableRowGroup = tmp2(7023).TableRowGroup;
    obj9 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          obj = DevToolsActionCreators;
          const obj2 = { showDevWidget: !showDevWidget };
          return obj.updateDevToolsSettings(obj2);
        }
    };
    items5 = [closure_21(TableRowGroup, obj8), , , , , , , , , ];
    const obj10 = { size: showDevWidget(587).space.PX_16 };
    const Spacer = tmp2(1199).Spacer;
    items5[1] = closure_21(Spacer, obj10);
    const TableRowGroup2 = tmp2(7023).TableRowGroup;
    let str = "Light Theme";
    let TableSwitchRow = tmp2(7331).TableSwitchRow;
    const tmp14 = ScrollView;
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj11 = { title: "Appearance", hasIcons: true, children: items6 };
    const obj12 = { label: str, disabled: usingSystemTheme, icon: tmp15(tmp2(16897).ThemeLightIcon, {}), value: tmp2Result.isThemeLight(theme), onValueChange: handleThemeChange };
    tmp2Result = tmp2(5011);
    items6 = [tmp15(TableSwitchRow, obj12), ];
    const obj13 = { label: "Reduced Motion", icon: tmp15(tmp2(16957).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    const TableSwitchRow2 = tmp2(7331).TableSwitchRow;
    items6[1] = tmp15(TableSwitchRow2, obj13);
    items5[2] = tmp13(TableRowGroup2, obj11);
    const obj14 = { size: showDevWidget(587).space.PX_16 };
    const Spacer2 = tmp2(1199).Spacer;
    items5[3] = tmp15(Spacer2, obj14);
    const obj15 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_17.map((item) => {
          let label;
          let value;
          ({ label, value } = item);
          locale = value;
          obj = {
            onValueChange(arg0) {
              obj = OverridePremiumTypeActions;
              const result = obj.updateClientPremiumTypeOverride(arg0 ? locale : authStore4, closure_2);
            },
            label,
            icon: closure_1_21(locale(closure_2[51]).PencilIcon, {}),
            value: value === closure_3
          };
          const TableSwitchRow = locale(closure_2[45]).TableSwitchRow;
          return closure_1_21(TableSwitchRow, obj, label);
        })
    };
    const TableRowGroup3 = tmp2(7023).TableRowGroup;
    items5[4] = tmp15(TableRowGroup3, obj15);
    const obj16 = { size: showDevWidget(587).space.PX_16 };
    const Spacer3 = tmp2(1199).Spacer;
    items5[5] = tmp15(Spacer3, obj16);
    const obj17 = { title: intl.string(tmp2(1125).t["Aojq+L"]), hasIcons: true, children: items7 };
    const TableRowGroup4 = tmp2(7023).TableRowGroup;
    intl = tmp2(1125).intl;
    let str2 = "Change to en-US";
    const TableRow = tmp2(6939).TableRow;
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj18 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp12, icon: tmp15(tmp2(9545).LanguageIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    items7 = [tmp15(TableRow, obj18), , , , , , , , , , , , , , ];
    const obj19 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: tmp15(tmp2(7087).KeyIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow2 = tmp2(6939).TableRow;
    items7[1] = tmp15(TableRow2, obj19);
    const obj20 = { label: intl2.string(tmp2(1125).t.yoWDXU), subLabel: "Dismisses dev tools when launching.", onPress: handleNewUserOnboarding, icon: tmp15(tmp2(17193).WrenchIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow3 = tmp2(6939).TableRow;
    intl2 = tmp2(1125).intl;
    items7[2] = tmp15(TableRow3, obj20);
    const obj21 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: tmp15(tmp2(7087).KeyIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow4 = tmp2(6939).TableRow;
    items7[3] = tmp15(TableRow4, obj21);
    const obj22 = { label: "Show Passkey Promo Sheet", subLabel: "Skips eligibility checks. Dismisses dev tools when launching.", onPress: launchPasskeyPromoSheet, icon: tmp15(tmp2(7087).KeyIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow5 = tmp2(6939).TableRow;
    items7[4] = tmp15(TableRow5, obj22);
    const obj23 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: tmp15(tmp2(7087).KeyIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow6 = tmp2(6939).TableRow;
    items7[5] = tmp15(TableRow6, obj23);
    const obj24 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: tmp15(tmp2(7087).KeyIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow7 = tmp2(6939).TableRow;
    items7[6] = tmp15(TableRow7, obj24);
    let tmp15Result = isCheckpointEnabled;
    if (tmp15Result) {
      const obj25 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              obj = locale(closure_2[57]);
              const checkpointData = obj.fetchCheckpointData();
              const obj2 = locale(closure_2[58]);
              obj2.openCheckpoint("devtools");
            },
        icon: tmp15(tmp2(7087).KeyIcon, {}),
        trailing: tmp15(tmp2(6948).TableRowArrow, {})
      };
      const TableRow8 = tmp2(6939).TableRow;
      tmp15Result = tmp15(TableRow8, obj25);
    }
    items7[7] = tmp15Result;
    let tmp15Result4 = isCheckpointEnabled;
    if (tmp15Result4) {
      const obj26 = {
        label: "Reset Checkpoint",
        onPress: _asyncToGenerator(async (arg0, value) => {
              let closure_0;
              let v1;
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === showDevWidget) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      showDevWidget = 1;
                      const obj4 = tmp3(c2[57]);
                      c2 = 1;
                      const obj6 = { value: obj4.resetCheckpoint(), done: false };
                      return obj6;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    if (value) {
                      const obj2 = showDevWidget(c2[34]);
                      obj2.open("CHECKPOINT_RESET", { text: "success" });
                    } else {
                      obj = tmp3(c2[59]);
                      obj.presentError("error");
                    }
                    c2 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp13) {
                  c2 = 3;
                  throw tmp13;
                }
              }
            }),
        icon: tmp15(tmp2(7087).KeyIcon, {}),
        trailing: tmp15(tmp2(6948).TableRowArrow, {})
      };
      const TableRow9 = tmp2(6939).TableRow;
      tmp15Result4 = tmp15(TableRow9, obj26);
    }
    items7[8] = tmp15Result4;
    let tmp15Result5 = isCheckpointEnabled;
    if (tmp15Result5) {
      const obj27 = {
        label: "Launch Checkpoint with fake data",
        subLabel: "Use mock stats in place of your own",
        onPress() {
              obj = locale(closure_2[57]);
              const checkpointData = obj.fetchCheckpointData(locale(closure_2[60]).CheckpointMockStats.DEFAULT);
              const obj2 = locale(closure_2[58]);
              obj2.openCheckpoint("devtools");
            },
        icon: tmp15(tmp2(7087).KeyIcon, {}),
        trailing: tmp15(tmp2(6948).TableRowArrow, {})
      };
      const TableRow10 = tmp2(6939).TableRow;
      tmp15Result5 = tmp15(TableRow10, obj27);
    }
    items7[9] = tmp15Result5;
    let tmp15Result6 = isCheckpointEnabled;
    if (tmp15Result6) {
      const obj28 = {
        label: "Launch Checkpoint with No Personal Data",
        subLabel: "Use the no-shared-data flow with null stats",
        onPress() {
              obj = locale(closure_2[57]);
              const checkpointData = obj.fetchCheckpointData(locale(closure_2[60]).CheckpointMockStats.NO_PERSONAL_DATA);
              const obj2 = locale(closure_2[58]);
              obj2.openCheckpoint("devtools", false);
            },
        icon: tmp15(tmp2(7087).KeyIcon, {}),
        trailing: tmp15(tmp2(6948).TableRowArrow, {})
      };
      const TableRow11 = tmp2(6939).TableRow;
      tmp15Result6 = tmp15(TableRow11, obj28);
    }
    items7[10] = tmp15Result6;
    if (isCheckpointEnabled) {
      const obj29 = {
        label: "Launch Checkpoint with Zero Data",
        subLabel: "Use mock stats with every stat at zero",
        onPress() {
              obj = locale(closure_2[57]);
              const checkpointData = obj.fetchCheckpointData(locale(closure_2[60]).CheckpointMockStats.ZERO_DATA);
              const obj2 = locale(closure_2[58]);
              obj2.openCheckpoint("devtools");
            },
        icon: tmp15(tmp2(7087).KeyIcon, {}),
        trailing: tmp15(tmp2(6948).TableRowArrow, {})
      };
      const TableRow12 = tmp2(6939).TableRow;
      isCheckpointEnabled = tmp15(TableRow12, obj29);
    }
    items7[11] = isCheckpointEnabled;
    const obj30 = { label: "Test captcha", onPress: tmp2(17324).showCaptchaTestModal, icon: tmp15(tmp2(7087).KeyIcon, {}), trailing: tmp15(tmp2(6948).TableRowArrow, {}) };
    const TableRow13 = tmp2(6939).TableRow;
    items7[12] = tmp15(TableRow13, obj30);
    const obj31 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: tmp15(tmp2(7097).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    const TableSwitchRow3 = tmp2(7331).TableSwitchRow;
    items7[13] = tmp15(TableSwitchRow3, obj31);
    const obj32 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: tmp15(tmp2(17193).WrenchIcon, {}) };
    const TableRow14 = tmp2(6939).TableRow;
    items7[14] = tmp15(TableRow14, obj32);
    items5[6] = tmp13(TableRowGroup4, obj17);
    const obj33 = { size: showDevWidget(587).space.PX_16 };
    const Spacer4 = tmp2(1199).Spacer;
    items5[7] = tmp15(Spacer4, obj33);
    const obj34 = { title: "Crash Actions", hasIcons: true, children: items8 };
    const TableRowGroup5 = tmp2(7023).TableRowGroup;
    const obj35 = {
      icon: tmp15(tmp2(17193).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          obj = showDevWidget(closure_2[63]);
          return obj.crash();
        }
    };
    const TableRow15 = tmp2(6939).TableRow;
    items8 = [tmp15(TableRow15, obj35), , , , , ];
    const obj36 = {
      icon: tmp15(tmp2(17193).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    const TableRow16 = tmp2(6939).TableRow;
    items8[1] = tmp15(TableRow16, obj36);
    const obj37 = {
      icon: tmp15(tmp2(17193).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          _asyncToGenerator(true);
        }
    };
    const TableRow17 = tmp2(6939).TableRow;
    items8[2] = tmp15(TableRow17, obj37);
    const obj38 = {
      icon: tmp15(tmp2(17193).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          obj = locale(closure_2[64]);
          obj.crash();
        }
    };
    const TableRow18 = tmp2(6939).TableRow;
    items8[3] = tmp15(TableRow18, obj38);
    const obj39 = {
      icon: tmp15(tmp2(17193).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          obj = showDevWidget(closure_2[65]);
          obj.dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    const TableRow19 = tmp2(6939).TableRow;
    items8[4] = tmp15(TableRow19, obj39);
    const obj40 = {
      icon: tmp15(tmp2(17193).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          obj = showDevWidget(closure_2[65]);
          const dispatchResult = obj.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          dispatchResult.catch((error) => {
            obj = { error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" };
            const result = closure_0.resetSocketOnDispatchError(obj);
          });
        }
    };
    const TableRow20 = tmp2(6939).TableRow;
    items8[5] = tmp15(TableRow20, obj40);
    items5[8] = tmp13(TableRowGroup5, obj34);
    const tmp2Result2 = tmp2(1381);
    let isIOSResult = tmp2Result2.isIOS();
    if (isIOSResult) {
      const obj41 = { children: items9 };
      const obj42 = { size: showDevWidget(587).space.PX_16 };
      const Spacer5 = tmp2(1199).Spacer;
      items9 = [tmp15(Spacer5, obj42), ];
      const obj43 = { title: "Memory Actions", hasIcons: true, children: tmp15(TableRow21, obj44) };
      const TableRowGroup6 = tmp2(7023).TableRowGroup;
      obj44 = {
        icon: tmp15(tmp2(17193).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              obj = showDevWidget(closure_2[63]);
              return obj.triggerMemoryWarning();
            }
      };
      TableRow21 = tmp2(6939).TableRow;
      items9[1] = tmp15(TableRowGroup6, obj43);
      isIOSResult = tmp13(closure_23, obj41);
    }
    items5[9] = isIOSResult;
    return tmp13(tmp14, obj6);
  }
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default tmp5;
