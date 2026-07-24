// Module ID: 13738
// Function ID: 105393
// Name: PageMarker
// Dependencies: [31, 27, 33, 4130, 689, 2]

// Module 13738 (PageMarker)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_1;
let closure_2;
({ jsx: closure_1, jsxs: closure_2 } = jsxProd);
let obj = { pageMarkerContainer: { flex: 1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" } };
obj = { width: 14, height: 14, borderRadius: 7, borderWidth: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.circleIcon = obj;
_createForOfIteratorHelperLoose = { position: "absolute", left: 0, right: 0, top: "50%", bottom: "50%", height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
obj.horizontalLine = _createForOfIteratorHelperLoose;
obj.filledCircle = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let closure_3 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const memoResult = importAllResult.memo((arg0) => {
  let View;
  let numMarkers;
  ({ numMarkers, currentPage: View } = arg0);
  const tmp = callback3();
  const callback = tmp;
  const ArrayResult = Array(numMarkers);
  let obj = { style: items };
  items = [tmp.pageMarkerContainer, ];
  obj = { width: 20 * numMarkers };
  items[1] = obj;
  const mapped = Array(numMarkers).fill(undefined).map((arg0, arg1) => {
    const obj = {};
    const items = [tmp.circleIcon, ];
    const sum = arg1 + 1;
    let filledCircle = closure_0 === sum;
    if (filledCircle) {
      filledCircle = tmp.filledCircle;
    }
    items[1] = filledCircle;
    obj.style = items;
    return tmp(outer1_0, obj, sum);
  });
  const items1 = [callback(View, { style: tmp.horizontalLine }), mapped];
  obj.children = items1;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = memoResult;
