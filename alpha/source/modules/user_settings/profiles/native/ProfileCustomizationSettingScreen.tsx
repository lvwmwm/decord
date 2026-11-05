// Module ID: 16700
// Function ID: 16701
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 11656, 8877, 12572, 6910, 1082, 1072, 21, 5143, 1113, 16701, 16835, 7292, 12574, 16844, 16720, 5734, 575, 9141, 1499, 7304, 9131, 11604, 16722, 16836, 504, 5897, 11717, 7142, 7700, 1500, 16846, 12379, 14424, 2]

// Module 16700 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5897 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7292 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11604 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11717 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12574 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16701 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16835 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11656 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8877 */;
import WidgetStore from "WidgetStore" /* 12572 */;
import SortedGuildStore from "SortedGuildStore" /* 6910 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let c1, c2, closure_12;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
function resetAllPendingChanges() {
  const obj = UserSettingsAccountActionCreators;
  obj.resetAllPending();
  const obj2 = WidgetActionCreatorsDefault;
  obj2.clearPendingWidgets();
}
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 }, page: { flex: 1 } });
let obj = {
  renderLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return closure_17(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
  },
  subSection: ProfileCustomizationSubsection.USER_PROFILE
};
let items = [
  obj,
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
  let closure_2;
  let closure_7;
  let first;
  let guild;
  let hasInvalidWidgetChanges;
  let hasUnsavedChanges;
  let num2;
  let obj11;
  let onLayout;
  let onReset;
  let ref;
  let tmp12;
  let tmp38Result;
  let tmp40;
  let tmp41;
  let tmp42;
  let token;
  let tmp = first;
  let tmp2 = dependencyMap;
  const tmp3 = first(16844)();
  const tmp4 = closure_20();
  let obj = token(16720);
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = token(5734);
  token = obj2.useToken(first(575).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp8 = first(9141)();
  const width = tmp8.width;
  let num = 0;
  ({ ref, onLayout } = tmp8);
  if (undefined !== width) {
    num = width;
  }
  let obj3 = guild;
  [first, dependencyMap] = guild.useState(false);
  [tmp12, closure_3] = _slicedToArray(guild.useState(false), 2);
  const tmp11 = _slicedToArray(guild.useState(false), 2);
  const tmp5Result = token(1499);
  const nativeStackNavigation = tmp5Result.useNativeStackNavigation();
  const tmp5Result6 = token(7304);
  const params = tmp5Result6.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = hasUnsavedChanges.useField("subsection");
  let closure_0 = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    let id;
    let renderPage;
    const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
    ({ id, renderPage } = renderLabel);
    return obj;
  });
  let obj4 = {
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
  const useSegmentedControlState = tmp5(9131).useSegmentedControlState;
  token(9131);
  const tmp18 = ProfileCustomizationSubsection;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num2 = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj4);
  const tmp20 = tmp(16722)();
  const handleSubmit = tmp20.handleSubmit;
  const tmp21 = handleSubmit(tmp20, closure_3);
  _slicedToArray = tmp21;
  const tmp22 = tmp(16836)();
  guild = tmp22.guild;
  const handleSubmit2 = tmp22.handleSubmit;
  const tmp23 = handleSubmit(tmp22, nativeStackNavigation);
  items = [hasInvalidWidgetChanges, closure_12];
  const tmp5Result8 = token(504);
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
  closure_12 = tmp25;
  const items1 = [field, handleSubmit, handleSubmit2];
  const onSave = obj3.useCallback(() => {
    let tmp2;
    if (field === ProfileCustomizationSubsection.GUILD) {
      tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [field];
  const effect = obj3.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: field, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  const GUILD = tmp18.GUILD;
  const items3 = [onSave];
  const tmp5Result9 = token(504);
  let stateFromStores = tmp5Result9.useStateFromStores(items3, () => callback.getFlattenedGuildIds().length > 0);
  const items4 = [hasUnsavedChanges, onSave];
  const callback1 = obj3.useCallback((onContinue) => {
    const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave };
    return maybeShowUnsavedChangesAlertDefault(obj);
  }, items4);
  const callback2 = obj3.useCallback(() => {
    closure_3(true);
    const obj = { subsection: ProfileCustomizationSubsection.USER_PROFILE };
    ProfileCustomizationNavigationStore.setState(obj);
  }, []);
  const items5 = [guild];
  const callback3 = obj3.useCallback((id) => {
    closure_3(true);
    const obj = GuildIdentityActionCreators;
    obj.setCurrentGuild(id.id);
    const obj2 = { subsection: ProfileCustomizationSubsection.GUILD };
    ProfileCustomizationNavigationStore.setState(obj2);
  }, []);
  const effect1 = obj3.useEffect(() => {
    if (null != guild) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items5);
  const effect2 = obj3.useEffect(() => () => {
    hasUnsavedChanges.resetState();
    const obj = first(closure_1_2[17]);
    obj.clearPendingWidgets();
  }, []);
  const items6 = [token, nativeStackNavigation, hasUnsavedChanges, hasInvalidWidgetChanges, tmp21.isSubmitting || tmp23.isSubmitting, onSave];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_12 ? (() => closure_1_17(token(closure_1_2[32]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let tmp2;
        let obj = {
          text: intl.string(token(closure_2[13]).t["R3BPH+"]),
          disabled: tmp2,
          onPress: field(function*(arg0, value) {
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
                    closure_128_2(true);
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
        const HeaderActionButton = token(closure_2[33]).HeaderActionButton;
        intl = token(closure_2[13]).intl;
        tmp2 = !hasUnsavedChanges;
        const tmp = closure_2_17;
        if (hasUnsavedChanges) {
          tmp2 = hasInvalidWidgetChanges;
        }
        return tmp(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items6);
  const usePreventRemove = tmp5(1500).usePreventRemove;
  token(1500);
  if (hasUnsavedChanges) {
    let isWaitingForHexagonCampaignEnrollment = !tmp25;
    if (tmp21.isSubmitting || tmp23.isSubmitting) {
      isWaitingForHexagonCampaignEnrollment = tmp21.isWaitingForHexagonCampaignEnrollment;
    }
    hasUnsavedChanges = isWaitingForHexagonCampaignEnrollment;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first;
  }
  const preventRemove = usePreventRemove(hasUnsavedChanges, (data) => {
    const action = data.data.action;
    if (!closure_7.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges,
        onReset,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      first(closure_2[26])(obj);
    }
  });
  const items7 = [first, nativeStackNavigation];
  const effect3 = obj3.useEffect(() => {
    const tmp = first;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items7);
  const obj6 = { children: null };
  const obj5 = { style: tmp4.container, ref, onLayout, children: tmp40(tmp41, tmp42) };
  tmp40 = closure_19;
  tmp41 = closure_18;
  if (isMobileWidgetEditingEnabled) {
    if (stateFromStores) {
      let tmp45 = null;
      const tmpResult = tmp(16846);
      if (field === GUILD) {
        tmp45 = guild;
      }
      const obj7 = { guild: tmp45, onBeforeOpen: callback1, onSelectMainProfile: callback2, onSelectGuild: callback3 };
      stateFromStores = tmp38(tmpResult, obj7);
    }
    const items8 = [stateFromStores, ];
    const obj8 = { style: tmp4.page, children: tmp38Result };
    if (field === GUILD) {
      tmp38Result = tmp38(tmp(16835), { showGuildSelector: false });
    } else {
      let tmp47;
      const tmpResult2 = tmp(16701);
      if (!tmp12) {
        tmp47 = autoFocusElement;
      }
      const obj9 = { autoFocusElement: tmp47 };
      tmp38Result = tmp38(tmpResult2, obj9);
    }
    items8[1] = closure_17(handleSubmit2, obj8);
    obj6.children = items8;
    tmp42 = obj6;
  } else {
    const obj10 = { style: tmp4.controls, children: closure_17(token(12379).Tabs, obj11) };
    obj11 = { state: segmentedControlState };
    const items9 = [closure_17(handleSubmit2, obj10), ];
    const obj12 = { state: segmentedControlState };
    items9[1] = closure_17(token(14424).SegmentedControlPages, obj12);
    obj6.children = items9;
    tmp42 = obj6;
  }
  return closure_17(handleSubmit2, obj5);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
