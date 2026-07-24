// Module ID: 8425
// Function ID: 66986
// Name: ActionSheetDragHandle
// Dependencies: [31, 27, 8417, 33, 4130, 689, 1212, 3991, 2]

// Module 8425 (ActionSheetDragHandle)
import get_ActivityIndicator from "get ActivityIndicator";
import PX_4 from "PX_4";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let DRAG_HANDLE_BAR_HEIGHT;
let DRAG_HANDLE_HEIGHT;
let DRAG_HANDLE_PADDING;
let closure_3;
let closure_4;
const require = arg1;
({ TouchableWithoutFeedback: closure_3, View: closure_4 } = get_ActivityIndicator);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = PX_4);
let obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
obj.bar = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo((accessibilityLabel) => {
  let onPress;
  let overlay;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = require(1212) /* getSystemLocale */.intl;
    accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.WAI6xu);
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
  obj["aria-hidden"] = accessibilityLabel["aria-hidden"];
  obj.onPress = onPress;
  obj = { style: tmp3.handle };
  if (null != animatedBarStyles) {
    obj = {};
    const items1 = [tmp3.bar, animatedBarStyles];
    obj.style = items1;
    let tmp11 = jsx(importDefault(3991).View, {});
  } else {
    const obj1 = { style: tmp3.bar };
    tmp11 = <closure_4 style={tmp3.bar} />;
  }
  obj.children = tmp11;
  obj.children = <closure_4 style={tmp3.handle} />;
  return <closure_3 style={tmp3.handle} />;
});
const result = require("PX_4").fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = memoResult;
