// Module ID: 14809
// Function ID: 112938
// Name: AccountDisabledOrDeletionScheduled
// Dependencies: [31, 27, 1194, 653, 33, 4130, 689, 1456, 566, 5588, 9233, 1212, 9255, 14810, 4126, 4965, 4543, 2]
// Exports: default

// Module 14809 (AccountDisabledOrDeletionScheduled)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { LoginStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { display: "flex", height: "100%", flex: 1 };
  const space = importDefault(689).space;
  obj.paddingBottom = arg0 ? space.PX_8 : space.PX_16;
  let num = 0;
  if (!arg0) {
    num = importDefault(689).space.PX_16;
  }
  obj.paddingHorizontal = num;
  let str = "transparent";
  if (!arg0) {
    str = importDefault(689).colors.BACKGROUND_BASE_LOW;
  }
  obj.backgroundColor = str;
  let str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  obj.justifyContent = str2;
  obj.container = obj;
  obj.image = { marginBottom: 32, alignSelf: "center" };
  obj.title = { textAlign: "center", marginBottom: 8 };
  obj.description = { lineHeight: 18, marginBottom: 24, textAlign: "center" };
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx");

export default function AccountDisabledOrDeletionScheduled(handleLogin) {
  handleLogin = handleLogin.handleLogin;
  const onReset = handleLogin.onReset;
  let obj = handleLogin(navigation[7]);
  navigation = obj.useNavigation();
  let obj1 = handleLogin(navigation[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getLoginStatus());
  let closure_4 = stateFromStores.useRef(null);
  const items1 = [stateFromStores, navigation];
  const effect = stateFromStores.useEffect(() => {
    if (ref.current !== stateFromStores) {
      if (null != ref.current) {
        let tmp7 = stateFromStores !== outer1_6.ACCOUNT_SCHEDULED_FOR_DELETION;
        if (tmp7) {
          tmp7 = stateFromStores !== outer1_6.ACCOUNT_DISABLED;
        }
        if (tmp7) {
          navigation.pop();
        }
      } else {
        ref.current = stateFromStores;
      }
    }
  }, items1);
  const items2 = [onReset];
  const items3 = [handleLogin];
  const callback = stateFromStores.useCallback(() => {
    if (null == onReset) {
      onReset(navigation[9]).loginReset();
      const obj = onReset(navigation[9]);
    } else {
      onReset();
    }
  }, items2);
  const callback1 = stateFromStores.useCallback(() => {
    const credentials = outer1_5.getCredentials();
    const password = credentials.password;
    let str = "";
    if (undefined !== password) {
      str = password;
    }
    handleLogin(credentials.login, str, true);
  }, items3);
  const tmp6 = callback3(onReset(navigation[10])());
  const intl = handleLogin(navigation[11]).intl;
  const string = intl.string;
  const t = handleLogin(navigation[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let stringResult = string(t["j3rC+U"]);
  } else {
    stringResult = string(t.ZFWofo);
  }
  const intl2 = handleLogin(navigation[11]).intl;
  const string2 = intl2.string;
  const t2 = handleLogin(navigation[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let string2Result = string2(t2["6eNTWe"]);
  } else {
    string2Result = string2(t2["pCBti+"]);
  }
  obj = { contentStyle: { flexGrow: 1 } };
  obj = { style: tmp6.container };
  obj1 = {};
  const items4 = [callback(handleLogin(navigation[13]).WumpTrash, { style: tmp6.image }), , ];
  const obj3 = { style: tmp6.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items4[1] = callback(handleLogin(navigation[14]).Text, obj3);
  const obj4 = { style: tmp6.description, variant: "text-sm/medium", color: "text-default", children: string2Result };
  items4[2] = callback(handleLogin(navigation[14]).Text, obj4);
  obj1.children = items4;
  const items5 = [callback2(closure_4, obj1), ];
  const obj5 = {};
  const obj6 = {};
  const obj7 = { variant: "primary" };
  const intl3 = handleLogin(navigation[11]).intl;
  obj7.text = intl3.string(handleLogin(navigation[11]).t.JhDw5o);
  obj7.onPress = callback;
  const items6 = [callback(handleLogin(navigation[16]).Button, obj7), ];
  const obj8 = { variant: "secondary" };
  const intl4 = handleLogin(navigation[11]).intl;
  obj8.text = intl4.string(handleLogin(navigation[11]).t.v51oiN);
  obj8.onPress = callback1;
  items6[1] = callback(handleLogin(navigation[16]).Button, obj8);
  obj6.children = items6;
  obj5.children = callback2(handleLogin(navigation[15]).ButtonGroup, obj6);
  items5[1] = callback(closure_4, obj5);
  obj.children = items5;
  obj.children = callback2(closure_4, obj);
  return callback(onReset(navigation[12]), obj);
};
