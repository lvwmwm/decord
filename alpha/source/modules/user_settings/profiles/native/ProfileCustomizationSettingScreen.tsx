// Module ID: 16687
// Function ID: 16688
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 11648, 8872, 12565, 6907, 1082, 1072, 21, 5141, 1113, 16688, 16812, 7289, 12567, 16821, 16707, 5732, 575, 1499, 7301, 9125, 11596, 16709, 16813, 504, 5894, 11709, 7139, 7698, 1500, 16823, 12372, 14411, 2]

// Module 16687 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5894 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7289 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11596 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11709 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12567 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16688 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16812 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11648 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;
import WidgetStore from "WidgetStore" /* 12565 */;
import SortedGuildStore from "SortedGuildStore" /* 6907 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, importDefault;

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
let react = react_mod;
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
  let closure_1;
  let closure_8;
  let first1;
  let handleSubmit;
  let handleSubmit2;
  let hasInvalidWidgetChanges;
  let hasUnsavedChanges;
  let num;
  let obj13;
  let onReset;
  let onSave;
  let tmp13;
  let tmp40Result;
  let tmp42;
  let tmp43;
  let tmp44;
  let token;
  let tmp = importDefault;
  let tmp2 = first1;
  const tmp3 = require("useMaybeFetchCollectiblesRecommendations")();
  const tmp4 = closure_20();
  let obj = token(first1[19]);
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = token(first1[20]);
  token = obj2.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = react;
  const tmp8 = handleSubmit(react.useState(0), 2);
  importDefault = tmp8[1];
  let first = tmp8[0];
  const tmp10 = handleSubmit(react.useState(false), 2);
  first1 = tmp10[0];
  closure_3 = tmp10[1];
  [tmp13, closure_4] = handleSubmit(react.useState(false), 2);
  handleSubmit(react.useState(false), 2);
  let obj4 = token(first1[22]);
  const nativeStackNavigation = obj4.useNativeStackNavigation();
  const obj5 = token(first1[23]);
  const params = obj5.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = handleSubmit2.useField("subsection");
  let closure_0 = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    let id;
    let renderPage;
    const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
    ({ id, renderPage } = renderLabel);
    return obj;
  });
  const obj6 = {
    items: mapped,
    pageWidth: first,
    defaultIndex: num,
    onPageChange(arg0) {
      let first = items[arg0];
      if (first == null) {
        first = items[0];
      }
      const obj = { subsection: first.subSection };
      handleSubmit2.setState(obj);
    },
    onPageChangeStart(arg0, onContinue) {
      const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave };
      return maybeShowUnsavedChangesAlertDefault(obj);
    }
  };
  num = 0;
  const useSegmentedControlState = tmp5(tmp2[24]).useSegmentedControlState;
  token(tmp2[24]);
  const tmp19 = onSave;
  if (field === onSave.GUILD) {
    num = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj6);
  const tmp21 = tmp(tmp2[26])();
  handleSubmit = tmp21.handleSubmit;
  const tmp22 = field(tmp21, closure_3);
  react = tmp22;
  const tmp23 = tmp(tmp2[27])();
  const guild = tmp23.guild;
  handleSubmit2 = tmp23.handleSubmit;
  const tmp24 = field(tmp23, closure_4);
  items = [hasUnsavedChanges, hasInvalidWidgetChanges];
  const tmp5Result4 = token(tmp2[28]);
  const stateFromStoresObject = tmp5Result4.useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = hasInvalidWidgetChanges.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    const obj = hasInvalidWidgetChanges;
    if (!showNoticeResult) {
      showNoticeResult = hasUnsavedChanges.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: hasUnsavedChangesResult };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !obj.canSaveChanges();
    }
    return obj2;
  });
  hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  const flattenedGuildIds = tmp26;
  const items1 = [field, handleSubmit, handleSubmit2];
  onSave = obj3.useCallback(() => {
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
  const GUILD = tmp19.GUILD;
  const items3 = [flattenedGuildIds];
  const tmp5Result5 = token(tmp2[28]);
  let stateFromStores = tmp5Result5.useStateFromStores(items3, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const items4 = [hasUnsavedChanges, onSave];
  const callback1 = obj3.useCallback((onContinue) => {
    const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges, onReset: resetAllPendingChanges, onContinue, onSave };
    return maybeShowUnsavedChangesAlertDefault(obj);
  }, items4);
  const callback2 = obj3.useCallback(() => {
    closure_4(true);
    const obj = { subsection: ProfileCustomizationSubsection.USER_PROFILE };
    ProfileCustomizationNavigationStore.setState(obj);
  }, []);
  const items5 = [guild];
  const callback3 = obj3.useCallback((id) => {
    closure_4(true);
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
    handleSubmit2.resetState();
    const obj = closure_1_1(first1[17]);
    obj.clearPendingWidgets();
  }, []);
  const items6 = [token, nativeStackNavigation, hasUnsavedChanges, hasInvalidWidgetChanges, tmp22.isSubmitting || tmp24.isSubmitting, onSave];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: flattenedGuildIds ? (() => closure_1_17(token(first1[31]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let tmp2;
        let obj = {
          text: intl.string(token(first1[13]).t["R3BPH+"]),
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
        const HeaderActionButton = token(first1[32]).HeaderActionButton;
        intl = token(first1[13]).intl;
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
  const callback4 = obj3.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const usePreventRemove = tmp5(tmp2[33]).usePreventRemove;
  token(tmp2[33]);
  if (hasUnsavedChanges) {
    let isWaitingForHexagonCampaignEnrollment = !tmp26;
    if (tmp22.isSubmitting || tmp24.isSubmitting) {
      isWaitingForHexagonCampaignEnrollment = tmp22.isWaitingForHexagonCampaignEnrollment;
    }
    hasUnsavedChanges = isWaitingForHexagonCampaignEnrollment;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first1;
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
      closure_1(first1[25])(obj);
    }
  });
  const items7 = [first1, nativeStackNavigation];
  const effect3 = obj3.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items7);
  const obj8 = { children: null };
  const obj7 = { style: tmp4.container, onLayout: callback4, children: tmp42(tmp43, tmp44) };
  tmp42 = closure_19;
  tmp43 = closure_18;
  if (isMobileWidgetEditingEnabled) {
    if (stateFromStores) {
      let tmp47 = null;
      const tmpResult = tmp(tmp2[34]);
      if (field === GUILD) {
        tmp47 = guild;
      }
      const obj9 = { guild: tmp47, onBeforeOpen: callback1, onSelectMainProfile: callback2, onSelectGuild: callback3 };
      stateFromStores = tmp40(tmpResult, obj9);
    }
    const items8 = [stateFromStores, ];
    const obj10 = { style: tmp4.page, children: tmp40Result };
    if (field === GUILD) {
      tmp40Result = tmp40(tmp(tmp2[15]), { showGuildSelector: false });
    } else {
      let tmp49;
      const tmpResult2 = tmp(tmp2[14]);
      if (!tmp13) {
        tmp49 = autoFocusElement;
      }
      const obj11 = { autoFocusElement: tmp49 };
      tmp40Result = tmp40(tmpResult2, obj11);
    }
    items8[1] = closure_17(guild, obj10);
    obj8.children = items8;
    tmp44 = obj8;
  } else {
    const obj12 = { style: tmp4.controls, children: closure_17(token(tmp2[35]).Tabs, obj13) };
    obj13 = { state: segmentedControlState };
    const items9 = [closure_17(guild, obj12), ];
    const obj14 = { state: segmentedControlState };
    items9[1] = closure_17(token(tmp2[36]).SegmentedControlPages, obj14);
    obj8.children = items9;
    tmp44 = obj8;
  }
  return closure_17(guild, obj7);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
