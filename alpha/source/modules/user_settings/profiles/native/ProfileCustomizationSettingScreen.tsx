// Module ID: 16333
// Function ID: 16334
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 11217, 8689, 1094, 1084, 21, 5005, 1125, 16334, 16461, 558, 576, 16470, 16353, 5289, 587, 1503, 7150, 8938, 11164, 7138, 16356, 16462, 573, 5749, 11282, 6984, 7544, 1504, 16472, 12315, 11240, 2]

// Module 16333 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import intl2 from "intl" /* 1125 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5749 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7138 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11164 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11282 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 16334 */;
import useUserProfileEditFormDefault from "useUserProfileEditForm" /* 16356 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 16461 */;
import useGuildProfileEditFormDefault from "useGuildProfileEditForm" /* 16462 */;
import useMaybeFetchCollectiblesRecommendationsDefault from "useMaybeFetchCollectiblesRecommendations" /* 16470 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 11217 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8689 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, importDefault;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let closure_5 = ["handleSubmit"];
let closure_6 = ["guild", "handleSubmit"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
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
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationSettingScreen() {
  let closure_1;
  let closure_10;
  let closure_2;
  let closure_9;
  let first;
  let onSave;
  let state;
  let subSection;
  let tmp15;
  let tmp18;
  let tmp24;
  let tmp30;
  let tmp31;
  let tmp37;
  let tmp38;
  let token;
  let tmp = token;
  let tmp2 = dependencyMap;
  let obj = token(576);
  const cResult = obj.c(53);
  useMaybeFetchCollectiblesRecommendationsDefault();
  closure_20();
  let obj2 = token(16353);
  const isMobileWidgetEditingEnabled = obj2.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj3 = token(5289);
  token = obj3.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  [first, importDefault] = react.useState(0);
  [dependencyMap, closure_3] = react.useState(false);
  let obj4 = token(1503);
  const nativeStackNavigation = obj4.useNativeStackNavigation();
  const obj5 = token(7150);
  const params = obj5.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = ProfileCustomizationNavigationStore.useField("subsection");
  if (cResult[0] !== autoFocusElement) {
    const mapped = items.map((renderLabel) => {
      let id;
      let renderPage;
      const obj = { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
      ({ id, renderPage } = renderLabel);
      return obj;
    });
    cResult[0] = autoFocusElement;
    cResult[1] = mapped;
    tmp15 = mapped;
  } else {
    tmp15 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    cResult[2] = D;
    tmp18 = D;
  } else {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
  }
  const obj7 = {
    items: tmp15,
    pageWidth: first,
    defaultIndex: 0,
    onPageChange: tmp18,
    onPageChangeStart(arg0, onContinue) {
      const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges: stateFromStores, onReset: UserSettingsAccountActionCreators.resetAllPending, onContinue, onSave };
      const tmp = maybeShowUnsavedChangesAlertDefault;
      return tmp(obj);
    }
  };
  const useSegmentedControlState = tmp(8938).useSegmentedControlState;
  tmp(8938);
  if (field === ProfileCustomizationSubsection.GUILD) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
  }
  const segmentedControlState = useSegmentedControlState(obj7);
  const activeIndex = segmentedControlState.activeIndex;
  const tmp21 = items[activeIndex.get(activeIndex)];
  if (tmp21 == null) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
  }
  _objectWithoutProperties = tmp21;
  const tmp22 = useUserProfileEditFormDefault();
  if (cResult[3] !== tmp22) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    let closure_7 = tmp25;
    const tmp28 = _objectWithoutProperties(tmp22, closure_3);
    closure_6 = tmp28;
    cResult[3] = tmp22;
    cResult[4] = tmp28;
    cResult[5] = tmp25;
    tmp24 = tmp25;
  } else {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    closure_6 = tmp23;
    closure_7 = cResult[5];
  }
  const tmp29 = useGuildProfileEditFormDefault();
  if (cResult[6] !== tmp29) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    _slicedToArray = tmp33;
    const handleSubmit = tmp29.handleSubmit;
    react = handleSubmit;
    const tmp36 = _objectWithoutProperties(tmp29, nativeStackNavigation);
    cResult[6] = tmp29;
    cResult[7] = tmp33;
    cResult[8] = tmp36;
    cResult[9] = handleSubmit;
    tmp31 = tmp36;
    tmp30 = tmp33;
  } else {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    _slicedToArray = tmp30;
    tmp31 = cResult[8];
    react = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    items = [UserProfileSettingsStore];
    class Y {
      constructor() {
        return onSave.showNotice();
      }
    }
    cResult[10] = items;
    cResult[11] = Y;
    tmp38 = Y;
    tmp37 = items;
  } else {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    tmp38 = cResult[11];
  }
  const tmpResult2 = tmp(573);
  const stateFromStores = tmpResult2.useStateFromStores(tmp37, tmp38);
  ProfileCustomizationNavigationStore = tmp23.isSubmitting || tmp31.isSubmitting;
  if (cResult[12] === tmp32) {
    class D {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
  }
  function ee() {
    let tmp2;
    if (field === ProfileCustomizationSubsection.GUILD) {
      tmp2 = closure_10();
    } else {
      tmp2 = closure_7();
    }
    return tmp2;
  }
  cResult[12] = tmp32;
  cResult[13] = field;
  cResult[14] = tmp24;
  cResult[15] = ee;
}) : (function ProfileCustomizationSettingScreen() {
  let closure_1;
  let closure_8;
  let first1;
  let guild;
  let handleSubmit2;
  let items6;
  let num;
  let obj11;
  let onSave;
  let state;
  let tmp36Result;
  let token;
  let tmp = importDefault;
  let tmp2 = first1;
  let tmp3 = require("useMaybeFetchCollectiblesRecommendations")();
  const tmp4 = closure_20();
  let obj = token(first1[17]);
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("ProfileCustomizationSettingScreen");
  let obj2 = token(first1[18]);
  token = obj2.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj3 = handleSubmit2;
  const tmp8 = guild(handleSubmit2.useState(0), 2);
  importDefault = tmp8[1];
  let first = tmp8[0];
  const tmp10 = guild(handleSubmit2.useState(false), 2);
  first1 = tmp10[0];
  closure_3 = tmp10[1];
  let obj4 = token(first1[20]);
  const nativeStackNavigation = obj4.useNativeStackNavigation();
  const obj5 = token(first1[21]);
  const params = obj5.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = ProfileCustomizationNavigationStore.useField("subsection");
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
      state.setState(obj);
    },
    onPageChangeStart(arg0, onContinue) {
      const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges: stateFromStores, onReset: UserSettingsAccountActionCreators.resetAllPending, onContinue, onSave };
      const tmp = maybeShowUnsavedChangesAlertDefault;
      return tmp(obj);
    }
  };
  num = 0;
  const useSegmentedControlState = tmp5(tmp2[22]).useSegmentedControlState;
  token(tmp2[22]);
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
  const handleSubmit = tmp20.handleSubmit;
  const tmp21 = _objectWithoutProperties(tmp20, field);
  _objectWithoutProperties = tmp21;
  const tmp22 = tmp(tmp2[26])();
  guild = tmp22.guild;
  handleSubmit2 = tmp22.handleSubmit;
  const tmp23 = _objectWithoutProperties(tmp22, first2);
  items = [onSave];
  const tmp5Result3 = token(tmp2[27]);
  const stateFromStores = tmp5Result3.useStateFromStores(items, () => callback.showNotice());
  ProfileCustomizationNavigationStore = tmp25;
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
  const items2 = [first2.subSection];
  const effect = obj3.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: first2.subSection, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
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
    state.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp21.isSubmitting || tmp23.isSubmitting, onSave];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: state ? (() => closure_1_17(token(first1[30]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        let obj = {
          text: intl.string(token(first1[11]).t["R3BPH+"]),
          disabled: !stateFromStores,
          onPress: handleSubmit(function*(arg0, value) {
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
                return { value: "IconComponent", done: "IconComponent" };
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
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          })
        };
        const HeaderActionButton = token(first1[31]).HeaderActionButton;
        intl = token(first1[11]).intl;
        return closure_2_17(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp33 = stateFromStores;
  const usePreventRemove = tmp5(tmp2[32]).usePreventRemove;
  token(tmp2[32]);
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
        onReset: token(first1[24]).resetAllPending,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      const tmp3 = closure_1(first1[23]);
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
    tmp36Result = tmp36(tmp(tmp2[33]), obj8);
  } else {
    const obj9 = { children: items6 };
    const obj10 = { style: tmp4.controls, children: closure_17(token(tmp2[34]).Tabs, obj11) };
    obj11 = { state: segmentedControlState };
    items6 = [closure_17(stateFromStores, obj10), ];
    const obj12 = { state: segmentedControlState };
    items6[1] = closure_17(token(tmp2[35]).SegmentedControlPages, obj12);
    tmp36Result = closure_19(closure_18, obj9);
  }
  return closure_17(stateFromStores, obj7);
}));
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
