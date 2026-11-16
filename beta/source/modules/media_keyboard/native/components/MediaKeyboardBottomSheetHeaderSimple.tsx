// Module ID: 11640
// Function ID: 11641
// Name: MediaKeyboardBottomSheetHeaderSimple
// Dependencies: [19, 17, 1626, 21, 5306, 575, 11641, 2]

// Module 11640 (MediaKeyboardBottomSheetHeaderSimple)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1626 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 11641 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
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
