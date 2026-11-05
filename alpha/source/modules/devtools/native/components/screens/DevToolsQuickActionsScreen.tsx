// Module ID: 17946
// Function ID: 17947
// Name: DevToolsQuickActionsScreen
// Dependencies: [32, 5, 19, 17, 5144, 13668, 6706, 1386, 2191, 1192, 1194, 1385, 8008, 1072, 14502, 1387, 11452, 1195, 21, 5143, 575, 14585, 14501, 6070, 16528, 6882, 17947, 2123, 17963, 11503, 4973, 4976, 16926, 16928, 15845, 5849, 17838, 6575, 504, 7274, 1627, 4968, 17967, 7204, 7507, 17854, 1187, 17532, 5150, 17592, 17968, 10416, 1113, 7119, 9776, 7128, 13669, 13670, 5848, 13671, 17969, 7240, 1242, 1363, 572, 1377, 2]
// Exports: default

// Module 17946 (DevToolsQuickActionsScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import UserSettings from "UserSettings" /* 4968 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4973 */;
import dismissible_content from "dismissible_content" /* 4976 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 6070 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import Constants2 from "Constants" /* 11452 */;
import NUFActionCreators from "NUFActionCreators" /* 14501 */;
import NUFConstants from "NUFConstants" /* 14502 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 14585 */;
import requestReviewModalDefault from "requestReviewModal" /* 15845 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16528 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 17854 */;
import OverridePremiumTypeActions from "OverridePremiumTypeActions" /* 17968 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import CheckpointStore from "CheckpointStore" /* 13668 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6706 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1386 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserStore from "UserStore" /* 1385 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 8008 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap;

let closure_19;
let closure_20;
let closure_23;
let closure_24;
let closure_25;
let metroImportDefault;
let metroRequire;
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
  const promise = asyncRequire(17963, dependencyMap.paths);
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
  obj.pushLazy(asyncRequire(11503, dependencyMap.paths), obj2, VIBING_WUMPUS_MODAL_KEY);
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
  const items = [asyncRequire(16926, dependencyMap.paths), asyncRequire(16928, dependencyMap.paths)];
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
        return { value: "HermesInternal", done: null };
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
          const open = closure_129_1(closure_129_2[35]).open;
          const tmp22 = closure_129_1(closure_129_2[35]);
          if (!tmp.ok) {
            const _HermesInternal = HermesInternal;
            str2 = "Review request failed: " + tmp.error;
          }
          obj = { text: str2, icon: closure_129_0(closure_129_2[36]).WrenchIcon };
          open("DEV_APP_RATING_REQUEST", obj);
          c3 = 3;
          return { value: "HermesInternal", done: null };
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
({ ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
const ThemeTypes = Constants.ThemeTypes;
const NewUserTypes = NUFConstants.NewUserTypes;
({ PREMIUM_TYPE_OVERRIDE_OPTIONS: closure_19, UNSELECTED_PREMIUM_TYPE_OVERRIDE: closure_20 } = PremiumConstants);
const VIBING_WUMPUS_MODAL_KEY = Constants2.VIBING_WUMPUS_MODAL_KEY;
const SystemThemeState = ThemeConstants.SystemThemeState;
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, content: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_26 = createStyles(obj);
function launchMFA() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
  const promise = asyncRequire(17947, dependencyMap.paths);
  promise.then((openMFAModal) => {
    let items;
    obj = { ticket: "ticket", methods: items };
    items = [{ type: "webauthn", challenge: "{}" }, { type: "totp" }, { type: "backup" }, { type: "sms" }, { type: "password" }];
    openMFAModal.openMFAModal(obj, () => {

    }, () => {

    });
  });
}
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsQuickActionsScreen.tsx");

export default function DevToolsQuickActionsScreen() {
  let KeyIcon;
  let TableRow21;
  let closure_2;
  let closure_3;
  let currentUser;
  let intl;
  let intl2;
  let isFetching;
  let items10;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let locale;
  let obj41;
  let obj6;
  let premiumTypeOverride;
  let setting;
  let showDevWidget;
  let socket;
  let tmp11;
  let tmp2Result9;
  let useReducedMotion;
  let useSystemTheme;
  let usingSystemTheme;
  const tmp = closure_26();
  const tmp2 = locale;
  const tmp3 = dependencyMap;
  obj = locale(6575);
  let isCheckpointEnabled = obj.useIsCheckpointEnabled("DevToolsQuickActionsScreen");
  let obj2 = locale(504);
  const items = [CheckpointStore];
  const tmp5 = closure_23;
  if (obj2.useStateFromStores(items, () => isFetching.isFetching)) {
    KeyIcon = closure_6;
  } else {
    KeyIcon = tmp2(7274).KeyIcon;
  }
  const tmp5Result = tmp5(KeyIcon, {});
  const items1 = [ThemeStore, LocaleStore, UnsyncedUserSettingsStore, DevToolsSettingsStore];
  const tmp8 = showDevWidget(1627)();
  const tmp2Result = tmp2(504);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => ({ theme: theme.theme, usingSystemTheme: useSystemTheme.useSystemTheme === constants.ON, locale: locale.locale, showDevWidget: showDevWidget.showDevWidget }));
  ({ usingSystemTheme, locale } = stateFromStoresObject);
  showDevWidget = stateFromStoresObject.showDevWidget;
  const theme = stateFromStoresObject.theme;
  const items2 = [UserStore];
  const tmp2Result6 = tmp2(504);
  dependencyMap = tmp2Result6.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [OverridePremiumTypeStore];
  const tmp2Result7 = tmp2(504);
  _slicedToArray = tmp2Result7.useStateFromStores(items3, () => premiumTypeOverride.getPremiumTypeOverride());
  [tmp11, _asyncToGenerator] = setting.useState(false);
  _slicedToArray(setting.useState(false), 2);
  let IgnoreProfileSpeedbumpDisabled = tmp2(4968).IgnoreProfileSpeedbumpDisabled;
  setting = IgnoreProfileSpeedbumpDisabled.useSetting();
  const items4 = [AccessibilityStore];
  [][0] = locale;
  const tmp2Result8 = tmp2(504);
  const stateFromStores = tmp2Result8.useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  if (tmp11) {
    return tmp5(tmp2(17967).default, {});
  } else {
    let obj3 = { style: tmp.container, contentContainerStyle: items5, children: items6 };
    items5 = [tmp.content, ];
    let obj4 = { paddingBottom: tmp.content.padding + tmp8.bottom };
    items5[1] = obj4;
    let obj5 = { title: "General", hasIcons: false, children: tmp5(tmp2(7507).TableSwitchRow, obj6) };
    const TableRowGroup = tmp2(7204).TableRowGroup;
    obj6 = {
      label: "Show Dev Widget",
      value: showDevWidget,
      onValueChange() {
          obj = DevToolsActionCreators;
          const obj2 = { showDevWidget: !showDevWidget };
          return obj.updateDevToolsSettings(obj2);
        }
    };
    items6 = [tmp5(TableRowGroup, obj5), , , , , , , , , ];
    let obj7 = { size: showDevWidget(575).space.PX_16 };
    const Spacer = tmp2(1187).Spacer;
    items6[1] = tmp5(Spacer, obj7);
    const TableRowGroup2 = tmp2(7204).TableRowGroup;
    let str = "Light Theme";
    let TableSwitchRow = tmp2(7507).TableSwitchRow;
    const tmp16 = closure_7;
    if (usingSystemTheme) {
      str = "(using system theme)";
    }
    const obj8 = { title: "Appearance", hasIcons: true, children: items7 };
    const obj9 = { label: str, disabled: usingSystemTheme, icon: tmp5(tmp2(17532).ThemeLightIcon, {}), value: tmp2Result9.isThemeLight(theme), onValueChange: handleThemeChange };
    tmp2Result9 = tmp2(5150);
    items7 = [tmp5(TableSwitchRow, obj9), ];
    const obj10 = { label: "Reduced Motion", icon: tmp5(tmp2(17592).AccessibilityIcon, {}), value: stateFromStores, onValueChange: handleReducedMotionChange };
    const TableSwitchRow2 = tmp2(7507).TableSwitchRow;
    items7[1] = tmp5(TableSwitchRow2, obj10);
    items6[2] = closure_24(TableRowGroup2, obj8);
    const obj11 = { size: showDevWidget(575).space.PX_16 };
    const Spacer2 = tmp2(1187).Spacer;
    items6[3] = tmp5(Spacer2, obj11);
    const obj12 = {
      title: "Override Client-Side Premium Type",
      hasIcons: true,
      children: closure_19.map((item) => {
          let label;
          let value;
          ({ label, value } = item);
          locale = value;
          obj = {
            onValueChange(arg0) {
              obj = OverridePremiumTypeActions;
              const result = obj.updateClientPremiumTypeOverride(arg0 ? locale : closure_20, closure_2);
            },
            label,
            icon: closure_1_23(locale(closure_2[51]).PencilIcon, {}),
            value: value === closure_3
          };
          const TableSwitchRow = locale(closure_2[44]).TableSwitchRow;
          return closure_1_23(TableSwitchRow, obj, label);
        })
    };
    const TableRowGroup3 = tmp2(7204).TableRowGroup;
    items6[4] = tmp5(TableRowGroup3, obj12);
    const obj13 = { size: showDevWidget(575).space.PX_16 };
    const Spacer3 = tmp2(1187).Spacer;
    items6[5] = tmp5(Spacer3, obj13);
    const obj14 = { title: intl.string(tmp2(1113).t["Aojq+L"]), hasIcons: true, children: items8 };
    const TableRowGroup4 = tmp2(7204).TableRowGroup;
    intl = tmp2(1113).intl;
    let str2 = "Change to en-US";
    const TableRow = tmp2(7119).TableRow;
    if ("en-US" === locale) {
      str2 = "Change to pt-BR";
    }
    const obj15 = { label: str2, subLabel: "Toggle to a non-english locale for change log testing, etc.", onPress: tmp14, icon: tmp5(tmp2(9776).LanguageIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    items8 = [tmp5(TableRow, obj15), , , , , , , , , , , , , , ];
    const obj16 = { label: "Reset Double Tap Emoji State", subLabel: "Clears double tap emoji and resets dismissible content.", onPress: handleResetDoubleTapState, icon: tmp5(tmp2(7274).KeyIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow2 = tmp2(7119).TableRow;
    items8[1] = tmp5(TableRow2, obj16);
    const obj17 = { label: intl2.string(tmp2(1113).t.yoWDXU), subLabel: "Dismisses dev tools when launching.", onPress: handleNewUserOnboarding, icon: tmp5(tmp2(17838).WrenchIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow3 = tmp2(7119).TableRow;
    intl2 = tmp2(1113).intl;
    items8[2] = tmp5(TableRow3, obj17);
    const obj18 = { label: "Launch MFA Challenge Modal", subLabel: "Dismisses dev tools when launching.", onPress: launchMFA, icon: tmp5(tmp2(7274).KeyIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow4 = tmp2(7119).TableRow;
    items8[3] = tmp5(TableRow4, obj18);
    const obj19 = { label: "Show Passkey Promo Sheet", subLabel: "Skips eligibility checks. Dismisses dev tools when launching.", onPress: launchPasskeyPromoSheet, icon: tmp5(tmp2(7274).KeyIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow5 = tmp2(7119).TableRow;
    items8[4] = tmp5(TableRow5, obj19);
    const obj20 = { label: "Show TOTP Setup Success", subLabel: "Dismisses dev tools when launching.", onPress: launchTotpSetupSuccess, icon: tmp5(tmp2(7274).KeyIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow6 = tmp2(7119).TableRow;
    items8[5] = tmp5(TableRow6, obj20);
    const obj21 = { label: "Launch Vibing Wumpus", subLabel: "Vibe with the one and only", onPress: showVibingWumpus, icon: tmp5(tmp2(7274).KeyIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow7 = tmp2(7119).TableRow;
    items8[6] = tmp5(TableRow7, obj21);
    let tmp5Result5 = isCheckpointEnabled;
    if (tmp5Result5) {
      const obj22 = {
        label: "Launch Checkpoint",
        subLabel: "Look back at your year on Discord",
        onPress() {
              obj = locale(closure_2[56]);
              return obj.openCheckpoint("devtools");
            },
        icon: tmp5Result,
        trailing: tmp5(tmp2(7128).TableRowArrow, {})
      };
      const TableRow8 = tmp2(7119).TableRow;
      tmp5Result5 = tmp5(TableRow8, obj22);
    }
    items8[7] = tmp5Result5;
    let tmp5Result6 = isCheckpointEnabled;
    if (tmp5Result6) {
      const obj23 = {
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
                  return { value: "HermesInternal", done: null };
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
                      const obj2 = showDevWidget(c2[35]);
                      obj2.open("CHECKPOINT_RESET", { text: "success" });
                    } else {
                      obj = tmp3(c2[58]);
                      obj.presentError("error");
                    }
                    c2 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp13) {
                  c2 = 3;
                  throw tmp13;
                }
              }
            }),
        icon: tmp5(tmp2(7274).KeyIcon, {}),
        trailing: tmp5(tmp2(7128).TableRowArrow, {})
      };
      const TableRow9 = tmp2(7119).TableRow;
      tmp5Result6 = tmp5(TableRow9, obj23);
    }
    items8[8] = tmp5Result6;
    let tmp5Result7 = isCheckpointEnabled;
    if (tmp5Result7) {
      const obj24 = {
        label: "Launch Checkpoint with fake data",
        subLabel: "Use mock stats in place of your own",
        onPress() {
              obj = locale(closure_2[56]);
              return obj.openCheckpoint("devtools", true, locale(closure_2[59]).CheckpointMockStats.DEFAULT);
            },
        icon: tmp5Result,
        trailing: tmp5(tmp2(7128).TableRowArrow, {})
      };
      const TableRow10 = tmp2(7119).TableRow;
      tmp5Result7 = tmp5(TableRow10, obj24);
    }
    items8[9] = tmp5Result7;
    let tmp5Result8 = isCheckpointEnabled;
    if (tmp5Result8) {
      const obj25 = {
        label: "Launch Checkpoint with No Personal Data",
        subLabel: "Use the no-shared-data flow with null stats",
        onPress() {
              obj = locale(closure_2[56]);
              return obj.openCheckpoint("devtools", false, locale(closure_2[59]).CheckpointMockStats.NO_PERSONAL_DATA);
            },
        icon: tmp5Result,
        trailing: tmp5(tmp2(7128).TableRowArrow, {})
      };
      const TableRow11 = tmp2(7119).TableRow;
      tmp5Result8 = tmp5(TableRow11, obj25);
    }
    items8[10] = tmp5Result8;
    if (isCheckpointEnabled) {
      const obj26 = {
        label: "Launch Checkpoint with Zero Data",
        subLabel: "Use mock stats with every stat at zero",
        onPress() {
              obj = locale(closure_2[56]);
              return obj.openCheckpoint("devtools", true, locale(closure_2[59]).CheckpointMockStats.ZERO_DATA);
            },
        icon: tmp5Result,
        trailing: tmp5(tmp2(7128).TableRowArrow, {})
      };
      const TableRow12 = tmp2(7119).TableRow;
      isCheckpointEnabled = tmp5(TableRow12, obj26);
    }
    items8[11] = isCheckpointEnabled;
    const obj27 = { label: "Test captcha", onPress: tmp2(17969).showCaptchaTestModal, icon: tmp5(tmp2(7274).KeyIcon, {}), trailing: tmp5(tmp2(7128).TableRowArrow, {}) };
    const TableRow13 = tmp2(7119).TableRow;
    items8[12] = tmp5(TableRow13, obj27);
    const obj28 = {
      label: "Ignored Profile Speedbump Suppression",
      subLabel: "Suppresses the speedbump for ignored profiles.",
      icon: tmp5(tmp2(7240).EyeSlashIcon, {}),
      value: setting,
      onValueChange() {
          const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
          return IgnoreProfileSpeedbumpDisabled.updateSetting(!setting);
        }
    };
    const TableSwitchRow3 = tmp2(7507).TableSwitchRow;
    items8[13] = tmp5(TableSwitchRow3, obj28);
    const obj29 = { label: "Show App Rating Modal", subLabel: "Attempts to show the app rating modal and toasts the request outcome. The prompt may not visually appear on debug builds, or if the OS declines to render it (recent prompt, quota) -- a success toast only means the request was sent without error.", onPress: handleShowAppRatingModal, icon: tmp5(tmp2(17838).WrenchIcon, {}) };
    const TableRow14 = tmp2(7119).TableRow;
    items8[14] = tmp5(TableRow14, obj29);
    items6[6] = closure_24(TableRowGroup4, obj14);
    const obj30 = { size: showDevWidget(575).space.PX_16 };
    const Spacer4 = tmp2(1187).Spacer;
    items6[7] = tmp5(Spacer4, obj30);
    const obj31 = { title: "Crash Actions", hasIcons: true, children: items9 };
    const TableRowGroup5 = tmp2(7204).TableRowGroup;
    const obj32 = {
      icon: tmp5(tmp2(17838).WrenchIcon, {}),
      label: "Force Native Crash",
      onPress() {
          obj = showDevWidget(closure_2[62]);
          return obj.crash();
        }
    };
    const TableRow15 = tmp2(7119).TableRow;
    items9 = [tmp5(TableRow15, obj32), , , , , ];
    const obj33 = {
      icon: tmp5(tmp2(17838).WrenchIcon, {}),
      label: "Force JS Crash",
      onPress() {
          const error = new Error("Force JS Crash");
          throw error;
        }
    };
    const TableRow16 = tmp2(7119).TableRow;
    items9[1] = tmp5(TableRow16, obj33);
    const obj34 = {
      icon: tmp5(tmp2(17838).WrenchIcon, {}),
      label: "Force JS Boundary Crash",
      onPress() {
          _asyncToGenerator(true);
        }
    };
    const TableRow17 = tmp2(7119).TableRow;
    items9[2] = tmp5(TableRow17, obj34);
    const obj35 = {
      icon: tmp5(tmp2(17838).WrenchIcon, {}),
      label: "Force libdiscore Crash",
      onPress() {
          obj = locale(closure_2[63]);
          obj.crash();
        }
    };
    const TableRow18 = tmp2(7119).TableRow;
    items9[3] = tmp5(TableRow18, obj35);
    const obj36 = {
      icon: tmp5(tmp2(17838).WrenchIcon, {}),
      label: "Force libdiscore Store Crash",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_CRASH to NoteStore",
      onPress() {
          obj = showDevWidget(closure_2[64]);
          obj.dispatch({ type: "LIBDISCORE_SIMULATE_CRASH" });
        }
    };
    const TableRow19 = tmp2(7119).TableRow;
    items9[4] = tmp5(TableRow19, obj36);
    const obj37 = {
      icon: tmp5(tmp2(17838).WrenchIcon, {}),
      label: "Force libdiscore Store Error",
      subLabel: "Dispatches LIBDISCORE_SIMULATE_STORE_ERROR with socket reset",
      onPress() {
          const socket2 = socket.getSocket();
          obj = showDevWidget(closure_2[64]);
          const dispatchResult = obj.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" });
          dispatchResult.catch((error) => {
            obj = { error, action: "LIBDISCORE_SIMULATE_STORE_ERROR" };
            const result = closure_0.resetSocketOnDispatchError(obj);
          });
        }
    };
    const TableRow20 = tmp2(7119).TableRow;
    items9[5] = tmp5(TableRow20, obj37);
    items6[8] = closure_24(TableRowGroup5, obj31);
    const tmp2Result10 = tmp2(1377);
    let isIOSResult = tmp2Result10.isIOS();
    if (isIOSResult) {
      const obj38 = { children: items10 };
      const obj39 = { size: showDevWidget(575).space.PX_16 };
      const Spacer5 = tmp2(1187).Spacer;
      items10 = [tmp5(Spacer5, obj39), ];
      const obj40 = { title: "Memory Actions", hasIcons: true, children: tmp5(TableRow21, obj41) };
      const TableRowGroup6 = tmp2(7204).TableRowGroup;
      obj41 = {
        icon: tmp5(tmp2(17838).WrenchIcon, {}),
        label: "Trigger Memory Warning",
        subLabel: "Simulates a memory warning to test cache-eviction behavior (e.g. SDWebImage).",
        onPress() {
              obj = showDevWidget(closure_2[62]);
              return obj.triggerMemoryWarning();
            }
      };
      TableRow21 = tmp2(7119).TableRow;
      items10[1] = tmp5(TableRowGroup6, obj40);
      isIOSResult = tmp15(closure_25, obj38);
    }
    items6[9] = isIOSResult;
    return closure_24(tmp16, obj3);
  }
};
