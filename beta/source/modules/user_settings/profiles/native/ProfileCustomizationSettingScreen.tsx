// Module ID: 14144
// Function ID: 14145
// Name: ProfileCustomizationSettingScreen
// Dependencies: [5, 109, 32, 19, 17, 9227, 7605, 1084, 1074, 21, 4836, 1115, 14145, 14203, 4531, 576, 1485, 6415, 9083, 10384, 6405, 4701, 14161, 14204, 563, 5016, 9229, 5936, 7288, 1486, 12111, 12113, 2]

// Module 14144 (ProfileCustomizationSettingScreen)
import react_native from "react-native" /* 17 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import intl2 from "intl" /* 1115 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6405 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9229 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 10384 */;
import UserSettingsEditUserProfileDefault from "UserSettingsEditUserProfile" /* 14145 */;
import UserSettingsEditGuildProfileDefault from "UserSettingsEditGuildProfile" /* 14203 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9227 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, closure_11, importDefault;

let closure_14;
let closure_15;
let closure_16;
let map1;
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
const View = react_native.View;
const ProfileCustomizationSubsection = UserSettingsConstants.ProfileCustomizationSubsection;
({ AnalyticEvents: map1, AnalyticsSections: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = createStyles.createStyles({ container: { height: "100%" }, controls: { paddingTop: 4 } });
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
const memoResult = react.memo(() => {
  let callback;
  let closure_1;
  let first1;
  let guild;
  let handleSubmit;
  let items6;
  let num;
  let stateFromStores;
  let token;
  let tmp = closure_17();
  let tmp2 = token;
  const tmp3 = first1;
  let obj = token(first1[14]);
  token = obj.useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let obj2 = guild;
  const tmp6 = handleSubmit(guild.useState(0), 2);
  importDefault = tmp6[1];
  let first = tmp6[0];
  const tmp8 = handleSubmit(guild.useState(false), 2);
  first1 = tmp8[0];
  closure_3 = tmp8[1];
  let obj3 = token(first1[16]);
  const nativeStackNavigation = obj3.useNativeStackNavigation();
  let obj4 = token(first1[17]);
  const params = obj4.useSettingNavigationRoute().params;
  let autoFocusElement;
  if (params != null) {
    autoFocusElement = params.autoFocusElement;
  }
  const field = stateFromStores.useField("subsection");
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
      stateFromStores.setState(obj);
    },
    onPageChangeStart(arg0, onConfirm) {
      const obj = { hasEdits: stateFromStores, resetPending: UserSettingsAccountActionCreators.resetAllPending, onHasEdits: ChatInputUtils.dismissKeyboard, onConfirm };
      const tmp = maybeShowDiscardChangesAlertDefault;
      return tmp(obj);
    }
  };
  num = 0;
  const useSegmentedControlState = tmp2(tmp3[18]).useSegmentedControlState;
  tmp2(tmp3[18]);
  if (field === callback.GUILD) {
    num = 1;
  }
  const segmentedControlState = useSegmentedControlState(obj5);
  const activeIndex = segmentedControlState.activeIndex;
  let first2 = tmp13[activeIndex.get(activeIndex)];
  if (first2 == null) {
    first2 = tmp13[0];
  }
  const tmp18 = require("useUserProfileEditForm")();
  handleSubmit = tmp18.handleSubmit;
  const tmp19 = first2(tmp18, closure_3);
  const tmp20 = require("useGuildProfileEditForm")();
  guild = tmp20.guild;
  const handleSubmit2 = tmp20.handleSubmit;
  items = [closure_11];
  const tmp21 = first2(tmp20, nativeStackNavigation);
  const tmp2Result3 = tmp2(tmp3[24]);
  stateFromStores = tmp2Result3.useStateFromStores(items, () => closure_11.showNotice());
  closure_11 = tmp23;
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
    const obj2 = { settings_type: "user", subsection: first2.subSection, destination_pane: constants.SETTINGS_CUSTOMIZE_PROFILE };
    obj.trackWithMetadata(map1.SETTINGS_PANE_VIEWED, obj2);
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
    stateFromStores.resetState();
  }, []);
  const items4 = [token, nativeStackNavigation, stateFromStores, tmp19.isSubmitting || tmp21.isSubmitting, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj2;
    let obj = {
      contentStyle: obj2,
      headerShadowVisible: false,
      headerRight: closure_11 ? (() => closure_1_15(token(first1[27]).HeaderSubmittingIndicator, {})) : ((arg0) => {
        let intl;
        let obj = {
          label: intl.string(token(first1[11]).t["R3BPH+"]),
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
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp8) {
                c2 = 3;
                throw tmp8;
              }
            }
          })
        };
        const HeaderTextButton = token(first1[28]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = token(first1[11]).intl;
        return closure_2_15(HeaderTextButton, obj);
      })
    };
    obj2 = { backgroundColor: token };
    nativeStackNavigation.setOptions(obj);
  }, items4);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const usePreventRemove = tmp2(tmp3[29]).usePreventRemove;
  tmp2(tmp3[29]);
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
      resetPending: token(first1[20]).resetAllPending,
      onHasEdits: token(first1[21]).dismissKeyboard,
      onConfirm() {
        return nativeStackNavigation.dispatch(action);
      }
    };
    const tmp = closure_1(first1[19]);
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
  const obj7 = { style: tmp.controls, children: closure_15(tmp2(tmp3[30]).Tabs, { state: segmentedControlState }) };
  items6[0] = closure_15(handleSubmit2, obj7);
  items6[1] = closure_15(tmp2(tmp3[31]).SegmentedControlPages, { state: segmentedControlState });
  return closure_16(handleSubmit2, obj6);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreen.tsx");

export default memoResult;
