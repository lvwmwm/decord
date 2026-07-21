// Module ID: 13571
// Function ID: 102890
// Name: TwoFASetupEnterCode
// Dependencies: []
// Exports: default

// Module 13571 (TwoFASetupEnterCode)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const TwoFAModalSetupSections = arg1(dependencyMap[3]).TwoFAModalSetupSections;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ container: {} });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default function TwoFASetupEnterCode(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[6]);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  const importDefault = React.useRef(arg0);
  const effect = React.useEffect(() => {
    closure_1.current = arg0;
  });
  let obj1 = arg1(dependencyMap[7]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  let obj2 = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => ref1.getState());
  const tmp6 = callback(React.useState(false), 2);
  let callback = tmp6[1];
  const ref = React.useRef(null);
  const React = ref;
  const ref1 = React.useRef(null);
  closure_5 = ref1;
  const items1 = [navigation];
  callback = React.useCallback((code) => {
    let obj = code(navigation[9]);
    callback(true);
    const encodeTotpSecretResult = obj.encodeTotpSecret(ref.current.totpSecret);
    obj = { code, secret: encodeTotpSecretResult };
    const obj2 = ref(navigation[10]);
    const enableResult = ref(navigation[10]).enable(obj);
    ref(navigation[10]).enable(obj).then(() => {

    }).catch((body) => {
      if (null != body.body) {
        let message = body.body.message;
      } else {
        const intl = callback(closure_2[11]).intl;
        message = intl.string(callback(closure_2[11]).t.1u5B+G);
      }
      closure_4.current = message;
      const current = ref.current;
      if (null != current) {
        current.clear();
      }
      callback2(false);
    });
  }, items1);
  obj = {};
  obj = { bottom: true, style: callback4().container };
  obj1 = { style: items2 };
  const items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(arg1(dependencyMap[11]).t.HZPBOd);
  const items3 = [callback2(arg1(dependencyMap[14]).LegacyText, obj1), ];
  obj2 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: tmp6[0], handleSubmit: callback };
  const tmp = callback4();
  obj2.error = importDefault(dependencyMap[16])(ref);
  obj2.appState = stateFromStores;
  items3[1] = callback2(importDefault(dependencyMap[15]), obj2);
  obj.children = items3;
  obj.children = callback3(arg1(dependencyMap[13]).SafeAreaPaddingView, obj);
  return callback2(arg1(dependencyMap[12]).TwoFASetupModalScreen, obj);
};
