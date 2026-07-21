// Module ID: 9186
// Function ID: 71940
// Name: ConfirmEmailCode
// Dependencies: []
// Exports: default

// Module 9186 (ConfirmEmailCode)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ useChangeEmailError: closure_9, ChangeEmailFields: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, paddingVertical: importDefault(dependencyMap[8]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.background = obj;
obj.title = { textAlign: "center" };
obj.prompt = {};
const tmp4 = arg1(dependencyMap[6]);
obj.input = { marginTop: importDefault(dependencyMap[8]).space.PX_24 };
const obj1 = { marginTop: importDefault(dependencyMap[8]).space.PX_24 };
obj.contentContainer = { gap: importDefault(dependencyMap[8]).space.PX_24 };
let closure_13 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[8]).space.PX_24 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/verification/native/components/ConfirmEmailCode.tsx");

export default function ConfirmEmailCode(onFormSubmit) {
  let confirmButtonText;
  let headerText;
  onFormSubmit = onFormSubmit.onFormSubmit;
  const arg1 = onFormSubmit;
  const onSuccess = onFormSubmit.onSuccess;
  const importDefault = onSuccess;
  const dependencyMap = onFormSubmit.onResend;
  ({ headerText, confirmButtonText } = onFormSubmit);
  const tmp2 = callback6();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback2(React.useState(""), 2);
  const first = tmp4[0];
  let callback = first;
  const tmp6 = callback2(callback3(constants.EMAIL_TOKEN), 2);
  const callback2 = tmp7;
  const tmp8 = callback2(React.useState(false), 2);
  const React = tmp9;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [first, tmp6[1], onFormSubmit, onSuccess];
  callback = React.useCallback(callback(tmp9), items1);
  let tmp11 = null;
  if (null != stateFromStores) {
    obj = {};
    ({ background: obj2.style, contentContainer: obj2.contentContainerStyle } = tmp2);
    obj = {};
    const obj1 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp2.title, children: headerText };
    const items2 = [callback4(arg1(dependencyMap[11]).Text, obj1), , , ];
    const obj2 = { style: tmp2.prompt };
    const intl = arg1(dependencyMap[12]).intl;
    obj2.children = intl.string(arg1(dependencyMap[12]).t.SZJowy);
    items2[1] = callback4(arg1(dependencyMap[11]).Text, obj2);
    const obj3 = { style: tmp2.input };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj3.label = intl2.string(arg1(dependencyMap[12]).t.8mZX6M);
    obj3.textContentType = "emailAddress";
    obj3.keyboardType = "email-address";
    obj3.value = first;
    obj3.onChangeText = tmp4[1];
    obj3.onSubmitEditing = callback;
    obj3.returnKeyType = "done";
    obj3.autoCapitalize = "none";
    obj3.error = tmp6[0];
    obj3.autoFocus = true;
    items2[2] = callback4(importDefault(dependencyMap[13]), obj3);
    const obj4 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj4.text = intl3.string(arg1(dependencyMap[12]).t.K0NPQ6);
    obj4.variant = "text-sm/medium";
    // CreateGeneratorClosureLongIndex (0x67)
    obj4.onPress = callback(tmp);
    items2[3] = callback4(arg1(dependencyMap[14]).LinkButton, obj4);
    obj.children = items2;
    const items3 = [callback5(closure_6, obj), ];
    const obj5 = { text: confirmButtonText, onPress: callback, loading: tmp8[0], disabled: "" === first };
    items3[1] = callback4(arg1(dependencyMap[16]).Button, obj5);
    obj.children = items3;
    tmp11 = callback5(closure_7, obj);
    const tmp19 = importDefault(dependencyMap[13]);
  }
  return tmp11;
};
