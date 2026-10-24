// Module ID: 12975
// Function ID: 12976
// Name: CheckpointGlobalStatNumber
// Dependencies: [17, 21, 4971, 587, 558, 576, 12976, 12977, 1128, 12972, 12978, 12979, 2]

// Module 12975 (CheckpointGlobalStatNumber)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl from "intl" /* 1128 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12972 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 12976 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12977 */;
import _modDef12978 from "module_12978" /* 12978 */;
import _modDef12979 from "module_12979" /* 12979 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
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
    let tmp17;
    if (cResult[1] === value) {
      tmp4 = cResult[2];
    }
    const tmpResult = CheckpointStatNumber;
    if (tmpResult.isCheckpointStatNumberShrunk(value)) {
      if (cResult[3] === iter.container) {
        let tmp21;
        let tmp22;
        if (cResult[4] === iter.croppedContainer) {
          tmp21 = cResult[5];
        }
        if (cResult[6] !== value) {
          const obj2 = { value };
          const tmp25 = React3(closure_7, obj2);
          cResult[6] = value;
          cResult[7] = tmp25;
          tmp22 = tmp25;
        } else {
          tmp22 = cResult[7];
        }
        if (cResult[8] === iter.value) {
          let tmp26;
          if (cResult[9] === tmp22) {
            tmp26 = cResult[10];
          }
          if (cResult[11] === iter.clip) {
            let tmp30;
            let tmp34;
            if (cResult[12] === tmp26) {
              tmp30 = cResult[13];
            }
            if (cResult[14] !== iter.globe) {
              const obj3 = { animatedUri: _modDef12978, staticUri: _modDef12979, style: iter.globe };
              const tmp37 = CheckpointApngPlayerDefault;
              const tmp38 = React3(tmp37, obj3);
              cResult[14] = iter.globe;
              cResult[15] = tmp38;
              tmp34 = tmp38;
            } else {
              tmp34 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp21) {
                if (cResult[18] === tmp30) {
                  let tmp39;
                  if (cResult[19] === tmp34) {
                    tmp39 = cResult[20];
                  }
                  tmp17 = tmp39;
                }
              }
            }
            const obj4 = { accessible: true, accessibilityLabel: tmp4, style: tmp21, children: items };
            items = [tmp30, tmp34];
            const tmp42 = hasOwnProperty(View, obj4);
            cResult[16] = tmp4;
            cResult[17] = tmp21;
            cResult[18] = tmp30;
            cResult[19] = tmp34;
            cResult[20] = tmp42;
            tmp39 = tmp42;
          }
          const obj5 = { style: iter.clip, children: tmp26 };
          const tmp33 = React3(View, obj5);
          cResult[11] = iter.clip;
          cResult[12] = tmp26;
          cResult[13] = tmp33;
          tmp30 = tmp33;
        }
        const obj6 = { style: iter.value, children: tmp22 };
        const tmp29 = React3(View, obj6);
        cResult[8] = iter.value;
        cResult[9] = tmp22;
        cResult[10] = tmp29;
        tmp26 = tmp29;
      }
      const items1 = [, ];
      ({ container: arr3[0], croppedContainer: arr3[1] } = iter);
      cResult[3] = iter.container;
      cResult[4] = iter.croppedContainer;
      cResult[5] = items1;
      tmp21 = items1;
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
          const obj8 = { animatedUri: _modDef12978, staticUri: _modDef12979, style: iter.globe };
          const tmp15 = CheckpointApngPlayerDefault;
          const tmp16 = React3(tmp15, obj8);
          cResult[26] = iter.globe;
          cResult[27] = tmp16;
          tmp12 = tmp16;
        } else {
          tmp12 = cResult[27];
        }
        if (cResult[28] === tmp4) {
          if (cResult[29] === tmp7) {
            if (cResult[30] === tmp8) {
              if (cResult[31] === tmp12) {
                tmp17 = cResult[32];
              }
            }
          }
        }
        const obj9 = { accessible: true, accessibilityLabel: tmp4, style: tmp7, children: items2 };
        items2 = [tmp8, tmp12];
        const tmp20 = hasOwnProperty(View, obj9);
        cResult[28] = tmp4;
        cResult[29] = tmp7;
        cResult[30] = tmp8;
        cResult[31] = tmp12;
        cResult[32] = tmp20;
        tmp17 = tmp20;
      }
      const items3 = [, ];
      ({ container: arr[0], uncroppedContainer: arr[1] } = iter);
      cResult[21] = iter.container;
      cResult[22] = iter.uncroppedContainer;
      cResult[23] = items3;
      tmp7 = items3;
    }
    return tmp17;
  }
  let tmp5 = accessibilityLabel;
  if (accessibilityLabel == null) {
    let toLocaleStringResult = value;
    if (typeof value === "number") {
      toLocaleStringResult = value.toLocaleString(tmp(1128).intl.currentLocale);
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
    const obj6 = { animatedUri: _modDef12978, staticUri: _modDef12979, style: iter.globe };
    const tmp13 = CheckpointApngPlayerDefault;
    items1[1] = React3(tmp13, obj6);
    obj2.children = items1;
    tmp3Result = tmp3(tmp4, obj2);
  } else {
    items[1] = iter.uncroppedContainer;
    obj2.style = items;
    const obj7 = { value };
    const items2 = [React3(closure_7, obj7), ];
    const obj8 = { animatedUri: _modDef12978, staticUri: _modDef12979, style: iter.globe };
    const tmp8 = CheckpointApngPlayerDefault;
    items2[1] = React3(tmp8, obj8);
    obj2.children = items2;
    tmp3Result = tmp3(tmp4, obj2);
  }
  return tmp3Result;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default tmp4;
