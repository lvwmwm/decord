// Module ID: 13694
// Function ID: 105097
// Name: TwoFASetupSuccess
// Dependencies: [5, 57, 31, 27, 33, 4130, 689, 5594, 1212, 13684, 9201, 13685, 13695, 4126, 1273, 4543, 2]
// Exports: default

// Module 13694 (TwoFASetupSuccess)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_6, Image: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }, flex: { flex: 1 }, image: { width: 190, height: 70 }, success: { marginTop: 33 } };
_createForOfIteratorHelperLoose = { fontSize: 14, textAlign: "center", marginHorizontal: 20, marginTop: 4, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
_createForOfIteratorHelperLoose.successBody = _createForOfIteratorHelperLoose;
const obj1 = { height: 2, width: 48, margin: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.divider = obj1;
_createForOfIteratorHelperLoose.buttonWrapper = { alignSelf: "stretch", margin: 16, marginTop: 0 };
let obj2 = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
_createForOfIteratorHelperLoose.ctaDescription = obj2;
let obj3 = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.errorText = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default function TwoFASetupSuccess() {
  let importDefault;
  let tmp5;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  [tmp5, importDefault] = callback(React.useState(""), 2);
  callback = React.useCallback(() => {
    function _onRegisterSuccess() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    callback("");
    let obj = outer1_1(outer1_2[10]);
    obj = {
      setRegistering: _onRegisterSuccess,
      setError: callback,
      onRegisterSuccess(arg0) {
        return _onRegisterSuccess(...arguments);
      }
    };
    obj.registerPasskey(obj);
  }, []);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.flex };
  const items = [callback2(closure_6, obj), , , , , , , ];
  const tmp4 = callback(React.useState(""), 2);
  items[1] = callback2(closure_7, { source: _require(13695), style: tmp.image });
  const obj2 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = _require(1212).intl;
  obj2.children = intl.string(_require(1212).t.Awk3Gw);
  items[2] = callback2(_require(4126).Text, obj2);
  const obj3 = { style: tmp.successBody };
  const intl2 = _require(1212).intl;
  obj3.children = intl2.string(_require(1212).t["0d1bXM"]);
  items[3] = callback2(_require(1273).LegacyText, obj3);
  items[4] = callback2(closure_6, { style: tmp.divider });
  const obj5 = { style: tmp.ctaDescription };
  const intl3 = _require(1212).intl;
  obj5.children = intl3.string(_require(1212).t.okgGTu);
  items[5] = callback2(_require(1273).LegacyText, obj5);
  const obj6 = { style: tmp.buttonWrapper };
  const obj7 = {};
  const intl4 = _require(1212).intl;
  const string = intl4.string;
  const t = _require(1212).t;
  if (first) {
    let stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  obj7.text = stringResult;
  obj7.onPress = callback;
  obj7.disabled = first;
  obj7.loading = first;
  obj7.grow = true;
  const items1 = [callback2(_require(4543).Button, obj7), ];
  let tmp11 = "" !== tmp5;
  if (tmp11) {
    const obj8 = { style: tmp.errorText, children: tmp5 };
    tmp11 = callback2(_require(1273).LegacyText, obj8);
  }
  items1[1] = tmp11;
  obj6.children = items1;
  items[6] = closure_9(closure_6, obj6);
  items[7] = callback2(closure_6, { style: tmp.flex });
  obj.children = items;
  obj.children = closure_9(closure_6, obj);
  return callback2(_require(13685).TwoFASetupModalScreen, obj);
};
