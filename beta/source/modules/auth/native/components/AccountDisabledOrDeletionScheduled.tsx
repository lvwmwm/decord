// Module ID: 15600
// Function ID: 15601
// Name: AccountDisabledOrDeletionScheduled
// Dependencies: [19, 17, 502, 1074, 21, 4836, 576, 1485, 504, 6010, 6363, 1115, 6391, 15601, 4832, 5745, 5281, 2]
// Exports: default

// Module 15600 (AccountDisabledOrDeletionScheduled)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const LoginStates = Constants.LoginStates;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let PX_16;
  let num;
  let str;
  let str2;
  let tmp4;
  const space = nativeDefault.space;
  if (arg0) {
    PX_16 = space.PX_8;
    tmp4 = tmp;
  } else {
    PX_16 = space.PX_16;
    tmp4 = tmp;
  }
  const container = { display: "flex", height: "100%", flex: 1, paddingBottom: PX_16, paddingHorizontal: num, backgroundColor: str, justifyContent: str2 };
  num = 0;
  if (!arg0) {
    num = tmp4(576).space.PX_16;
  }
  str = "transparent";
  if (!arg0) {
    str = tmp4(576).colors.BACKGROUND_BASE_LOW;
  }
  str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  return { container, image: { marginBottom: 32, alignSelf: "center" }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, marginBottom: 24, textAlign: "center" } };
});
const result = size.fileFinishedImporting("modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx");

export default function AccountDisabledOrDeletionScheduled(handleLogin) {
  let ButtonGroup;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let loginStatus;
  let obj10;
  let obj4;
  let string2Result;
  let stringResult;
  handleLogin = handleLogin.handleLogin;
  const onReset = handleLogin.onReset;
  navigation = undefined;
  const tmp = handleLogin;
  let tmp2 = navigation;
  let obj = handleLogin(navigation[7]);
  navigation = obj.useNavigation();
  const items = [AuthenticationStore];
  const obj2 = handleLogin(navigation[8]);
  const stateFromStores = obj2.useStateFromStores(items, () => loginStatus.getLoginStatus());
  const ref = stateFromStores.useRef(null);
  const items1 = [stateFromStores, navigation];
  const effect = stateFromStores.useEffect(() => {
    if (ref.current !== stateFromStores) {
      if (null != ref.current) {
        const tmp4 = stateFromStores !== LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION && stateFromStores !== LoginStates.ACCOUNT_DISABLED;
        if (tmp4) {
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
      const obj = AuthenticationActionCreatorsDefault;
      obj.loginReset();
    } else {
      tmp();
    }
  }, items2);
  const callback1 = stateFromStores.useCallback(() => {
    const credentials = AuthenticationStore.getCredentials();
    const password = credentials.password;
    let str = "";
    const login = credentials.login;
    const tmp2 = handleLogin;
    if (undefined !== password) {
      str = password;
    }
    tmp2(login, str, true);
  }, items3);
  const tmp9 = closure_9(onReset(navigation[10])());
  const intl = handleLogin(navigation[11]).intl;
  const string = intl.string;
  const t = handleLogin(navigation[11]).t;
  const tmp8 = onReset;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    stringResult = string(t["j3rC+U"]);
  } else {
    stringResult = string(t.ZFWofo);
  }
  const intl2 = tmp(tmp2[11]).intl;
  const string2 = intl2.string;
  const t2 = tmp(tmp2[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    string2Result = string2(t2["6eNTWe"]);
  } else {
    string2Result = string2(t2["pCBti+"]);
  }
  const obj3 = { contentStyle: { flexGrow: 1 }, children: closure_8(ref, obj4) };
  const obj5 = { children: items4 };
  items4 = [, , ];
  obj4 = { style: tmp9.container, children: items5 };
  const obj6 = { style: tmp9.image };
  const tmp8Result = tmp8(tmp2[12]);
  items4[0] = closure_7(tmp(tmp2[13]).WumpTrash, obj6);
  const obj7 = { style: tmp9.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items4[1] = closure_7(tmp(tmp2[14]).Text, obj7);
  const obj8 = { style: tmp9.description, variant: "text-sm/medium", color: "text-default", children: string2Result };
  items4[2] = closure_7(tmp(tmp2[14]).Text, obj8);
  items5 = [closure_8(ref, obj5), ];
  const obj9 = { children: closure_8(ButtonGroup, obj10) };
  obj10 = { children: items6 };
  ButtonGroup = tmp(tmp2[15]).ButtonGroup;
  const obj11 = { variant: "primary", text: intl3.string(tmp(tmp2[11]).t.JhDw5o), onPress: callback };
  const Button = tmp(tmp2[16]).Button;
  intl3 = tmp(tmp2[11]).intl;
  items6 = [closure_7(Button, obj11), ];
  const obj12 = { variant: "secondary", text: intl4.string(tmp(tmp2[11]).t.v51oiN), onPress: callback1 };
  const Button2 = tmp(tmp2[16]).Button;
  intl4 = tmp(tmp2[11]).intl;
  items6[1] = closure_7(Button2, obj12);
  items5[1] = closure_7(ref, obj9);
  return closure_7(tmp8Result, obj3);
};
