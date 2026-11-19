// Module ID: 15741
// Function ID: 15742
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 9305, 8013, 10084, 6429, 1082, 1072, 9300, 7950, 21, 4792, 575, 1113, 15742, 15872, 7283, 10096, 4969, 1503, 15881, 14458, 5356, 4853, 7478, 1502, 7295, 7467, 14106, 15765, 15873, 504, 5529, 9307, 15883, 6976, 6910, 11034, 15886, 13441, 13444, 2]

// Module 15741 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5529 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7283 */;
import Constants2 from "Constants" /* 7950 */;
import MainTabsConstants from "MainTabsConstants" /* 9300 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9307 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 10096 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 14106 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 15742 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 15872 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9305 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8013 */;
import WidgetStore from "WidgetStore" /* 10084 */;
import SortedGuildStore from "SortedGuildStore" /* 6429 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let c1, closure_12, state;

let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
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
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const UserProfileSections = Constants2.UserProfileSections;
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let obj = { container: { height: "100%" }, controls: { paddingTop: 4 }, page: { flex: 1 }, profileSelector: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_22 = createStyles.createStyles(obj);
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
    return closure_19(UserSettingsEditUserProfileDefault, { autoFocusElement, initialTab });
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
      return closure_19(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = react.memo(function ProfileCustomizationSettingScreen() {
  let DisableCustomTheme;
  let callback1;
  let closure_8;
  let first;
  let guild;
  let handleSubmit;
  let handleSubmit2;
  let hasInvalidWidgetChanges;
  let hasUnsavedChanges;
  let isMobileWidgetEditingEnabled;
  let items9;
  let num2;
  let obj8;
  let obj9;
  let onLayout;
  let onReset;
  let ref;
  let tmp12;
  let tmp48Result2;
  let tmp54;
  let tmp55;
  let tmpResult;
  let token;
  let tmp = token;
  let tmp2 = first;
  let tmp3 = token(first[23])();
  const tmp4 = closure_22();
  const tmp5 = isMobileWidgetEditingEnabled;
  let obj = isMobileWidgetEditingEnabled(first[24]);
  isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = isMobileWidgetEditingEnabled(first[25]);
  token = obj2.useToken(token(first[15]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = isMobileWidgetEditingEnabled(first[26]);
  const theme = obj3.useThemeContext().theme;
  const tmp8 = token(first[27])();
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
  const tmp11 = handleSubmit(react.useState(false), 2);
  [tmp12, closure_4] = tmp11;
  const tmp5Result = tmp5(tmp2[28]);
  const nativeStackNavigation = tmp5Result.useNativeStackNavigation();
  const tmp5Result6 = tmp5(tmp2[29]);
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
    let id;
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
  const useSegmentedControlState = tmp5(tmp2[30]).useSegmentedControlState;
  tmp5(tmp2[30]);
  const tmp20 = callback1;
  if (field === callback1.GUILD) {
    num2 = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj5);
  const tmp22 = tmp(tmp2[32])();
  handleSubmit = tmp22.handleSubmit;
  const tmp23 = field(tmp22, closure_3);
  react = tmp23;
  const tmp24 = tmp(tmp2[33])();
  ({ guild, handleSubmit: handleSubmit2 } = tmp24);
  const tmp25 = field(tmp24, closure_4);
  items = [hasInvalidWidgetChanges, closure_12];
  const tmp5Result8 = tmp5(tmp2[34]);
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
  const items2 = [onSave];
  callback1 = obj4.useCallback(nativeStackNavigation(function*() {
    let c2;
    function hasPendingBoardChangesOnBoardTab() {
      state = state.getState();
      const hasUnsavedChangesResult = state.subsection === constants.USER_PROFILE && "board" === tmp2 && closure_1_12.hasUnsavedChanges();
      return hasUnsavedChangesResult;
    }
    function selectYouScreenBoardTab() {
      const obj = closure_1_0(closure_1_2[21]);
      const rootNavigationRef = obj.getRootNavigationRef();
      const tmp = closure_1_0;
      const tmp2 = closure_1_2;
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const routes = rootNavigationRef.getRootState().routes;
          const found = routes.find((name) => name.name === constants.YOU);
          if (null != found) {
            const dispatch = rootNavigationRef.dispatch;
            const obj2 = { source: found.key };
            const CommonActions = tmp(tmp2[22]).CommonActions;
            const obj3 = { initialTab: constants2.WIDGETS };
            const merged = Object.assign(CommonActions.setParams(obj3));
            dispatch(obj2);
          }
        }
      }
    }
    let closure_0 = hasPendingBoardChangesOnBoardTab();
    yield callback();
    const value = arg1;
    const tmp7 = true === value && closure_0;
    if (tmp7) {
      selectYouScreenBoardTab();
    }
    return value;
  }), items2);
  const items3 = [field];
  const effect = obj4.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: field, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items3);
  const GUILD = tmp20.GUILD;
  const items4 = [onSave];
  const items5 = [hasUnsavedChanges, onSave];
  const tmp5Result9 = tmp5(tmp2[34]);
  const stateFromStores = tmp5Result9.useStateFromStores(items4, () => callback.getFlattenedGuildIds().length > 0);
  const callback2 = obj4.useCallback((onContinue) => {
    const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave };
    return maybeShowUnsavedChangesAlertDefault(obj);
  }, items5);
  const callback3 = obj4.useCallback(() => {
    closure_4(true);
    const obj = { subsection: ProfileCustomizationSubsection.USER_PROFILE };
    ProfileCustomizationNavigationStore.setState(obj);
  }, []);
  let id;
  const callback4 = obj4.useCallback((id) => {
    closure_4(true);
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(id.id);
    const obj2 = { subsection: ProfileCustomizationSubsection.GUILD, editingTab: "main" };
    ProfileCustomizationNavigationStore.setState(obj2);
  }, []);
  if (guild != null) {
    id = guild.id;
  }
  const items6 = [id];
  const effect1 = obj4.useEffect(() => {
    if (null != id) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp);
    }
  }, items6);
  const effect2 = obj4.useEffect(() => () => {
    const obj = isMobileWidgetEditingEnabled(first[19]);
    const result = obj.resetAndCloseUserProfileForm();
    hasUnsavedChanges.resetState();
    const obj2 = token(first[20]);
    obj2.clearPendingWidgets();
  }, []);
  const items7 = [token, nativeStackNavigation, isMobileWidgetEditingEnabled, hasUnsavedChanges, hasInvalidWidgetChanges, tmp23.isSubmitting || tmp25.isSubmitting, callback1];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let intl;
    let obj2;
    let obj4;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_12 ? (() => closure_1_19(isMobileWidgetEditingEnabled(first[38]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let tmp2;
        let obj = {
          text: intl.string(isMobileWidgetEditingEnabled(first[16]).t["R3BPH+"]),
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
                return { value: "HermesInternal", done: "+60" };
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
                    const obj4 = { value: callback1(), done: false };
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
                  return { value: "HermesInternal", done: "+60" };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          })
        };
        const HeaderActionButton = isMobileWidgetEditingEnabled(first[39]).HeaderActionButton;
        intl = isMobileWidgetEditingEnabled(first[16]).intl;
        tmp2 = !hasUnsavedChanges;
        const tmp = closure_2_19;
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
            return closure_2_19(token(first[37]), obj);
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
  }, items7);
  const usePreventRemove = tmp5(tmp2[22]).usePreventRemove;
  tmp5(tmp2[22]);
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
        onSave: callback1
      };
      token(first[31])(obj);
    }
  });
  const items8 = [first, nativeStackNavigation];
  const effect3 = obj4.useEffect(() => {
    const tmp = first;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items8);
  let tmp44Result = null;
  if (stateFromStores) {
    const obj6 = { theme, children: closure_19(DisableCustomTheme, obj8) };
    const ThemeContextProvider = tmp5(tmp2[26]).ThemeContextProvider;
    const obj7 = { style: tmp4.profileSelector, children: closure_19(tmpResult, obj9) };
    DisableCustomTheme = tmp5(tmp2[40]).DisableCustomTheme;
    let tmp47 = null;
    const tmp45 = handleSubmit2;
    tmpResult = tmp(tmp2[41]);
    if (field === GUILD) {
      tmp47 = guild;
    }
    obj8 = { children: closure_19(tmp45, obj7) };
    obj9 = { guild: tmp47, onBeforeOpen: callback2, onSelectMainProfile: callback3, onSelectGuild: callback4 };
    tmp44Result = tmp44(ThemeContextProvider, obj6);
  }
  const obj11 = { style: null, children: null };
  const obj10 = { style: tmp4.container, ref, onLayout, children: tmp48Result2 };
  if (isMobileWidgetEditingEnabled) {
    let tmp48Result;
    obj11.style = tmp4.page;
    if (field === GUILD) {
      const obj12 = { header: tmp44Result, showGuildSelector: false };
      tmp48Result = tmp48(tmp(tmp2[18]), obj12);
    } else {
      const obj13 = { header: tmp44Result, autoFocusElement: tmp54, initialTab: tmp55 };
      tmp54 = undefined;
      const tmpResult2 = tmp(tmp2[17]);
      if (!tmp12) {
        tmp54 = autoFocusElement;
      }
      tmp55 = undefined;
      if (!tmp12) {
        tmp55 = initialTab;
      }
      tmp48Result = tmp48(tmpResult2, obj13);
    }
    obj11.children = tmp48Result;
    tmp48Result2 = tmp48(tmp49, obj11);
  } else {
    const obj14 = { children: items9 };
    obj11.style = tmp4.controls;
    const obj15 = { state: segmentedControlState };
    obj11.children = closure_19(tmp5(tmp2[42]).Tabs, obj15);
    items9 = [closure_19(handleSubmit2, obj11), ];
    const obj16 = { state: segmentedControlState };
    items9[1] = closure_19(tmp5(tmp2[43]).SegmentedControlPages, obj16);
    tmp48Result2 = closure_21(closure_20, obj14);
  }
  return closure_19(handleSubmit2, obj10);
});
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
