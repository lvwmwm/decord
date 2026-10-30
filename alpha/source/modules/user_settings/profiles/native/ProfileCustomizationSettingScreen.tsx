// Module ID: 16386
// Function ID: 16387
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 11422, 8723, 1082, 1072, 21, 5009, 1114, 16387, 16512, 16521, 16406, 5591, 575, 1498, 7158, 8971, 11370, 7146, 16409, 16513, 563, 5755, 11485, 6992, 7552, 1499, 16523, 12476, 11445, 2]

// Module 16386 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import intl2 from "intl" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7146 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11370 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11485 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16387 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16512 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11422 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let react = react_mod;
const View = react_native.View;
let ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = Constants);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let obj = {
  renderLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2p07FR"]);
  },
  id: "edit-user-profile",
  renderPage(autoFocusElement) {
    return closure_15(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
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
      return closure_15(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const memoResult = react.memo(function ProfileCustomizationSettingScreen() {
  let closure_1;
  let closure_12;
  let closure_8;
  let first1;
  let handleSubmit;
  let handleSubmit2;
  let items6;
  let num;
  let obj11;
  let stateFromStores;
  let tmp36Result;
  let token;
  let tmp = importDefault;
  let tmp2 = first1;
  let tmp3 = require("useMaybeFetchCollectiblesRecommendations")();
  const tmp4 = closure_18();
  let obj = token(first1[15]);
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = token(first1[16]);
  token = obj2.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = react;
  const tmp8 = handleSubmit(react.useState(0), 2);
  importDefault = tmp8[1];
  let first = tmp8[0];
  const tmp10 = handleSubmit(react.useState(false), 2);
  first1 = tmp10[0];
  closure_3 = tmp10[1];
  let obj4 = token(first1[18]);
  const nativeStackNavigation = obj4.useNativeStackNavigation();
  const obj5 = token(first1[19]);
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
      const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges: stateFromStores, onReset: UserSettingsAccountActionCreators.resetAllPending, onContinue, onSave };
      const tmp = maybeShowUnsavedChangesAlertDefault;
      return tmp(obj);
    }
  };
  num = 0;
  const useSegmentedControlState = tmp5(tmp2[20]).useSegmentedControlState;
  token(tmp2[20]);
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj6);
  const activeIndex = segmentedControlState.activeIndex;
  let first2 = tmp15[activeIndex.get(activeIndex)];
  if (first2 == null) {
    first2 = tmp15[0];
  }
  const tmp20 = tmp(tmp2[23])();
  handleSubmit = tmp20.handleSubmit;
  const tmp21 = first2(tmp20, closure_3);
  react = tmp21;
  const tmp22 = tmp(tmp2[24])();
  const guild = tmp22.guild;
  handleSubmit2 = tmp22.handleSubmit;
  const tmp23 = first2(tmp22, nativeStackNavigation);
  items = [stateFromStores];
  const tmp5Result3 = token(tmp2[25]);
  stateFromStores = tmp5Result3.useStateFromStores(items, () => stateFromStores.showNotice());
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
    obj.trackWithMetadata(map1.SETTINGS_PANE_VIEWED, obj2);
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
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp21.isSubmitting || tmp23.isSubmitting, onSave];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_12 ? (() => closure_1_15(token(first1[28]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let obj = {
          text: intl.string(token(first1[11]).t["R3BPH+"]),
          disabled: !stateFromStores,
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
        const HeaderActionButton = token(first1[29]).HeaderActionButton;
        intl = token(first1[11]).intl;
        return closure_2_15(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp33 = stateFromStores;
  const usePreventRemove = tmp5(tmp2[30]).usePreventRemove;
  token(tmp2[30]);
  if (stateFromStores) {
    let isWaitingForHexagonCampaignEnrollment = !tmp25;
    if (tmp21.isSubmitting || tmp23.isSubmitting) {
      isWaitingForHexagonCampaignEnrollment = tmp21.isWaitingForHexagonCampaignEnrollment;
    }
    tmp33 = isWaitingForHexagonCampaignEnrollment;
  }
  if (tmp33) {
    tmp33 = !first1;
  }
  const preventRemove = usePreventRemove(tmp33, (data) => {
    const action = data.data.action;
    if (!closure_8.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges: stateFromStores,
        onReset: token(first1[22]).resetAllPending,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      const tmp3 = closure_1(first1[21]);
      tmp3(obj);
    }
  });
  const items5 = [first1, nativeStackNavigation];
  const effect3 = obj3.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj7 = { style: tmp4.container, onLayout: callback1, children: tmp36Result };
  if (isMobileWidgetEditingEnabled) {
    const obj8 = { state: segmentedControlState };
    tmp36Result = tmp36(tmp(tmp2[31]), obj8);
  } else {
    const obj9 = { children: items6 };
    const obj10 = { style: tmp4.controls, children: closure_15(token(tmp2[32]).Tabs, obj11) };
    obj11 = { state: segmentedControlState };
    items6 = [closure_15(guild, obj10), ];
    const obj12 = { state: segmentedControlState };
    items6[1] = closure_15(token(tmp2[33]).SegmentedControlPages, obj12);
    tmp36Result = closure_17(closure_16, obj9);
  }
  return closure_15(guild, obj7);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
