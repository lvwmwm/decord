// Module ID: 17740
// Function ID: 17741
// Name: UserSettingsDesignSystemTooltip
// Dependencies: [32, 19, 17, 21, 5009, 8894, 9934, 5629, 7363, 7052, 7055, 5619, 7286, 5606, 2]
// Exports: default, useCanRotate

// Module 17740 (UserSettingsDesignSystemTooltip)
import react_native from "react-native" /* 17 */;
import LayerScope2 from "LayerScope" /* 5606 */;
import Text_Text from "Text/Text" /* 5619 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function Content() {
  let closure_1;
  let first2;
  let items2;
  let obj5;
  let tmp10;
  let tmp11;
  let obj = react;
  const tmp = closure_8();
  const tmp2 = first2(react.useState(false), 2);
  const visible = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp4 = first2(react.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = tmp4[1];
  const effect = react.useEffect(() => {
    const obj = first(closure_1[5]);
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = react.useEffect(() => () => {
    const obj = visible(closure_1_1[5]);
    return obj.lockOrientationForiOS();
  }, []);
  const items = [first1, tmp6];
  [tmp10, tmp11] = first2(items, 2);
  first2(items, 2);
  const tmp12 = first2(react.useState("top"), 2);
  first2 = tmp12[0];
  let str = "Show tooltip";
  const tmp14 = tmp12[1];
  if (visible) {
    str = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items1 = [first2, visible];
  const memo = obj.useMemo(() => ({
    label: "NEW",
    position: first2,
    visible,
    onPress() {
      return closure_1_1(false);
    }
  }), items1);
  const obj2 = visible(9934);
  const tooltip = obj2.useTooltip(ref, memo);
  const obj3 = { children: items2 };
  const obj4 = { style: tmp.container, children: closure_5(visible(5629).Button, obj5) };
  obj5 = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  items2 = [closure_5(View, obj4), closure_5(visible(7363).TableSwitchRow, { label: "Unlock Orientation", value: tmp10, onValueChange: tmp11 }), , ];
  const obj6 = {
    title: "Position",
    value: first2,
    onChange: tmp14,
    hasIcons: false,
    children: closure_9.map((label) => {
      const obj = { label, value: label };
      return closure_1_5(first(closure_1[10]).TableRadioRow, obj, label);
    })
  };
  const TableRadioGroup = visible(7052).TableRadioGroup;
  items2[2] = closure_5(TableRadioGroup, obj6);
  items2[3] = closure_5(TooltipNote, {});
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
let closure_9 = ["top", "bottom", "left", "right"];
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
export function useCanRotate() {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(false);
  const effect = react.useEffect(() => {
    const obj = first(closure_1[5]);
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = react.useEffect(() => () => {
    const obj = visible(closure_1_1[5]);
    return obj.lockOrientationForiOS();
  }, []);
  const items = [first, tmp3];
  return items;
}
export { TooltipNote };
