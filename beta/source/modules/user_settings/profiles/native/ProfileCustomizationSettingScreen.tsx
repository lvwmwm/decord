// Module ID: 14852
// Function ID: 14853
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 10002, 8434, 1088, 1078, 21, 4758, 1119, 14853, 14910, 558, 568, 4462, 580, 1488, 7240, 9868, 11227, 7230, 4625, 14869, 14911, 565, 4938, 10004, 5839, 8112, 1489, 12778, 12780, 2]

// Module 14852 (ProfileCustomizationSettingScreen)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import ChatInputUtils from "ChatInputUtils" /* 4625 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4938 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7230 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 10004 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 11227 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 14853 */;
import useUserProfileEditFormDefault from "useUserProfileEditForm" /* 14869 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 14910 */;
import useGuildProfileEditFormDefault from "useGuildProfileEditForm" /* 14911 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10002 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8434 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
let closure_5 = ["handleSubmit"];
let closure_6 = ["guild", "handleSubmit"];
const View = fn(17).View;
const ProfileCustomizationSubsection = fn(1088).ProfileCustomizationSubsection;
const Constants = fn(1078);
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4758);
let closure_19 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
let items = [
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t["2p07FR"]);
    },
    id: "edit-user-profile",
    renderPage(autoFocusElement) {
      return constants(UserSettingsEditUserProfileDefault, { autoFocusElement: autoFocusElement.autoFocusElement });
    },
    subSection: ProfileCustomizationSubsection.USER_PROFILE
  },
  {
    renderLabel() {
      const intl = util.intl;
      return intl.string(util.t.kPHroX);
    },
    id: "edit-user-profiles-guilds",
    renderPage() {
      return constants(UserSettingsEditGuildProfileDefault, {});
    },
    subSection: ProfileCustomizationSubsection.GUILD
  }
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = obj5(568).c(55);
  closure_19();
  let obj = obj5(568);
  const token = obj5(4462).useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  obj5 = token;
  const tmp7 = _slicedToArray(stateFromStores.useState(0), 2);
  importDefault = tmp7[1];
  [dependencyMap, closure_3] = stateFromStores.useState(false);
  let obj2 = obj5(4462);
  const nativeStackNavigation = obj5(1488).useNativeStackNavigation();
  let obj3 = obj5(1488);
  const params = obj5(7240).useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = ProfileCustomizationNavigationStore.useField("subsection");
  if (cResult[0] !== autoFocusElement) {
    obj5 = { autoFocusElement };
    const mapped = items.map((renderLabel) => {
      ({ id, renderPage } = renderLabel);
      return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
    });
    cResult[0] = autoFocusElement;
    cResult[1] = mapped;
    let tmp12 = mapped;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    cResult[2] = D;
    const tmp15 = D;
  } else {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
  }
  let obj4 = obj5(7240);
  const obj6 = { items: tmp12, pageWidth: tmp7[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  if (field === ProfileCustomizationSubsection.GUILD) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
  }
  obj6.defaultIndex = 0;
  obj6.onPageChange = tmp15;
  obj6.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
    const obj = { hasEdits: stateFromStores, resetPending: UserSettingsAccountActionCreators.resetAllPending, onHasEdits: ChatInputUtils.dismissKeyboard, onConfirm };
    return maybeShowDiscardChangesAlertDefault(obj);
  };
  const segmentedControlState = obj5(9868).useSegmentedControlState(obj6);
  const activeIndex = segmentedControlState.activeIndex;
  const tmp17 = items[activeIndex.get(activeIndex)];
  if (tmp17 == null) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
  }
  const subSection = tmp17;
  const tmp18 = useUserProfileEditFormDefault();
  if (cResult[3] !== tmp18) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    closure_6 = tmp21;
    const tmp24 = _objectWithoutProperties(tmp18, closure_3);
    cResult[3] = tmp18;
    cResult[4] = tmp24;
    cResult[5] = tmp21;
    const tmp19 = tmp24;
    const tmp20 = tmp21;
  } else {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    closure_6 = cResult[5];
  }
  const tmp25 = useGuildProfileEditFormDefault();
  if (cResult[6] !== tmp25) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    _objectWithoutProperties = tmp29;
    const handleSubmit = tmp25.handleSubmit;
    _slicedToArray = handleSubmit;
    const tmp32 = _objectWithoutProperties(tmp25, nativeStackNavigation);
    cResult[6] = tmp25;
    cResult[7] = tmp29;
    cResult[8] = tmp32;
    cResult[9] = handleSubmit;
    let tmp27 = tmp32;
    const tmp26 = tmp29;
  } else {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    _objectWithoutProperties = tmp26;
    tmp27 = cResult[8];
    _slicedToArray = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    items = [UserProfileSettingsStore];
    class J {
      constructor() {
        return closure_1_13.showNotice();
      }
    }
    cResult[10] = items;
    cResult[11] = J;
    let tmp34 = J;
    const tmp33 = items;
  } else {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
    tmp34 = cResult[11];
  }
  const tmpResult = obj5(9868);
  stateFromStores = obj5(565).useStateFromStores(tmp33, tmp34);
  closure_11 = tmp19.isSubmitting || tmp27.isSubmitting;
  if (cResult[12] === tmp28) {
    class D {
      constructor(arg0) {
        first = closure_1_20[arg0];
        if (first == null) {
          first = closure_1_20[0];
        }
        obj = { subsection: first.subSection };
        setStateResult = closure_12.setState(obj);
        return;
      }
    }
  }
  class Y {
    constructor() {
      if (closure_5 === closure_14.GUILD) {
        tmp3 = closure_9;
        tmp2 = closure_9();
      } else {
        tmp = closure_6;
        tmp2 = closure_6();
      }
      return tmp2;
    }
  }
  cResult[12] = tmp28;
  cResult[13] = field;
  cResult[14] = tmp20;
  cResult[15] = Y;
}) : (() => {
  const tmp = closure_19();
  const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  _require = token;
  const tmp6 = handleSubmit2(stateFromStores.useState(0), 2);
  importDefault = tmp6[1];
  const tmp7 = handleSubmit2(stateFromStores.useState(false), 2);
  first = tmp7[0];
  closure_3 = tmp7[1];
  let obj = require("useToken");
  const nativeStackNavigation = require("useNavigation").useNativeStackNavigation();
  let obj3 = require("useNavigation");
  const params = require("useSettingNavigationRoute").useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = callback.useField("subsection");
  _require = { autoFocusElement };
  const mapped = items.map((renderLabel) => {
    ({ id, renderPage } = renderLabel);
    return { label: renderLabel.renderLabel(), id, page: renderPage(closure_0) };
  });
  let obj4 = require("useSettingNavigationRoute");
  const obj5 = { items: mapped, pageWidth: tmp6[0], defaultIndex: null, onPageChange: null, onPageChangeStart: null };
  let num = 0;
  if (field === ProfileCustomizationSubsection.GUILD) {
    num = 1;
  }
  obj5.defaultIndex = num;
  obj5.onPageChange = function onPageChange(arg0) {
    first = dependencyMap[arg0];
    if (first == null) {
      first = 5;
    }
    callback.setState({ subsection: first.subSection });
  };
  obj5.onPageChangeStart = function onPageChangeStart(arg0, onConfirm) {
    const obj = { hasEdits: stateFromStores, resetPending: UserSettingsAccountActionCreators.resetAllPending, onHasEdits: ChatInputUtils.dismissKeyboard, onConfirm };
    return maybeShowDiscardChangesAlertDefault(obj);
  };
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj5);
  const activeIndex = segmentedControlState.activeIndex;
  let first1 = tmp12[activeIndex.get(activeIndex)];
  if (first1 == null) {
    first1 = tmp12[0];
  }
  const tmp16 = require("useUserProfileEditForm")();
  const handleSubmit = tmp16.handleSubmit;
  const tmp2Result = require("SegmentedControlState");
  const tmp18 = require("useGuildProfileEditForm")();
  guild = tmp18.guild;
  handleSubmit2 = tmp18.handleSubmit;
  const tmp17 = guild(tmp16, field);
  const tmp19 = guild(tmp18, first1);
  items = [UserProfileSettingsStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserProfileSettingsStore.showNotice());
  closure_11 = tmp21;
  const items1 = [field, handleSubmit, handleSubmit2];
  callback = obj2.useCallback(() => {
    if (field === ProfileCustomizationSubsection.GUILD) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const items2 = [first1.subSection];
  const effect = obj2.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, { settings_type: "user", subsection: first1.subSection, destination_pane: constants2.SETTINGS_CUSTOMIZE_PROFILE });
  }, items2);
  const items3 = [guild];
  const effect1 = obj2.useEffect(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    return UserSettingsAccountActionCreators.resetAndCloseUserProfileForm;
  }, items3);
  const effect2 = obj2.useEffect(() => () => {
    callback.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp17.isSubmitting || tmp19.isSubmitting, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj = {
      contentStyle: { backgroundColor },
      headerShadowVisible: false,
      headerRight: closure_11 ? (() => closure_1_17(backgroundColor(first[29]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let obj = {};
        const merged = Object.assign(arg0);
        const intl = closure_0(first[11]).intl;
        obj.label = intl.string(closure_0(first[11]).t["R3BPH+"]);
        obj.disabled = !stateFromStores;
        obj.onPress = handleSubmit(function*(arg0, value) {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
                  closure_0 = tmp4;
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
            } catch (tmp9) {
              c2 = tmp;
              throw tmp9;
            }
          }
        });
        return closure_2_17(closure_0(first[30]).HeaderTextButton, obj);
      })
    };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp2Result3 = require("useStateFromStores");
  if (stateFromStores) {
    stateFromStores = !tmp21;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  const preventRemove = require("Link").usePreventRemove(stateFromStores, (data) => {
    const action = data.data.action;
    const obj = {
      hasEdits: stateFromStores,
      resetPending: backgroundColor(first[22]).resetAllPending,
      onHasEdits: backgroundColor(first[23]).dismissKeyboard,
      onConfirm() {
        return nativeStackNavigation.dispatch(action);
      }
    };
    closure_1(first[21])(obj);
  });
  const items5 = [first, nativeStackNavigation];
  const effect3 = obj2.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items5);
  const obj6 = { style: tmp.container, onLayout: callback1, children: null };
  const tmp2Result4 = require("Link");
  const items6 = [closure_17(closure_11, { style: tmp.controls, children: closure_17(require("Tabs/Tabs").Tabs, { state: segmentedControlState }) }), closure_17(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState })];
  obj6.children = items6;
  return closure_18(closure_11, obj6);
}));
