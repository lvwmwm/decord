// Module ID: 14764
// Function ID: 14765
// Name: handleNewUserOnboarding
// Dependencies: [32, 5, 19, 17, 4181, 4865, 1875, 1946, 1302, 1304, 1874, 6003, 676, 11796, 1876, 10159, 1305, 21, 4189, 712, 11849, 709, 11795, 6206, 13502, 1355, 1358, 4005, 4395, 14765, 1959, 10171, 13812, 13814, 10336, 12751, 3890, 14523, 1581, 589, 3862, 14781, 5554, 5555, 13638, 1297, 14284, 4035, 14343, 14782, 9102, 1236, 5220, 14381, 5227, 9206, 14783, 9214, 1208, 1869, 500, 2]
// Exports: default

// Module 14764 (handleNewUserOnboarding)
import module_13812 from "module_13812";
import _handleConnectionOpen from "_handleConnectionOpen";
import Themes from "Themes";
import { ScrollView } from "jsxProd";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import closure_8 from "_handleConnectionOpen";
import setPremiumTypeActual from "setPremiumTypeActual";
import _getSystemLocale from "_getSystemLocale";
import handleThemeChange from "handleThemeChange";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import { ThemeTypes } from "ME";
import { NewUserTypes } from "NewUserTypes";
import GuildFeatures from "GuildFeatures";
import { VIBING_WUMPUS_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";
import { SystemThemeState } from "SystemThemeState";
import jsxProd from "dispatcher";
import createCacheKey from "createCacheKey";

let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
function handleNewUserOnboarding() {
  require(11849) /* setNewUser */.setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  const obj = require(11849) /* setNewUser */;
  importDefault(709).wait(require(11795) /* _startContactSyncForDiscoverability */.startOnboarding);
}
function handleThemeChange(arg0) {
  importDefault(6206).updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  if (arg0) {
    str = "reduce";
  }
  const result = require(13502) /* setFontSize */.setPrefersReducedMotion(str);
}
function handleLaunchWelcomeReset() {
  const result = require(1355) /* updateUserGuildSettings */.removeDismissedContent(require(1358) /* DismissibleContent */.DismissibleContent.SEEN_LAUNCH_WELCOME);
  const obj = require(1355) /* updateUserGuildSettings */;
  const result1 = require(4005) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.SEEN_OLD_DESIGN);
}
function showVibingWumpus() {
  let obj = importDefault(4395);
  obj = {
    onClose() {

    }
  };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(10171, dependencyMap.paths), obj, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = require(1355) /* updateUserGuildSettings */.removeDismissedContent(require(1358) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_UPSELL);
  const obj = require(1355) /* updateUserGuildSettings */;
  const result1 = require(1355) /* updateUserGuildSettings */.removeDismissedContent(require(1358) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const obj2 = require(1355) /* updateUserGuildSettings */;
  const result2 = require(1355) /* updateUserGuildSettings */.removeDismissedContent(require(1358) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  let arr = importDefault(4395);
  arr = arr.pop();
  const items = [require(1959) /* asyncRequireImpl */(13812, dependencyMap.paths), require(1959) /* asyncRequireImpl */(13814, dependencyMap.paths)];
  Promise.all(items).then((arg0) => {
    const iter = arg0[Symbol.iterator]();
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
function handleResetInAppNotificationExpandNux() {
  const result = require(1355) /* updateUserGuildSettings */.removeDismissedContent(require(1358) /* DismissibleContent */.DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX);
  const obj = require(1355) /* updateUserGuildSettings */;
  require(10336) /* MAX_TIMES_SHOWN */.resetExpandNUXState();
}
function handleShowAppRatingModal() {
  const self = this;
  const apply = _handleShowAppRatingModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleShowAppRatingModal() {
  const self = this;
  const tmp = callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            let ok = tmp2;
            ok = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1(12751)();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          ok = arg1;
          const obj2 = { key: "DEV_APP_RATING_REQUEST", icon: null, content: null, toastDurationMs: 6000 };
          obj2[1] = function icon() {
            return callback2(callback(table[37]).WrenchIcon, {});
          };
          let str2 = "Review requested -- no error returned. The OS decides whether to render the prompt.";
          if (!ok.ok) {
            const _HermesInternal = HermesInternal;
            str2 = "Review request failed: " + outer1_0.error;
          }
          obj2[2] = str2;
          callback(3890).open(obj2);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  });
  const _handleShowAppRatingModal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_17, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_18 } = GuildFeatures);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
function launchMFA() {
  let arr = importDefault(4395);
  arr = arr.pop();
  require(1959) /* asyncRequireImpl */(14765, dependencyMap.paths).then((openMFAModal) => {
    const items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal({ ticket: "ticket", methods: items }, () => {

    }, () => {

    });
  });
}
let obj1 = { padding: require("Themes").space.PX_16 };
let result = require("noop").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  let _handleConnectionOpen;
  let locale;
  let tmp8;
  let usingSystemTheme;
  const tmp = createCacheKey();
  const tmp5 = locale;
  let obj = locale(589);
  const items = [handleThemeChange, _getSystemLocale, CHANNEL_SIDEBAR_WIDTH, initialize];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  const showDevWidget = stateFromStoresObject.showDevWidget;
  let obj1 = locale(589);
  const items1 = [mergeGuildAvatar];
  const dependencyMap = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = locale(589);
  const items2 = [setPremiumTypeActual];
  const callback = obj2.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const tmp4 = showDevWidget(1581)();
  [tmp8, _handleConnectionOpen] = callback(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = locale(3862).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  let obj3 = locale(589);
  const items3 = [maybeApplyNoTextColorForLightCustomTheme];
  [][0] = locale;
  const stateFromStores = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp8) {
    return callback3(tmp5(14781).default, {});
  } else {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.container;
    const items4 = [tmp.content, ];
    obj = { paddingBottom: null };
    obj[0] = tmp.content.padding + tmp4.bottom;
    items4[1] = obj;
    obj[1] = items4;
    const tmp14 = callback3;
    obj1 = { title: "General", hasIcons: false, children: null };
    obj2 = { label: "Show Dev Widget", value: null, onValueChange: null };
    obj2[1] = showDevWidget;
    obj2[2] = function onValueChange() {
      let obj = locale(13638);
      obj = { showDevWidget: !showDevWidget };
      return obj.updateDevToolsSettings(obj);
    };
    obj1[2] = callback3(tmp5(5555).TableSwitchRow, obj2);
    const items5 = [callback3(tmp5(5554).TableRowGroup, obj1), , , , , , , , , ];
    obj3 = { size: null };
    obj3[0] = tmp2(712).space.PX_16;
    items5[1] = callback3(tmp5(1297).Spacer, obj3);
    let str = "Light Theme";
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj4 = { title: "Appearance", hasIcons: true, children: null };
    const obj5 = { label: null, disabled: null, icon: null, value: null, onValueChange: null };
    obj5[0] = str;
    obj5[1] = usingSystemTheme;
    obj5[2] = tmp14(tmp5(14284).ThemeLightIcon, {});
    let tmp5Result = tmp5(4035);
    obj5[3] = tmp5Result.isThemeLight(stateFromStoresObject.theme);
    obj5[4] = handleThemeChange;
    const items6 = [tmp14(tmp5(5555).TableSwitchRow, obj5), ];
    const obj6 = { label: "Reduced Motion", icon: null, value: null, onValueChange: null };
    obj6[1] = tmp14(tmp5(14343).AccessibilityIcon, {});
    obj6[2] = stateFromStores;
    obj6[3] = handleReducedMotionChange;
    items6[1] = tmp14(tmp5(5555).TableSwitchRow, obj6);
    obj4[2] = items6;
    items5[2] = closure_22(tmp5(5554).TableRowGroup, obj4);
    const obj7 = { size: null };
    obj7[0] = tmp2(712).space.PX_16;
    items5[3] = tmp14(tmp5(1297).Spacer, obj7);
    const obj8 = { title: "Override Client-Side Premium Type", hasIcons: true, children: null };
    obj8[2] = closure_17.map((arg0) => {
      let label;
      let value;
      ({ label, value } = arg0);
      const locale = value;
      const obj = {
        onValueChange(arg0) {
          const result = locale(table[49]).updateClientPremiumTypeOverride(arg0 ? closure_0 : outer2_18, outer1_2);
        },
        label,
        icon: null,
        value: null
      };
      obj[2] = outer1_21(locale(9102).PencilIcon, {});
      obj[3] = value === module_13812;
      return outer1_21(locale(5555).TableSwitchRow, obj, label);
    });
    items5[4] = tmp14(tmp5(5554).TableRowGroup, obj8);
    const obj9 = { size: null };
    obj9[0] = tmp2(712).space.PX_16;
    items5[5] = tmp14(tmp5(1297).Spacer, obj9);
    const obj10 = { title: null, hasIcons: true, children: null };
    const intl = tmp5(1236).intl;
    obj10[0] = intl.string(tmp5(1236).t["Aojq+L"]);
    let str2 = "Change to en-US";
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj11 = { label: null, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: null, icon: null, trailing: null };
    obj11[0] = str2;
    obj11[2] = tmp11;
    obj11[3] = tmp14(tmp5(14381).LanguageIcon, {});
    obj11[4] = tmp14(tmp5(5227).TableRowArrow, {});
    const items7 = [tmp14(tmp5(5220).TableRow, obj11), , , , , , , , , , ];
    const obj12 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: null, icon: null, trailing: null };
    obj12[2] = handleResetDoubleTapState;
    obj12[3] = tmp14(tmp5(9206).KeyIcon, {});
    obj12[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[1] = tmp14(tmp5(5220).TableRow, obj12);
    const obj13 = { label: "Reset In App Notif Expand NUX", subLabel: "Resets in app notification expand NUX dismissible content.", onPress: null, icon: null, trailing: null };
    obj13[2] = handleResetInAppNotificationExpandNux;
    obj13[3] = tmp14(tmp5(9206).KeyIcon, {});
    obj13[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[2] = tmp14(tmp5(5220).TableRow, obj13);
    const obj14 = { label: null, subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    const intl2 = tmp5(1236).intl;
    obj14[0] = intl2.string(tmp5(1236).t.yoWDXU);
    obj14[2] = handleNewUserOnboarding;
    obj14[3] = tmp14(tmp5(14523).WrenchIcon, {});
    obj14[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[3] = tmp14(tmp5(5220).TableRow, obj14);
    const obj15 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    obj15[2] = launchMFA;
    obj15[3] = tmp14(tmp5(9206).KeyIcon, {});
    obj15[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[4] = tmp14(tmp5(5220).TableRow, obj15);
    const obj16 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: null, icon: null, trailing: null };
    obj16[2] = launchTotpSetupSuccess;
    obj16[3] = tmp14(tmp5(9206).KeyIcon, {});
    obj16[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[5] = tmp14(tmp5(5220).TableRow, obj16);
    const obj17 = { label: "Reset Launch Welcome", subLabel: "Resets launch welcome NUX flag, requires an app restart to take effect.", onPress: null, icon: null, trailing: null };
    obj17[2] = handleLaunchWelcomeReset;
    obj17[3] = tmp14(tmp5(9206).KeyIcon, {});
    obj17[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[6] = tmp14(tmp5(5220).TableRow, obj17);
    const obj18 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: null, icon: null, trailing: null };
    obj18[2] = showVibingWumpus;
    obj18[3] = tmp14(tmp5(9206).KeyIcon, {});
    obj18[4] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[7] = tmp14(tmp5(5220).TableRow, obj18);
    const obj19 = { label: "Test captcha", onPress: null, icon: null, trailing: null };
    obj19[1] = tmp5(14783).showCaptchaTestModal;
    obj19[2] = tmp14(tmp5(9206).KeyIcon, {});
    obj19[3] = tmp14(tmp5(5227).TableRowArrow, {});
    items7[8] = tmp14(tmp5(5220).TableRow, obj19);
    const obj20 = { label: "Ignored Profile Speedbump Suppression", subLabel: "Suppresses the speedbump for ignored profiles.", icon: null, value: null, onValueChange: null };
    obj20[2] = tmp14(tmp5(9214).EyeSlashIcon, {});
    obj20[3] = setting;
    obj20[4] = function onValueChange() {
      const IgnoreProfileSpeedbumpDisabled = locale(3862).IgnoreProfileSpeedbumpDisabled;
      return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
    };
    items7[9] = tmp14(tmp5(5555).TableSwitchRow, obj20);
    const obj21 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: null, icon: null };
    obj21[2] = handleShowAppRatingModal;
    obj21[3] = tmp14(tmp5(14523).WrenchIcon, {});
    items7[10] = tmp14(tmp5(5220).TableRow, obj21);
    obj10[2] = items7;
    items5[6] = closure_22(tmp5(5554).TableRowGroup, obj10);
    const obj22 = { size: null };
    obj22[0] = tmp2(712).space.PX_16;
    items5[7] = tmp14(tmp5(1297).Spacer, obj22);
    const obj23 = { title: "Crash Actions", hasIcons: true, children: null };
    const obj24 = { icon: null, label: "Force Native Crash", onPress: null };
    obj24[0] = tmp14(tmp5(14523).WrenchIcon, {});
    obj24[2] = function onPress() {
      return showDevWidget(1208).crash();
    };
    const items8 = [tmp14(tmp5(5220).TableRow, obj24), , , , , ];
    const obj25 = { icon: null, label: "Force JS Crash", onPress: null };
    obj25[0] = tmp14(tmp5(14523).WrenchIcon, {});
    obj25[2] = function onPress() {
      const error = new Error("Force JS Crash");
      throw error;
    };
    items8[1] = tmp14(tmp5(5220).TableRow, obj25);
    const obj26 = { icon: null, label: "Force JS Boundary Crash", onPress: null };
    obj26[0] = tmp14(tmp5(14523).WrenchIcon, {});
    obj26[2] = function onPress() {
      callback(true);
    };
    items8[2] = tmp14(tmp5(5220).TableRow, obj26);
    const obj27 = { icon: null, label: "Force libdiscore Crash", onPress: null };
    obj27[0] = tmp14(tmp5(14523).WrenchIcon, {});
    obj27[2] = function onPress() {
      locale(1869).crash();
    };
    items8[3] = tmp14(tmp5(5220).TableRow, obj27);
    const obj28 = { icon: null, label: "Force libdiscore Store Crash", subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore", onPress: null };
    obj28[0] = tmp14(tmp5(14523).WrenchIcon, {});
    obj28[3] = function onPress() {
      showDevWidget(709).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
    };
    items8[4] = tmp14(tmp5(5220).TableRow, obj28);
    const obj29 = { icon: null, label: "Force libdiscore Store Error", subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset", onPress: null };
    obj29[0] = tmp14(tmp5(14523).WrenchIcon, {});
    obj29[3] = function onPress() {
      const socket2 = socket.getSocket();
      const obj = showDevWidget(709);
      showDevWidget(709).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
        const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
      });
    };
    items8[5] = tmp14(tmp5(5220).TableRow, obj29);
    obj23[2] = items8;
    items5[8] = closure_22(tmp5(5554).TableRowGroup, obj23);
    tmp5Result = tmp5(500);
    let isIOSResult = tmp5Result.isIOS();
    if (isIOSResult) {
      const obj30 = { children: null };
      const obj31 = { size: null };
      obj31[0] = tmp2(712).space.PX_16;
      const items9 = [tmp14(tmp5(1297).Spacer, obj31), ];
      const obj32 = { title: "Memory Actions", hasIcons: true, children: null };
      const obj33 = { icon: null, label: "Trigger Memory Warning", subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).", onPress: null };
      obj33[0] = tmp14(tmp5(14523).WrenchIcon, {});
      obj33[3] = function onPress() {
        return showDevWidget(1208).triggerMemoryWarning();
      };
      obj32[2] = tmp14(tmp5(5220).TableRow, obj33);
      items9[1] = tmp14(tmp5(5554).TableRowGroup, obj32);
      obj30[0] = items9;
      isIOSResult = tmp12(closure_23, obj30);
    }
    items5[9] = isIOSResult;
    obj[2] = items5;
    return closure_22(ScrollView, obj);
  }
  const tmp7 = callback(setting.useState(false), 2);
};
