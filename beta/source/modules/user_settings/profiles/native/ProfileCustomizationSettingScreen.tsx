// Module ID: 14132
// Function ID: 14133
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 9193, 7609, 1096, 1086, 21, 4837, 1127, 14133, 14191, 558, 576, 4535, 588, 1491, 6415, 9060, 10425, 6405, 4703, 14149, 14192, 573, 5017, 9195, 5933, 7292, 1492, 12021, 12023, 2]

// Module 14132 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1096 */;
import intl2 from "intl" /* 1127 */;
import ChatInputUtils from "ChatInputUtils" /* 4703 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5017 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6405 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9195 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 10425 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 14133 */;
import useUserProfileEditFormDefault from "useUserProfileEditForm" /* 14149 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 14191 */;
import useGuildProfileEditFormDefault from "useGuildProfileEditForm" /* 14192 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9193 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7609 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
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
let _objectWithoutProperties = _objectWithoutProperties_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
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
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let closure_2;
  let closure_8;
  let closure_9;
  let first;
  let state;
  let stateFromStores;
  let tmp13;
  let tmp16;
  let tmp21;
  let tmp22;
  let tmp28;
  let tmp29;
  let tmp35;
  let tmp36;
  let token;
  let tmp = token;
  let tmp2 = dependencyMap;
  let obj = token(576);
  const cResult = obj.c(55);
  closure_19();
  let obj2 = token(4535);
  token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  [first, importDefault] = stateFromStores.useState(0);
  [dependencyMap, closure_3] = stateFromStores.useState(false);
  let obj3 = token(1491);
  const nativeStackNavigation = obj3.useNativeStackNavigation();
  let obj4 = token(6415);
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
    tmp13 = mapped;
  } else {
    tmp13 = cResult[1];
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
    tmp16 = D;
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
  const useSegmentedControlState = tmp(9060).useSegmentedControlState;
  const obj6 = {
    items: tmp13,
    pageWidth: first,
    defaultIndex: 0,
    onPageChange: tmp16,
    onPageChangeStart(arg0, onConfirm) {
      const obj = { hasEdits: stateFromStores, resetPending: UserSettingsAccountActionCreators.resetAllPending, onHasEdits: ChatInputUtils.dismissKeyboard, onConfirm };
      const tmp = maybeShowDiscardChangesAlertDefault;
      return tmp(obj);
    }
  };
  const tmpResult = tmp(9060);
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
  const segmentedControlState = useSegmentedControlState(obj6);
  const activeIndex = segmentedControlState.activeIndex;
  const tmp19 = items[activeIndex.get(activeIndex)];
  if (tmp19 == null) {
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
  const subSection = tmp19;
  const tmp20 = useUserProfileEditFormDefault();
  if (cResult[3] !== tmp20) {
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
    const tmp26 = _objectWithoutProperties(tmp20, closure_3);
    cResult[3] = tmp20;
    cResult[4] = tmp26;
    cResult[5] = tmp23;
    tmp21 = tmp26;
    tmp22 = tmp23;
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
    closure_6 = cResult[5];
  }
  const tmp27 = useGuildProfileEditFormDefault();
  if (cResult[6] !== tmp27) {
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
    _objectWithoutProperties = tmp31;
    const handleSubmit = tmp27.handleSubmit;
    _slicedToArray = handleSubmit;
    const tmp34 = _objectWithoutProperties(tmp27, nativeStackNavigation);
    cResult[6] = tmp27;
    cResult[7] = tmp31;
    cResult[8] = tmp34;
    cResult[9] = handleSubmit;
    tmp29 = tmp34;
    tmp28 = tmp31;
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
    _objectWithoutProperties = tmp28;
    tmp29 = cResult[8];
    _slicedToArray = cResult[9];
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
    class J {
      constructor() {
        return UserProfileSettingsStore.showNotice();
      }
    }
    cResult[10] = items;
    cResult[11] = J;
    tmp36 = J;
    tmp35 = items;
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
    tmp36 = cResult[11];
  }
  const tmpResult2 = tmp(573);
  stateFromStores = tmpResult2.useStateFromStores(tmp35, tmp36);
  let closure_11 = tmp21.isSubmitting || tmp29.isSubmitting;
  if (cResult[12] === tmp30) {
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
  class Y {
    constructor() {
      let tmp2;
      if (field === ProfileCustomizationSubsection.GUILD) {
        tmp2 = closure_9();
      } else {
        tmp2 = closure_6();
      }
      return tmp2;
    }
  }
  cResult[12] = tmp30;
  cResult[13] = field;
  cResult[14] = tmp22;
  cResult[15] = Y;
}) : (() => {
  let callback;
  let closure_1;
  let first1;
  let guild;
  let handleSubmit2;
  let items6;
  let num;
  let stateFromStores;
  let token;
  let tmp = closure_19();
  let tmp2 = token;
  const tmp3 = first1;
  let obj = token(first1[16]);
  token = obj.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = stateFromStores;
  const tmp6 = handleSubmit2(stateFromStores.useState(0), 2);
  importDefault = tmp6[1];
  let first = tmp6[0];
  const tmp8 = handleSubmit2(stateFromStores.useState(false), 2);
  first1 = tmp8[0];
  closure_3 = tmp8[1];
  let obj3 = token(first1[18]);
  const nativeStackNavigation = obj3.useNativeStackNavigation();
  let obj4 = token(first1[19]);
  const params = obj4.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = callback.useField("subsection");
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
      callback.setState(obj);
    },
    onPageChangeStart(arg0, onConfirm) {
      const obj = { hasEdits: stateFromStores, resetPending: UserSettingsAccountActionCreators.resetAllPending, onHasEdits: ChatInputUtils.dismissKeyboard, onConfirm };
      const tmp = maybeShowDiscardChangesAlertDefault;
      return tmp(obj);
    }
  };
  num = 0;
  const useSegmentedControlState = tmp2(tmp3[20]).useSegmentedControlState;
  tmp2(tmp3[20]);
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj5);
  const activeIndex = segmentedControlState.activeIndex;
  let first2 = tmp13[activeIndex.get(activeIndex)];
  if (first2 == null) {
    first2 = tmp13[0];
  }
  const tmp18 = require("useUserProfileEditForm")();
  const handleSubmit = tmp18.handleSubmit;
  const tmp19 = guild(tmp18, field);
  const tmp20 = require("useGuildProfileEditForm")();
  guild = tmp20.guild;
  handleSubmit2 = tmp20.handleSubmit;
  items = [UserProfileSettingsStore];
  const tmp21 = guild(tmp20, first2);
  const tmp2Result3 = tmp2(tmp3[26]);
  stateFromStores = tmp2Result3.useStateFromStores(items, () => UserProfileSettingsStore.showNotice());
  let closure_11 = tmp23;
  const items1 = [field, handleSubmit, handleSubmit2];
  callback = obj2.useCallback(() => {
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
    callback.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp19.isSubmitting || tmp21.isSubmitting, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_11 ? (() => closure_1_17(token(first1[29]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let intl;
        let obj = {
          label: intl.string(token(first1[11]).t["R3BPH+"]),
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
                    const obj4 = { value: callback(), done: false };
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
        const HeaderTextButton = token(first1[30]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = token(first1[11]).intl;
        return closure_2_17(HeaderTextButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const usePreventRemove = tmp2(tmp3[31]).usePreventRemove;
  tmp2(tmp3[31]);
  if (stateFromStores) {
    stateFromStores = !tmp23;
  }
  if (stateFromStores) {
    stateFromStores = !first1;
  }
  const preventRemove = usePreventRemove(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: token(first1[22]).resetAllPending,
      onHasEdits: token(first1[23]).dismissKeyboard,
      onConfirm() {
        return nativeStackNavigation.dispatch(action);
      }
    };
    const tmp = closure_1(first1[21]);
    tmp(obj);
  });
  const items5 = [first1, nativeStackNavigation];
  const effect3 = obj2.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj6 = { style: tmp.container, onLayout: callback1, children: items6 };
  items6 = [, ];
  const obj7 = { style: tmp.controls, children: closure_17(tmp2(tmp3[32]).Tabs, { state: segmentedControlState }) };
  items6[0] = closure_17(closure_11, obj7);
  items6[1] = closure_17(tmp2(tmp3[33]).SegmentedControlPages, { state: segmentedControlState });
  return closure_18(closure_11, obj6);
}));
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
