// Module ID: 9673
// Function ID: 75324
// Name: FOOTER_HEIGHT
// Dependencies: [31, 27, 33, 4130, 689, 9663, 4126, 1212, 4543, 9674, 2]

// Module 9673 (FOOTER_HEIGHT)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, Image: closure_4, ActivityIndicator: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, height: 280, alignItems: "center" };
obj.container = obj;
obj.label = { textAlign: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_48 };
obj.buttonWrapper = _createForOfIteratorHelperLoose;
obj.loadingSpinner = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, margin: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, margin: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function MediaKeyboardFooter(arg0) {
  let disabled;
  let onViewAll;
  ({ disabled, onViewAll } = arg0);
  const tmp = callback3();
  let obj = importDefault(9663);
  if (obj.useHasReachedEnd()) {
    obj = { style: tmp.container };
    obj = { variant: "text-sm/normal", style: tmp.label };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.mKSwAW);
    const items = [callback(require(4126) /* Text */.Text, obj), , ];
    const obj1 = { style: tmp.buttonWrapper };
    const obj2 = { variant: "primary", size: "sm", onPress: onViewAll };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl2.string(require(1212) /* getSystemLocale */.t.ZT24In);
    obj2.disabled = disabled;
    obj1.children = callback(require(4543) /* Button */.Button, obj2);
    items[1] = callback(closure_3, obj1);
    const obj3 = { source: importDefault(9674) };
    items[2] = callback(closure_4, obj3);
    obj.children = items;
    let tmp4 = callback2(closure_3, obj);
  } else {
    const obj4 = { style: tmp.loadingSpinner, size: "large", color: tmp.loadingSpinner.color };
    tmp4 = callback(closure_5, obj4);
  }
  return tmp4;
});
const result = require("jsxProd").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardFooter.tsx");

export default memoResult;
export const FOOTER_HEIGHT = 280;
