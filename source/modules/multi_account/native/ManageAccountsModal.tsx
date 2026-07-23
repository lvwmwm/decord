// Module ID: 15106
// Function ID: 115000
// Name: RemoveMultiAccountUserButton
// Dependencies: [57, 5, 31, 27, 1194, 3970, 1849, 11452, 11453, 15107, 653, 33, 9113, 4130, 689, 566, 1273, 4471, 1212, 11456, 4660, 14201, 14736, 3991, 4131, 8284, 675, 5121, 15108, 14737, 10364, 15109, 5175, 7495, 11254, 5519, 9122, 10161, 14762, 5590, 9195, 14761, 2]

// Module 15106 (RemoveMultiAccountUserButton)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importAllResult from "module_15109";
import { View } from "SafeAreaPaddingView";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { MultiAccountTokenStatus } from "_isNativeReflectConstruct";
import MAX_ACCOUNTS from "MAX_ACCOUNTS";
import { ManageAccountsScreens } from "ManageAccountsScreens";
import ME from "ME";
import jsxProd from "Form";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function RemoveMultiAccountUserButton(user) {
  user = user.user;
  let importDefault;
  function _handlePressRemove() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_5(tmp);
    return obj(...arguments);
  }
  let obj = user(566);
  const items = [closure_9];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_9.hidePersonalInformation);
  let obj1 = user(566);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_10.getCurrentUser());
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    obj = { size: 21 };
    return callback2(user(1273).Spacer, obj);
  } else {
    const username = user.username;
    importDefault = username;
    if (!stateFromStores) {
      stateFromStores = "0" === user.discriminator;
    }
    if (!stateFromStores) {
      const _HermesInternal = HermesInternal;
      importDefault = username + "#" + user.discriminator;
    }
    obj = { accessibilityRole: "button" };
    const intl = user(1212).intl;
    obj.accessibilityLabel = intl.string(user(1212).t.lSLMaU);
    obj.onPress = function handlePressRemove() {
      return _handlePressRemove(...arguments);
    };
    obj1 = { color: importDefault(689).colors.ICON_FEEDBACK_CRITICAL };
    obj.children = callback2(user(14201).CircleMinusIcon, obj1);
    return callback2(user(4660).PressableOpacity, obj);
  }
}
function ManageAccounts(isEditing) {
  isEditing = isEditing.isEditing;
  const navigation = isEditing.navigation;
  let tmp = callback4();
  const importAll = tmp;
  let obj = isEditing(multiAccountUsers[22]);
  multiAccountUsers = obj.useMultiAccountUsers().multiAccountUsers;
  let obj1 = isEditing(multiAccountUsers[15]);
  const items = [closure_8];
  const currentUserId = obj1.useStateFromStoresObject(items, () => ({ currentUserId: outer1_8.getId() })).currentUserId;
  let obj2 = isEditing(multiAccountUsers[23]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = isEditing(multiAccountUsers[23]);
  let fn = function c() {
    let obj = {};
    obj = { duration: outer1_12 };
    obj.width = isEditing(multiAccountUsers[24]).withTiming(sharedValue.get(), obj);
    return obj;
  };
  obj = { withTiming: isEditing(multiAccountUsers[24]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 3389178545077;
  fn.__initData = closure_22;
  let closure_7 = navigation(multiAccountUsers[25])(isEditing);
  const effect = obj3.useAnimatedStyle(fn).useEffect(() => {
    let tmp = null != closure_7;
    if (tmp) {
      tmp = closure_7 !== isEditing;
    }
    if (tmp) {
      let num = 0;
      if (isEditing) {
        num = 37;
      }
      const result = sharedValue.set(num);
    }
  });
  obj = { style: tmp.container, bottom: true };
  obj1 = {
    data: multiAccountUsers,
    onRowMoved: function handleUserMove(arg0) {
      let from;
      let to;
      ({ from, to } = arg0);
      tmp(multiAccountUsers[19]).moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user) {
      let closure_0 = user;
      let obj = { user };
      let fn = null;
      if (!closure_0) {
        fn = () => {
          if (!closure_0) {
            if (tmp.id !== outer1_4) {
              if (tmp.tokenStatus === outer2_11.INVALID) {
                outer1_1.push(outer2_17.LOGIN);
                let obj = navigation(multiAccountUsers[26]);
                obj = { source: "multi_account_invalid_user" };
                obj.track(outer2_16.LOGIN_VIEWED, obj);
              } else {
                callback(multiAccountUsers[19]).switchAccount(tmp.id, obj, outer2_14.MANAGE_ACCOUNTS_MODAL);
                const obj2 = callback(multiAccountUsers[19]);
              }
            }
          }
        };
      }
      obj.onPressUser = fn;
      obj.showActiveAccountLabel = true;
      obj = { component: navigation(multiAccountUsers[23]).View, transitionEnter: true, transitionLeave: true, style: closure_6 };
      let tmp4 = closure_0;
      if (closure_0) {
        obj = { duration: outer1_12 };
        const obj1 = { user };
        obj.children = outer1_18(outer1_23, obj1);
        tmp4 = outer1_18(navigation(multiAccountUsers[31]), obj);
        const tmp8 = navigation(multiAccountUsers[31]);
      }
      obj.children = tmp4;
      obj.leading = outer1_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj);
      let obj2 = { component: closure_7, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: outer1_18.trailingIconContainer };
      const tmp15 = navigation(multiAccountUsers[31]);
      const obj3 = { duration: outer1_12, style: outer1_18.trailingIcon };
      if (closure_0) {
        obj3.children = tmp16(tmp17(tmp14[32]).DragIcon, {});
        let tmp13Result = tmp13(tmp15, obj3, "drag");
      } else {
        const obj4 = { user };
        obj3.children = tmp16(tmp17(tmp14[29]).AccountStatusIcon, obj4);
        tmp13Result = tmp13(tmp15, obj3, "status");
      }
      obj2.children = tmp13Result;
      obj.trailing = outer1_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
      let num3;
      if (closure_0) {
        num3 = 100;
      }
      obj.delayLongPress = num3;
      return outer1_18(navigation(multiAccountUsers[29]), obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true
  };
  const importAllResult = obj3.useAnimatedStyle(fn);
  let tmp4 = callback2;
  const tmp5 = callback2;
  obj2 = { component: closure_7, transitionEnter: true, transitionLeave: true, transitionAppear: true };
  let tmp8 = !isEditing;
  if (tmp8) {
    obj3 = { duration: closure_12 };
    let obj4 = {};
    const obj5 = { color: navigation(multiAccountUsers[14]).colors.TEXT_LINK };
    obj4.leading = callback2(isEditing(multiAccountUsers[34]).CirclePlusIcon, obj5);
    const obj6 = { style: tmp.addAccountLabel };
    let intl = isEditing(multiAccountUsers[18]).intl;
    obj6.text = intl.string(isEditing(multiAccountUsers[18]).t.bPP34Q);
    obj4.label = callback2(isEditing(multiAccountUsers[33]).FormRow.Label, obj6);
    obj4.onPress = function handlePressAddAccount() {
      if (multiAccountUsers.length >= outer1_13) {
        let obj = {};
        const intl = isEditing(multiAccountUsers[18]).intl;
        obj.title = intl.string(isEditing(multiAccountUsers[18]).t.w7wfXi);
        const intl2 = isEditing(multiAccountUsers[18]).intl;
        obj = { maxNumAccounts: outer1_13 };
        obj.body = intl2.formatToPlainString(isEditing(multiAccountUsers[18]).t.WOyelG, obj);
        obj.isDismissable = true;
        navigation(multiAccountUsers[17]).show(obj);
        const obj3 = navigation(multiAccountUsers[17]);
      } else {
        navigation.push(outer1_17.LOGIN);
        obj = navigation(multiAccountUsers[26]);
        const obj1 = { source: "multi_account_add_account" };
        obj.track(outer1_16.LOGIN_VIEWED, obj1);
      }
    };
    obj3.children = callback2(isEditing(multiAccountUsers[33]).FormRow, obj4);
    tmp8 = callback2(navigation(multiAccountUsers[31]), obj3);
    const tmp12 = navigation(multiAccountUsers[31]);
  }
  obj2.children = tmp8;
  obj1.footer = callback2(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
  obj.children = tmp5(navigation(multiAccountUsers[28]), obj1);
  return tmp4(isEditing(multiAccountUsers[27]).SafeAreaPaddingView, obj);
}
({ MANAGE_EDIT_TRANSITION_DURATION: closure_12, MAX_ACCOUNTS: closure_13, MultiAccountSwitchLocation: closure_14 } = MAX_ACCOUNTS);
({ AnalyticEvents: closure_16, AuthStates: closure_17 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
obj.container = obj;
createNativeStackNavigator = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.sortableListView = createNativeStackNavigator;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
obj.addAccountLabel = _createForOfIteratorHelperLoose;
obj.trailingIconContainer = { width: 24, height: 24 };
obj.trailingIcon = { position: "absolute" };
let closure_21 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_22 = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const memoResult = importAllResult.memo(function ManageAccountsModal(initialRouteName) {
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  let _require;
  let closure_1;
  let closure_2;
  let obj = _require(5519);
  _require = obj.useAccessibilityNativeStackOptions();
  const tmp2 = callback(importAllResult.useState(false), 2);
  closure_1 = tmp2[0];
  closure_2 = tmp2[1];
  obj = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_18(callback(outer2_3[36]).GenericHeaderTitle, obj);
        }
      };
      let renderModalCloseImage;
      if (!callback2) {
        renderModalCloseImage = callback(outer1_3[36]).getRenderModalCloseImage(tmp);
        const obj2 = callback(outer1_3[36]);
      }
      obj.headerLeft = renderModalCloseImage;
      obj.headerTitleAlign = "center";
      let merged = Object.assign(callback);
      let merged1 = Object.assign(callback2(outer1_3[37])());
      return obj;
    }
  };
  obj = {
    name: ManageAccountsScreens.MANAGE_ACCOUNTS,
    options() {
      const obj = {};
      const intl = callback(outer1_3[18]).intl;
      obj.title = intl.string(callback(outer1_3[18]).t.WbFpq4);
      const getRenderHeaderTextButton = callback(outer1_3[36]).getRenderHeaderTextButton;
      const intl2 = callback(outer1_3[18]).intl;
      const string = intl2.string;
      const t = callback(outer1_3[18]).t;
      if (closure_1) {
        let renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => outer1_2(false));
      } else {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => outer1_2(true));
      }
      obj.headerRight = renderHeaderTextButton;
      return obj;
    },
    children(navigation) {
      return outer1_18(outer1_24, { isEditing: closure_1, navigation: navigation.navigation });
    }
  };
  const items = [
    callback2(createNativeStackNavigator.Screen, obj),
    callback2(createNativeStackNavigator.Screen, {
      name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
      options() {
        const obj = {};
        const intl = callback(outer1_3[18]).intl;
        obj.title = intl.string(callback(outer1_3[18]).t.WbFpq4);
        return obj;
      },
      children() {
        return outer1_18(callback2(outer1_3[38]), {
          handleLogin(login, password, undelete) {
            let obj = callback(outer2_3[39]);
            obj = { login, password, undelete };
            obj.login(obj);
          },
          onReset(arg0, arg1, arg2) {
            callback(outer2_3[39]).loginReset(true);
          }
        });
      }
    }),
    callback2(createNativeStackNavigator.Screen, {
      name: ManageAccountsScreens.LOGIN,
      options() {
        return { headerShown: false };
      },
      children() {
        return outer1_18(callback2(outer1_3[40]), { isMultiAccount: true });
      }
    }),
    callback2(createNativeStackNavigator.Screen, {
      name: ManageAccountsScreens.MFA,
      options() {
        return { headerShown: false };
      },
      children() {
        return outer1_18(callback2(outer1_3[41]), { isMultiAccount: true });
      }
    })
  ];
  obj.children = items;
  return callback3(createNativeStackNavigator.Navigator, obj);
});
let result = require("result").fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default memoResult;
