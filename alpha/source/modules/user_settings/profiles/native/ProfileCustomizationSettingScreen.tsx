// Module ID: 15871
// Function ID: 15872
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 11128, 8649, 1094, 1084, 21, 4972, 1125, 15872, 15996, 558, 576, 16005, 5253, 587, 1502, 7092, 8901, 11075, 7080, 15893, 15997, 573, 5712, 11193, 6926, 7486, 1503, 12222, 11151, 2]

// Module 15871 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import intl2 from "intl" /* 1125 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5712 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7080 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 11075 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 11193 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 15872 */;
import useUserProfileEditFormDefault from "useUserProfileEditForm" /* 15893 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 15996 */;
import useGuildProfileEditFormDefault from "useGuildProfileEditForm" /* 15997 */;
import useMaybeFetchCollectiblesRecommendationsDefault from "useMaybeFetchCollectiblesRecommendations" /* 16005 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ProfileCustomizationNavigationStore_mod from "ProfileCustomizationNavigationStore" /* 11128 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8649 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, importDefault;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let closure_5 = ["handleSubmit"];
let closure_6 = ["guild", "handleSubmit"];
let _asyncToGenerator = _asyncToGenerator_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ProfileCustomizationNavigationStore = ProfileCustomizationNavigationStore_mod;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
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
  let closure_7;
  let closure_9;
  let first;
  let onSave;
  let state;
  let subSection;
  let tmp14;
  let tmp17;
  let tmp23;
  let tmp29;
  let tmp30;
  let tmp36;
  let tmp37;
  let token;
  let tmp = token;
  let tmp2 = dependencyMap;
  let obj = token(576);
  const cResult = obj.c(57);
  useMaybeFetchCollectiblesRecommendationsDefault();
  closure_19();
  let obj2 = token(5253);
  token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  [first, importDefault] = react.useState(0);
  [dependencyMap, closure_3] = react.useState(false);
  let obj3 = token(1502);
  const nativeStackNavigation = obj3.useNativeStackNavigation();
  let obj4 = token(7092);
  const params = obj4.useSettingNavigationRoute().params;
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
    tmp14 = mapped;
  } else {
    tmp14 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    cResult[2] = B;
    tmp17 = B;
  } else {
    class B {
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
  const obj6 = {
    items: tmp14,
    pageWidth: first,
    defaultIndex: 0,
    onPageChange: tmp17,
    onPageChangeStart(arg0, onContinue) {
      const obj = { location: "ProfileCustomizationSettingScreen", hasUnsavedChanges: stateFromStores, onReset: UserSettingsAccountActionCreators.resetAllPending, onContinue, onSave };
      const tmp = maybeShowUnsavedChangesAlertDefault;
      return tmp(obj);
    }
  };
  const useSegmentedControlState = tmp(8901).useSegmentedControlState;
  tmp(8901);
  if (field === ProfileCustomizationSubsection.GUILD) {
    class B {
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
  const segmentedControlState = useSegmentedControlState(obj6);
  const activeIndex = segmentedControlState.activeIndex;
  const tmp20 = items[activeIndex.get(activeIndex)];
  if (tmp20 == null) {
    class B {
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
  _objectWithoutProperties = tmp20;
  const tmp21 = useUserProfileEditFormDefault();
  if (cResult[3] !== tmp21) {
    class B {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    _asyncToGenerator = tmp24;
    const tmp27 = _objectWithoutProperties(tmp21, closure_3);
    closure_6 = tmp27;
    cResult[3] = tmp21;
    cResult[4] = tmp27;
    cResult[5] = tmp24;
    tmp23 = tmp24;
  } else {
    class B {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    closure_6 = tmp22;
    _asyncToGenerator = cResult[5];
  }
  const tmp28 = useGuildProfileEditFormDefault();
  if (cResult[6] !== tmp28) {
    class B {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    _slicedToArray = tmp32;
    const handleSubmit = tmp28.handleSubmit;
    react = handleSubmit;
    const tmp35 = _objectWithoutProperties(tmp28, nativeStackNavigation);
    cResult[6] = tmp28;
    cResult[7] = tmp32;
    cResult[8] = tmp35;
    cResult[9] = handleSubmit;
    tmp30 = tmp35;
    tmp29 = tmp32;
  } else {
    class B {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    _slicedToArray = tmp29;
    tmp30 = cResult[8];
    react = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
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
    class J {
      constructor() {
        return onSave.showNotice();
      }
    }
    cResult[10] = items;
    cResult[11] = J;
    tmp37 = J;
    tmp36 = items;
  } else {
    class B {
      constructor(arg0) {
        let first = items[arg0];
        if (first == null) {
          first = items[0];
        }
        const obj = { subsection: first.subSection };
        state.setState(obj);
      }
    }
    tmp37 = cResult[11];
  }
  const tmpResult2 = tmp(573);
  const stateFromStores = tmpResult2.useStateFromStores(tmp36, tmp37);
  ProfileCustomizationNavigationStore = tmp22.isSubmitting || tmp30.isSubmitting;
  if (cResult[12] === tmp31) {
    class B {
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
  class Y {
    constructor() {
      let tmp2;
      if (field === ProfileCustomizationSubsection.GUILD) {
        tmp2 = closure_10();
      } else {
        tmp2 = closure_7();
      }
      return tmp2;
    }
  }
  cResult[12] = tmp31;
  cResult[13] = field;
  cResult[14] = tmp23;
  cResult[15] = Y;
}) : (function ProfileCustomizationSettingScreen() {
  let closure_1;
  let closure_8;
  let first1;
  let guild;
  let handleSubmit2;
  let items6;
  let num;
  let onSave;
  let state;
  let token;
  let tmp = importDefault;
  let tmp2 = first1;
  let tmp3 = require("useMaybeFetchCollectiblesRecommendations")();
  const tmp4 = closure_19();
  let obj = token(first1[17]);
  token = obj.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = handleSubmit2;
  const tmp7 = guild(handleSubmit2.useState(0), 2);
  importDefault = tmp7[1];
  let first = tmp7[0];
  const tmp9 = guild(handleSubmit2.useState(false), 2);
  first1 = tmp9[0];
  closure_3 = tmp9[1];
  let obj3 = token(first1[19]);
  const nativeStackNavigation = obj3.useNativeStackNavigation();
  let obj4 = token(first1[20]);
  const params = obj4.useSettingNavigationRoute().params;
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
  const obj5 = {
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
  const useSegmentedControlState = tmp5(tmp2[21]).useSegmentedControlState;
  token(tmp2[21]);
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj5);
  const activeIndex = segmentedControlState.activeIndex;
  let first2 = tmp14[activeIndex.get(activeIndex)];
  if (first2 == null) {
    first2 = tmp14[0];
  }
  const tmp19 = tmp(tmp2[24])();
  const handleSubmit = tmp19.handleSubmit;
  const tmp20 = _objectWithoutProperties(tmp19, field);
  _objectWithoutProperties = tmp20;
  const tmp21 = tmp(tmp2[25])();
  guild = tmp21.guild;
  handleSubmit2 = tmp21.handleSubmit;
  const tmp22 = _objectWithoutProperties(tmp21, first2);
  items = [onSave];
  const tmp5Result3 = token(tmp2[26]);
  const stateFromStores = tmp5Result3.useStateFromStores(items, () => callback.showNotice());
  ProfileCustomizationNavigationStore = tmp24;
  const items1 = [field, handleSubmit, handleSubmit2];
  onSave = obj2.useCallback(() => {
    let tmp2;
    if (field === ProfileCustomizationSubsection.GUILD) {
      tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first2.subSection];
  const effect = obj2.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { settings_type: "user", subsection: first2.subSection, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj2);
  }, items2);
  const items3 = [guild];
  const effect1 = obj2.useEffect(() => {
    if (null != guild) {
      const obj = GuildIdentityActionCreators;
      const guildIdentitySettings = obj.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj2.useEffect(() => () => {
    state.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp20.isSubmitting || tmp22.isSubmitting, onSave];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: state ? (() => closure_1_17(token(first1[29]).HeaderSubmittingIndicator, {})) : (() => {
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
                return { value: "IconComponent", done: null };
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
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          })
        };
        const HeaderActionButton = token(first1[30]).HeaderActionButton;
        intl = token(first1[11]).intl;
        return closure_2_17(HeaderActionButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp32 = stateFromStores;
  const usePreventRemove = tmp5(tmp2[31]).usePreventRemove;
  token(tmp2[31]);
  if (stateFromStores) {
    let isWaitingForHexagonCampaignEnrollment = !tmp24;
    if (tmp20.isSubmitting || tmp22.isSubmitting) {
      isWaitingForHexagonCampaignEnrollment = tmp20.isWaitingForHexagonCampaignEnrollment;
    }
    tmp32 = isWaitingForHexagonCampaignEnrollment;
  }
  if (tmp32) {
    tmp32 = !first1;
  }
  const preventRemove = usePreventRemove(tmp32, (data) => {
    const action = data.data.action;
    if (!closure_8.isWaitingForHexagonCampaignEnrollment) {
      const obj = {
        location: "ProfileCustomizationSettingScreen",
        hasUnsavedChanges: stateFromStores,
        onReset: token(first1[23]).resetAllPending,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      const tmp3 = closure_1(first1[22]);
      tmp3(obj);
    }
  });
  const items5 = [first1, nativeStackNavigation];
  const effect3 = obj2.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj6 = { style: tmp4.container, onLayout: callback1, children: items6 };
  items6 = [, ];
  const obj7 = { style: tmp4.controls, children: closure_17(token(tmp2[32]).Tabs, { state: segmentedControlState }) };
  items6[0] = closure_17(stateFromStores, obj7);
  items6[1] = closure_17(token(tmp2[33]).SegmentedControlPages, { state: segmentedControlState });
  return closure_18(stateFromStores, obj6);
}));
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
