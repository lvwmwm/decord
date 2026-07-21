// Module ID: 14329
// Function ID: 108203
// Name: useCanRotate
// Dependencies: []
// Exports: default

// Module 14329 (useCanRotate)
function useCanRotate() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const arg1 = first;
  const effect = React.useEffect(() => {
    let obj = first(closure_1[5]);
    if (first) {
      obj = { unlockAfterRotatingToPreviousLock: false };
      obj.unlockOrientation(obj);
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = React.useEffect(() => () => callback(closure_1[5]).lockOrientationForiOS(), []);
  const items = [first, tmp[1]];
  return items;
}
function Content() {
  let tmp5;
  let tmp6;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const arg1 = first;
  let closure_1 = tmp2[1];
  const tmp = callback4();
  [tmp5, tmp6] = callback(useCanRotate(), 2);
  const tmp7 = callback(React.useState(false), 2);
  const first1 = tmp7[0];
  const callback = first1;
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
      return callback(false);
    };
    return obj;
  }, items);
  let obj = arg1(closure_1[6]);
  const tooltip = obj.useTooltip(ref, memo);
  obj = {};
  obj = { style: tmp.container, children: callback2(arg1(closure_1[7]).Button, obj1) };
  const obj1 = {
    ref,
    onPress() {
      callback(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  const items1 = [callback2(View, obj), callback2(arg1(closure_1[8]).TableSwitchRow, { label: "Unlock Orientation", value: tmp5, onValueChange: tmp6 }), callback2(arg1(closure_1[8]).TableSwitchRow, { label: "Enable Bottom Position", value: first1, onValueChange: tmp7[1] }), callback2(TooltipNote, {})];
  obj.children = items1;
  return callback3(closure_6, obj);
}
class TooltipNote {
  constructor() {
    obj = { variant: "text-sm/normal", style: {} };
    items = [null];
    items[1] = jsx(arg1(dependencyMap[9]).Text, { <string:1749439162>: null, <string:140675621>: null });
    items[2] = " on the surface you expect to see the tooltip.";
    obj.children = items;
    return jsxs(arg1(dependencyMap[9]).Text, obj);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: {}, flex: { flex: 1 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default function UserSettingsDesignSystemTooltip() {
  let obj = { style: callback4().flex, bottom: true };
  obj = { children: callback2(Content, {}) };
  obj.children = callback2(arg1(dependencyMap[11]).LayerScope, obj);
  return callback2(arg1(dependencyMap[10]).SafeAreaPaddingView, obj);
};
export { useCanRotate };
export { TooltipNote };
