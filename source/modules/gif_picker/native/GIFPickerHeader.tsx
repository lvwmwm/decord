// Module ID: 9623
// Function ID: 74900
// Dependencies: [31, 27, 653, 33, 4130, 689, 5781, 9613, 9624, 5772, 4660, 1212, 9625, 4126, 2]

// Module 9623
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_5;
let closure_6;
const require = arg1;
require("ME").GIFPickerResultTypes;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.container = obj;
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: "transparent", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, height: require("InputHeights").InputHeights.MD + require("_createForOfIteratorHelperLoose").space.PX_4 / 2, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.header = _createForOfIteratorHelperLoose;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function GIFPickerHeader(arg0) {
  let categoryType;
  let onQueryChange;
  let onQueryClear;
  let searchInputRef;
  ({ categoryType, onQueryClear } = arg0);
  ({ onQueryChange, searchInputRef } = arg0);
  const tmp = callback2();
  let obj = require(9613) /* getGifProviderConfig */;
  const providerForAPIRequest = obj.getProviderForAPIRequest();
  require(9624) /* getSearchPlaceholder */;
  obj = { style: tmp.container };
  if (categoryType === GIFPickerResultTypes.SEARCH) {
    obj = { size: "md", onChange: onQueryChange, placeholder: tmp4, onClear: onQueryClear, ref: searchInputRef, isRound: true };
    let tmp18Result = callback(require(5772) /* SearchField */.SearchField, obj);
  } else {
    const obj1 = { style: tmp.header, accessibilityRole: "button", onPress: onQueryClear };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj2 = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj2.destination = intl5.string(require(1212) /* getSystemLocale */.t.ffgJrs);
    obj1.accessibilityLabel = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.UTypEu, obj2);
    const obj3 = { color: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE, size: "sm" };
    const items = [callback(require(9625) /* ChevronLargeLeftIcon */.ChevronLargeLeftIcon, obj3), ];
    const obj4 = { variant: "text-sm/semibold", color: "text-default", maxFontSizeMultiplier: 2 };
    if (categoryType === GIFPickerResultTypes.TRENDING_GIFS) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.TsWCdW);
    } else if (categoryType === GIFPickerResultTypes.FAVORITES) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.k8fFjp);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t["5h0QOP"]);
    }
    obj4.children = stringResult;
    items[1] = callback(require(4126) /* Text */.Text, obj4);
    obj1.children = items;
    tmp18Result = closure_6(require(4660) /* PressableBase */.PressableOpacity, obj1);
    const tmp18 = closure_6;
    const tmp21 = callback;
  }
  obj.children = tmp18Result;
  return callback(View, obj);
});
const result = require("ME").fileFinishedImporting("modules/gif_picker/native/GIFPickerHeader.tsx");

export default memoResult;
