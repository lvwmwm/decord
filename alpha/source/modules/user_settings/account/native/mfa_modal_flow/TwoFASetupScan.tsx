// Module ID: 16608
// Function ID: 16609
// Name: TwoFASetupScan
// Dependencies: [32, 19, 21, 5009, 575, 7352, 16606, 16602, 7286, 1188, 1114, 5619, 6974, 2]
// Exports: default

// Module 16608 (TwoFASetupScan)
import nativeDefault from "native" /* 575 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, copy: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default function TwoFASetupScan(totpSecret) {
  let LegacyText3;
  let closure_1;
  let first;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj6;
  let stringResult;
  totpSecret = totpSecret.totpSecret;
  dependencyMap = undefined;
  const tmp = closure_6();
  [first, dependencyMap] = react.useState(false);
  const items = [totpSecret];
  const callback = react.useCallback(() => {
    closure_1(true);
    const obj = ClipboardUtils;
    obj.copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  let obj = totpSecret(16606);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  const TwoFASetupModalScreen = totpSecret(16602).TwoFASetupModalScreen;
  const obj2 = { bottom: true, style: tmp.container, children: items2 };
  const SafeAreaPaddingView = totpSecret(7286).SafeAreaPaddingView;
  const obj3 = { style: items1, children: intl.string(totpSecret(1114).t["hg/+aT"]) };
  items1 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const LegacyText = totpSecret(1188).LegacyText;
  intl = totpSecret(1114).intl;
  items2 = [closure_4(LegacyText, obj3), , , ];
  const obj4 = { style: items3, children: intl2.string(totpSecret(1114).t["UQR+Qy"]) };
  items3 = [, ];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  const LegacyText2 = totpSecret(1188).LegacyText;
  intl2 = totpSecret(1114).intl;
  items2[1] = closure_4(LegacyText2, obj4);
  items2[2] = closure_4(totpSecret(5619).Text, { variant: "text-md/bold", style: { textAlign: "center" }, children: totpSecret });
  const obj5 = { accessibilityRole: "button", onPress: callback, children: closure_4(LegacyText3, obj6) };
  const PressableOpacity = totpSecret(6974).PressableOpacity;
  obj6 = { style: tmp.copy, children: stringResult };
  LegacyText3 = totpSecret(1188).LegacyText;
  const intl3 = totpSecret(1114).intl;
  const string = intl3.string;
  const t = totpSecret(1114).t;
  const tmp7 = closure_5;
  if (first) {
    stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  const obj7 = { children: tmp7(SafeAreaPaddingView, obj2) };
  items2[3] = closure_4(PressableOpacity, obj5);
  return closure_4(TwoFASetupModalScreen, obj7);
};
