// Module ID: 14503
// Function ID: 109228
// Name: handleNewUserOnboarding
// Dependencies: []
// Exports: default

// Module 14503 (handleNewUserOnboarding)
function handleNewUserOnboarding() {
  arg1(dependencyMap[19]).setNewUser(NewUserTypes.ORGANIC_REGISTERED);
  const obj = arg1(dependencyMap[19]);
  importDefault(dependencyMap[20]).wait(arg1(dependencyMap[21]).startOnboarding);
}
function handleThemeChange(arg0) {
  importDefault(dependencyMap[22]).updateTheme(arg0 ? ThemeTypes.LIGHT : ThemeTypes.DARK);
}
function handleReducedMotionChange(arg0) {
  let str = "no-preference";
  if (arg0) {
    str = "reduce";
  }
  const result = arg1(dependencyMap[23]).setPrefersReducedMotion(str);
}
function handleLaunchWelcomeReset() {
  const result = arg1(dependencyMap[24]).removeDismissedContent(arg1(dependencyMap[25]).DismissibleContent.SEEN_LAUNCH_WELCOME);
  const obj = arg1(dependencyMap[24]);
  const result1 = arg1(dependencyMap[26]).UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[25]).DismissibleContent.SEEN_OLD_DESIGN);
}
function showVibingWumpus() {
  let obj = importDefault(dependencyMap[27]);
  obj = {
    onClose() {

    }
  };
  obj.pushLazy(arg1(dependencyMap[29])(dependencyMap[30], dependencyMap.paths), obj, VIBING_WUMPUS_MODAL_KEY);
}
function handleResetDoubleTapState() {
  const result = arg1(dependencyMap[24]).removeDismissedContent(arg1(dependencyMap[25]).DismissibleContent.DOUBLE_TAP_TO_REACT_UPSELL);
  const obj = arg1(dependencyMap[24]);
  const result1 = arg1(dependencyMap[24]).removeDismissedContent(arg1(dependencyMap[25]).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER);
  const obj2 = arg1(dependencyMap[24]);
  const result2 = arg1(dependencyMap[24]).removeDismissedContent(arg1(dependencyMap[25]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
  const PreloadedUserSettingsActionCreators = arg1(dependencyMap[24]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("textAndImages", (arg0) => {
    arg0.defaultReactionEmoji = undefined;
  }, arg1(dependencyMap[24]).UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function launchTotpSetupSuccess() {
  let arr = importDefault(dependencyMap[27]);
  arr = arr.pop();
  const items = [arg1(dependencyMap[29])(dependencyMap[31], dependencyMap.paths), arg1(dependencyMap[29])(dependencyMap[32], dependencyMap.paths)];
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
  const result = arg1(dependencyMap[24]).removeDismissedContent(arg1(dependencyMap[25]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX);
  const obj = arg1(dependencyMap[24]);
  arg1(dependencyMap[33]).resetExpandNUXState();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const ThemeTypes = arg1(dependencyMap[11]).ThemeTypes;
const NewUserTypes = arg1(dependencyMap[12]).NewUserTypes;
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_16, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_17 } = arg1(dependencyMap[13]));
const VIBING_WUMPUS_MODAL_KEY = arg1(dependencyMap[14]).VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = arg1(dependencyMap[15]).SystemThemeState;
const tmp2 = arg1(dependencyMap[13]);
({ jsx: closure_20, jsxs: closure_21 } = arg1(dependencyMap[16]));
let obj = arg1(dependencyMap[17]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[18]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[16]);
obj.content = { padding: importDefault(dependencyMap[18]).space.PX_16 };
let closure_22 = obj.createStyles(obj);
function launchMFA() {
  let arr = importDefault(dependencyMap[27]);
  arr = arr.pop();
  arg1(dependencyMap[29])(dependencyMap[28], dependencyMap.paths).then((openMFAModal) => {
    const items = [{ accessible: "dev-tools-gift-intent-no-channel", t: "Open a DM first." }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal({ ticket: "ticket", methods: items }, () => {

    }, () => {

    });
  });
}
const obj1 = { padding: importDefault(dependencyMap[18]).space.PX_16 };
const result = arg1(dependencyMap[58]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  let locale;
  let usingSystemTheme;
  const tmp = callback4();
  let obj = arg1(closure_2[35]);
  const items = [closure_10, closure_9, closure_11, closure_13];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  const arg1 = locale;
  const showDevWidget = stateFromStoresObject.showDevWidget;
  const importDefault = showDevWidget;
  let obj1 = arg1(closure_2[35]);
  const items1 = [closure_12];
  closure_2 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj2 = arg1(closure_2[35]);
  const items2 = [closure_8];
  const callback = obj2.useStateFromStores(items2, () => premiumTypeOverride.getPremiumTypeOverride());
  const tmp4 = callback(React.useState(false), 2);
  const React = tmp4[1];
  const IgnoreProfileSpeedbumpDisabled = arg1(closure_2[36]).IgnoreProfileSpeedbumpDisabled;
  const setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const ScrollView = setting;
  let obj3 = arg1(closure_2[35]);
  const items3 = [closure_6];
  [][0] = locale;
  const stateFromStores = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  if (tmp4[0]) {
    return callback2(arg1(closure_2[37]).default, {});
  } else {
    obj = { style: tmp.container };
    const items4 = [tmp.content, ];
    obj = { paddingBottom: tmp.content.padding + tmp2.bottom };
    items4[1] = obj;
    obj.contentContainerStyle = items4;
    obj1 = {};
    obj2 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          let obj = locale(closure_2[40]);
          obj = { showDevWidget: !showDevWidget };
          return obj.updateDevToolsSettings(obj);
        }
    };
    obj1.children = callback2(arg1(closure_2[39]).TableSwitchRow, obj2);
    const items5 = [callback2(arg1(closure_2[38]).TableRowGroup, obj1), , , , , , , , ];
    obj3 = { size: importDefault(closure_2[18]).space.PX_16 };
    items5[1] = callback2(arg1(closure_2[41]).Spacer, obj3);
    const obj4 = { width: null, height: true };
    const obj5 = {};
    let str2 = "Light Theme";
    if (usingSystemTheme) {
      str2 = "(using system theme)";
    }
    obj5.label = str2;
    obj5.disabled = usingSystemTheme;
    obj5.icon = callback2(arg1(closure_2[42]).ThemeLightIcon, {});
    let obj11 = arg1(closure_2[43]);
    obj5.value = obj11.isThemeLight(stateFromStoresObject.theme);
    obj5.onValueChange = handleThemeChange;
    const items6 = [callback2(arg1(closure_2[39]).TableSwitchRow, obj5), ];
    const obj6 = { label: "Reduced Motion", icon: callback2(arg1(closure_2[44]).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    items6[1] = callback2(arg1(closure_2[39]).TableSwitchRow, obj6);
    obj4.children = items6;
    items5[2] = callback3(arg1(closure_2[38]).TableRowGroup, obj4);
    const obj7 = { size: importDefault(closure_2[18]).space.PX_16 };
    items5[3] = callback2(arg1(closure_2[41]).Spacer, obj7);
    const obj8 = {
      width: null,
      height: null,
      children: closure_16.map((arg0) => {
          let label;
          let value;
          ({ label, value } = arg0);
          const locale = value;
          const obj = {
            onValueChange(arg0) {
              const result = value(closure_2[45]).updateClientPremiumTypeOverride(arg0 ? value : closure_17, closure_2);
            },
            label,
            icon: callback2(locale(closure_2[46]).PencilIcon, {}),
            value: value === closure_3
          };
          return callback2(locale(closure_2[39]).TableSwitchRow, obj, label);
        })
    };
    items5[4] = callback2(arg1(closure_2[38]).TableRowGroup, obj8);
    const obj9 = { size: importDefault(closure_2[18]).space.PX_16 };
    items5[5] = callback2(arg1(closure_2[41]).Spacer, obj9);
    const obj10 = {};
    const intl = arg1(closure_2[47]).intl;
    obj10.title = intl.string(arg1(closure_2[47]).t.Aojq+L);
    obj10.hasIcons = true;
    obj11 = {};
    let str4 = "Change to en-US";
    if ("en-US" === locale) {
      str4 = "Change to pt-BR";
    }
    obj11.label = str4;
    obj11.subLabel = "Toggle to a non-english locale for change log testing, etc.";
    obj11.onPress = tmp7;
    obj11.icon = callback2(arg1(closure_2[49]).LanguageIcon, {});
    obj11.trailing = callback2(arg1(closure_2[50]).TableRowArrow, {});
    const items7 = [callback2(arg1(closure_2[48]).TableRow, obj11), , , , , , , , , , ];
    const obj12 = { "Bool(false)": 1107296536, "Bool(false)": 106869, onPress: handleResetDoubleTapState, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[1] = callback2(arg1(closure_2[48]).TableRow, obj12);
    const obj13 = { "Bool(false)": 1107296584, "Bool(false)": 92181, onPress: handleResetInAppNotificationExpandNux, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[2] = callback2(arg1(closure_2[48]).TableRow, obj13);
    const obj14 = {};
    const intl2 = arg1(closure_2[47]).intl;
    obj14.label = intl2.string(arg1(closure_2[47]).t.yoWDXU);
    obj14.subLabel = "Dismisses dev tools when launching.";
    obj14.onPress = handleNewUserOnboarding;
    obj14.icon = callback2(arg1(closure_2[52]).WrenchIcon, {});
    obj14.trailing = callback2(arg1(closure_2[50]).TableRowArrow, {});
    items7[3] = callback2(arg1(closure_2[48]).TableRow, obj14);
    const obj15 = { "Bool(false)": true, "Bool(false)": true, onPress: launchMFA, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[4] = callback2(arg1(closure_2[48]).TableRow, obj15);
    const obj16 = { "Bool(false)": false, "Bool(false)": "Premium Toggles", onPress: launchTotpSetupSuccess, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[5] = callback2(arg1(closure_2[48]).TableRow, obj16);
    const obj17 = { "Bool(false)": false, "Bool(false)": false, onPress: handleLaunchWelcomeReset, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[6] = callback2(arg1(closure_2[48]).TableRow, obj17);
    const obj18 = { "Bool(false)": false, "Bool(false)": "Orbs", onPress: showVibingWumpus, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[7] = callback2(arg1(closure_2[48]).TableRow, obj18);
    const obj19 = { label: "Test captcha", onPress: arg1(closure_2[53]).showCaptchaTestModal, icon: callback2(arg1(closure_2[51]).KeyIcon, {}), trailing: callback2(arg1(closure_2[50]).TableRowArrow, {}) };
    items7[8] = callback2(arg1(closure_2[48]).TableRow, obj19);
    const obj20 = {
      "Bool(false)": true,
      "Bool(false)": true,
      icon: callback2(arg1(closure_2[54]).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = locale(closure_2[36]).IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    items7[9] = callback2(arg1(closure_2[39]).TableSwitchRow, obj20);
    const obj21 = { "Bool(false)": false, "Bool(false)": "Guild Tag Badges", onPress: importDefault(closure_2[55]), icon: callback2(arg1(closure_2[52]).WrenchIcon, {}) };
    items7[10] = callback2(arg1(closure_2[48]).TableRow, obj21);
    obj10.children = items7;
    items5[6] = callback3(arg1(closure_2[38]).TableRowGroup, obj10);
    const obj22 = { size: importDefault(closure_2[18]).space.PX_16 };
    items5[7] = callback2(arg1(closure_2[41]).Spacer, obj22);
    const obj23 = {};
    const obj24 = {
      icon: callback2(arg1(closure_2[52]).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          return showDevWidget(closure_2[56]).crash();
        }
    };
    const items8 = [callback2(arg1(closure_2[48]).TableRow, obj24), , , , , ];
    const obj25 = {
      icon: callback2(arg1(closure_2[52]).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    items8[1] = callback2(arg1(closure_2[48]).TableRow, obj25);
    const obj26 = {
      icon: callback2(arg1(closure_2[52]).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          callback(true);
        }
    };
    items8[2] = callback2(arg1(closure_2[48]).TableRow, obj26);
    const obj27 = {
      icon: callback2(arg1(closure_2[52]).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          locale(closure_2[57]).crash();
        }
    };
    items8[3] = callback2(arg1(closure_2[48]).TableRow, obj27);
    const obj28 = {
      disabled: true,
      value: true,
      label: true,
      icon: callback2(arg1(closure_2[52]).WrenchIcon, {}),
      onPress() {
          showDevWidget(closure_2[20]).dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    items8[4] = callback2(arg1(closure_2[48]).TableRow, obj28);
    const obj29 = {
      disabled: 4,
      value: 279,
      label: null,
      icon: callback2(arg1(closure_2[52]).WrenchIcon, {}),
      onPress() {
          const socket2 = socket.getSocket();
          const obj = showDevWidget(closure_2[20]);
          showDevWidget(closure_2[20]).dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((error) => {
            const result = closure_0.resetSocketOnDispatchError({ error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          });
        }
    };
    items8[5] = callback2(arg1(closure_2[48]).TableRow, obj29);
    obj23.children = items8;
    items5[8] = callback3(arg1(closure_2[38]).TableRowGroup, obj23);
    obj.children = items5;
    return callback3(ScrollView, obj);
  }
  const tmp2 = importDefault(closure_2[34])();
};
