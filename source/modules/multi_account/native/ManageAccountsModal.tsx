// Module ID: 14982
// Function ID: 112789
// Name: RemoveMultiAccountUserButton
// Dependencies: []

// Module 14982 (RemoveMultiAccountUserButton)
function RemoveMultiAccountUserButton(user) {
  user = user.user;
  const arg1 = user;
  let importDefault;
  function _handlePressRemove() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handlePressRemove = obj;
    return obj(...arguments);
  }
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  let stateFromStores = obj.useStateFromStores(items, () => obj.hidePersonalInformation);
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    obj = { size: 21 };
    return callback3(arg1(dependencyMap[16]).Spacer, obj);
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
    const intl = arg1(dependencyMap[18]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t.lSLMaU);
    obj.onPress = function handlePressRemove() {
      return _handlePressRemove(...arguments);
    };
    obj1 = { color: importDefault(dependencyMap[14]).colors.ICON_FEEDBACK_CRITICAL };
    obj.children = callback3(arg1(dependencyMap[21]).CircleMinusIcon, obj1);
    return callback3(arg1(dependencyMap[20]).PressableOpacity, obj);
  }
}
function ManageAccounts(isEditing) {
  isEditing = isEditing.isEditing;
  const arg1 = isEditing;
  const importDefault = isEditing.navigation;
  const tmp = callback5();
  const importAll = tmp;
  let obj = arg1(dependencyMap[22]);
  const multiAccountUsers = obj.useMultiAccountUsers().multiAccountUsers;
  const dependencyMap = multiAccountUsers;
  let obj1 = arg1(dependencyMap[15]);
  const items = [closure_8];
  const currentUserId = obj1.useStateFromStoresObject(items, () => ({ currentUserId: id.getId() })).currentUserId;
  let obj2 = arg1(dependencyMap[23]);
  const sharedValue = obj2.useSharedValue(0);
  let closure_5 = sharedValue;
  let obj3 = arg1(dependencyMap[23]);
  const fn = function c() {
    let obj = {};
    obj = { duration: closure_12 };
    obj.width = isEditing(multiAccountUsers[24]).withTiming(sharedValue.get(), obj);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[24]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 3389178545077;
  fn.__initData = closure_22;
  const React = obj3.useAnimatedStyle(fn);
  let closure_7 = importDefault(dependencyMap[25])(isEditing);
  const effect = React.useEffect(() => {
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
      const isEditing = user;
      let obj = { user };
      let fn = null;
      if (!isEditing) {
        fn = () => {
          if (!arg0) {
            if (tmp.id !== closure_4) {
              if (tmp.tokenStatus === constants.INVALID) {
                const arr = arr.push(constants4.LOGIN);
                let obj = arr(closure_3[26]);
                obj = { source: "multi_account_invalid_user" };
                obj.track(constants3.LOGIN_VIEWED, obj);
              } else {
                callback(closure_3[19]).switchAccount(tmp.id, obj, constants2.MANAGE_ACCOUNTS_MODAL);
                const obj2 = callback(closure_3[19]);
              }
            }
          }
        };
      }
      obj.onPressUser = fn;
      obj.showActiveAccountLabel = true;
      obj = { width: null, position: null, top: null, component: navigation(multiAccountUsers[23]).View, style: closure_6 };
      let tmp4 = isEditing;
      if (isEditing) {
        obj = { duration: closure_12 };
        const obj1 = { user };
        obj.children = callback(closure_23, obj1);
        tmp4 = callback(navigation(multiAccountUsers[31]), obj);
        const tmp8 = navigation(multiAccountUsers[31]);
      }
      obj.children = tmp4;
      obj.leading = callback(isEditing(multiAccountUsers[30]).TransitionGroup, obj);
      const obj2 = { flexShrink: true, flexGrow: true, overflow: true, position: true, component: closure_7, style: callback.trailingIconContainer };
      const tmp15 = navigation(multiAccountUsers[31]);
      const obj3 = { duration: closure_12, style: callback.trailingIcon };
      if (isEditing) {
        obj3.children = tmp16(tmp17(tmp14[32]).DragIcon, {});
        let tmp13Result = tmp13(tmp15, obj3, "drag");
      } else {
        const obj4 = { user };
        obj3.children = tmp16(tmp17(tmp14[29]).AccountStatusIcon, obj4);
        tmp13Result = tmp13(tmp15, obj3, "status");
      }
      obj2.children = tmp13Result;
      obj.trailing = callback(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
      let num3;
      if (isEditing) {
        num3 = 100;
      }
      obj.delayLongPress = num3;
      return callback(navigation(multiAccountUsers[29]), obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true
  };
  obj2 = { flexShrink: true, flexGrow: true, overflow: true, position: true, component: closure_7 };
  let tmp8 = !isEditing;
  if (tmp8) {
    obj3 = { duration: closure_12 };
    const obj4 = {};
    const obj5 = { color: importDefault(dependencyMap[14]).colors.TEXT_LINK };
    obj4.leading = callback3(arg1(dependencyMap[34]).CirclePlusIcon, obj5);
    const obj6 = { style: tmp.addAccountLabel };
    const intl = arg1(dependencyMap[18]).intl;
    obj6.text = intl.string(arg1(dependencyMap[18]).t.bPP34Q);
    obj4.label = callback3(arg1(dependencyMap[33]).FormRow.Label, obj6);
    obj4.onPress = function handlePressAddAccount() {
      if (multiAccountUsers.length >= closure_13) {
        let obj = {};
        const intl = isEditing(multiAccountUsers[18]).intl;
        obj.title = intl.string(isEditing(multiAccountUsers[18]).t.w7wfXi);
        const intl2 = isEditing(multiAccountUsers[18]).intl;
        obj = { maxNumAccounts: closure_13 };
        obj.body = intl2.formatToPlainString(isEditing(multiAccountUsers[18]).t.WOyelG, obj);
        obj.isDismissable = true;
        navigation(multiAccountUsers[17]).show(obj);
        const obj3 = navigation(multiAccountUsers[17]);
      } else {
        navigation.push(constants2.LOGIN);
        obj = navigation(multiAccountUsers[26]);
        const obj1 = { source: "multi_account_add_account" };
        obj.track(constants.LOGIN_VIEWED, obj1);
      }
    };
    obj3.children = callback3(arg1(dependencyMap[33]).FormRow, obj4);
    tmp8 = callback3(importDefault(dependencyMap[31]), obj3);
    const tmp12 = importDefault(dependencyMap[31]);
  }
  obj2.children = tmp8;
  obj1.footer = callback3(arg1(dependencyMap[30]).TransitionGroup, obj2);
  obj.children = callback3(importDefault(dependencyMap[28]), obj1);
  return callback3(arg1(dependencyMap[27]).SafeAreaPaddingView, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const MultiAccountTokenStatus = arg1(dependencyMap[7]).MultiAccountTokenStatus;
({ MANAGE_EDIT_TRANSITION_DURATION: closure_12, MAX_ACCOUNTS: closure_13, MultiAccountSwitchLocation: closure_14 } = arg1(dependencyMap[8]));
const ManageAccountsScreens = arg1(dependencyMap[9]).ManageAccountsScreens;
const tmp2 = arg1(dependencyMap[8]);
({ AnalyticEvents: closure_16, AuthStates: closure_17 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_18, jsxs: closure_19 } = arg1(dependencyMap[11]));
let obj1 = arg1(dependencyMap[12]);
let closure_20 = obj1.createNativeStackNavigator();
let obj2 = arg1(dependencyMap[13]);
let obj = {};
obj = { "Null": -93192191, "Null": 2013265920, "Null": 16777216, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW };
obj.sortableListView = obj1;
obj2 = { color: importDefault(dependencyMap[14]).colors.TEXT_LINK };
obj.addAccountLabel = obj2;
obj.trailingIconContainer = {};
obj.trailingIcon = { position: "absolute" };
let closure_21 = obj2.createStyles(obj);
let closure_22 = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const tmp4 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo(function ManageAccountsModal(initialRouteName) {
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  let callback;
  let closure_1;
  let closure_2;
  let obj = callback(dependencyMap[35]);
  callback = obj.useAccessibilityNativeStackOptions();
  const tmp2 = callback2(importAllResult.useState(false), 2);
  closure_1 = tmp2[0];
  closure_2 = tmp2[1];
  obj = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      const obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_3[36]).GenericHeaderTitle, obj);
        }
      };
      let renderModalCloseImage;
      if (!callback2) {
        renderModalCloseImage = callback(closure_3[36]).getRenderModalCloseImage(tmp);
        const obj2 = callback(closure_3[36]);
      }
      obj.headerLeft = renderModalCloseImage;
      obj.headerTitleAlign = "center";
      const merged = Object.assign(callback);
      const merged1 = Object.assign(callback2(closure_3[37])());
      return obj;
    }
  };
  obj = {
    name: ManageAccountsScreens.MANAGE_ACCOUNTS,
    options() {
      const obj = {};
      const intl = callback(closure_3[18]).intl;
      obj.title = intl.string(callback(closure_3[18]).t.WbFpq4);
      const getRenderHeaderTextButton = callback(closure_3[36]).getRenderHeaderTextButton;
      const intl2 = callback(closure_3[18]).intl;
      const string = intl2.string;
      const t = callback(closure_3[18]).t;
      if (closure_1) {
        let renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => callback(false));
      } else {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => callback(true));
      }
      obj.headerRight = renderHeaderTextButton;
      return obj;
    },
    children(navigation) {
      return callback3(closure_24, { isEditing: closure_1, navigation: navigation.navigation });
    }
  };
  const items = [
    callback3(closure_20.Screen, obj),
    callback3(closure_20.Screen, {
      name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
      options() {
        const obj = {};
        const intl = callback(closure_3[18]).intl;
        obj.title = intl.string(callback(closure_3[18]).t.WbFpq4);
        return obj;
      },
      children() {
        return callback3(callback2(closure_3[38]), {
          handleLogin(login, password, undelete) {
            let obj = callback(closure_3[39]);
            obj = { login, password, undelete };
            obj.login(obj);
          },
          onReset(arg0, arg1, arg2) {
            callback(closure_3[39]).loginReset(true);
          }
        });
      }
    }),
    callback3(closure_20.Screen, {
      name: ManageAccountsScreens.LOGIN,
      options() {
        return { headerShown: false };
      },
      children() {
        return callback3(callback2(closure_3[40]), { isMultiAccount: true });
      }
    }),
    callback3(closure_20.Screen, {
      name: ManageAccountsScreens.MFA,
      options() {
        return { headerShown: false };
      },
      children() {
        return callback3(callback2(closure_3[41]), { isMultiAccount: true });
      }
    })
  ];
  obj.children = items;
  return callback4(closure_20.Navigator, obj);
});
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default memoResult;
