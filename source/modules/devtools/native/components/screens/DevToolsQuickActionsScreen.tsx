// Module ID: 14635
// Function ID: 111485
// Name: handleNewUserOnboarding
// Dependencies: [57, 31, 27, 4122, 4808, 1850, 1921, 1278, 1280, 1849, 6960, 653, 11734, 1851, 10134, 1281, 33, 4130, 689, 11781, 686, 11733, 7955, 13370, 1331, 1334, 3946, 4337, 14636, 1934, 10146, 13684, 13686, 10312, 1557, 566, 3803, 14652, 5503, 5504, 13508, 1273, 14156, 3976, 14215, 14653, 9106, 1212, 5165, 14253, 5171, 9210, 14392, 14654, 9218, 12623, 1184, 1844, 2]
// Exports: default

// Module 14635 (handleNewUserOnboarding)
import isBlockedDomain from "isBlockedDomain";
import module_13684 from "module_13684";
import { ScrollView } from "module_4337";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { ThemeTypes } from "ME";
import { NewUserTypes } from "NewUserTypes";
import GuildFeatures from "GuildFeatures";
import { VIBING_WUMPUS_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";
import { SystemThemeState } from "SystemThemeState";
import jsxProd from "getExpandNUXState";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_20;
let closure_21;
const require = arg1;
function handleNewUserOnboarding() {
  require(11781) /* setNewUser */.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  const obj = require(11781) /* setNewUser */;
  importDefault(686).wait(require(11733) /* _startContactSyncForDiscoverability */.startOnboarding);
}
function handleThemeChange(arg0) {
  importDefault(7955).updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  if (arg0) {
    str = "reduce";
  }
  const result = require(13370) /* setFontSize */.setPrefersReducedMotion(str);
}
function handleLaunchWelcomeReset() {
  const result = require(1331) /* _createForOfIteratorHelperLoose */.removeDismissedContent(require(1334) /* DismissibleContent */.DismissibleContent.SEEN_LAUNCH_WELCOME);
  const obj = require(1331) /* _createForOfIteratorHelperLoose */;
  const result1 = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.SEEN_OLD_DESIGN);
}
function showVibingWumpus() {
  let obj = importDefault(4337);
  obj = {
    onClose() {

    }
  };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(10146, dependencyMap.paths), obj, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = require(1331) /* _createForOfIteratorHelperLoose */.removeDismissedContent(require(1334) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_UPSELL);
  const obj = require(1331) /* _createForOfIteratorHelperLoose */;
  const result1 = require(1331) /* _createForOfIteratorHelperLoose */.removeDismissedContent(require(1334) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const obj2 = require(1331) /* _createForOfIteratorHelperLoose */;
  const result2 = require(1331) /* _createForOfIteratorHelperLoose */.removeDismissedContent(require(1334) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  let arr = importDefault(4337);
  arr = arr.pop();
  const items = [require(1934) /* maybeLoadBundle */(13684, dependencyMap.paths), require(1934) /* maybeLoadBundle */(13686, dependencyMap.paths)];
  Promise.all(items).then((arg0) => {
    const iter = arg0[Symbol.iterator]();
    let nextResult;
    let tmp3 = tmp2;
    if (iter !== undefined) {
      nextResult = iter.next();
    }
    let nextResult1;
    if (!tmp3) {
      tmp3 = tmp6;
      if (iter !== undefined) {
        nextResult1 = iter.next();
      }
    }
    if (!tmp3) {
      iter.return();
    }
    nextResult.default.open(nextResult1.TwoFAModalSetupSections.SUCCESS);
  });
}
function handleResetInAppNotificationExpandNux() {
  const result = require(1331) /* _createForOfIteratorHelperLoose */.removeDismissedContent(require(1334) /* DismissibleContent */.DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX);
  const obj = require(1331) /* _createForOfIteratorHelperLoose */;
  require(10312) /* getExpandNUXState */.resetExpandNUXState();
}
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_16, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_17 } = GuildFeatures);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
function launchMFA() {
  let arr = importDefault(4337);
  arr = arr.pop();
  require(1934) /* maybeLoadBundle */(14636, dependencyMap.paths).then((openMFAModal) => {
    const items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal({ ticket: "ticket", methods: items }, () => {

    }, () => {

    });
  });
}
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  let locale;
  let usingSystemTheme;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = locale(566);
  const items = [closure_10, closure_9, closure_11, closure_13];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ theme: outer1_10.theme, usingSystemTheme: outer1_11.useSystemTheme === outer1_19.ON, locale: outer1_9.locale, showDevWidget: outer1_13.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  const showDevWidget = stateFromStoresObject.showDevWidget;
  let obj1 = locale(566);
  const items1 = [closure_12];
  const dependencyMap = obj1.useStateFromStores(items1, () => outer1_12.getCurrentUser());
  let obj2 = locale(566);
  const items2 = [closure_8];
  const callback = obj2.useStateFromStores(items2, () => outer1_8.getPremiumTypeOverride());
  const tmp4 = callback(React.useState(false), 2);
  React = tmp4[1];
  let IgnoreProfileSpeedbumpDisabled = locale(3803).IgnoreProfileSpeedbumpDisabled;
  const setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  let obj3 = locale(566);
  const items3 = [_isNativeReflectConstruct];
  [][0] = locale;
  const stateFromStores = obj3.useStateFromStores(items3, () => outer1_6.useReducedMotion);
  if (tmp4[0]) {
    return callback2(locale(14652).default, {});
  } else {
    obj = { style: tmp.container };
    const items4 = [tmp.content, ];
    obj = { paddingBottom: tmp.content.padding + tmp2.bottom };
    items4[1] = obj;
    obj.contentContainerStyle = items4;
    obj1 = { title: "General", hasIcons: false };
    obj2 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          let obj = locale(13508);
          obj = { showDevWidget: !showDevWidget };
          return obj.updateDevToolsSettings(obj);
        }
    };
    obj1.children = callback2(locale(5504).TableSwitchRow, obj2);
    const items5 = [callback2(locale(5503).TableRowGroup, obj1), , , , , , , , ];
    obj3 = { size: showDevWidget(689).space.PX_16 };
    items5[1] = callback2(locale(1273).Spacer, obj3);
    const obj4 = { title: "Appearance", hasIcons: true };
    const obj5 = {};
    let str2 = "Light Theme";
    if (usingSystemTheme) {
      str2 = "(using system theme)";
    }
    obj5.label = str2;
    obj5.disabled = usingSystemTheme;
    obj5.icon = callback2(locale(14156).ThemeLightIcon, {});
    let obj11 = locale(3976);
    obj5.value = obj11.isThemeLight(stateFromStoresObject.theme);
    obj5.onValueChange = handleThemeChange;
    const items6 = [callback2(locale(5504).TableSwitchRow, obj5), ];
    const obj6 = { label: "Reduced Motion", icon: callback2(locale(14215).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items6[1] = callback2(locale(5504).TableSwitchRow, obj6);
    obj4.children = items6;
    items5[2] = callback3(locale(5503).TableRowGroup, obj4);
    const obj7 = { size: showDevWidget(689).space.PX_16 };
    items5[3] = callback2(locale(1273).Spacer, obj7);
    const obj8 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_16.map((arg0) => {
          let label;
          let value;
          ({ label, value } = arg0);
          const locale = value;
          const obj = {
            onValueChange(arg0) {
              const result = locale(table[45]).updateClientPremiumTypeOverride(arg0 ? closure_0 : outer2_17, outer1_2);
            },
            label,
            icon: outer1_20(locale(9106).PencilIcon, {}),
            value: value === isBlockedDomain
          };
          return outer1_20(locale(5504).TableSwitchRow, obj, label);
        })
    };
    items5[4] = callback2(locale(5503).TableRowGroup, obj8);
    const obj9 = { size: showDevWidget(689).space.PX_16 };
    items5[5] = callback2(locale(1273).Spacer, obj9);
    const obj10 = {};
    const intl = locale(1212).intl;
    obj10.title = intl.string(locale(1212).t["Aojq+L"]);
    obj10.hasIcons = true;
    obj11 = {};
    let str4 = "Change to en-US";
    if ("en-US" === locale) {
      str4 = "Change to pt-BR";
    }
    obj11.label = str4;
    obj11.subLabel = "Toggle to a non-english locale for change log testing, etc.";
    obj11.onPress = tmp7;
    obj11.icon = callback2(locale(14253).LanguageIcon, {});
    obj11.trailing = callback2(locale(5171).TableRowArrow, {});
    const items7 = [callback2(locale(5165).TableRow, obj11), , , , , , , , , , ];
    const obj12 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[1] = callback2(locale(5165).TableRow, obj12);
    const obj13 = { label: "Reset In App Notif Expand NUX", subLabel: "Resets in app notification expand NUX dismissible content.", onPress: handleResetInAppNotificationExpandNux, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[2] = callback2(locale(5165).TableRow, obj13);
    const obj14 = {};
    const intl2 = locale(1212).intl;
    obj14.label = intl2.string(locale(1212).t.yoWDXU);
    obj14.subLabel = "Dismisses dev tools when launching.";
    obj14.onPress = handleNewUserOnboarding;
    obj14.icon = callback2(locale(14392).WrenchIcon, {});
    obj14.trailing = callback2(locale(5171).TableRowArrow, {});
    items7[3] = callback2(locale(5165).TableRow, obj14);
    const obj15 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[4] = callback2(locale(5165).TableRow, obj15);
    const obj16 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[5] = callback2(locale(5165).TableRow, obj16);
    const obj17 = { label: "Reset Launch Welcome", subLabel: "Resets launch welcome NUX flag, requires an app restart to take effect.", onPress: handleLaunchWelcomeReset, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[6] = callback2(locale(5165).TableRow, obj17);
    const obj18 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[7] = callback2(locale(5165).TableRow, obj18);
    const obj19 = { label: "Test captcha", onPress: locale(14654).showCaptchaTestModal, icon: callback2(locale(9210).KeyIcon, {}), trailing: callback2(locale(5171).TableRowArrow, {}) };
    items7[8] = callback2(locale(5165).TableRow, obj19);
    const obj20 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: callback2(locale(9218).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = locale(3803).IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items7[9] = callback2(locale(5504).TableSwitchRow, obj20);
    const obj21 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal -- this may not visually show anything on debug builds or if your device has already been shown the modal recently.", onPress: showDevWidget(12623), icon: callback2(locale(14392).WrenchIcon, {}) };
    items7[10] = callback2(locale(5165).TableRow, obj21);
    obj10.children = items7;
    items5[6] = callback3(locale(5503).TableRowGroup, obj10);
    const obj22 = { size: showDevWidget(689).space.PX_16 };
    items5[7] = callback2(locale(1273).Spacer, obj22);
    const obj23 = { title: "Crash Actions", hasIcons: true };
    const obj24 = {
      icon: callback2(locale(14392).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(1184).crash();
        }
    };
    const items8 = [callback2(locale(5165).TableRow, obj24), , , , , ];
    const obj25 = {
      icon: callback2(locale(14392).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items8[1] = callback2(locale(5165).TableRow, obj25);
    const obj26 = {
      icon: callback2(locale(14392).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          callback(true);
        }
    };
    items8[2] = callback2(locale(5165).TableRow, obj26);
    const obj27 = {
      icon: callback2(locale(14392).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(1844).crash();
        }
    };
    items8[3] = callback2(locale(5165).TableRow, obj27);
    const obj28 = {
      icon: callback2(locale(14392).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          showDevWidget(686).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items8[4] = callback2(locale(5165).TableRow, obj28);
    const obj29 = {
      icon: callback2(locale(14392).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket = outer1_7.getSocket();
          const obj = showDevWidget(686);
          showDevWidget(686).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
        }
    };
    items8[5] = callback2(locale(5165).TableRow, obj29);
    obj23.children = items8;
    items5[8] = callback3(locale(5503).TableRowGroup, obj23);
    obj.children = items5;
    return callback3(setting, obj);
  }
  tmp2 = showDevWidget(1557)();
};
