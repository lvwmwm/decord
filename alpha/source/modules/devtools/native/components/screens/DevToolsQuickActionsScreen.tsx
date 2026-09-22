// Module ID: 15957
// Function ID: 15958
// Name: DevToolsQuickActionsScreen
// Dependencies: [32, 5, 19, 17, 4749, 5496, 1373, 2109, 1182, 1184, 1372, 7958, 1074, 12962, 1374, 11630, 1185, 21, 4757, 576, 13003, 573, 12961, 9478, 14723, 4960, 15958, 1980, 11669, 2025, 2028, 15065, 15067, 13970, 4455, 15851, 15974, 1612, 504, 2020, 15975, 5906, 7447, 15866, 1177, 15550, 4608, 15610, 15976, 10514, 1115, 5824, 15706, 5831, 7203, 15977, 16008, 7213, 1231, 1350, 1364, 2]
// Exports: default

// Module 15957 (DevToolsQuickActionsScreen)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import UserSettings from "UserSettings" /* 2020 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2025 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9478 */;
import NUFActionCreators from "NUFActionCreators" /* 12961 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 13003 */;
import requestReviewModalDefault from "requestReviewModal" /* 13970 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14723 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15866 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 15976 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5496 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1373 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import UserStore from "UserStore" /* 1372 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7958 */;

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
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11669, dependencyMap.paths), {
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
  const items = [asyncRequireImpl(15065, dependencyMap.paths), asyncRequireImpl(15067, dependencyMap.paths)];
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
      return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const ScrollView = fn(17).ScrollView;
const ThemeTypes = fn(1074).ThemeTypes;
const NewUserTypes = fn(12962).NewUserTypes;
const PremiumConstants = fn(1374);
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = fn(11630).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = fn(1185).SystemThemeState;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles.createStyles(obj2);
function launchMFA() {
  ModalActionCreatorsDefault.pop();
  asyncRequireImpl(15958, dependencyMap.paths).then((openMFAModal) => {
    const obj = { ticket: "ticket", methods: null };
    const items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    obj.methods = items;
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  const tmp = closure_24();
  const tmp2 = locale;
  let isCheckpointEnabled = locale(15974).useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  let obj = locale(15974);
  const tmp6 = showDevWidget(1612)();
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
  let IgnoreProfileSpeedbumpDisabled = locale(2020).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const tmp8 = _slicedToArray(setting.useState(false), 2);
  const items3 = [AccessibilityStore];
  [][0] = locale;
  const stateFromStores = locale(504).useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp9) {
    return closure_21(tmp2(15975).default, {});
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
    obj8.children = closure_21(tmp2(7447).TableSwitchRow, obj9);
    const items5 = [closure_21(tmp2(5906).TableRowGroup, obj8), , , , , , , , , ];
    const obj10 = { size: tmp5(576).space.PX_16 };
    items5[1] = closure_21(tmp2(1177).Spacer, obj10);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj11 = { title: "Appearance", hasIcons: true, children: null };
    const obj12 = { label: str, disabled: usingSystemTheme, icon: tmp15(tmp2(15550).ThemeLightIcon, {}), value: tmp2(4608).isThemeLight(stateFromStoresObject.theme), onValueChange: handleThemeChange };
    const items6 = [tmp15(tmp2(7447).TableSwitchRow, obj12), ];
    const obj13 = { label: "Reduced Motion", icon: tmp15(tmp2(15610).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items6[1] = tmp15(tmp2(7447).TableSwitchRow, obj13);
    obj11.children = items6;
    items5[2] = closure_22(tmp2(5906).TableRowGroup, obj11);
    const obj14 = { size: tmp5(576).space.PX_16 };
    items5[3] = tmp15(tmp2(1177).Spacer, obj14);
    const obj15 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_17.map((item) => {
          ({ label, value } = item);
          locale = value;
          return closure_1_21(locale(7447).TableSwitchRow, {
            onValueChange(arg0) {
              const result = OverridePremiumTypeActions.updateClientPremiumTypeOverride(arg0 ? value : collapsedCategories, closure_2);
            },
            label,
            icon: closure_1_21(locale(10514).PencilIcon, {}),
            value: value === closure_3
          }, label);
        })
    };
    items5[4] = tmp15(tmp2(5906).TableRowGroup, obj15);
    const obj16 = { size: tmp5(576).space.PX_16 };
    items5[5] = tmp15(tmp2(1177).Spacer, obj16);
    const obj17 = { title: null, hasIcons: true, children: null };
    const intl = tmp2(1115).intl;
    obj17.title = intl.string(tmp2(1115).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj18 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp12, icon: tmp15(tmp2(15706).LanguageIcon, {}), trailing: tmp15(tmp2(5831).TableRowArrow, {}) };
    const items7 = [tmp15(tmp2(5824).TableRow, obj18), , , , , , , , , ];
    const obj19 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: tmp15(tmp2(7203).KeyIcon, {}), trailing: tmp15(tmp2(5831).TableRowArrow, {}) };
    items7[1] = tmp15(tmp2(5824).TableRow, obj19);
    const obj20 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = tmp2(1115).intl;
    obj20.label = intl2.string(tmp2(1115).t.yoWDXU);
    obj20.onPress = handleNewUserOnboarding;
    obj20.icon = tmp15(tmp2(15851).WrenchIcon, {});
    obj20.trailing = tmp15(tmp2(5831).TableRowArrow, {});
    items7[2] = tmp15(tmp2(5824).TableRow, obj20);
    const obj21 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: tmp15(tmp2(7203).KeyIcon, {}), trailing: tmp15(tmp2(5831).TableRowArrow, {}) };
    items7[3] = tmp15(tmp2(5824).TableRow, obj21);
    const obj22 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: tmp15(tmp2(7203).KeyIcon, {}), trailing: tmp15(tmp2(5831).TableRowArrow, {}) };
    items7[4] = tmp15(tmp2(5824).TableRow, obj22);
    const obj23 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: tmp15(tmp2(7203).KeyIcon, {}), trailing: tmp15(tmp2(5831).TableRowArrow, {}) };
    items7[5] = tmp15(tmp2(5824).TableRow, obj23);
    if (isCheckpointEnabled) {
      const obj24 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              return showDevWidget(15977)("devtools");
            },
        icon: tmp15(tmp2(7203).KeyIcon, {}),
        trailing: tmp15(tmp2(5831).TableRowArrow, {})
      };
      isCheckpointEnabled = tmp15(tmp2(5824).TableRow, obj24);
    }
    items7[6] = isCheckpointEnabled;
    const obj25 = { label: "Test captcha", onPress: tmp2(16008).showCaptchaTestModal, icon: tmp15(tmp2(7203).KeyIcon, {}), trailing: tmp15(tmp2(5831).TableRowArrow, {}) };
    items7[7] = tmp15(tmp2(5824).TableRow, obj25);
    const obj26 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: tmp15(tmp2(7213).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items7[8] = tmp15(tmp2(7447).TableSwitchRow, obj26);
    const obj27 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: tmp15(tmp2(15851).WrenchIcon, {}) };
    items7[9] = tmp15(tmp2(5824).TableRow, obj27);
    obj17.children = items7;
    items5[6] = closure_22(tmp2(5906).TableRowGroup, obj17);
    const obj28 = { size: tmp5(576).space.PX_16 };
    items5[7] = tmp15(tmp2(1177).Spacer, obj28);
    const obj29 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj30 = {
      icon: tmp15(tmp2(15851).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1231).crash();
        }
    };
    const items8 = [tmp15(tmp2(5824).TableRow, obj30), , , , , ];
    const obj31 = {
      icon: tmp15(tmp2(15851).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items8[1] = tmp15(tmp2(5824).TableRow, obj31);
    const obj32 = {
      icon: tmp15(tmp2(15851).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          asyncGeneratorStep(true);
        }
    };
    items8[2] = tmp15(tmp2(5824).TableRow, obj32);
    const obj33 = {
      icon: tmp15(tmp2(15851).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1350).crash();
        }
    };
    items8[3] = tmp15(tmp2(5824).TableRow, obj33);
    const obj34 = {
      icon: tmp15(tmp2(15851).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(573).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items8[4] = tmp15(tmp2(5824).TableRow, obj34);
    const obj35 = {
      icon: tmp15(tmp2(15851).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          const obj = showDevWidget(573);
          showDevWidget(573).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
        }
    };
    items8[5] = tmp15(tmp2(5824).TableRow, obj35);
    obj29.children = items8;
    items5[8] = closure_22(tmp2(5906).TableRowGroup, obj29);
    const tmp14 = ScrollView;
    const tmp2Result = tmp2(4608);
    let isIOSResult = tmp2(1364).isIOS();
    if (isIOSResult) {
      const obj36 = { children: null };
      const obj37 = { size: tmp5(576).space.PX_16 };
      const items9 = [tmp15(tmp2(1177).Spacer, obj37), ];
      const obj38 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj39 = {
        icon: tmp15(tmp2(15851).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              return showDevWidget(1231).triggerMemoryWarning();
            }
      };
      obj38.children = tmp15(tmp2(5824).TableRow, obj39);
      items9[1] = tmp15(tmp2(5906).TableRowGroup, obj38);
      obj36.children = items9;
      isIOSResult = tmp13(closure_23, obj36);
    }
    items5[9] = isIOSResult;
    obj6.children = items5;
    return closure_22(tmp14, obj6);
  }
  const obj5 = locale(504);
};
