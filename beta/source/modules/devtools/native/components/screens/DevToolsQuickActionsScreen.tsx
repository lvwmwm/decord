// Module ID: 15944
// Function ID: 15945
// Name: DevToolsQuickActionsScreen
// Dependencies: [32, 5, 19, 17, 4782, 5528, 1377, 2113, 1186, 1188, 1376, 7992, 1078, 12888, 1378, 10394, 1189, 21, 4790, 580, 12931, 577, 12887, 9502, 14758, 4993, 15945, 1984, 10446, 2028, 2031, 15056, 15058, 14001, 4490, 15838, 558, 568, 15961, 1616, 504, 2023, 15962, 15853, 5935, 7478, 1181, 15538, 4642, 15598, 15963, 10662, 1119, 15693, 5861, 5854, 7231, 15964, 15995, 7241, 1235, 1354, 1368, 2]

// Module 15944 (DevToolsQuickActionsScreen)
import DispatcherDefault from "Dispatcher" /* 577 */;
import nativeDefault from "native" /* 580 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2028 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9502 */;
import NUFActionCreators from "NUFActionCreators" /* 12887 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12931 */;
import requestReviewModalDefault from "requestReviewModal" /* 14001 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14758 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15853 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 15963 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5528 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1377 */;
import LocaleStore from "LocaleStore" /* 2113 */;
import ThemeStore from "ThemeStore" /* 1186 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;
import UserStore from "UserStore" /* 1376 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7992 */;

