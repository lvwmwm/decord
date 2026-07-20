// Module ID: 13514
// Function ID: 102553
// Name: WebAuthnNameStep
// Dependencies: []
// Exports: default

// Module 13514 (WebAuthnNameStep)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const WebAuthnScreens = arg1(dependencyMap[4]).WebAuthnScreens;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ margin: { margin: 16 } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep(arg0) {
  let name;
  ({ ticket: closure_0, credential: closure_1, name } = arg0);
  let closure_2;
  let closure_3;
  let callback;
  let React;
  function _onPress() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onPress = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = arg1(closure_2[7]);
  closure_2 = obj.useNavigation();
  const tmp3 = callback(React.useState(false), 2);
  closure_3 = tmp3[1];
  const tmp4 = callback(React.useState(null), 2);
  callback = tmp4[1];
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp5 = callback(React.useState(str), 2);
  const first = tmp5[0];
  React = first;
  obj = {};
  obj = { showTopContainer: false, value: first, onChange: tmp5[1], style: tmp.margin, error: tmp4[0] };
  const intl = arg1(closure_2[10]).intl;
  obj.title = intl.string(arg1(closure_2[10]).t.Jzd+z/);
  const intl2 = arg1(closure_2[10]).intl;
  obj.placeholder = intl2.string(arg1(closure_2[10]).t.I/sJtJ);
  obj.disabled = tmp3[0];
  obj.clearButtonVisibility = arg1(closure_2[14]).ClearButtonVisibility.WITH_CONTENT;
  obj.autoFocus = true;
  obj.showBorder = true;
  obj.required = true;
  obj.large = true;
  const items = [callback2(arg1(closure_2[13]).FormInput, obj), callback2(arg1(closure_2[13]).FormDivider, {}), ];
  const obj1 = { style: tmp.margin };
  const obj2 = {
    onPress() {
      return _onPress(...arguments);
    }
  };
  const intl3 = arg1(closure_2[10]).intl;
  obj2.text = intl3.string(arg1(closure_2[10]).t.5dyZ1S);
  obj2.disabled = "" === first;
  obj2.size = "lg";
  obj1.children = callback2(arg1(closure_2[15]).Button, obj2);
  items[2] = callback2(_onPress, obj1);
  obj.children = items;
  return callback3(arg1(closure_2[13]).Form, obj);
};
