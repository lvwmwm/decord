// Module ID: 12892
// Function ID: 100076
// Name: ActivateDeviceSuccess
// Dependencies: [31, 27, 33, 4130, 1212, 8955, 5085, 1392, 12891, 4126, 4543, 2]
// Exports: ActivateDeviceSuccess

// Module 12892 (ActivateDeviceSuccess)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = function ActivateDeviceSuccess(onComplete) {
  let data;
  let successImage;
  ({ data, successImage } = onComplete);
  if (null != data.twoWayLinkCode) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((arg0) => outer1_0(outer1_2[5]).isSocialLayerUmbrellaScope(arg0))) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.vBPvK3);
    }
  }
  let obj = {};
  let tmp9 = null;
  if (null != successImage) {
    obj = {};
    let obj2 = require(1392) /* getAvatarURL */;
    obj.source = obj2.makeSource(successImage);
    obj.style = tmp.image;
    obj.resizeMode = "contain";
    tmp9 = callback(importDefault(5085), obj);
    const tmp13 = importDefault(5085);
  }
  const items = [tmp9, , ];
  obj = { style: importDefault(12891).innerContent };
  const obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: importDefault(12891).centerText };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl3.string(require(1212) /* getSystemLocale */.t.qDtJmD);
  const items1 = [callback(require(4126) /* Text */.Text, obj1), ];
  let tmp17 = null;
  if (null != stringResult) {
    obj2 = { variant: "text-md/medium", color: "text-default", style: importDefault(12891).centerText, children: stringResult };
    tmp17 = callback(require(4126) /* Text */.Text, obj2);
  }
  items1[1] = tmp17;
  obj.children = items1;
  items[1] = closure_5(View, obj);
  const obj3 = { size: "lg" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl4.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj3.onPress = onComplete.onComplete;
  obj3.grow = true;
  items[2] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items;
  return closure_5(closure_6, obj);
};
