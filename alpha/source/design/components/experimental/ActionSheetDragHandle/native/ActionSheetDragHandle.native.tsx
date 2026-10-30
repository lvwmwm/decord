// Module ID: 8992
// Function ID: 8993
// Name: ActionSheetDragHandle
// Dependencies: [19, 17, 8984, 21, 5009, 575, 1114, 5090, 2]

// Module 8992 (ActionSheetDragHandle)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ActionSheetDragHandleConstants from "ActionSheetDragHandleConstants" /* 8984 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let DRAG_HANDLE_BAR_HEIGHT;
let DRAG_HANDLE_HEIGHT;
let DRAG_HANDLE_PADDING;
let c3;
let closure_4;
let size;
({ TouchableWithoutFeedback: c3, View: closure_4 } = react_native);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = ActionSheetDragHandleConstants);
const jsx = Fragment.jsx;
const obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING }, bar: size };
size = { backgroundColor: nativeDefault.colors.ICON_MUTED, borderRadius: nativeDefault.radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function DragHandle(accessibilityLabel) {
  let items1;
  let onPress;
  let overlay;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = intl2.intl;
    accessibilityLabel = intl.string(intl2.t.WAI6xu);
  }
  const animatedBarStyles = accessibilityLabel.animatedBarStyles;
  const prop = accessibilityLabel["aria-hidden"];
  const tmp4 = closure_6();
  const items = [tmp4.container, ];
  let containerOverlay = null;
  if (null != overlay) {
    containerOverlay = tmp4.containerOverlay;
  }
  items[1] = containerOverlay;
  if (null != animatedBarStyles) {
    const obj3 = { style: items1 };
    items1 = [tmp4.bar, animatedBarStyles];
    let tmp5Result = tmp5(ReanimatedRexportDefault.View, obj3);
  } else {
    const obj4 = { style: tmp4.bar };
    tmp5Result = tmp5(tmp8, obj4);
  }
  return <tmp6 style={items} accessibilityLabel={accessibilityLabel} accessibilityRole="button" aria-hidden={prop} onPress={onPress}>{null}</tmp6>;
});
size = size_mod;
const result = size.fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = memoResult;
