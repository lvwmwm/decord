// Module ID: 13449
// Function ID: 13450
// Name: CheckpointGlobalStatNumber
// Dependencies: [17, 21, 5005, 587, 558, 576, 13440, 13450, 1125, 13441, 2]

// Module 13449 (CheckpointGlobalStatNumber)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl from "intl" /* 1125 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 13440 */;
import CheckpointGlobeAnimationDefault from "CheckpointGlobeAnimation" /* 13441 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13450 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointStatNumberDefault = CheckpointStatNumber;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalStatValue(value) {
  let tmp3;
  const obj = react;
  const cResult = obj.c(4);
  value = value.value;
  if (typeof value === "string") {
    let tmp7;
    if (cResult[0] !== value) {
      const obj2 = { value, size: 96 };
      const tmp10 = React3(CheckpointStatNumberDefault, obj2);
      cResult[0] = value;
      cResult[1] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[1];
    }
    tmp3 = tmp7;
  } else if (cResult[2] !== value) {
    const obj3 = { end: value, size: 96 };
    const tmp6 = React3(CheckpointCountUpStatNumberDefault, obj3);
    cResult[2] = value;
    cResult[3] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[3];
  }
  return tmp3;
}) : (function GlobalStatValue(value) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGlobalStatNumber(arg0) {
  let accessibilityLabel;
  let items;
  let items2;
  let value;
  const obj = react;
  const cResult = obj.c(33);
  ({ value, accessibilityLabel } = arg0);
  const iter = closure_6();
  if (cResult[0] === accessibilityLabel) {
    let tmp4;
    let tmp16;
    if (cResult[1] === value) {
      tmp4 = cResult[2];
    }
    const tmpResult = CheckpointStatNumber;
    if (tmpResult.isCheckpointStatNumberShrunk(value)) {
      if (cResult[3] === iter.container) {
        let tmp20;
        let tmp21;
        if (cResult[4] === iter.croppedContainer) {
          tmp20 = cResult[5];
        }
        if (cResult[6] !== value) {
          const obj2 = { value };
          const tmp24 = React3(closure_7, obj2);
          cResult[6] = value;
          cResult[7] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[7];
        }
        if (cResult[8] === iter.value) {
          let tmp25;
          if (cResult[9] === tmp21) {
            tmp25 = cResult[10];
          }
          if (cResult[11] === iter.clip) {
            let tmp29;
            let tmp33;
            if (cResult[12] === tmp25) {
              tmp29 = cResult[13];
            }
            if (cResult[14] !== iter.globe) {
              const obj3 = { style: iter.globe };
              const tmp36 = React3(CheckpointGlobeAnimationDefault, obj3);
              cResult[14] = iter.globe;
              cResult[15] = tmp36;
              tmp33 = tmp36;
            } else {
              tmp33 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp20) {
                if (cResult[18] === tmp29) {
                  let tmp37;
                  if (cResult[19] === tmp33) {
                    tmp37 = cResult[20];
                  }
                  tmp16 = tmp37;
                }
              }
            }
            const obj4 = { accessible: true, accessibilityLabel: tmp4, style: tmp20, children: items };
            items = [tmp29, tmp33];
            const tmp40 = hasOwnProperty(View, obj4);
            cResult[16] = tmp4;
            cResult[17] = tmp20;
            cResult[18] = tmp29;
            cResult[19] = tmp33;
            cResult[20] = tmp40;
            tmp37 = tmp40;
          }
          const obj5 = { style: iter.clip, children: tmp25 };
          const tmp32 = React3(View, obj5);
          cResult[11] = iter.clip;
          cResult[12] = tmp25;
          cResult[13] = tmp32;
          tmp29 = tmp32;
        }
        const obj6 = { style: iter.value, children: tmp21 };
        const tmp28 = React3(View, obj6);
        cResult[8] = iter.value;
        cResult[9] = tmp21;
        cResult[10] = tmp28;
        tmp25 = tmp28;
      }
      const items1 = [, ];
      ({ container: arr3[0], croppedContainer: arr3[1] } = iter);
      cResult[3] = iter.container;
      cResult[4] = iter.croppedContainer;
      cResult[5] = items1;
      tmp20 = items1;
    } else {
      if (cResult[21] === iter.container) {
        let tmp7;
        let tmp8;
        let tmp12;
        if (cResult[22] === iter.uncroppedContainer) {
          tmp7 = cResult[23];
        }
        if (cResult[24] !== value) {
          const obj7 = { value };
          const tmp11 = React3(closure_7, obj7);
          cResult[24] = value;
          cResult[25] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[25];
        }
        if (cResult[26] !== iter.globe) {
          const obj8 = { style: iter.globe };
          const tmp15 = React3(CheckpointGlobeAnimationDefault, obj8);
          cResult[26] = iter.globe;
          cResult[27] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[27];
        }
        if (cResult[28] === tmp4) {
          if (cResult[29] === tmp7) {
            if (cResult[30] === tmp8) {
              if (cResult[31] === tmp12) {
                tmp16 = cResult[32];
              }
            }
          }
        }
        const obj9 = { accessible: true, accessibilityLabel: tmp4, style: tmp7, children: items2 };
        items2 = [tmp8, tmp12];
        const tmp19 = hasOwnProperty(View, obj9);
        cResult[28] = tmp4;
        cResult[29] = tmp7;
        cResult[30] = tmp8;
        cResult[31] = tmp12;
        cResult[32] = tmp19;
        tmp16 = tmp19;
      }
      const items3 = [, ];
      ({ container: arr[0], uncroppedContainer: arr[1] } = iter);
      cResult[21] = iter.container;
      cResult[22] = iter.uncroppedContainer;
      cResult[23] = items3;
      tmp7 = items3;
    }
    return tmp16;
  }
  let tmp5 = accessibilityLabel;
  if (accessibilityLabel == null) {
    let toLocaleStringResult = value;
    if (typeof value === "number") {
      toLocaleStringResult = value.toLocaleString(tmp(1125).intl.currentLocale);
    }
    tmp5 = toLocaleStringResult;
  }
  cResult[0] = accessibilityLabel;
  cResult[1] = value;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function CheckpointGlobalStatNumber(arg0) {
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
    obj4 = { style: iter.value, children: React3(closure_7, obj5) };
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
    const items2 = [React3(closure_7, obj7), ];
    const obj8 = { style: iter.globe };
    items2[1] = React3(CheckpointGlobeAnimationDefault, obj8);
    obj2.children = items2;
    tmp3Result = tmp3(tmp4, obj2);
  }
  return tmp3Result;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default tmp4;
