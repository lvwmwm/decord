// Module ID: 9693
// Function ID: 75447
// Dependencies: [31, 27, 1552, 33, 4130, 689, 9694, 2]

// Module 9693
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let obj = {};
obj = { height: require("DRAG_HANDLE").HEADER_HANDLE_HEIGHT, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.headerHandleOnlyWrap = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  let animatedIndex;
  let onPress;
  ({ animatedIndex, onPress } = arg0);
  return <View style={callback().headerHandleOnlyWrap}>{jsx(importDefault(9694), { animatedIndex, onPress })}</View>;
});
const result = require("DRAG_HANDLE").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
