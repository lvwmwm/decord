// Module ID: 16584
// Function ID: 16585
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 11596, 8855, 15091, 1082, 1072, 21, 5141, 1113, 16585, 16710, 7273, 15098, 16719, 16604, 5719, 575, 1499, 7285, 9108, 11545, 16607, 16711, 504, 5880, 11657, 7124, 7682, 1500, 16721, 12306, 14323, 2]

// Module 16584 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5880 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7273 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11545 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11657 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 15098 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16585 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16710 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11596 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8855 */;
import WidgetStore from "WidgetStore" /* 15091 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
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
let ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_14, AnalyticsSections: closure_15 } = Constants);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let obj = {
  renderLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return authStore4(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
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
      return authStore4(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = react.memo(function ProfileCustomizationSettingScreen() {
  let closure_1;
  let closure_13;
  let closure_8;
  let first1;
  let handleSubmit;
  let handleSubmit2;
  let hasInvalidWidgetChanges;
  let hasUnsavedChanges;
  let items6;
  let num;
  let obj11;
  let onReset;
  let tmp35Result;
  let token;
  let tmp = importDefault;
  let tmp2 = first1;
  const tmp3 = require("useMaybeFetchCollectiblesRecommendations")();
  const tmp4 = closure_19();
  let obj = token(first1[18]);
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = token(first1[19]);
  token = obj2.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = react;
  const tmp8 = handleSubmit(react.useState(0), 2);
  importDefault = tmp8[1];
  let first = tmp8[0];
  const tmp10 = handleSubmit(react.useState(false), 2);
  first1 = tmp10[0];
  closure_3 = tmp10[1];
  let obj4 = token(first1[21]);
  const nativeStackNavigation = obj4.useNativeStackNavigation();
  const obj5 = token(first1[22]);
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
  const useSegmentedControlState = tmp5(tmp2[23]).useSegmentedControlState;
  token(tmp2[23]);
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj6);
  const activeIndex = segmentedControlState.activeIndex;
  let first2 = tmp15[activeIndex.get(activeIndex)];
  if (first2 == null) {
    first2 = tmp15[0];
  }
  const tmp20 = tmp(tmp2[25])();
  handleSubmit = tmp20.handleSubmit;
  const tmp21 = first2(tmp20, closure_3);
  react = tmp21;
  const tmp22 = tmp(tmp2[26])();
  const guild = tmp22.guild;
  handleSubmit2 = tmp22.handleSubmit;
  const tmp23 = first2(tmp22, nativeStackNavigation);
  items = [hasUnsavedChanges, hasInvalidWidgetChanges];
  const tmp5Result3 = token(tmp2[27]);
  const stateFromStoresObject = tmp5Result3.useStateFromStoresObject(items, () => {
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
  ProfileCustomizationSubsection = tmp25;
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
  const items2 = [first2.subSection];
  const effect = obj3.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: first2.subSection, destination_pane: constants.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(onSave.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  const items3 = [guild];
  const effect1 = obj3.useEffect(() => {
    if (null != guild) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj3.useEffect(() => () => {
    handleSubmit2.resetState();
    const obj = closure_1_1(first1[16]);
    obj.clearPendingWidgets();
  }, []);
  const items4 = [token, nativeStackNavigation, hasUnsavedChanges, hasInvalidWidgetChanges, tmp21.isSubmitting || tmp23.isSubmitting, onSave];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_13 ? (() => closure_1_16(token(first1[30]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let tmp2;
        let obj = {
          text: intl.string(token(first1[12]).t["R3BPH+"]),
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
        const HeaderActionButton = token(first1[31]).HeaderActionButton;
        intl = token(first1[12]).intl;
        tmp2 = !hasUnsavedChanges;
        const tmp = closure_2_16;
        if (hasUnsavedChanges) {
          tmp2 = hasInvalidWidgetChanges;
        }
        return tmp(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const usePreventRemove = tmp5(tmp2[32]).usePreventRemove;
  token(tmp2[32]);
  if (hasUnsavedChanges) {
    let isWaitingForHexagonCampaignEnrollment = !tmp25;
    if (tmp21.isSubmitting || tmp23.isSubmitting) {
      isWaitingForHexagonCampaignEnrollment = tmp21.isWaitingForHexagonCampaignEnrollment;
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
      closure_1(first1[24])(obj);
    }
  });
  const items5 = [first1, nativeStackNavigation];
  const effect3 = obj3.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj7 = { style: tmp4.container, onLayout: callback1, children: tmp35Result };
  if (isMobileWidgetEditingEnabled) {
    const obj8 = { state: segmentedControlState };
    tmp35Result = tmp35(tmp(tmp2[33]), obj8);
  } else {
    const obj9 = { children: items6 };
    const obj10 = { style: tmp4.controls, children: closure_16(token(tmp2[34]).Tabs, obj11) };
    obj11 = { state: segmentedControlState };
    items6 = [closure_16(guild, obj10), ];
    const obj12 = { state: segmentedControlState };
    items6[1] = closure_16(token(tmp2[35]).SegmentedControlPages, obj12);
    tmp35Result = closure_18(closure_17, obj9);
  }
  return closure_16(guild, obj7);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
