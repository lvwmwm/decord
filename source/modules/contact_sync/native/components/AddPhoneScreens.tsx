// Module ID: 11722
// Function ID: 91005
// Name: AddPhoneScreen
// Dependencies: []
// Exports: AddPhoneScreen, VerifyPasswordScreen, VerifyPhoneScreen

// Module 11722 (AddPhoneScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const useContactSyncModalStore = arg1(dependencyMap[5]).useContactSyncModalStore;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[6]);
obj.redesignContainer = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32 };
obj.header = { alignItems: "center" };
obj.title = { textAlign: "center" };
obj.subtitle = {};
let closure_11 = obj.createStyles(obj);
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT + 32 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
  let obj = callback(dependencyMap[10]);
  const callback = obj.useNavigation();
  const tmp = callback5();
  obj = { style: tmp.header };
  obj = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = callback(dependencyMap[12]).intl;
  obj.children = intl.string(callback(dependencyMap[12]).t.Xgb497);
  const items = [callback3(callback(dependencyMap[11]).Text, obj), ];
  const obj1 = { style: tmp.subtitle };
  const intl2 = callback(dependencyMap[12]).intl;
  obj1.children = intl2.string(callback(dependencyMap[12]).t.qFmzyo);
  items[1] = callback3(callback(dependencyMap[11]).Text, obj1);
  obj.children = items;
  const obj2 = { style: tmp.container };
  const tmp2 = callback4(View, obj);
  obj2.reason = callback(dependencyMap[14]).ChangePhoneReason.CONTACT_SYNC;
  obj2.header = tmp2;
  obj2.onComplete = function onComplete(arg0) {
    return callback(closure_2[15]).submitPhone(arg0, callback);
  };
  return callback3(importDefault(dependencyMap[13]), obj2);
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  let tmp3;
  function _handleCodeEntered(closure_5, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    const _handleCodeEntered = obj;
    return obj(...arguments);
  }
  const tmp = callback5();
  [tmp3, closure_0] = _handleCodeEntered(React.useState(false), 2);
  const tmp4 = _handleCodeEntered(React.useState(), 2);
  const importDefault = tmp4[1];
  const phone = useContactSyncModalStore().phone;
  let obj = arg1(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const tmp2 = _handleCodeEntered(React.useState(false), 2);
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[16]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  let closure_3 = stateFromStores;
  const items1 = [navigation, phone, stateFromStores];
  const effect = React.useEffect(() => {
    const callback = null;
    if (null != stateFromStores) {
      const result = callback(navigation[15]).handlePhoneVerificationComplete(stateFromStores, navigation);
      result.then(() => {
        const _null = _null(closure_2[17]).runAfterInteractions(() => callback(false));
      });
      const obj = callback(navigation[15]);
    }
    return () => {
      if (null != closure_0) {
        closure_0.cancel();
      }
    };
  }, items1);
  importDefault(dependencyMap[18])(null != phone, "Phone shouldn't be null when trying to verify the code");
  obj = {
    phone,
    loading: tmp3,
    error: tmp4[0],
    backgroundStyle: tmp.redesignContainer,
    disableKeyboardAvoidingView: true,
    onCodeEnteredIntercept: function handleCodeEntered(arg0) {
      return _handleCodeEntered(...arguments);
    },
    onVerified(arg0) {
      const result = callback(navigation[15]).verifyPhoneWithPassword(arg0, navigation);
    }
  };
  return callback3(importDefault(dependencyMap[19]), obj);
};
export const VerifyPasswordScreen = function VerifyPasswordScreen() {
  const tmp = callback2(React.useState(false), 2);
  const callback = tmp[1];
  let obj = callback(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const phoneToken = useContactSyncModalStore().phoneToken;
  const dependencyMap = phoneToken;
  const tmp3 = callback5();
  const items = [closure_7];
  const stateFromStores = callback(dependencyMap[16]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  let closure_3 = stateFromStores;
  const items1 = [navigation, stateFromStores];
  const effect = React.useEffect(() => {
    const callback = null;
    if (null != stateFromStores) {
      const result = callback(phoneToken[15]).handlePhoneVerificationComplete(stateFromStores, navigation);
      result.then(() => {
        const _null = _null(closure_2[17]).runAfterInteractions(() => callback(false));
      });
      const obj = callback(phoneToken[15]);
    }
    return () => {
      if (null != closure_0) {
        closure_0.cancel();
      }
    };
  }, items1);
  importDefault(dependencyMap[18])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  obj = {
    hideUnverifiedBanner: true,
    parentLoading: tmp[0],
    style: tmp3.redesignContainer,
    onSubmit(password) {
      callback(true);
      return navigation(phoneToken[14]).addPhone(phoneToken, password, callback(phoneToken[14]).ChangePhoneReason.CONTACT_SYNC);
    },
    onError() {
      return callback(false);
    },
    onSuccess() {

    }
  };
  return callback3(importDefault(dependencyMap[20]), obj);
};
