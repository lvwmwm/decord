// Module ID: 14640
// Function ID: 111548
// Name: SelectScreen
// Dependencies: [31, 27, 14637, 33, 4130, 5084, 7498, 9197, 1456, 5121, 4126, 1212, 2]
// Exports: default

// Module 14640 (SelectScreen)
import "result";
import { View } from "get ActivityIndicator";
import { SELECT_NAMES } from "get webauthn";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { container: { marginLeft: 16, marginRight: 16 } };
  obj = { marginTop: null, marginLeft: 16, marginRight: 16, display: "flex", alignItems: "center" };
  const NAV_BAR_HEIGHT = require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - require(5084) /* NAV_BAR_HEIGHT */.STATUS_BAR_HEIGHT;
  }
  obj.marginTop = diff;
  obj.selectContainer = obj;
  return obj;
});
const result = require("get webauthn").fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default function SelectScreen(mfaChallenge) {
  const _require = mfaChallenge;
  const tmp = importDefault(9197)();
  const tmp2 = callback3(tmp);
  let obj = _require(1456);
  importDefault = obj.useNavigation();
  obj = { top: !tmp, style: tmp2.container };
  obj = { style: tmp2.selectContainer };
  const obj1 = { variant: "heading-xl/extrabold" };
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.S9b9bX);
  const items = [callback(_require(4126).Text, obj1), ];
  const obj2 = { variant: "text-sm/medium" };
  const intl2 = _require(1212).intl;
  obj2.children = intl2.string(_require(1212).t.Jz1lXO);
  items[1] = callback(_require(4126).Text, obj2);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const methods = mfaChallenge.mfaChallenge.methods;
  items1[1] = callback(View, {
    style: { marginTop: 16, gap: 8 },
    children: methods.map((type) => (function getOptionButton(closure_0, type, closure_1) {
      const callback = closure_0;
      closure_1 = type;
      let closure_2 = closure_1;
      return outer2_5(callback(outer2_2[6]).RowButton, {
        label: outer2_4[type.type],
        onPress() {

        }
      }, type.type);
    })(closure_0, type, closure_1))
  });
  obj.children = items1;
  return callback2(_require(5121).SafeAreaPaddingView, obj);
};
