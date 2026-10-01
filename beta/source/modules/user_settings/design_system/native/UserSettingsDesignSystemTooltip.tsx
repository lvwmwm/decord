// Module ID: 15390
// Function ID: 15391
// Name: UserSettingsDesignSystemTooltip
// Dependencies: [32, 19, 17, 21, 4836, 7780, 10590, 5281, 6621, 4832, 6544, 6577, 2]
// Exports: default, useCanRotate

// Module 15390 (UserSettingsDesignSystemTooltip)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import LayerScope2 from "LayerScope" /* 6577 */;
import DeviceOrientation from "DeviceOrientation" /* 7780 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function Content() {
  let closure_1;
  let first;
  let first1;
  let first2;
  let items2;
  let obj5;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp6;
  let obj = react;
  const tmp = closure_8();
  [first, closure_1] = react.useState(false);
  first1 = undefined;
  [first1, tmp6] = react.useState(false);
  const effect = react.useEffect(() => {
    const obj = DeviceOrientation;
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = react.useEffect(() => () => {
    const obj = first1(closure_1_1[5]);
    return obj.lockOrientationForiOS();
  }, []);
  const items = [first1, tmp6];
  [tmp10, tmp11] = items;
  _slicedToArray(items, 2);
  [first2, tmp14] = react.useState(false);
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items1 = [first2, first];
  const memo = obj.useMemo(() => {
    let str = "top";
    if (first2) {
      str = "bottom";
    }
    return {
      label: "NEW",
      position: str,
      visible,
      onPress() {
        return closure_1_1(false);
      }
    };
  }, items1);
  const obj2 = first1(10590);
  const tooltip = obj2.useTooltip(ref, memo);
  const obj3 = { children: items2 };
  const obj4 = { style: tmp.container, children: closure_5(first1(5281).Button, obj5) };
  obj5 = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  items2 = [closure_5(View, obj4), closure_5(first1(6621).TableSwitchRow, { label: "Unlock Orientation", value: tmp10, onValueChange: tmp11 }), closure_5(first1(6621).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp14 }), closure_5(TooltipNote, {})];
  return closure_7(closure_6, obj3);
}
class TooltipNote {
  constructor() {
    let items;
    const obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: items };
    const Text = Text_Text.Text;
    items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing", hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }), " on the surface you expect to see the tooltip."];
    return metroImportDefault(Text, obj);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1 } });
let result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default function UserSettingsDesignSystemTooltip() {
  let LayerScope;
  let obj2;
  const obj = { style: closure_8().flex, bottom: true, children: hasOwnProperty(LayerScope, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { children: hasOwnProperty(Content, {}) };
  LayerScope = LayerScope2.LayerScope;
  return hasOwnProperty(SafeAreaPaddingView, obj);
};
export const useCanRotate = function useCanRotate() {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(false);
  const effect = react.useEffect(() => {
    const obj = DeviceOrientation;
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = react.useEffect(() => () => {
    const obj = first1(closure_1_1[5]);
    return obj.lockOrientationForiOS();
  }, []);
  const items = [first, tmp3];
  return items;
};
export { TooltipNote };