require = fn;
function handleNewUserOnboarding() {
  nuf_NUFActionCreators.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  DispatcherDefault.wait(NUFActionCreators.startOnboarding);
}
function handleThemeChange(arg0) {
  UserSettingsActionCreatorsDefault.updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  if (arg0) {
    str = "reduce";
  }
  const result = AccessibilityActionCreators.setPrefersReducedMotion(str);
}
function showVibingWumpus() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10446, dependencyMap.paths), {
    onClose() {

    }
  }, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const result1 = UserSettingsProtoActionCreators.removeDismissedContent(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", async (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  ModalActionCreatorsDefault.pop();
  const items = [asyncRequireImpl(15056, dependencyMap.paths), asyncRequireImpl(15058, dependencyMap.paths)];
  Promise.all(items).then((result) => {
    const iter = result[Symbol.iterator]();
    let nextResult;
    if (iter !== undefined) {
      nextResult = iter.next();
    }
    let nextResult1;
    let tmp4 = tmp;
    if (iter !== undefined) {
      tmp4 = tmp6;
      if (iter !== undefined) {
        nextResult1 = iter.next();
        tmp4 = tmp6;
      }
    }
    if (!tmp4) {
      iter.return();
    }
    nextResult.default.open(nextResult1.TwoFAModalSetupSections.SUCCESS);
  });
}
function handleShowAppRatingModal() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _handleShowAppRatingModal(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
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
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj6 = {
          key: "DEV_APP_RATING_REQUEST",
          icon() {
                  return closure_1_21(closure_1_0(closure_1_2[35]).WrenchIcon, {});
                },
          content: null,
          toastDurationMs: 6000
        };
        let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
        if (!closure_128_0.ok) {
          const _HermesInternal = HermesInternal;
          str2 = "Review request failed: " + closure_128_0.error;
        }
        obj6.content = str2;
        closure_129_1(closure_129_2[34]).open(obj6);
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const ScrollView = fn(17).ScrollView;
const ThemeTypes = fn(1078).ThemeTypes;
const NewUserTypes = fn(12888).NewUserTypes;
const PremiumConstants = fn(1378);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(10394).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1189).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(15945, dependencyMap.paths).then((openMFAModal) => {
    const obj = { ticket: "ticket", methods: null };
    const items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    obj.methods = items;
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
const ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = locale(stateFromStores[37]).c(89);
  const tmp4 = closure_24();
  let obj = locale(stateFromStores[37]);
  const isCheckpointEnabled = locale(stateFromStores[38]).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  showDevWidget(stateFromStores[39])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
    const fn = function w() {
      return { theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj2 = locale(stateFromStores[38]);
  const stateFromStoresObject = locale(stateFromStores[40]).useStateFromStoresObject(tmp7, tmp8);
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
    let tmp15 = O;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[2];
    tmp15 = cResult[3];
  }
  const tmpResult = locale(stateFromStores[40]);
  stateFromStores = locale(stateFromStores[40]).useStateFromStores(tmp14, tmp15);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [OverridePremiumTypeStore];
    class N {
      constructor() {
        return closure_1_9.getPremiumTypeOverride();
      }
    }
    cResult[4] = items2;
    cResult[5] = N;
    let tmp19 = N;
    let tmp18 = items2;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
  }
  const tmpResult4 = locale(stateFromStores[40]);
  const stateFromStores1 = locale(stateFromStores[40]).useStateFromStores(tmp18, tmp19);
  const tmpResult5 = locale(stateFromStores[40]);
  [tmp23, asyncGeneratorStep] = stateFromStores1(setting.useState(false), 2);
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
    let tmp26 = K;
    let tmp25 = items3;
  } else {
    tmp25 = cResult[6];
    tmp26 = cResult[7];
  }
  const tmp22 = stateFromStores1(setting.useState(false), 2);
  const stateFromStores2 = locale(stateFromStores[40]).useStateFromStores(tmp25, tmp26);
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
      class K {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
      const tmp35 = closure_21(tmp(tmp2[42]).default, {});
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
    cResult[14] = tmp31;
    cResult[15] = items4;
  }
}) : (() => {
  const tmp = closure_24();
  const tmp2 = locale;
  let isCheckpointEnabled = locale(15961).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  let obj = locale(15961);
  const tmp6 = showDevWidget(1616)();
  const items = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const stateFromStoresObject = locale(504).useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  let obj2 = locale(504);
  const items1 = [UserStore];
  dependencyMap = locale(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj3 = locale(504);
  const items2 = [OverridePremiumTypeStore];
  _slicedToArray = locale(504).useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const obj4 = locale(504);
  [tmp9, asyncGeneratorStep] = setting.useState(false);
  let IgnoreProfileSpeedbumpDisabled = locale(2023).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const tmp8 = _slicedToArray(setting.useState(false), 2);
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = locale(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp9) {
    return closure_21(tmp2(15962).default, {});
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
    const items4 = [tmp.content, ];
    const obj7 = { paddingBottom: tmp.content.padding + tmp6.bottom };
    items4[1] = obj7;
    obj6.contentContainerStyle = items4;
    const tmp15 = closure_21;
    const obj8 = { title: "General", hasIcons: false, children: null };
    const obj9 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          return DevToolsActionCreators.updateDevToolsSettings({ showDevWidget: !showDevWidget });
        }
    };
    obj8.children = closure_21(tmp2(7478).TableSwitchRow, obj9);
    const items5 = [closure_21(tmp2(5935).TableRowGroup, obj8), , , , , , , , , ];
    const obj10 = { size: tmp5(580).space.PX_16 };
    items5[1] = closure_21(tmp2(1181).Spacer, obj10);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj11 = { title: "Appearance", hasIcons: true, children: null };
    const obj12 = { label: str, disabled: usingSystemTheme, icon: tmp15(tmp2(15538).ThemeLightIcon, {}), value: tmp2(4642).isThemeLight(stateFromStoresObject.theme), onValueChange: handleThemeChange };
    const items6 = [tmp15(tmp2(7478).TableSwitchRow, obj12), ];
    const obj13 = { label: "Reduced Motion", icon: tmp15(tmp2(15598).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items6[1] = tmp15(tmp2(7478).TableSwitchRow, obj13);
    obj11.children = items6;
    items5[2] = closure_22(tmp2(5935).TableRowGroup, obj11);
    const obj14 = { size: tmp5(580).space.PX_16 };
    items5[3] = tmp15(tmp2(1181).Spacer, obj14);
    const obj15 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_17.map((item) => {
          ({ label, value } = item);
          locale = value;
          return closure_1_21(locale(7478).TableSwitchRow, {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(arg0 ? value : collapsedCategories, closure_2);
            },
            label,
            icon: closure_1_21(locale(10662).PencilIcon, {}),
            value: value === closure_3
          }, label);
        })
    };
    items5[4] = tmp15(tmp2(5935).TableRowGroup, obj15);
    const obj16 = { size: tmp5(580).space.PX_16 };
    items5[5] = tmp15(tmp2(1181).Spacer, obj16);
    const obj17 = { title: null, hasIcons: true, children: null };
    const intl = tmp2(1119).intl;
    obj17.title = intl.string(tmp2(1119).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj18 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp12, icon: tmp15(tmp2(15693).LanguageIcon, {}), trailing: tmp15(tmp2(5861).TableRowArrow, {}) };
    const items7 = [tmp15(tmp2(5854).TableRow, obj18), , , , , , , , , ];
    const obj19 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: tmp15(tmp2(7231).KeyIcon, {}), trailing: tmp15(tmp2(5861).TableRowArrow, {}) };
    items7[1] = tmp15(tmp2(5854).TableRow, obj19);
    const obj20 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = tmp2(1119).intl;
    obj20.label = intl2.string(tmp2(1119).t.yoWDXU);
    obj20.onPress = handleNewUserOnboarding;
    obj20.icon = tmp15(tmp2(15838).WrenchIcon, {});
    obj20.trailing = tmp15(tmp2(5861).TableRowArrow, {});
    items7[2] = tmp15(tmp2(5854).TableRow, obj20);
    const obj21 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: tmp15(tmp2(7231).KeyIcon, {}), trailing: tmp15(tmp2(5861).TableRowArrow, {}) };
    items7[3] = tmp15(tmp2(5854).TableRow, obj21);
    const obj22 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: tmp15(tmp2(7231).KeyIcon, {}), trailing: tmp15(tmp2(5861).TableRowArrow, {}) };
    items7[4] = tmp15(tmp2(5854).TableRow, obj22);
    const obj23 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: tmp15(tmp2(7231).KeyIcon, {}), trailing: tmp15(tmp2(5861).TableRowArrow, {}) };
    items7[5] = tmp15(tmp2(5854).TableRow, obj23);
    if (isCheckpointEnabled) {
      const obj24 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              return showDevWidget(15964)("devtools");
            },
        icon: tmp15(tmp2(7231).KeyIcon, {}),
        trailing: tmp15(tmp2(5861).TableRowArrow, {})
      };
      isCheckpointEnabled = tmp15(tmp2(5854).TableRow, obj24);
    }
    items7[6] = isCheckpointEnabled;
    const obj25 = { label: "Test captcha", onPress: tmp2(15995).showCaptchaTestModal, icon: tmp15(tmp2(7231).KeyIcon, {}), trailing: tmp15(tmp2(5861).TableRowArrow, {}) };
    items7[7] = tmp15(tmp2(5854).TableRow, obj25);
    const obj26 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: tmp15(tmp2(7241).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items7[8] = tmp15(tmp2(7478).TableSwitchRow, obj26);
    const obj27 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: tmp15(tmp2(15838).WrenchIcon, {}) };
    items7[9] = tmp15(tmp2(5854).TableRow, obj27);
    obj17.children = items7;
    items5[6] = closure_22(tmp2(5935).TableRowGroup, obj17);
    const obj28 = { size: tmp5(580).space.PX_16 };
    items5[7] = tmp15(tmp2(1181).Spacer, obj28);
    const obj29 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj30 = {
      icon: tmp15(tmp2(15838).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1235).crash();
        }
    };
    const items8 = [tmp15(tmp2(5854).TableRow, obj30), , , , , ];
    const obj31 = {
      icon: tmp15(tmp2(15838).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items8[1] = tmp15(tmp2(5854).TableRow, obj31);
    const obj32 = {
      icon: tmp15(tmp2(15838).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          asyncGeneratorStep(true);
        }
    };
    items8[2] = tmp15(tmp2(5854).TableRow, obj32);
    const obj33 = {
      icon: tmp15(tmp2(15838).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1354).crash();
        }
    };
    items8[3] = tmp15(tmp2(5854).TableRow, obj33);
    const obj34 = {
      icon: tmp15(tmp2(15838).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(577).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items8[4] = tmp15(tmp2(5854).TableRow, obj34);
    const obj35 = {
      icon: tmp15(tmp2(15838).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          const obj = showDevWidget(577);
          showDevWidget(577).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
        }
    };
    items8[5] = tmp15(tmp2(5854).TableRow, obj35);
    obj29.children = items8;
    items5[8] = closure_22(tmp2(5935).TableRowGroup, obj29);
    const tmp14 = ScrollView;
    const tmp2Result = tmp2(4642);
    let isIOSResult = tmp2(1368).isIOS();
    if (isIOSResult) {
      const obj36 = { children: null };
      const obj37 = { size: tmp5(580).space.PX_16 };
      const items9 = [tmp15(tmp2(1181).Spacer, obj37), ];
      const obj38 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj39 = {
        icon: tmp15(tmp2(15838).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              return showDevWidget(1235).triggerMemoryWarning();
            }
      };
      obj38.children = tmp15(tmp2(5854).TableRow, obj39);
      items9[1] = tmp15(tmp2(5935).TableRowGroup, obj38);
      obj36.children = items9;
      isIOSResult = tmp13(closure_23, obj36);
    }
    items5[9] = isIOSResult;
    obj6.children = items5;
    return closure_22(tmp14, obj6);
  }
  const obj5 = locale(504);
});
