// Module ID: 10103
// Function ID: 10104
// Name: MediaKeyboardBottomSheetHeaderSimple
// Dependencies: [19, 17, 1609, 21, 4836, 576, 10104, 2]

// Module 10103 (MediaKeyboardBottomSheetHeaderSimple)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1609 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 10104 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const HEADER_HANDLE_HEIGHT = MediaKeyboardConstants.HEADER_HANDLE_HEIGHT;
const jsx = Fragment.jsx;
const obj = { headerHandleOnlyWrap: { height: HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 } };
({ height: HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 });
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  let animatedIndex;
  let onPress;
  ({ animatedIndex, onPress } = arg0);
  return <View style={closure_4().headerHandleOnlyWrap}>{jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}</View>;
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default memoResult;
