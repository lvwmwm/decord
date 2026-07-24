// Module ID: 11422
// Function ID: 88814
// Name: Divider
// Dependencies: [31, 27, 33, 4130, 689, 1324, 2]
// Exports: default

// Module 11422 (Divider)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { height: 1, backgroundColor: null, marginTop: 8, marginBottom: 8 };
  const colors = importDefault(689).colors;
  obj.backgroundColor = arg0 ? colors.BORDER_SUBTLE : colors.BORDER_MUTED;
  if (arg0) {
    obj = { marginHorizontal: 16 };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj.divider = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={callback(importDefault(1324)("Divider")).divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
