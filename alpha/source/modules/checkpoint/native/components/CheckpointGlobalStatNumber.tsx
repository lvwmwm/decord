// Module ID: 12900
// Function ID: 12901
// Name: CheckpointGlobalStatNumber
// Dependencies: [17, 21, 4969, 587, 558, 576, 1128, 12901, 12898, 12903, 2]

// Module 12900 (CheckpointGlobalStatNumber)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12898 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12901 */;
import _modDef12903 from "module_12903" /* 12903 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp;
const intl = tmp(1128);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, croppedContainer: obj3, compactContainer: obj4, clip: obj5, value: obj6, globe: { width: 75, height: 56 } };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: -nativeDefault.space.PX_30, marginBottom: -nativeDefault.space.PX_20 };
obj4 = { marginTop: -nativeDefault.space.PX_12, marginBottom: -nativeDefault.space.PX_6 };
obj5 = { height: 96 - 2 * nativeDefault.space.PX_24, marginVertical: nativeDefault.space.PX_24, paddingRight: nativeDefault.space.PX_8, marginRight: -nativeDefault.space.PX_8, overflow: "hidden" };
obj6 = { marginTop: -nativeDefault.space.PX_24 };
let closure_6 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGlobalStatNumber(arg0) {
  let compact;
  let items;
  let obj6;
  let obj7;
  let tmp5;
  let value;
  const obj = react;
  const cResult = obj.c(17);
  ({ value, compact } = arg0);
  const iter = closure_6();
  if (cResult[0] !== value) {
    const toLocaleStringResult = value.toLocaleString(intl.intl.currentLocale);
    cResult[0] = value;
    cResult[1] = toLocaleStringResult;
    tmp5 = toLocaleStringResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = undefined !== compact && compact ? iter.compactContainer : iter.croppedContainer;
  if (cResult[2] === iter.container) {
    let tmp8;
    let tmp10Result;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === (undefined !== compact && compact)) {
      if (cResult[6] === iter.clip) {
        if (cResult[7] === iter.value) {
          let tmp9;
          let tmp15;
          if (cResult[8] === value) {
            tmp9 = cResult[9];
          }
          if (cResult[10] !== iter.globe) {
            const obj2 = { uri: _modDef12903, style: iter.globe };
            const tmp18 = CheckpointApngPlayerDefault;
            const tmp19 = React3(tmp18, obj2);
            cResult[10] = iter.globe;
            cResult[11] = tmp19;
            tmp15 = tmp19;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp8) {
              if (cResult[14] === tmp9) {
                let tmp20;
                if (cResult[15] === tmp15) {
                  tmp20 = cResult[16];
                }
                return tmp20;
              }
            }
          }
          const obj3 = { accessible: true, accessibilityLabel: tmp5, style: tmp8, children: items };
          items = [tmp9, tmp15];
          const tmp23 = hasOwnProperty(View, obj3);
          cResult[12] = tmp5;
          cResult[13] = tmp8;
          cResult[14] = tmp9;
          cResult[15] = tmp15;
          cResult[16] = tmp23;
          tmp20 = tmp23;
        }
      }
    }
    if (undefined !== compact && compact) {
      const obj4 = { end: value, size: 80 };
      tmp10Result = tmp10(CheckpointCountUpStatNumberDefault, obj4);
    } else {
      const obj5 = { style: iter.clip, children: React3(View, obj6) };
      obj6 = { style: iter.value, children: React3(CheckpointCountUpStatNumberDefault, obj7) };
      obj7 = { end: value, size: 96 };
      tmp10Result = tmp10(View, obj5);
    }
    cResult[5] = undefined !== compact && compact;
    cResult[6] = iter.clip;
    cResult[7] = iter.value;
    cResult[8] = value;
    cResult[9] = tmp10Result;
    tmp9 = tmp10Result;
  }
  const items1 = [iter.container, tmp7];
  cResult[2] = iter.container;
  cResult[3] = tmp7;
  cResult[4] = items1;
  tmp8 = items1;
}) : (function CheckpointGlobalStatNumber(arg0) {
  let compact;
  let items;
  let items1;
  let obj4;
  let obj5;
  let tmp4Result;
  let tmp7;
  let tmp8;
  let value;
  ({ value, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const iter = closure_6();
  const obj = { accessible: true, accessibilityLabel: value.toLocaleString(intl.intl.currentLocale), style: items, children: items1 };
  items = [iter.container, compact ? iter.compactContainer : iter.croppedContainer];
  const tmp = hasOwnProperty;
  if (compact) {
    const obj2 = { end: value, size: 80 };
    tmp4Result = tmp4(CheckpointCountUpStatNumberDefault, obj2);
    tmp7 = importDefault;
    tmp8 = tmp4;
  } else {
    const obj3 = { style: iter.clip, children: React3(View, obj4) };
    obj4 = { style: iter.value, children: React3(CheckpointCountUpStatNumberDefault, obj5) };
    obj5 = { end: value, size: 96 };
    tmp4Result = tmp4(tmp2, obj3);
    tmp7 = importDefault;
    tmp8 = tmp4;
  }
  items1 = [tmp4Result, ];
  const obj6 = { uri: tmp7(12903), style: iter.globe };
  const tmp7Result = tmp7(12898);
  items1[1] = tmp8(tmp7Result, obj6);
  return tmp(View, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGlobalStatNumber.tsx");

export default tmp4;
