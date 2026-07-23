// Module ID: 5448
// Function ID: 46582
// Name: NavScrim
// Dependencies: [31, 27, 33, 4130, 689, 5160, 2]

// Module 5448 (NavScrim)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const View = get_ActivityIndicator.View;
let obj = {};
obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
obj["top"] = undefined;
obj.androidNavScrim = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(() => {
  const insets = importDefault(5160)({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    let obj = {};
    const items = [tmp.androidNavScrim, ];
    obj = { height: insets.bottom };
    items[1] = obj;
    obj.style = items;
    obj.pointerEvents = "none";
    tmp2 = <View height={insets.bottom} />;
  }
  return tmp2;
});
const result = require("jsxProd").fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = memoResult;
