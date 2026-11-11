// Module ID: 16944
// Function ID: 16945
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 9969, 8476, 12030, 6893, 1082, 1072, 21, 5243, 575, 1113, 16945, 17069, 7734, 12032, 17078, 15689, 5839, 5314, 7929, 1499, 7746, 7917, 15351, 16965, 17070, 504, 6004, 9971, 17080, 7427, 7363, 1500, 13022, 17083, 13159, 14834, 2]

// Module 16944 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6004 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7734 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9971 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12032 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 15351 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16945 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 17069 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9969 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8476 */;
import WidgetStore from "WidgetStore" /* 12030 */;
import SortedGuildStore from "SortedGuildStore" /* 6893 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c1, c2, closure_12;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let obj2;
function resetAllPendingChanges() {
  const obj = UserSettingsAccountActionCreators;
  obj.resetAllPending();
  const obj2 = WidgetActionCreatorsDefault;
  obj2.clearPendingWidgets();
}
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let react = react_mod;
const View = react_native.View;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let obj = { container: { height: "100%" }, controls: { paddingTop: 4 }, page: { flex: 1 }, profileSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_20 = createStyles.createStyles(obj);
let obj3 = {
  renderLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(arg0) {
    let autoFocusElement;
    let initialTab;
    ({ autoFocusElement, initialTab } = arg0);
    return closure_17(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
let items = [
  obj3,
  {
    renderLabel() {
      const intl = intl2.intl;
      return intl.string(intl2.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return closure_17(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = react.memo(function ProfileCustomizationSettingScreen() {
  let DisableCustomTheme;
  let closure_8;
  let first;
  let guild;
  let handleSubmit;
  let handleSubmit2;
  let hasInvalidWidgetChanges;
  let hasUnsavedChanges;
  let id;
  let isMobileWidgetEditingEnabled;
  let items8;
  let num2;
  let obj8;
  let obj9;
  let onLayout;
  let onReset;
  let ref;
  let tmp12;
  let tmp47Result2;
  let tmp53;
  let tmp54;
  let tmpResult;
  let token;
  let tmp = token;
  let tmp2 = first;
  let tmp3 = token(first[19])();
  const tmp4 = closure_20();
  let obj = isMobileWidgetEditingEnabled(first[20]);
  isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = isMobileWidgetEditingEnabled(first[21]);
  token = obj2.useToken(token(first[13]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = isMobileWidgetEditingEnabled(first[22]);
  const theme = obj3.useThemeContext().theme;
  const tmp8 = token(first[23])();
  const width = tmp8.width;
  let num = 0;
  ({ ref, onLayout } = tmp8);
  if (undefined !== width) {
    num = width;
  }
  let obj4 = react;
  const tmp9 = handleSubmit(react.useState(false), 2);
  first = tmp9[0];
  closure_3 = tmp9[1];
  [tmp12, closure_4] = handleSubmit(react.useState(false), 2);
  const tmp11 = handleSubmit(react.useState(false), 2);
  const tmp5Result = isMobileWidgetEditingEnabled(tmp2[24]);
  const nativeStackNavigation = tmp5Result.useNativeStackNavigation();
  const tmp5Result6 = isMobileWidgetEditingEnabled(tmp2[25]);
  const settingNavigationRoute = tmp5Result6.useSettingNavigationRoute();
  const params = settingNavigationRoute.params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const params2 = settingNavigationRoute.params;
  let initialTab;
  if (params2 != null) {
    initialTab = params2.initialTab;
  }
  const field = hasUnsavedChanges.useField("subsection");
  let closure_0 = { autoFocusElement, initialTab };
  const mapped = items.map((renderLabel) => {
    let renderPage;
    const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
    ({ id, renderPage } = renderLabel);
    return obj;
  });
  const obj5 = {
    items: mapped,
    pageWidth: num,
    defaultIndex: num2,
    onPageChange(arg0) {
      first = items[arg0];
      if (first == null) {
        first = items[0];
      }
      const obj = { subsection: first.subSection };
      hasUnsavedChanges.setState(obj);
    },
    onPageChangeStart(arg0, onContinue) {
      const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave };
      return maybeShowUnsavedChangesAlertDefault(obj);
    }
  };
  num2 = 0;
  const useSegmentedControlState = tmp5(tmp2[26]).useSegmentedControlState;
  isMobileWidgetEditingEnabled(tmp2[26]);
  const tmp20 = id;
  if (field === id.GUILD) {
    num2 = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj5);
  const tmp22 = tmp(tmp2[28])();
  handleSubmit = tmp22.handleSubmit;
  const tmp23 = field(tmp22, closure_3);
  react = tmp23;
  const tmp24 = tmp(tmp2[29])();
  ({ guild, handleSubmit: handleSubmit2 } = tmp24);
  const tmp25 = field(tmp24, closure_4);
  items = [hasInvalidWidgetChanges, closure_12];
  const tmp5Result8 = isMobileWidgetEditingEnabled(tmp2[30]);
  const stateFromStoresObject = tmp5Result8.useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = closure_12.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    const obj = closure_12;
    if (!showNoticeResult) {
      showNoticeResult = hasInvalidWidgetChanges.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: hasUnsavedChangesResult };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !obj.canSaveChanges();
    }
    return obj2;
  });
  hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  closure_12 = tmp27;
  const items1 = [field, handleSubmit, handleSubmit2];
  const onSave = obj4.useCallback(() => {
    let tmp2;
    if (field === ProfileCustomizationSubsection.GUILD) {
      tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [field];
  const effect = obj4.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: field, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  const GUILD = tmp20.GUILD;
  const items3 = [onSave];
  const items4 = [hasUnsavedChanges, onSave];
  const tmp5Result9 = isMobileWidgetEditingEnabled(tmp2[30]);
  const stateFromStores = tmp5Result9.useStateFromStores(items3, () => callback.getFlattenedGuildIds().length > 0);
  const callback1 = obj4.useCallback((onContinue) => {
    const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave };
    return maybeShowUnsavedChangesAlertDefault(obj);
  }, items4);
  const callback2 = obj4.useCallback(() => {
    closure_4(true);
    const obj = { subsection: ProfileCustomizationSubsection.USER_PROFILE };
    ProfileCustomizationNavigationStore.setState(obj);
  }, []);
  id = undefined;
  const callback3 = obj4.useCallback((id) => {
    closure_4(true);
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(id.id);
    const obj2 = { subsection: ProfileCustomizationSubsection.GUILD };
    ProfileCustomizationNavigationStore.setState(obj2);
  }, []);
  if (guild != null) {
    id = guild.id;
  }
  const items5 = [id];
  const effect1 = obj4.useEffect(() => {
    if (null != id) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp);
    }
  }, items5);
  const effect2 = obj4.useEffect(() => () => {
    const obj = isMobileWidgetEditingEnabled(first[17]);
    const result = obj.resetAndCloseUserProfileForm();
    hasUnsavedChanges.resetState();
    const obj2 = token(first[18]);
    obj2.clearPendingWidgets();
  }, []);
  const items6 = [token, nativeStackNavigation, isMobileWidgetEditingEnabled, hasUnsavedChanges, hasInvalidWidgetChanges, tmp23.isSubmitting || tmp25.isSubmitting, onSave];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let intl;
    let obj2;
    let obj4;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_12 ? (() => closure_1_17(isMobileWidgetEditingEnabled(first[34]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let tmp2;
        let obj = {
          text: intl.string(isMobileWidgetEditingEnabled(first[14]).t["R3BPH+"]),
          disabled: tmp2,
          onPress: nativeStackNavigation(function*(arg0, value) {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_0 = tmp3;
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: onSave(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  if (false !== value) {
                    closure_128_3(true);
                  }
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          })
        };
        const HeaderActionButton = isMobileWidgetEditingEnabled(first[35]).HeaderActionButton;
        intl = isMobileWidgetEditingEnabled(first[14]).intl;
        tmp2 = !hasUnsavedChanges;
        const tmp = closure_2_17;
        if (hasUnsavedChanges) {
          tmp2 = hasInvalidWidgetChanges;
        }
        return tmp(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    let tmp = nativeStackNavigation;
    const setOptions = nativeStackNavigation.setOptions;
    if (isMobileWidgetEditingEnabled) {
      let obj3 = {
        title: intl.string(intl2.t.s5vZlQ),
        headerLeft() {
            const obj = { navigation, hideBadge: true };
            return closure_2_17(token(first[33]), obj);
          }
      };
      let tmp2 = require;
      const tmp3 = dependencyMap;
      intl = intl2.intl;
      obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    setOptions(obj);
  }, items6);
  const usePreventRemove = tmp5(tmp2[36]).usePreventRemove;
  isMobileWidgetEditingEnabled(tmp2[36]);
  if (hasUnsavedChanges) {
    let isWaitingForHexagonCampaignEnrollment = !tmp27;
    if (tmp23.isSubmitting || tmp25.isSubmitting) {
      isWaitingForHexagonCampaignEnrollment = tmp23.isWaitingForHexagonCampaignEnrollment;
    }
    hasUnsavedChanges = isWaitingForHexagonCampaignEnrollment;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first;
  }
  const preventRemove = usePreventRemove(hasUnsavedChanges, (data) => {
    const action = data.data.action;
    if (!closure_8.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges,
        onReset,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      token(first[27])(obj);
    }
  });
  const items7 = [first, nativeStackNavigation];
  const effect3 = obj4.useEffect(() => {
    const tmp = first;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items7);
  let tmp43Result = null;
  if (stateFromStores) {
    const obj6 = { theme, children: closure_17(DisableCustomTheme, obj8) };
    const ThemeContextProvider = tmp5(tmp2[22]).ThemeContextProvider;
    const obj7 = { style: tmp4.profileSelector, children: closure_17(tmpResult, obj9) };
    DisableCustomTheme = tmp5(tmp2[37]).DisableCustomTheme;
    let tmp46 = null;
    const tmp44 = handleSubmit2;
    tmpResult = tmp(tmp2[38]);
    if (field === GUILD) {
      tmp46 = guild;
    }
    obj8 = { children: closure_17(tmp44, obj7) };
    obj9 = { guild: tmp46, onBeforeOpen: callback1, onSelectMainProfile: callback2, onSelectGuild: callback3 };
    tmp43Result = tmp43(ThemeContextProvider, obj6);
  }
  const obj11 = { style: null, children: null };
  const obj10 = { style: tmp4.container, ref, onLayout, children: tmp47Result2 };
  if (isMobileWidgetEditingEnabled) {
    let tmp47Result;
    obj11.style = tmp4.page;
    if (field === GUILD) {
      const obj12 = { header: tmp43Result, showGuildSelector: false };
      tmp47Result = tmp47(tmp(tmp2[16]), obj12);
    } else {
      const obj13 = { header: tmp43Result, autoFocusElement: tmp53, initialTab: tmp54 };
      tmp53 = undefined;
      const tmpResult2 = tmp(tmp2[15]);
      if (!tmp12) {
        tmp53 = autoFocusElement;
      }
      tmp54 = undefined;
      if (!tmp12) {
        tmp54 = initialTab;
      }
      tmp47Result = tmp47(tmpResult2, obj13);
    }
    obj11.children = tmp47Result;
    tmp47Result2 = tmp47(tmp48, obj11);
  } else {
    const obj14 = { children: items8 };
    obj11.style = tmp4.controls;
    const obj15 = { state: segmentedControlState };
    obj11.children = closure_17(isMobileWidgetEditingEnabled(tmp2[39]).Tabs, obj15);
    items8 = [closure_17(handleSubmit2, obj11), ];
    const obj16 = { state: segmentedControlState };
    items8[1] = closure_17(isMobileWidgetEditingEnabled(tmp2[40]).SegmentedControlPages, obj16);
    tmp47Result2 = closure_19(closure_18, obj14);
  }
  return closure_17(handleSubmit2, obj10);
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
