// Module ID: 14504
// Function ID: 14505
// Name: CheckpointGlobalStatNumber
// Dependencies: [19, 17, 21, 5306, 575, 14479, 14505, 14506, 14480, 2]
// Exports: default

// Module 14504 (CheckpointGlobalStatNumber)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 14479 */;
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation" /* 14480 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14505 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const CheckpointStatNumberDefault = CheckpointStatNumber;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function GlobalStatValue(value) {
  let tmp4;
  value = value.value;
  if (typeof value === "string") {
    const obj = { value, size: 96 };
    tmp4 = hasOwnProperty(CheckpointStatNumberDefault, obj);
  } else {
    const obj2 = { end: value, size: 96 };
    tmp4 = hasOwnProperty(CheckpointCountUpStatNumberDefault, obj2);
  }
  return tmp4;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 1.3392857142857142;
let createStyles = createStyles_mod;
let obj = { container: obj2, croppedContainer: obj3, uncroppedContainer: obj4, clip: obj5, value: obj6, globe: { flexShrink: 1 }, globeImage: { width: "100%", aspectRatio: 1.3392857142857142 } };
obj2 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj5 = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
obj6 = { marginTop: -nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default function CheckpointGlobalStatNumber(arg0) {
  let accessibilityLabel;
  let c0;
  let items3;
  let items5;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let tmp4Result;
  let value;
  ({ value, accessibilityLabel } = arg0);
  _require = undefined;
  const iter = closure_8();
  let result = value;
  if (typeof value === "number") {
    const obj11 = require("CheckpointNumberUtils");
    result = obj11.formatCheckpointStatNumber(value);
  }
  _require = result;
  if (accessibilityLabel == null) {
    accessibilityLabel = result;
  }
  let items = [result];
  const memo = react.useMemo(() => {
    let items;
    const obj = CheckpointStatNumber;
    const result = obj.getCheckpointStatNumberDigitHeight(c0, 96) / 0.7263157894736842;
    const obj3 = { width: result * c7, transform: items };
    const obj2 = CheckpointStatNumber;
    items = [{ translateY: 3.936 * (1 - obj2.getCheckpointStatNumberShrinkRatio(c0)) }];
    ({ translateY: 3.936 * (1 - obj2.getCheckpointStatNumberShrinkRatio(c0)) });
    return obj3;
  }, items);
  let obj = require("CheckpointStatNumber");
  let obj2 = { accessible: true, accessibilityLabel, style: null, children: null };
  const items1 = [iter.container, ];
  if (obj.isCheckpointStatNumberShrunk(result)) {
    items1[1] = iter.croppedContainer;
    obj2.style = items1;
    let obj3 = { style: iter.clip, children: closure_5(View, obj4) };
    obj4 = { style: iter.value, children: closure_5(GlobalStatValue, obj5) };
    obj5 = { value };
    const items2 = [closure_5(View, obj3), ];
    const obj6 = { style: items3, children: closure_5(CheckpointGlobeAnimationDefault, obj7) };
    items3 = [iter.globe, memo];
    obj7 = { style: iter.globeImage };
    items2[1] = closure_5(View, obj6);
    obj2.children = items2;
    tmp4Result = tmp4(tmp5, obj2);
  } else {
    items1[1] = iter.uncroppedContainer;
    obj2.style = items1;
    const obj8 = { value };
    const items4 = [closure_5(GlobalStatValue, obj8), ];
    const obj9 = { style: items5, children: closure_5(CheckpointGlobeAnimationDefault, obj10) };
    items5 = [iter.globe, memo];
    obj10 = { style: iter.globeImage };
    items4[1] = closure_5(View, obj9);
    obj2.children = items4;
    tmp4Result = tmp4(tmp5, obj2);
  }
  return tmp4Result;
};
