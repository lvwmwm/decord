// Module ID: 15210
// Function ID: 15211
// Name: DevToolsQuickActionsScreen
// Dependencies: [32, 5, 19, 17, 4826, 5590, 1379, 2115, 1194, 1196, 1378, 7136, 1086, 12095, 1380, 9557, 1197, 21, 4837, 588, 12157, 585, 12094, 8656, 14000, 5040, 15211, 1987, 9611, 2032, 2035, 14303, 14305, 13243, 4531, 15103, 558, 576, 5083, 1619, 504, 2027, 15227, 15118, 5997, 6621, 1189, 14802, 4687, 14862, 15228, 9829, 1127, 14958, 5923, 5916, 6374, 15229, 15232, 15270, 6384, 1243, 562, 1370, 2]

// Module 15210 (DevToolsQuickActionsScreen)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import ThemeConstants from "ThemeConstants" /* 1197 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import UserSettings from "UserSettings" /* 2027 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2032 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8656 */;
import Constants2 from "Constants" /* 9557 */;
import NUFActionCreators from "NUFActionCreators" /* 12094 */;
import NUFConstants from "NUFConstants" /* 12095 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12157 */;
import requestReviewModalDefault from "requestReviewModal" /* 13243 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14000 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15118 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 15228 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5590 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1379 */;
import LocaleStore from "LocaleStore" /* 2115 */;
import ThemeStore from "ThemeStore" /* 1194 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1196 */;
import UserStore from "UserStore" /* 1378 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7136 */;
import PremiumConstants from "PremiumConstants" /* 1380 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
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
  const obj2 = DispatcherDefault;
  obj2.wait(NUFActionCreators.startOnboarding);
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
function showVibingWumpus() {
  obj = ModalActionCreatorsDefault;
  const obj2 = {
    onClose() {

    }
  };
  obj.pushLazy(asyncRequire(9611, dependencyMap.paths), obj2, VIBING_WUMPUS_MODAL_KEY);
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
  const items = [asyncRequire(14303, dependencyMap.paths), asyncRequire(14305, dependencyMap.paths)];
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
    let str2;
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
          obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          const obj5 = {
            key: "DEV_APP_RATING_REQUEST",
            icon() {
                    return closure_1_21(closure_1_0(closure_1_2[35]).WrenchIcon, {});
                  },
            content: str2,
            toastDurationMs: 6000
          };
          str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
          const open = closure_129_1(closure_129_2[34]).open;
          const tmp19 = closure_129_1(closure_129_2[34]);
          if (!tmp.ok) {
            const _HermesInternal = HermesInternal;
            str2 = "Review request failed: " + tmp.error;
          }
          open(obj5);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
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
  const promise = asyncRequire(15211, dependencyMap.paths);
  promise.then((openMFAModal) => {
    let items;
    obj = { ticket: "ticket", methods: items };
    items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  obj = locale(stateFromStores[37]);
  const cResult = obj.c(92);
  const tmp4 = closure_24();
  let obj2 = locale(stateFromStores[38]);
  const isCheckpointEnabled = obj2.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  showDevWidget(stateFromStores[39])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
    class T {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp7 = items;
    tmp8 = T;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = locale(stateFromStores[40]);
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
    class T {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
  } else {
    tmp15 = cResult[3];
    tmp14 = cResult[2];
  }
  const tmpResult4 = locale(stateFromStores[40]);
  stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OverridePremiumTypeStore];
    class G {
      constructor() {
        return closure_1_9.getPremiumTypeOverride();
      }
    }
    cResult[4] = items2;
    cResult[5] = G;
    tmp19 = G;
    class T {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
  } else {
    tmp19 = cResult[5];
    tmp18 = cResult[4];
  }
  const tmpResult5 = locale(stateFromStores[40]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp18, tmp19);
  [tmp23, _asyncToGenerator] = stateFromStores1(setting.useState(false), 2);
  stateFromStores1(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = tmp(tmp2[41]).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [AccessibilityStore];
    class K {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[6] = items3;
    cResult[7] = K;
    tmp26 = K;
    class T {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
  } else {
    tmp26 = cResult[7];
    tmp25 = cResult[6];
  }
  const tmpResult6 = locale(stateFromStores[40]);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp25, tmp26);
  if (cResult[8] !== locale) {
    class Q {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[23]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[23]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
    cResult[8] = locale;
    class K {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[9] = Q;
  } else {
    class Q {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[23]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[23]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
  }
  if (tmp23) {
    class Q {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[23]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[23]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class Q {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[23]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[23]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
      closure_21(locale(stateFromStores[42]).default, {});
      class K {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
    } else {
      class Q {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[23]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[23]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
    }
    class K {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
  } else {
    class Q {
      constructor() {
        if ("en-US" !== locale) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[23]);
          updateLocaleResult = obj2.updateLocale("en-US");
        } else {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[23]);
          str = "pt-BR";
          updateLocaleResult1 = obj.updateLocale("pt-BR");
        }
        return;
      }
    }
    const container = tmp4.container;
    if (cResult[11] !== tmp30) {
      class Q {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[23]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[23]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
      tmp32[0] = tmp30;
      class K {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
      cResult[12] = tmp32;
    } else {
      class Q {
        constructor() {
          if ("en-US" !== locale) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[23]);
            updateLocaleResult = obj2.updateLocale("en-US");
          } else {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[23]);
            str = "pt-BR";
            updateLocaleResult1 = obj.updateLocale("pt-BR");
          }
          return;
        }
      }
    }
    class K {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    const items4 = [tmp4.content, tmp31];
    cResult[13] = tmp4.content;
    class T {
      constructor() {
        obj = { theme: closure_1_11.theme, usingSystemTheme: closure_1_12.useSystemTheme === closure_1_20.ON, locale: closure_1_10.locale, showDevWidget: closure_1_14.showDevWidget };
        return obj;
      }
    }
    cResult[14] = tmp31;
    cResult[15] = items4;
  }
}) : (() => {
  let TableRow17;
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
  let obj40;
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
  obj = locale(5083);
  let isCheckpointEnabled = obj.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  const tmp6 = showDevWidget(1619)();
  let obj2 = locale(504);
  const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  const theme = stateFromStoresObject.theme;
  const items1 = [UserStore];
  const obj3 = locale(504);
  dependencyMap = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const items2 = [OverridePremiumTypeStore];
  const obj4 = locale(504);
  _slicedToArray = obj4.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  [tmp9, _asyncToGenerator] = setting.useState(false);
  _slicedToArray(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = locale(2027).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const obj5 = locale(504);
  const stateFromStores = obj5.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp9) {
    return closure_21(tmp2(15227).default, {});
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
    items4 = [tmp.content, ];
    const obj7 = { paddingBottom: tmp.content.padding + tmp6.bottom };
    items4[1] = obj7;
    const tmp15 = closure_21;
    const obj8 = { title: "General", hasIcons: false, children: closure_21(tmp2(6621).TableSwitchRow, obj9) };
    const TableRowGroup = tmp2(5997).TableRowGroup;
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
    const obj10 = { size: showDevWidget(588).space.PX_16 };
    const Spacer = tmp2(1189).Spacer;
    items5[1] = closure_21(Spacer, obj10);
    const TableRowGroup2 = tmp2(5997).TableRowGroup;
    let str = "Light Theme";
    let TableSwitchRow = tmp2(6621).TableSwitchRow;
    const tmp14 = ScrollView;
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj11 = { title: "Appearance", hasIcons: true, children: items6 };
    const obj12 = { label: str, disabled: usingSystemTheme, icon: tmp15(tmp2(14802).ThemeLightIcon, {}), value: tmp2Result.isThemeLight(theme), onValueChange: handleThemeChange };
    tmp2Result = tmp2(4687);
    items6 = [tmp15(TableSwitchRow, obj12), ];
    const obj13 = { label: "Reduced Motion", icon: tmp15(tmp2(14862).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    const TableSwitchRow2 = tmp2(6621).TableSwitchRow;
    items6[1] = tmp15(TableSwitchRow2, obj13);
    items5[2] = closure_22(TableRowGroup2, obj11);
    const obj14 = { size: showDevWidget(588).space.PX_16 };
    const Spacer2 = tmp2(1189).Spacer;
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
    const TableRowGroup3 = tmp2(5997).TableRowGroup;
    items5[4] = tmp15(TableRowGroup3, obj15);
    const obj16 = { size: showDevWidget(588).space.PX_16 };
    const Spacer3 = tmp2(1189).Spacer;
    items5[5] = tmp15(Spacer3, obj16);
    const obj17 = { title: intl.string(tmp2(1127).t["Aojq+L"]), hasIcons: true, children: items7 };
    const TableRowGroup4 = tmp2(5997).TableRowGroup;
    intl = tmp2(1127).intl;
    let str2 = "Change to en-US";
    const TableRow = tmp2(5916).TableRow;
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj18 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp12, icon: tmp15(tmp2(14958).LanguageIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    items7 = [tmp15(TableRow, obj18), , , , , , , , , , ];
    const obj19 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: tmp15(tmp2(6374).KeyIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    const TableRow2 = tmp2(5916).TableRow;
    items7[1] = tmp15(TableRow2, obj19);
    const obj20 = { label: intl2.string(tmp2(1127).t.yoWDXU), subLabel: "Dismisses dev tools when launching.", onPress: handleNewUserOnboarding, icon: tmp15(tmp2(15103).WrenchIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    const TableRow3 = tmp2(5916).TableRow;
    intl2 = tmp2(1127).intl;
    items7[2] = tmp15(TableRow3, obj20);
    const obj21 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: tmp15(tmp2(6374).KeyIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    const TableRow4 = tmp2(5916).TableRow;
    items7[3] = tmp15(TableRow4, obj21);
    const obj22 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: tmp15(tmp2(6374).KeyIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    const TableRow5 = tmp2(5916).TableRow;
    items7[4] = tmp15(TableRow5, obj22);
    const obj23 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: tmp15(tmp2(6374).KeyIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    const TableRow6 = tmp2(5916).TableRow;
    items7[5] = tmp15(TableRow6, obj23);
    let tmp15Result = isCheckpointEnabled;
    if (tmp15Result) {
      const obj24 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              obj = locale(closure_2[57]);
              const checkpointData = obj.fetchCheckpointData();
              showDevWidget(closure_2[58])("devtools");
            },
        icon: tmp15(tmp2(6374).KeyIcon, {}),
        trailing: tmp15(tmp2(5923).TableRowArrow, {})
      };
      const TableRow7 = tmp2(5916).TableRow;
      tmp15Result = tmp15(TableRow7, obj24);
    }
    items7[6] = tmp15Result;
    if (isCheckpointEnabled) {
      const obj25 = {
        label: "Launch Checkpoint with fake data",
        subLabel: "Use mock stats instead of GET /checkpoint",
        onPress() {
              obj = locale(closure_2[57]);
              const checkpointData = obj.fetchCheckpointData(true);
              showDevWidget(closure_2[58])("devtools");
            },
        icon: tmp15(tmp2(6374).KeyIcon, {}),
        trailing: tmp15(tmp2(5923).TableRowArrow, {})
      };
      const TableRow8 = tmp2(5916).TableRow;
      isCheckpointEnabled = tmp15(TableRow8, obj25);
    }
    items7[7] = isCheckpointEnabled;
    const obj26 = { label: "Test captcha", onPress: tmp2(15270).showCaptchaTestModal, icon: tmp15(tmp2(6374).KeyIcon, {}), trailing: tmp15(tmp2(5923).TableRowArrow, {}) };
    const TableRow9 = tmp2(5916).TableRow;
    items7[8] = tmp15(TableRow9, obj26);
    const obj27 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: tmp15(tmp2(6384).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    const TableSwitchRow3 = tmp2(6621).TableSwitchRow;
    items7[9] = tmp15(TableSwitchRow3, obj27);
    const obj28 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: tmp15(tmp2(15103).WrenchIcon, {}) };
    const TableRow10 = tmp2(5916).TableRow;
    items7[10] = tmp15(TableRow10, obj28);
    items5[6] = closure_22(TableRowGroup4, obj17);
    const obj29 = { size: showDevWidget(588).space.PX_16 };
    const Spacer4 = tmp2(1189).Spacer;
    items5[7] = tmp15(Spacer4, obj29);
    const obj30 = { title: "Crash Actions", hasIcons: true, children: items8 };
    const TableRowGroup5 = tmp2(5997).TableRowGroup;
    const obj31 = {
      icon: tmp15(tmp2(15103).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          obj = showDevWidget(closure_2[61]);
          return obj.crash();
        }
    };
    const TableRow11 = tmp2(5916).TableRow;
    items8 = [tmp15(TableRow11, obj31), , , , , ];
    const obj32 = {
      icon: tmp15(tmp2(15103).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    const TableRow12 = tmp2(5916).TableRow;
    items8[1] = tmp15(TableRow12, obj32);
    const obj33 = {
      icon: tmp15(tmp2(15103).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          _asyncToGenerator(true);
        }
    };
    const TableRow13 = tmp2(5916).TableRow;
    items8[2] = tmp15(TableRow13, obj33);
    const obj34 = {
      icon: tmp15(tmp2(15103).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          obj = locale(closure_2[62]);
          obj.crash();
        }
    };
    const TableRow14 = tmp2(5916).TableRow;
    items8[3] = tmp15(TableRow14, obj34);
    const obj35 = {
      icon: tmp15(tmp2(15103).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          obj = showDevWidget(closure_2[21]);
          obj.dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    const TableRow15 = tmp2(5916).TableRow;
    items8[4] = tmp15(TableRow15, obj35);
    const obj36 = {
      icon: tmp15(tmp2(15103).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          obj = showDevWidget(closure_2[21]);
          const dispatchResult = obj.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          dispatchResult.catch((error) => {
            obj = { error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" };
            const result = closure_0.resetSocketOnDispatchError(obj);
          });
        }
    };
    const TableRow16 = tmp2(5916).TableRow;
    items8[5] = tmp15(TableRow16, obj36);
    items5[8] = closure_22(TableRowGroup5, obj30);
    const tmp2Result2 = tmp2(1370);
    let isIOSResult = tmp2Result2.isIOS();
    if (isIOSResult) {
      const obj37 = { children: items9 };
      const obj38 = { size: showDevWidget(588).space.PX_16 };
      const Spacer5 = tmp2(1189).Spacer;
      items9 = [tmp15(Spacer5, obj38), ];
      const obj39 = { title: "Memory Actions", hasIcons: true, children: tmp15(TableRow17, obj40) };
      const TableRowGroup6 = tmp2(5997).TableRowGroup;
      obj40 = {
        icon: tmp15(tmp2(15103).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              obj = showDevWidget(closure_2[61]);
              return obj.triggerMemoryWarning();
            }
      };
      TableRow17 = tmp2(5916).TableRow;
      items9[1] = tmp15(TableRowGroup6, obj39);
      isIOSResult = tmp13(closure_23, obj37);
    }
    items5[9] = isIOSResult;
    return closure_22(tmp14, obj6);
  }
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default tmp5;
