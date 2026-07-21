// Module ID: 8735
// Function ID: 69073
// Name: BadgeWithTooltip
// Dependencies: []
// Exports: default

// Module 8735 (BadgeWithTooltip)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = {};
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.round, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8 };
obj.pillBase = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.pillDark = { backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
obj.pillLight = { backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_BACKGROUND_BRAND };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_BACKGROUND_BRAND };
obj.text = { marginLeft: importDefault(dependencyMap[5]).space.PX_8, textTransform: "uppercase" };
let closure_10 = obj.createStyles(obj);
function BadgeWithTooltip(tooltipPosition) {
  tooltipPosition = tooltipPosition.tooltipPosition;
  const arg1 = tooltipPosition;
  const tmp2 = callback4();
  const ref = React.useRef(null);
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  const importDefault = first;
  let closure_2 = tmp4[1];
  const intl = arg1(closure_2[7]).intl;
  const stringResult = intl.string(arg1(closure_2[7]).t.L9B+ZZ);
  let callback = stringResult;
  callback = React.useCallback(() => {
    callback(false);
  }, []);
  const React = callback;
  const items = [tooltipPosition, stringResult, first, callback];
  const memo = React.useMemo(() => ({ position: tooltipPosition, label: stringResult, visible: first, onPress: callback }), items);
  let obj = arg1(closure_2[8]);
  const tooltip = obj.useTooltip(ref, memo);
  const items1 = [first];
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(false);
      }, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const callback1 = React.useCallback(() => {
    callback((arg0) => !arg0);
  }, []);
  let obj1 = arg1(closure_2[9]);
  const isThemeDarkResult = obj1.isThemeDark(importDefault(closure_2[6])());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl2 = arg1(closure_2[7]).intl;
  const stringResult1 = intl2.string(arg1(closure_2[7]).t.1m6qcO);
  obj = { ref, onPress: callback1, hitSlop: closure_9, accessibilityRole: "button", accessibilityLabel: stringResult1, accessibilityHint: stringResult, style: items2 };
  const items2 = [tmp2.pillBase, isThemeDarkResult ? tmp2.pillDark : tmp2.pillLight];
  obj = { size: "xs", color: str };
  const items3 = [callback2(arg1(closure_2[10]).NitroWheelIcon, obj), ];
  obj1 = { variant: "text-sm/bold", color: str, style: tmp2.text, children: stringResult1 };
  items3[1] = callback2(arg1(closure_2[11]).Text, obj1);
  obj.children = items3;
  return callback3(closure_5, obj);
}
function StaticBadge() {
  const tmp2 = callback4();
  let obj = arg1(dependencyMap[9]);
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[6])());
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "control-overlay-primary-text-default";
  }
  const intl = arg1(dependencyMap[7]).intl;
  const stringResult = intl.string(arg1(dependencyMap[7]).t.1m6qcO);
  obj = { accessibilityLabel: stringResult, style: items };
  const items = [tmp2.pillBase, isThemeDarkResult ? tmp2.pillDark : tmp2.pillLight];
  obj = { size: "xs", color: str };
  const items1 = [callback2(arg1(dependencyMap[10]).NitroWheelIcon, obj), ];
  const obj1 = { variant: "text-sm/bold", color: str, style: tmp2.text, children: stringResult };
  items1[1] = callback2(arg1(dependencyMap[11]).Text, obj1);
  obj.children = items1;
  return callback3(closure_6, obj);
}
const obj3 = { marginLeft: importDefault(dependencyMap[5]).space.PX_8, textTransform: "uppercase" };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/native/FramesEarlyAccessBadge.tsx");

export default function _default(tooltipPosition) {
  let str = tooltipPosition.tooltipPosition;
  if (str === undefined) {
    str = "top";
  }
  let flag = tooltipPosition.inheritLayerScope;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = tooltipPosition.disablePressable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = arg1(dependencyMap[12]);
  if (!obj.useIsProfileFramesEarlyAccessPhase(tooltipPosition.location)) {
    return null;
  } else if (flag2) {
    let tmpResult = tmp(StaticBadge, {});
  } else if (flag) {
    obj = { tooltipPosition: str };
    tmpResult = tmp(BadgeWithTooltip, obj);
  } else {
    obj = { zIndex: 3 };
    const obj1 = { tooltipPosition: str };
    obj.children = tmp(BadgeWithTooltip, obj1);
    tmpResult = tmp(arg1(dependencyMap[13]).LayerScope, obj);
  }
};
