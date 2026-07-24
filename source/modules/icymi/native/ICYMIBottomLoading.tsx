// Module ID: 15288
// Function ID: 116616
// Name: ICYMIBottomLoading
// Dependencies: [31, 27, 33, 4130, 689, 2]
// Exports: ICYMIBottomLoading

// Module 15288 (ICYMIBottomLoading)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
({ View: closure_2, ActivityIndicator: closure_3 } = get_ActivityIndicator);
let closure_5 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { paddingTop: importDefault(689).space.PX_8, paddingBottom: importDefault(689).space.PX_24, alignItems: "center", justifyContent: "center" };
  obj.container = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = function ICYMIBottomLoading() {
  return <closure_2 style={callback().container}><closure_3 size="small" /></closure_2>;
};
