// Module ID: 14501
// Function ID: 110722
// Name: useCanRotate
// Dependencies: [57, 31, 27, 33, 4130, 8347, 8609, 4543, 5502, 4126, 5121, 5449, 2]
// Exports: default

// Module 14501 (useCanRotate)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function useCanRotate() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const effect = React.useEffect(() => {
    let obj = first(outer1_1[5]);
    if (first) {
      obj = { unlockAfterRotatingToPreviousLock: false };
      obj.unlockOrientation(obj);
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = React.useEffect(() => () => first(outer2_1[5]).lockOrientationForiOS(), []);
  const items = [first, tmp[1]];
  return items;
}
function Content() {
  let tmp5;
  let tmp6;
  const tmp2 = first1(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp = callback4();
  [tmp5, tmp6] = first1(useCanRotate(), 2);
  const tmp7 = first1(React.useState(false), 2);
  first1 = tmp7[0];
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = React.useRef(null);
  const items = [first1, first];
  const memo = React.useMemo(() => {
    const obj = { label: "NEW" };
    let str = "top";
    if (first1) {
      str = "bottom";
    }
    obj.position = str;
    obj.visible = first;
    obj.onPress = function onPress() {
      return outer1_1(false);
    };
    return obj;
  }, items);
  let obj = first(8609);
  const tooltip = obj.useTooltip(ref, memo);
  obj = {};
  obj = { style: tmp.container, children: callback2(first(4543).Button, obj1) };
  obj1 = {
    ref,
    onPress() {
      callback(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  const items1 = [callback2(View, obj), callback2(first(5502).TableSwitchRow, { label: "Unlock Orientation", value: tmp5, onValueChange: tmp6 }), callback2(first(5502).TableSwitchRow, { label: "Enable Bottom Position", value: first1, onValueChange: tmp7[1] }), callback2(TooltipNote, {})];
  obj.children = items1;
  return callback3(closure_6, obj);
}
class TooltipNote {
  constructor() {
    obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 } };
    items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing"];
    items[1] = jsx(require("Text").Text, { variant: "text-sm/bold", children: " <LayerScope/>" });
    items[2] = " on the surface you expect to see the tooltip.";
    obj.children = items;
    return jsxs(require("Text").Text, obj);
  }
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default function UserSettingsDesignSystemTooltip() {
  let obj = { style: callback4().flex, bottom: true };
  obj = { children: callback2(Content, {}) };
  obj.children = callback2(require(5449) /* Layer */.LayerScope, obj);
  return callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
export { useCanRotate };
export { TooltipNote };
