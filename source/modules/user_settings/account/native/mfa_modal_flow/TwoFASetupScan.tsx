// Module ID: 13577
// Function ID: 102920
// Name: TwoFASetupScan
// Dependencies: []
// Exports: default

// Module 13577 (TwoFASetupScan)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { color: importDefault(dependencyMap[4]).colors.TEXT_BRAND };
obj.copy = obj;
let closure_6 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default function TwoFASetupScan(totpSecret) {
  totpSecret = totpSecret.totpSecret;
  const arg1 = totpSecret;
  const tmp = callback3();
  const tmp2 = callback(React.useState(false), 2);
  let closure_1 = tmp2[1];
  const items = [totpSecret];
  const callback = React.useCallback(() => {
    callback(true);
    totpSecret(callback[5]).copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  let obj = arg1(closure_1[6]);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = {};
  obj = { bottom: true, style: tmp.container };
  const obj1 = { style: items1 };
  const items1 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl = arg1(closure_1[10]).intl;
  obj1.children = intl.string(arg1(closure_1[10]).t.hg/+aT);
  const items2 = [callback2(arg1(closure_1[9]).LegacyText, obj1), , , ];
  const obj2 = { style: items3 };
  const items3 = [, ];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  const intl2 = arg1(closure_1[10]).intl;
  obj2.children = intl2.string(arg1(closure_1[10]).t.UQR+Qy);
  items2[1] = callback2(arg1(closure_1[9]).LegacyText, obj2);
  items2[2] = callback2(arg1(closure_1[11]).Text, { variant: "text-md/bold", style: { textAlign: "center" }, children: totpSecret });
  const obj3 = { accessibilityRole: "button", onPress: callback };
  const obj4 = { style: tmp.copy };
  const intl3 = arg1(closure_1[10]).intl;
  const string = intl3.string;
  const t = arg1(closure_1[10]).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  obj4.children = stringResult;
  obj3.children = callback2(arg1(closure_1[9]).LegacyText, obj4);
  items2[3] = callback2(arg1(closure_1[12]).PressableOpacity, obj3);
  obj.children = items2;
  obj.children = closure_5(arg1(closure_1[8]).SafeAreaPaddingView, obj);
  return callback2(arg1(closure_1[7]).TwoFASetupModalScreen, obj);
};
