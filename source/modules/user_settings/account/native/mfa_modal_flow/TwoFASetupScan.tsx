// Module ID: 13691
// Function ID: 105076
// Name: TwoFASetupScan
// Dependencies: [57, 31, 33, 4130, 689, 5492, 13689, 13685, 5121, 1273, 1212, 4126, 4660, 2]
// Exports: default

// Module 13691 (TwoFASetupScan)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
_createForOfIteratorHelperLoose.copy = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupScan.tsx");

export default function TwoFASetupScan(totpSecret) {
  totpSecret = totpSecret.totpSecret;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(false), 2);
  const dependencyMap = tmp2[1];
  const items = [totpSecret];
  callback = React.useCallback(() => {
    dependencyMap(true);
    totpSecret(5492).copy(totpSecret.replace(/[^a-zA-Z0-9]/g, ""));
  }, items);
  let obj = totpSecret(13689);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = {};
  obj = { bottom: true, style: tmp.container };
  const obj1 = { style: items1 };
  items1 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl = totpSecret(1212).intl;
  obj1.children = intl.string(totpSecret(1212).t["hg/+aT"]);
  const items2 = [callback2(totpSecret(1273).LegacyText, obj1), , , ];
  const obj2 = { style: items3 };
  items3 = [, ];
  ({ modalBody: arr4[0], text: arr4[1] } = twoFASetupStyles);
  const intl2 = totpSecret(1212).intl;
  obj2.children = intl2.string(totpSecret(1212).t["UQR+Qy"]);
  items2[1] = callback2(totpSecret(1273).LegacyText, obj2);
  items2[2] = callback2(totpSecret(4126).Text, { variant: "text-md/bold", style: { textAlign: "center" }, children: totpSecret });
  const obj3 = { accessibilityRole: "button", onPress: callback };
  const obj4 = { style: tmp.copy };
  const intl3 = totpSecret(1212).intl;
  const string = intl3.string;
  const t = totpSecret(1212).t;
  if (tmp2[0]) {
    let stringResult = string(t.mGZ66D);
  } else {
    stringResult = string(t.OpuAlK);
  }
  obj4.children = stringResult;
  obj3.children = callback2(totpSecret(1273).LegacyText, obj4);
  items2[3] = callback2(totpSecret(4660).PressableOpacity, obj3);
  obj.children = items2;
  obj.children = closure_5(totpSecret(5121).SafeAreaPaddingView, obj);
  return callback2(totpSecret(13685).TwoFASetupModalScreen, obj);
};
