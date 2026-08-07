// Module ID: 9947
// Function ID: 9948
// Dependencies: [19, 17, 1604, 21, 4302, 712, 9948, 2]

// Module 9947
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
  return <View style={callback().headerHandleOnlyWrap}>{jsx(importDefault(9948), { animatedIndex, onPress })}</View>;
});
const result = require("DRAG_HANDLE").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
