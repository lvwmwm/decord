// Module ID: 18006
// Function ID: 18007
// Name: components/MFA
// Dependencies: [19, 502, 21, 12, 1497, 7111, 504, 6740, 17657, 1376, 575, 2]
// Exports: default

// Module 18006 (components/MFA)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6740 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let navigation;

function statesAreEqual(arg0, arg1) {
  const obj = _modDef12;
  return obj.isEqual(arg0, arg1);
}
const jsx = Fragment.jsx;
let closure_7 = { flex: 1, position: "relative" };
const result = size.fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default function ConnectedMFA() {
  let inContainer;
  let isMultiAccount;
  let num;
  let tmp10;
  let tmp12;
  let tmp9;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  let obj2 = isMultiAccount(1497);
  navigation = obj2.useNavigation();
  if (inContainer) {
    inContainer = navigation(7111)();
  }
  const items = [AuthenticationStore];
  const items1 = [isMultiAccount];
  const tmpResult = isMultiAccount(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const obj = { ticket: AuthenticationStore.getMFATicket(), methods: AuthenticationStore.getMFAMethods() };
    return obj;
  }, [], statesAreEqual);
  const items2 = [navigation];
  const callback = react.useCallback((arg0) => {
    let data;
    let mfaType;
    let ticket;
    ({ mfaType, data, ticket } = arg0);
    const obj = AuthenticationActionCreatorsDefault;
    const obj2 = { code: data, ticket, mfaType, isMultiAccount };
    return obj.loginMFAv2(obj2);
  }, items1);
  const callback1 = react.useCallback(() => {
    navigation.goBack();
  }, items2);
  const obj3 = { mfaChallenge: stateFromStores, finish: callback, handleOnClose: callback1, ignoreKeyboard: inContainer, containerStyle: tmp9, headerStatusBarHeight: num, headerLeftContainerStyle: tmp10, headerRightContainerStyle: tmp12 };
  tmp9 = undefined;
  const MFAModal = tmp(17657).MFAModal;
  const tmp8 = jsx;
  if (inContainer) {
    tmp9 = closure_7;
  }
  num = undefined;
  if (inContainer) {
    num = 0;
  }
  tmp10 = undefined;
  if (inContainer) {
    const tmpResult2 = isMultiAccount(1376);
    const isAndroidResult = tmpResult2.isAndroid();
    const space = tmp4(575).space;
    tmp10 = { paddingLeft: isAndroidResult ? space.PX_8 : space.PX_16, paddingTop: navigation(575).space.PX_12 };
    const obj4 = { paddingLeft: isAndroidResult ? space.PX_8 : space.PX_16, paddingTop: navigation(575).space.PX_12 };
  }
  tmp12 = undefined;
  if (inContainer) {
    tmp12 = { paddingRight: navigation(575).space.PX_16, paddingTop: navigation(575).space.PX_12, marginLeft: 0 };
    const obj5 = { paddingRight: navigation(575).space.PX_16, paddingTop: navigation(575).space.PX_12, marginLeft: 0 };
  }
  return tmp8(MFAModal, obj3);
};
