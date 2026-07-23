// Module ID: 13692
// Function ID: 105079
// Name: TwoFASetupEnterCode
// Dependencies: [57, 31, 6651, 13686, 33, 4130, 13689, 1456, 566, 9203, 13647, 1212, 13685, 5121, 1273, 13693, 5122, 2]
// Exports: default

// Module 13692 (TwoFASetupEnterCode)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { TwoFAModalSetupSections } from "frozen";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default function TwoFASetupEnterCode(arg0) {
  const _require = arg0;
  let obj = _require(navigation[6]);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  const importDefault = ref.useRef(arg0);
  const effect = ref.useEffect(() => {
    closure_1.current = closure_0;
  });
  let obj1 = _require(navigation[7]);
  navigation = obj1.useNavigation();
  let obj2 = _require(navigation[8]);
  const items = [ref1];
  const stateFromStores = obj2.useStateFromStores(items, () => ref1.getState());
  const tmp6 = callback(ref.useState(false), 2);
  callback = tmp6[1];
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  callback = ref.useCallback((code) => {
    let obj = callback(navigation[9]);
    callback2(true);
    const encodeTotpSecretResult = obj.encodeTotpSecret(ref.current.totpSecret);
    obj = { code, secret: encodeTotpSecretResult };
    const obj2 = ref(navigation[10]);
    const enableResult = ref(navigation[10]).enable(obj);
    ref(navigation[10]).enable(obj).then(() => {
      outer1_2.push(outer2_6.SUCCESS);
    }).catch((body) => {
      if (null != body.body) {
        let message = body.body.message;
      } else {
        const intl = callback(navigation[11]).intl;
        message = intl.string(callback(navigation[11]).t["1u5B+G"]);
      }
      outer1_4.current = message;
      const current = outer1_5.current;
      if (null != current) {
        current.clear();
      }
      outer1_3(false);
    });
  }, items1);
  obj = {};
  obj = { bottom: true, style: callback4().container };
  obj1 = { style: items2 };
  items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  let intl = _require(navigation[11]).intl;
  obj1.children = intl.string(_require(navigation[11]).t.HZPBOd);
  const items3 = [callback2(_require(navigation[14]).LegacyText, obj1), ];
  obj2 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: tmp6[0], handleSubmit: callback };
  const tmp = callback4();
  obj2.error = importDefault(navigation[16])(ref);
  obj2.appState = stateFromStores;
  items3[1] = callback2(importDefault(navigation[15]), obj2);
  obj.children = items3;
  obj.children = callback3(_require(navigation[13]).SafeAreaPaddingView, obj);
  return callback2(_require(navigation[12]).TwoFASetupModalScreen, obj);
};
