// Module ID: 13695
// Function ID: 105111
// Name: WebAuthnNameStep
// Dependencies: [5, 57, 31, 27, 13675, 33, 4130, 1456, 5592, 3831, 1212, 9704, 4091, 7636, 1273, 4543, 2]
// Exports: default

// Module 13695 (WebAuthnNameStep)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ margin: { margin: 16 } });
const result = require("result").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep(arg0) {
  let importDefault;
  let name;
  let require;
  ({ ticket: require, credential: importDefault, name } = arg0);
  let dependencyMap;
  let closure_3;
  let callback;
  let first;
  function _onPress() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = require(1456) /* useNavigation */;
  dependencyMap = obj.useNavigation();
  const tmp3 = callback(first.useState(false), 2);
  closure_3 = tmp3[1];
  const tmp4 = callback(first.useState(null), 2);
  callback = tmp4[1];
  let str = "";
  if (null != name) {
    str = name;
  }
  const tmp5 = callback(first.useState(str), 2);
  first = tmp5[0];
  obj = {};
  obj = { showTopContainer: false, value: first, onChange: tmp5[1], style: tmp.margin, error: tmp4[0] };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["Jzd+z/"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl2.string(require(1212) /* getSystemLocale */.t["I/sJtJ"]);
  obj.disabled = tmp3[0];
  obj.clearButtonVisibility = require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT;
  obj.autoFocus = true;
  obj.showBorder = true;
  obj.required = true;
  obj.large = true;
  const items = [callback2(require(7636) /* Form */.FormInput, obj), callback2(require(7636) /* Form */.FormDivider, {}), ];
  const obj1 = { style: tmp.margin };
  const obj2 = {
    onPress() {
      return _onPress(...arguments);
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl3.string(require(1212) /* getSystemLocale */.t["5dyZ1S"]);
  obj2.disabled = "" === first;
  obj2.size = "lg";
  obj1.children = callback2(require(4543) /* Button */.Button, obj2);
  items[2] = callback2(_onPress, obj1);
  obj.children = items;
  return callback3(require(7636) /* Form */.Form, obj);
};
