// Module ID: 10569
// Function ID: 10570
// Dependencies: [19, 17, 1622, 21, 4481, 709, 10570, 2]

// Module 10569
import ThemesDefault from "Themes" /* 709 */;
import _modDef10570 from "module_10570" /* 10570 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import importAllResult from "noop" /* 19 */;

let obj = { headerHandleOnlyWrap: null };
obj = { height: require("DRAG_HANDLE").HEADER_HANDLE_HEIGHT, paddingBottom: ThemesDefault.space.PX_4 };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  ({ animatedIndex, onPress } = arg0);
  return <View style={callback().headerHandleOnlyWrap}>{jsx(_modDef10570, { animatedIndex, onPress })}</View>;
});
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
