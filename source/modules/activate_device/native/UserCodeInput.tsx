// Module ID: 12767
// Function ID: 97877
// Name: UserCodeInput
// Dependencies: []
// Exports: UserCodeInput

// Module 12767 (UserCodeInput)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const OAuthConstants = arg1(dependencyMap[3]).OAuthConstants;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles({ text: { textAlign: "center" } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = function UserCodeInput(prefilledUserCode) {
  let error;
  let manualSubmit;
  let onClose;
  let onUserCodeAccepted;
  let submitting;
  prefilledUserCode = prefilledUserCode.prefilledUserCode;
  let callback;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = callback5();
  let str = "";
  if (null != prefilledUserCode) {
    str = prefilledUserCode;
  }
  const tmp3 = callback2(React.useState(str), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  let obj = callback(dependencyMap[6]);
  const userCodeSubmit = obj.useUserCodeSubmit(first, onUserCodeAccepted, onClose);
  obj = {};
  obj = { style: importDefault(dependencyMap[7]).innerContent };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj1 = { style: tmp.text };
  const intl = callback(dependencyMap[9]).intl;
  obj1.children = intl.string(callback(dependencyMap[9]).t.KYPNUv);
  const items = [callback3(callback(dependencyMap[8]).Text, obj1), ];
  const obj2 = { style: tmp.text };
  const intl2 = callback(dependencyMap[9]).intl;
  obj2.children = intl2.string(callback(dependencyMap[9]).t.xRHk7f);
  items[1] = callback3(callback(dependencyMap[8]).Text, obj2);
  obj.children = items;
  const items1 = [callback4(View, obj), , ];
  const obj3 = {
    onChange(arg0) {
      return callback(arg0);
    },
    maxLength: OAuthConstants.USER_CODE_LENGTH,
    value: first,
    autoFocus: true,
    autoComplete: "off"
  };
  const intl3 = callback(dependencyMap[9]).intl;
  obj3.placeholder = intl3.formatToPlainString(callback(dependencyMap[9]).t.0tbz6x, { number: OAuthConstants.USER_CODE_LENGTH });
  obj3.errorMessage = error;
  items1[1] = callback3(callback(dependencyMap[10]).TextInput, obj3);
  const obj5 = { size: "lg" };
  const intl4 = callback(dependencyMap[9]).intl;
  obj5.text = intl4.string(callback(dependencyMap[9]).t.3PatSz);
  obj5.onPress = manualSubmit;
  obj5.loading = submitting;
  obj5.disabled = first.length !== OAuthConstants.USER_CODE_LENGTH;
  obj5.grow = true;
  items1[2] = callback3(callback(dependencyMap[11]).Button, obj5);
  obj.children = items1;
  return callback4(closure_9, obj);
};
