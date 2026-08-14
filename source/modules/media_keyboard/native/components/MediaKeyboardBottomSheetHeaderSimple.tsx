// Module ID: 10069
// Function ID: 10070
// Dependencies: [19, 17, 1623, 21, 4342, 712, 10070, 2]

// Module 10069
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let obj = { headerHandleOnlyWrap: null };
obj = { height: require("DRAG_HANDLE").HEADER_HANDLE_HEIGHT, paddingBottom: require("Themes").space.PX_4 };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  let animatedIndex;
  let onPress;
  ({ animatedIndex, onPress } = arg0);
  return <View style={callback().headerHandleOnlyWrap}>{jsx(importDefault(10070), { animatedIndex, onPress })}</View>;
});
const result = require("DRAG_HANDLE").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
