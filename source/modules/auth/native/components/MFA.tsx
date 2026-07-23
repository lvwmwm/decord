// Module ID: 14761
// Function ID: 112611
// Name: statesAreEqual
// Dependencies: [31, 1194, 33, 22, 1456, 9197, 566, 5590, 14638, 478, 689, 2]
// Exports: default

// Module 14761 (statesAreEqual)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
function statesAreEqual(arg0, arg1) {
  return importDefault(22).isEqual(arg0, arg1);
}
let closure_6 = { flex: 1, position: "relative" };
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/MFA.tsx");

export default function ConnectedMFA() {
  let inContainer;
  let isMultiAccount;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ inContainer, isMultiAccount } = obj);
  let navigation;
  let obj1 = isMultiAccount(1456);
  navigation = obj1.useNavigation();
  if (inContainer) {
    inContainer = navigation(9197)();
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [isMultiAccount];
  const stateFromStores = isMultiAccount(566).useStateFromStores(items, () => ({ ticket: outer1_4.getMFATicket(), methods: outer1_4.getMFAMethods() }), [], statesAreEqual);
  const items2 = [navigation];
  const callback = React.useCallback((arg0) => {
    let data;
    let mfaType;
    let ticket;
    ({ mfaType, data, ticket } = arg0);
    let obj = navigation(outer1_2[7]);
    obj = { code: data, ticket, mfaType, isMultiAccount };
    return obj.loginMFAv2(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    navigation.goBack();
  }, items2);
  obj = { mfaChallenge: stateFromStores, finish: callback, handleOnClose: callback1, ignoreKeyboard: inContainer };
  let tmp6;
  if (inContainer) {
    tmp6 = closure_6;
  }
  obj.containerStyle = tmp6;
  let num;
  if (inContainer) {
    num = 0;
  }
  obj.headerStatusBarHeight = num;
  if (!inContainer) {
    obj.headerLeftContainerStyle = undefined;
    let tmp14;
    if (inContainer) {
      obj = { paddingRight: navigation(689).space.PX_16, paddingTop: navigation(689).space.PX_12, marginLeft: 0 };
      tmp14 = obj;
    }
    obj.headerRightContainerStyle = tmp14;
    return jsx(isMultiAccount(14638).MFAModal, obj);
  } else {
    obj1 = {};
    const obj6 = isMultiAccount(478);
    let space = navigation(689).space;
    obj1.paddingLeft = isMultiAccount(478).isAndroid() ? space.PX_8 : space.PX_16;
    space = navigation;
    obj1.paddingTop = navigation(689).space.PX_12;
    const isAndroidResult = isMultiAccount(478).isAndroid();
  }
};
