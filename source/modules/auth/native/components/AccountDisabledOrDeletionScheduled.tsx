// Module ID: 14639
// Function ID: 110410
// Name: AccountDisabledOrDeletionScheduled
// Dependencies: []
// Exports: default

// Module 14639 (AccountDisabledOrDeletionScheduled)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const LoginStates = arg1(dependencyMap[3]).LoginStates;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  const space = importDefault(dependencyMap[6]).space;
  obj.paddingBottom = arg0 ? space.PX_8 : space.PX_16;
  let num = 0;
  if (!arg0) {
    num = importDefault(dependencyMap[6]).space.PX_16;
  }
  obj.paddingHorizontal = num;
  let str = "transparent";
  if (!arg0) {
    str = importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW;
  }
  obj.backgroundColor = str;
  let str2 = "center";
  if (arg0) {
    str2 = "space-between";
  }
  obj.justifyContent = str2;
  obj.container = obj;
  obj.image = { SCROLLING_MOMENTUM: "user", GuildRoomBackgrounds: "row" };
  obj.title = {};
  obj.description = { hour: "r", minute: "isArray", second: "warn" };
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx");

export default function AccountDisabledOrDeletionScheduled(handleLogin) {
  handleLogin = handleLogin.handleLogin;
  const arg1 = handleLogin;
  const onReset = handleLogin.onReset;
  const importDefault = onReset;
  let obj = arg1(dependencyMap[7]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => authStore.getLoginStatus());
  const React = stateFromStores;
  let closure_4 = React.useRef(null);
  const items1 = [stateFromStores, navigation];
  const effect = React.useEffect(() => {
    if (ref.current !== stateFromStores) {
      if (null != ref.current) {
        let tmp7 = stateFromStores !== constants.ACCOUNT_SCHEDULED_FOR_DELETION;
        if (tmp7) {
          tmp7 = stateFromStores !== constants.ACCOUNT_DISABLED;
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
  const callback = React.useCallback(() => {
    if (null == onReset) {
      onReset(navigation[9]).loginReset();
      const obj = onReset(navigation[9]);
    } else {
      onReset();
    }
  }, items2);
  const callback1 = React.useCallback(() => {
    const credentials = authStore.getCredentials();
    const password = credentials.password;
    let str = "";
    if (undefined !== password) {
      str = password;
    }
    handleLogin(credentials.login, str, true);
  }, items3);
  const tmp6 = callback3(importDefault(dependencyMap[10])());
  const intl = arg1(dependencyMap[11]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let stringResult = string(t.j3rC+U);
  } else {
    stringResult = string(t.ZFWofo);
  }
  const intl2 = arg1(dependencyMap[11]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[11]).t;
  if (stateFromStores === LoginStates.ACCOUNT_DISABLED) {
    let string2Result = string2(t2.6eNTWe);
  } else {
    string2Result = string2(t2.pCBti+);
  }
  obj = { contentStyle: { flexGrow: 1 } };
  obj = { style: tmp6.container };
  obj1 = {};
  const items4 = [callback(arg1(dependencyMap[13]).WumpTrash, { style: tmp6.image }), , ];
  const obj3 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp6.title, children: stringResult };
  items4[1] = callback(arg1(dependencyMap[14]).Text, obj3);
  const obj4 = { style: tmp6.description, children: string2Result };
  items4[2] = callback(arg1(dependencyMap[14]).Text, obj4);
  obj1.children = items4;
  const items5 = [callback2(closure_4, obj1), ];
  const obj5 = {};
  const obj6 = {};
  const obj7 = { variant: "primary" };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj7.text = intl3.string(arg1(dependencyMap[11]).t.JhDw5o);
  obj7.onPress = callback;
  const items6 = [callback(arg1(dependencyMap[16]).Button, obj7), ];
  const obj8 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj8.text = intl4.string(arg1(dependencyMap[11]).t.v51oiN);
  obj8.onPress = callback1;
  items6[1] = callback(arg1(dependencyMap[16]).Button, obj8);
  obj6.children = items6;
  obj5.children = callback2(arg1(dependencyMap[15]).ButtonGroup, obj6);
  items5[1] = callback(closure_4, obj5);
  obj.children = items5;
  obj.children = callback2(closure_4, obj);
  return callback(importDefault(dependencyMap[12]), obj);
};
