// Module ID: 12945
// Function ID: 100402
// Name: ActivateDeviceError
// Dependencies: [31, 27, 33, 4130, 9025, 12943, 4126, 1212, 4543, 2]
// Exports: ActivateDeviceError

// Module 12945 (ActivateDeviceError)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let obj = {};
  obj = { source: importDefault(9025), style: callback3().image };
  const items = [callback(closure_3, obj), , ];
  obj = { style: importDefault(12943).innerContent };
  const obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: importDefault(12943).centerText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["3dgwPD"]);
  const items1 = [callback(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: importDefault(12943).centerText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t["/GAO1P"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_4, obj);
  const obj3 = { size: "lg" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t["5911Lb"]);
  obj3.onPress = onRetry.onRetry;
  obj3.grow = true;
  items[2] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items;
  return callback2(closure_7, obj);
};
