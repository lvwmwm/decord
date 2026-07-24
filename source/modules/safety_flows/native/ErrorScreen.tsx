// Module ID: 16624
// Function ID: 129628
// Name: ErrorScreen
// Dependencies: [5, 57, 31, 27, 33, 4130, 689, 1456, 16606, 16610, 4126, 1212, 4541, 4543, 5588, 2]
// Exports: default

// Module 16624 (ErrorScreen)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, padding: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("result").fileFinishedImporting("modules/safety_flows/native/ErrorScreen.tsx");

export default function ErrorScreen() {
  function _handleRetry() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp = callback(React.useState(false), 2);
  const _require = tmp[1];
  let obj = _require(_handleRetry[7]);
  let closure_1 = obj.useNavigation();
  const tmp2 = _createForOfIteratorHelperLoose();
  obj = { style: tmp2.container };
  obj = { variant: "heading-lg/semibold" };
  const intl = _require(_handleRetry[11]).intl;
  obj.children = intl.string(_require(_handleRetry[11]).t.c6kn6F);
  const items = [callback2(_require(_handleRetry[10]).Text, obj), , ];
  const obj1 = { variant: "text-md/normal", color: "text-muted" };
  const intl2 = _require(_handleRetry[11]).intl;
  obj1.children = intl2.string(_require(_handleRetry[11]).t.ZUEGFn);
  items[1] = callback2(_require(_handleRetry[10]).Text, obj1);
  const obj2 = { style: tmp2.buttonContainer, spacing: 8 };
  const obj3 = {
    onPress() {
      return callback(_handleRetry[14]).logout("safety_flows_error_screen");
    }
  };
  const intl3 = _require(_handleRetry[11]).intl;
  obj3.text = intl3.string(_require(_handleRetry[11]).t["2jxGer"]);
  obj3.variant = "secondary";
  obj3.size = "md";
  const items1 = [callback2(_require(_handleRetry[13]).Button, obj3), ];
  const obj4 = {
    onPress: function handleRetry() {
      return _handleRetry(...arguments);
    }
  };
  const intl4 = _require(_handleRetry[11]).intl;
  obj4.text = intl4.string(_require(_handleRetry[11]).t["7NqTJn"]);
  obj4.variant = "primary";
  obj4.size = "md";
  obj4.loading = tmp[0];
  items1[1] = callback2(_require(_handleRetry[13]).Button, obj4);
  obj2.children = items1;
  items[2] = callback3(_require(_handleRetry[12]).Stack, obj2);
  obj.children = items;
  return callback3(View, obj);
};
