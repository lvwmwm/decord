// Module ID: 13636
// Function ID: 13637
// Name: CheckpointGlobalStatNumber
// Dependencies: [17, 21, 5014, 575, 13627, 13637, 1113, 13628, 2]
// Exports: default

// Module 13636 (CheckpointGlobalStatNumber)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl from "intl" /* 1113 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 13627 */;
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation" /* 13628 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13637 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const CheckpointStatNumberDefault = CheckpointStatNumber;

let closure_4;
let hasOwnProperty;
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
    tmp4 = React3(CheckpointStatNumberDefault, obj);
  } else {
    const obj2 = { end: value, size: 96 };
    tmp4 = React3(CheckpointCountUpStatNumberDefault, obj2);
  }
  return tmp4;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, croppedContainer: obj3, uncroppedContainer: obj4, clip: obj5, value: obj6, globe: { width: 75, height: 56 } };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj4 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj5 = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
obj6 = { marginTop: -nativeDefault.space.PX_24 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default function CheckpointGlobalStatNumber(arg0) {
  let accessibilityLabel;
  let obj4;
  let obj5;
  let tmp3Result;
  let value;
  ({ value, accessibilityLabel } = arg0);
  const iter = closure_6();
  if (accessibilityLabel == null) {
    let toLocaleStringResult = value;
    if (typeof value === "number") {
      toLocaleStringResult = value.toLocaleString(intl.intl.currentLocale);
    }
    accessibilityLabel = toLocaleStringResult;
  }
  const obj2 = { accessible: true, accessibilityLabel, style: null, children: null };
  const items = [iter.container, ];
  const obj = CheckpointStatNumber;
  if (obj.isCheckpointStatNumberShrunk(value)) {
    items[1] = iter.croppedContainer;
    obj2.style = items;
    const obj3 = { style: iter.clip, children: React3(View, obj4) };
    obj4 = { style: iter.value, children: React3(GlobalStatValue, obj5) };
    obj5 = { value };
    const items1 = [React3(View, obj3), ];
    const obj6 = { style: iter.globe };
    items1[1] = React3(CheckpointGlobeAnimationDefault, obj6);
    obj2.children = items1;
    tmp3Result = tmp3(tmp4, obj2);
  } else {
    items[1] = iter.uncroppedContainer;
    obj2.style = items;
    const obj7 = { value };
    const items2 = [React3(GlobalStatValue, obj7), ];
    const obj8 = { style: iter.globe };
    items2[1] = React3(CheckpointGlobeAnimationDefault, obj8);
    obj2.children = items2;
    tmp3Result = tmp3(tmp4, obj2);
  }
  return tmp3Result;
};
