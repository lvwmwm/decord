// Module ID: 10060
// Function ID: 10061
// Dependencies: [19, 17, 1623, 21, 4344, 712, 10061, 2]

// Module 10060
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
  return <View style={callback().headerHandleOnlyWrap}>{jsx(importDefault(10061), { animatedIndex, onPress })}</View>;
});
const result = require("DRAG_HANDLE").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
