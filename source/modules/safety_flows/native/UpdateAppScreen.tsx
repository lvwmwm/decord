// Module ID: 16616
// Function ID: 129562
// Name: UpdateAppScreen
// Dependencies: [27, 33, 4130, 689, 4126, 1212, 2460, 4543, 2]
// Exports: default

// Module 16616 (UpdateAppScreen)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
({ NativeModules: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { flexDirection: "column", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.container = obj;
obj.buttonContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { variant: "heading-lg/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(importDefault(2460).yxqMCD);
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { variant: "text-md/normal", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(importDefault(2460).VBZJJg);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.buttonContainer };
  const obj2 = {
    onPress() {
      const BundleUpdaterManager = outer1_3.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl3.string(importDefault(2460).o4D6fm);
  obj2.variant = "primary";
  obj2.size = "md";
  obj1.children = callback(require(4543) /* Button */.Button, obj2);
  items[2] = callback(closure_4, obj1);
  obj.children = items;
  return callback2(closure_4, obj);
};
