// Module ID: 9180
// Function ID: 71892
// Name: ResendEmail
// Dependencies: []
// Exports: default

// Module 9180 (ResendEmail)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const VerificationModalScenes = arg1(dependencyMap[5]).VerificationModalScenes;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ container: { variant: "center", accessibilityRole: "row", bm: 8, now: 8 }, title: { "Null": "center", "Null": "center" }, body: { action: null, messageReference: null, medium: null }, resend: {}, change: { default: "sh", valueOf: 0 } });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default function ResendEmail() {
  let tmp7;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    verified(closure_2[10])(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  const importDefault = verified;
  let obj2 = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => action.getAction());
  let obj3 = importDefault(dependencyMap[11]);
  let tmp5 = !obj3.isEmailReverification(stateFromStores1);
  [tmp7, closure_2] = callback(React.useState(false), 2);
  let callback = React.useRef(verified);
  const items2 = [verified];
  const effect = React.useEffect(() => {
    let tmp = verified;
    if (verified) {
      tmp = false === ref.current;
    }
    if (tmp) {
      verified(closure_2[12]).close();
      const obj = verified(closure_2[12]);
    }
  }, items2);
  const effect1 = React.useEffect(() => {
    closure_3.current = verified;
  });
  const items3 = [navigation];
  obj = { style: tmp.container };
  callback = React.useCallback(() => {
    navigation.push(constants.ENTER_EMAIL);
  }, items3);
  const items4 = [callback2(arg1(dependencyMap[13]).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  obj = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.fUtddV);
  items4[1] = callback2(arg1(dependencyMap[14]).Text, obj);
  obj1 = { style: tmp.body };
  const intl2 = arg1(dependencyMap[15]).intl;
  if (tmp7) {
    obj2 = { email: stateFromStores.email };
    let formatResult = intl2.format(tmp14(tmp15[15]).t.JqLgQL, obj2);
  } else {
    formatResult = intl2.string(tmp14(tmp15[15]).t.tSXg8O);
  }
  obj1.children = formatResult;
  items4[2] = callback2(arg1(dependencyMap[14]).Text, obj1);
  obj3 = { style: tmp.resend };
  const obj4 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[15]).t.WnX4J2);
  obj4.variant = "primary";
  obj4.onPress = function onPress() {
    callback(true);
    let obj = verified(callback[17]);
    obj.verifyResend();
    obj = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT" };
    const intl = navigation(callback[15]).intl;
    obj.content = intl.string(navigation(callback[15]).t.84yeoz);
    verified(callback[18]).open(obj);
  };
  obj4.grow = true;
  obj3.children = callback2(arg1(dependencyMap[16]).Button, obj4);
  items4[3] = callback2(View, obj3);
  if (tmp5) {
    const obj5 = { style: tmp.change };
    const obj6 = {};
    const intl4 = arg1(dependencyMap[15]).intl;
    obj6.text = intl4.string(arg1(dependencyMap[15]).t.Vm8akB);
    obj6.variant = "secondary";
    obj6.onPress = callback;
    obj6.grow = true;
    obj5.children = callback2(arg1(dependencyMap[16]).Button, obj6);
    tmp5 = callback2(View, obj5);
  }
  items4[4] = tmp5;
  obj.children = items4;
  return closure_10(View, obj);
};
