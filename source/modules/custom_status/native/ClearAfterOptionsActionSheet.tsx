// Module ID: 11937
// Function ID: 92406
// Name: ClearAfterOptionsActionSheet
// Dependencies: [57, 31, 27, 11928, 33, 4130, 689, 5187, 5186, 1212, 7654, 7653, 11938, 4543, 4098, 2]
// Exports: default

// Module 11937 (ClearAfterOptionsActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { ClearAfterOptions } from "StatusTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonWrapper = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default function ClearAfterOptionsActionSheet(arg0) {
  let initialValue;
  let require;
  ({ initialValue, onChange: require } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(initialValue), 2);
  let closure_1 = tmp2[0];
  let obj = { contentStyles: tmp.content };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["5XnRQ+"]);
  obj.header = callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { onChange: tmp2[1] };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl2.string(require(1212) /* getSystemLocale */.t.E45wvP);
  obj.defaultValue = initialValue;
  obj.hasIcons = false;
  obj.children = ClearAfterOptions.map((value) => {
    const obj = { value, label: callback2(outer1_2[12])(value) };
    return outer1_7(outer1_0(outer1_2[11]).TableRadioRow, obj, value);
  });
  const items = [callback2(require(7654) /* context */.TableRadioGroup, obj), ];
  const obj1 = { style: tmp.buttonWrapper };
  const obj2 = {
    onPress() {
      callback(callback2);
      callback2(outer1_2[14]).hideActionSheet();
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl3.string(require(1212) /* getSystemLocale */.t.TyCVIq);
  obj1.children = callback2(require(4543) /* Button */.Button, obj2);
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback3(require(5187) /* Background */.BottomSheet, obj);
};
