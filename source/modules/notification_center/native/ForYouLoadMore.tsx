// Module ID: 15174
// Function ID: 115521
// Name: ForYouLoadMore
// Dependencies: [31, 27, 6882, 33, 4130, 624, 4543, 1212, 2]
// Exports: ForYouLoadMore

// Module 15174 (ForYouLoadMore)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
const require = arg1;
({ ActivityIndicator: closure_2, View: closure_3 } = get_ActivityIndicator);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 8, marginBottom: 24, marginHorizontal: 16, height: 42 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/notification_center/native/ForYouLoadMore.tsx");

export const ForYouLoadMore = function ForYouLoadMore(onPressLoad) {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  obj = { style: callback().container };
  if (obj.useStateFromStores(items, () => outer1_4.loading)) {
    let tmp4Result = tmp4(closure_2, {});
  } else {
    obj = { variant: "secondary", grow: true, size: "md" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t["Q/LSXp"]);
    obj.onPress = onPressLoad.onPressLoad;
    tmp4Result = tmp4(require(4543) /* Button */.Button, obj);
  }
  obj.children = tmp4Result;
  return <closure_3 style={callback().container} />;
};
