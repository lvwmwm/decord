// Module ID: 16012
// Function ID: 16013
// Name: ManageAccountsModal
// Dependencies: [32, 5, 19, 17, 502, 4679, 1372, 11906, 11907, 16013, 1074, 21, 7339, 4836, 576, 504, 1177, 5204, 1115, 11910, 5435, 14859, 15575, 4566, 4837, 7720, 1241, 6544, 16014, 15576, 11916, 16015, 5927, 8053, 10774, 6421, 7288, 10386, 15600, 6010, 6361, 15599, 2]

// Module 16012 (ManageAccountsModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import timing from "timing" /* 4837 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10386 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 11910 */;
import ManageAccountsConstants from "ManageAccountsConstants" /* 16013 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import UserStore from "UserStore" /* 1372 */;
import Constants_mod from "Constants" /* 11907 */;
import Constants_mod2 from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, component, importDefault, set;

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let obj4;
function RemoveMultiAccountUserButton(user) {
  let CircleMinusIcon;
  let closure_1;
  let currentUser;
  let intl;
  let obj4;
  user = user.user;
  importDefault = undefined;
  let obj = function _handlePressRemove() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj5;
      let v1;
      let v3;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === username) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = { title: intl.string(tmp(closure_1_3[18]).t.n0Fbg6), body: intl2.formatToPlainString(tmp(closure_1_3[18]).t.phEQmS, obj5), confirmText: intl3.string(tmp(closure_1_3[18]).t.N86XcP), confirmColor: tmp(closure_1_3[16]).ButtonColors.RED, cancelText: intl4.string(tmp(closure_1_3[18]).t["ETE/oC"]), isDismissable: true };
              const _confirm = username(closure_1_3[17]).confirm;
              const tmp16 = username(closure_1_3[17]);
              intl = tmp(closure_1_3[18]).intl;
              intl2 = tmp(closure_1_3[18]).intl;
              obj5 = { username };
              intl3 = tmp(closure_1_3[18]).intl;
              intl4 = tmp(closure_1_3[18]).intl;
              username = 1;
              c2 = 1;
              const obj6 = { value: _confirm(obj4), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              obj = c2(closure_1_3[19]);
              obj.removeAccount(closure_128_0.id);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = user;
  obj = user(504);
  const items = [StreamerModeStore];
  let stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  let obj2 = user(504);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    return closure_18(tmp(1177).Spacer, { size: 21 });
  } else {
    let username = user.username;
    importDefault = username;
    if (!stateFromStores) {
      stateFromStores = "0" === user.discriminator;
    }
    if (!stateFromStores) {
      const _HermesInternal = HermesInternal;
      importDefault = username + "#" + user.discriminator;
    }
    let obj3 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(tmp(1115).t.lSLMaU),
      onPress: function handlePressRemove() {
          return obj(...arguments);
        },
      children: closure_18(CircleMinusIcon, obj4)
    };
    const PressableOpacity = tmp(5435).PressableOpacity;
    intl = tmp(1115).intl;
    obj4 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    CircleMinusIcon = tmp(14859).CircleMinusIcon;
    return closure_18(PressableOpacity, obj3);
  }
}
function ManageAccounts(isEditing) {
  let CirclePlusIcon;
  let FormRow;
  let Label;
  let TransitionGroup;
  let id;
  let intl;
  let obj10;
  let obj11;
  let obj12;
  let obj7;
  let obj8;
  let style;
  let tmp8Result;
  let tmp9;
  isEditing = isEditing.isEditing;
  navigation = isEditing.navigation;
  let multiAccountUsers;
  const tmp = closure_21();
  let closure_2 = tmp;
  let tmp2 = isEditing;
  const tmp3 = multiAccountUsers;
  let obj = isEditing(multiAccountUsers[22]);
  multiAccountUsers = obj.useMultiAccountUsers().multiAccountUsers;
  let obj2 = isEditing(multiAccountUsers[15]);
  const items = [AuthenticationStore];
  const currentUserId = obj2.useStateFromStoresObject(items, () => {
    const obj = { currentUserId: id.getId() };
    return obj;
  }).currentUserId;
  let obj3 = isEditing(multiAccountUsers[23]);
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = isEditing(multiAccountUsers[23]);
  let fn = function l() {
    let obj2;
    const obj = { width: obj2.withTiming(sharedValue.get(), obj3) };
    obj2 = timing;
    return obj;
  };
  let obj5 = { withTiming: isEditing(multiAccountUsers[24]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  fn.__closure = obj5;
  fn.__workletHash = 3389178545077;
  fn.__initData = __initData;
  const tmp5 = duration;
  react = obj4.useAnimatedStyle(fn);
  const tmp6 = navigation;
  component = navigation(multiAccountUsers[25])(isEditing);
  const effect = react.useEffect(() => {
    const tmp2 = null != component && tmp !== isEditing;
    if (tmp2) {
      let num = 0;
      set = sharedValue.set;
      if (isEditing) {
        num = 37;
      }
      const result = set(num);
    }
  });
  const tmp8 = closure_18;
  let obj6 = { style: tmp.container, bottom: true, children: tmp8(tmp9, obj7) };
  const SafeAreaPaddingView = isEditing(multiAccountUsers[27]).SafeAreaPaddingView;
  obj7 = {
    data: multiAccountUsers,
    onRowMoved: function handleUserMove(arg0) {
      let from;
      let to;
      ({ from, to } = arg0);
      const obj = closure_2(multiAccountUsers[19]);
      obj.moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user, arg1) {
      let TransitionGroup;
      let TransitionGroup2;
      let fn;
      let num;
      let obj2;
      let obj4;
      let obj5;
      let tmpResult;
      let tmpResult2;
      let tmp2 = navigation;
      let obj = { user, onPressUser: fn, showActiveAccountLabel: true, leading: tmp(TransitionGroup, obj2), trailing: tmp(TransitionGroup2, obj5), delayLongPress: num };
      fn = null;
      const tmp4 = navigation(multiAccountUsers[29]);
      if (!user) {
        fn = () => {
          let tmp2;
          if (!isEditing) {
            if (user.id !== currentUserId) {
              if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
                navigation.push(constants3.LOGIN);
                const obj2 = AnalyticsUtilsDefault;
                obj2.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                const obj = MultiAccountActionCreatorsAll;
                obj.switchAccount(user.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
              tmp2 = tmp8;
            }
          }
          return tmp2;
        };
      }
      obj2 = { component: tmp2(tmp3[23]).View, transitionEnter: true, transitionLeave: true, style, children: tmpResult };
      TransitionGroup = isEditing(tmp3[30]).TransitionGroup;
      tmpResult = tmp5;
      if (tmpResult) {
        const obj3 = { duration, children: closure_1_18(RemoveMultiAccountUserButton, obj4) };
        obj4 = { user };
        const tmp2Result = tmp2(multiAccountUsers[31]);
        tmpResult = tmp(tmp2Result, obj3);
      }
      obj5 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: closure_2.trailingIconContainer, children: tmpResult2 };
      TransitionGroup2 = tmp6(tmp3[30]).TransitionGroup;
      const tmp2Result2 = tmp2(multiAccountUsers[31]);
      const obj6 = { duration, style: closure_2.trailingIcon, children: null };
      if (user) {
        obj6.children = closure_1_18(isEditing(multiAccountUsers[32]).DragIcon, {});
        tmpResult2 = tmp(tmp2Result2, obj6, "drag");
      } else {
        const obj7 = { user };
        obj6.children = closure_1_18(isEditing(multiAccountUsers[29]).AccountStatusIcon, obj7);
        tmpResult2 = tmp(tmp2Result2, obj6, "status");
      }
      num = undefined;
      if (user) {
        num = 100;
      }
      return closure_1_18(tmp4, obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
    footer: tmp8(TransitionGroup, obj8)
  };
  tmp9 = navigation(multiAccountUsers[28]);
  obj8 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: tmp8Result };
  tmp8Result = !isEditing;
  TransitionGroup = isEditing(multiAccountUsers[30]).TransitionGroup;
  if (!isEditing) {
    const obj9 = { duration: tmp5, children: tmp8(FormRow, obj10) };
    obj10 = {
      leading: tmp8(CirclePlusIcon, obj11),
      label: tmp8(Label, obj12),
      onPress: function handlePressAddAccount() {
          let intl;
          let intl2;
          let obj3;
          if (multiAccountUsers.length >= map1) {
            const obj2 = { title: intl.string(intl5.t.w7wfXi), body: intl2.formatToPlainString(intl5.t.WOyelG, obj3), isDismissable: true };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl5.intl;
            intl2 = intl5.intl;
            obj3 = { maxNumAccounts: tmp };
            show(obj2);
          } else {
            navigation.push(constants2.LOGIN);
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.LOGIN_VIEWED, { source: "multi_account_add_account" });
          }
        }
    };
    const tmp6Result = tmp6(tmp3[31]);
    FormRow = tmp2(tmp3[33]).FormRow;
    obj11 = { color: tmp6(tmp3[14]).colors.TEXT_LINK };
    CirclePlusIcon = tmp2(tmp3[34]).CirclePlusIcon;
    obj12 = { style: tmp.addAccountLabel, text: intl.string(tmp2(tmp3[18]).t.bPP34Q) };
    Label = tmp2(tmp3[33]).FormRow.Label;
    intl = tmp2(tmp3[18]).intl;
    tmp8Result = tmp8(tmp6Result, obj9);
  }
  return tmp8(SafeAreaPaddingView, obj6);
}
let react = react_mod;
const View = react_native.View;
const MultiAccountTokenStatus = MultiAccountStore.MultiAccountTokenStatus;
let Constants = Constants_mod2;
({ MANAGE_EDIT_TRANSITION_DURATION: closure_12, MAX_ACCOUNTS: map1, MultiAccountSwitchLocation: closure_14 } = Constants);
const ManageAccountsScreens = ManageAccountsConstants.ManageAccountsScreens;
Constants = Constants_mod2;
({ AnalyticEvents: closure_16, AuthStates: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { container: obj2, sortableListView: obj3, addAccountLabel: obj4, trailingIconContainer: { width: 24, height: 24 }, trailingIcon: { position: "absolute" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { color: nativeDefault.colors.TEXT_LINK };
let closure_21 = createStyles(obj);
const __initData = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const memoResult = react.memo(function ManageAccountsModal(initialRouteName) {
  let c1;
  let c2;
  let closure_0;
  let isEditing;
  let items;
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    const tmp = ManageAccountsScreens;
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  [c1, c2] = react.useState(false);
  let obj2 = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      let renderModalCloseImage;
      let obj = {
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_3[36]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_18(GenericHeaderTitle, obj);
        },
        headerLeft: renderModalCloseImage,
        headerTitleAlign: "center"
      };
      renderModalCloseImage = undefined;
      if (!c1) {
        const obj2 = HeaderShared;
        renderModalCloseImage = obj2.getRenderModalCloseImage(tmp);
      }
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: items
  };
  const Navigator = closure_20.Navigator;
  items = [, , , ];
  const obj3 = {
    name: ManageAccountsScreens.MANAGE_ACCOUNTS,
    options() {
      let intl;
      let renderHeaderTextButton;
      const obj = { title: intl.string(intl5.t.WbFpq4), headerRight: renderHeaderTextButton };
      intl = intl5.intl;
      const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
      HeaderShared;
      const intl2 = intl5.intl;
      const string = intl2.string;
      const t = intl5.t;
      if (c1) {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => closure_1_2(false));
      } else {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => closure_1_2(true));
      }
      return obj;
    },
    children(navigation) {
      const obj = { isEditing, navigation: navigation.navigation };
      return authStore4(ManageAccounts, obj);
    }
  };
  _slicedToArray(react.useState(false), 2);
  items[0] = closure_18(closure_20.Screen, obj3);
  const obj4 = {
    name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
    options() {
      let intl;
      const obj = { title: intl.string(closure_0(dependencyMap[18]).t.WbFpq4) };
      intl = closure_0(dependencyMap[18]).intl;
      return obj;
    },
    children() {
      let obj = {
        handleLogin(login, password, undelete) {
          const obj = isEditing(closure_1_3[39]);
          const obj2 = { login, password, undelete };
          obj.login(obj2);
        },
        onReset() {
          const obj = isEditing(closure_1_3[39]);
          obj.loginReset(true);
        }
      };
      return closure_1_18(isEditing(dependencyMap[38]), obj);
    }
  };
  items[1] = closure_18(closure_20.Screen, obj4);
  const obj5 = {
    name: ManageAccountsScreens.LOGIN,
    options() {
      return { headerShown: false };
    },
    children() {
      return closure_1_18(isEditing(dependencyMap[40]), { isMultiAccount: true });
    }
  };
  items[2] = closure_18(closure_20.Screen, obj5);
  const obj6 = {
    name: ManageAccountsScreens.MFA,
    options() {
      return { headerShown: false };
    },
    children() {
      return closure_1_18(isEditing(dependencyMap[41]), { isMultiAccount: true });
    }
  };
  items[3] = closure_18(closure_20.Screen, obj6);
  return closure_19(Navigator, obj2);
});
let result = size.fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default memoResult;
