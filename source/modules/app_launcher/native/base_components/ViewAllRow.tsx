// Module ID: 11243
// Function ID: 87338
// Name: ViewAllRow
// Dependencies: [31, 27, 33, 4165, 5198, 1212, 4161, 2]
// Exports: default

// Module 11243 (ViewAllRow)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  title = title.title;
  let obj = {};
  let formatToPlainStringResult;
  if (null != title) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["bj/2kV"], obj);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj = { style: callback().expandCTALabelContainer };
  const obj1 = { color: "text-brand", variant: "text-md/semibold" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.format(require(1212) /* getSystemLocale */.t.gVw57p, {});
  obj.children = jsx(require(4161) /* Text */.Text, { color: "text-brand", variant: "text-md/semibold" });
  obj.label = <View style={callback().expandCTALabelContainer} />;
  obj.onPress = title.onPress;
  obj.end = true;
  return jsx(require(5198) /* TableRowInner */.TableRow, { style: callback().expandCTALabelContainer });
};
