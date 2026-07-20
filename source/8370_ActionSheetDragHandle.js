// Module ID: 8370
// Function ID: 66686
// Name: ActionSheetDragHandle
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0]

// Module 8370 (ActionSheetDragHandle)
import result from "result";
import importAllResult from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

let DRAG_HANDLE_BAR_HEIGHT;
let DRAG_HANDLE_HEIGHT;
let DRAG_HANDLE_PADDING;
({ TouchableWithoutFeedback: closure_3, View: closure_4 } = result);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = arg1(dependencyMap[2]));
let obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: {}, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING } };
obj = { backgroundColor: require("result").colors.ICON_MUTED, borderRadius: require("result").radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
obj.bar = obj;
let closure_6 = result.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
result = result.fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = importAllResult.memo((accessibilityLabel) => {
  let onPress;
  let overlay;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = arg1(dependencyMap[6]).intl;
    accessibilityLabel = intl.string(arg1(dependencyMap[6]).t.WAI6xu);
  }
  const animatedBarStyles = accessibilityLabel.animatedBarStyles;
  const tmp3 = callback();
  let obj = {};
  const items = [tmp3.container, ];
  let containerOverlay = null;
  if (null != overlay) {
    containerOverlay = tmp3.containerOverlay;
  }
  items[1] = containerOverlay;
  obj.style = items;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityRole = "button";
  obj.aria-hidden = accessibilityLabel.aria-hidden;
  obj.onPress = onPress;
  obj = { style: tmp3.handle };
  if (null != animatedBarStyles) {
    obj = {};
    const items1 = [tmp3.bar, animatedBarStyles];
    obj.style = items1;
    let tmp11 = jsx(importDefault(dependencyMap[7]).View, obj);
  } else {
    const obj1 = { style: tmp3.bar };
    tmp11 = <closure_4 {...obj1} />;
  }
  obj.children = tmp11;
  obj.children = <closure_4 {...obj} />;
  return <closure_3 {...obj} />;
});
