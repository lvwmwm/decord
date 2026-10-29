// Module ID: 13440
// Function ID: 13441
// Name: CheckpointStatNumber
// Dependencies: [19, 17, 6054, 21, 5005, 558, 576, 13436, 5154, 2]
// Exports: getCheckpointStatNumberWidth, isCheckpointStatNumberShrunk

// Module 13440 (CheckpointStatNumber)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import CheckpointTextDefault from "CheckpointText" /* 13436 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const CheckpointNumbersRive2 = tmp(5154);
function getTextPixels(value) {
  let num = 0;
  const StringResult = String(value);
  const tmp2 = StringResult[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let num2 = closure_9[tmp3];
    if (num2 == null) {
      num2 = 5;
    }
    num = num + num2;
    continue;
  }
  return Math.max(num - 1, 0);
}
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let c7 = 2.5675675675675675;
let c8 = 28.7;
let closure_9 = { 1: 3, 2: 4, 3: 4, 5: 4, 7: 4, ".": 2, ",": 2, ":": 2, A: 4, M: 6, P: 4, a: 4, m: 6, p: 4 };
let closure_10 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStatNumber(arg0) {
  let color;
  let isStepHeading;
  let value;
  const obj = react2;
  const cResult = obj.c(31);
  ({ value, color, size, isStepHeading } = arg0);
  if (undefined === color) {
    color = CHECKPOINT_PRIMARY;
  }
  let num = 40;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_10();
  const tmp6 = getTextPixels(value);
  let num2 = 1;
  const tmp5 = getTextPixels;
  if (tmp6 > c8) {
    num2 = tmp7 / tmp6;
  }
  if (cResult[0] === num) {
    let tmp8;
    if (cResult[1] === value) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === num) {
      let tmp10;
      if (cResult[4] === tmp8) {
        tmp10 = cResult[5];
      }
      const result = (1 - num2) * num * 0.54;
      const _Math = Math;
      const bound = Math.max(num * c7, tmp8);
      if (cResult[6] === num) {
        if (cResult[7] === result) {
          let tmp15;
          if (cResult[8] === bound) {
            tmp15 = cResult[9];
          }
          const _String = String;
          const StringResult = String(value);
          if (cResult[10] === color) {
            let tmp17;
            let tmp18;
            if (cResult[11] === StringResult) {
              tmp17 = cResult[12];
            }
            if (cResult[13] !== color) {
              const obj2 = { color };
              cResult[13] = color;
              cResult[14] = obj2;
              tmp18 = obj2;
            } else {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp15) {
              let tmp19;
              if (cResult[16] === tmp4.rive) {
                tmp19 = cResult[17];
              }
              if (cResult[18] === tmp18) {
                if (cResult[19] === isStepHeading) {
                  let tmp20;
                  if (cResult[20] === value) {
                    tmp20 = cResult[21];
                  }
                  if (cResult[22] === tmp17) {
                    let tmp24;
                    if (cResult[23] === tmp20) {
                      tmp24 = cResult[24];
                    }
                    if (cResult[25] === tmp19) {
                      let tmp27;
                      if (cResult[26] === tmp24) {
                        tmp27 = cResult[27];
                      }
                      if (cResult[28] === tmp10) {
                        let tmp31;
                        if (cResult[29] === tmp27) {
                          tmp31 = cResult[30];
                        }
                        return tmp31;
                      }
                      const tmp34 = <View style={tmp10}>{tmp27}</View>;
                      cResult[28] = tmp10;
                      cResult[29] = tmp27;
                      cResult[30] = tmp34;
                      tmp31 = tmp34;
                    }
                    const tmp30 = <View style={tmp19}>{tmp24}</View>;
                    cResult[25] = tmp19;
                    cResult[26] = tmp24;
                    cResult[27] = tmp30;
                    tmp27 = tmp30;
                  }
                  const tmp26 = jsx(CheckpointNumbersRive2.CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp17, fallback: tmp20 });
                  cResult[22] = tmp17;
                  cResult[23] = tmp20;
                  cResult[24] = tmp26;
                  tmp24 = tmp26;
                }
              }
              const tmp23 = jsx(CheckpointTextDefault, { variant: "heading-xl/bold", style: tmp18, isStepHeading, children: value });
              cResult[18] = tmp18;
              cResult[19] = isStepHeading;
              cResult[20] = value;
              cResult[21] = tmp23;
              tmp20 = tmp23;
            }
            const items = [tmp4.rive, tmp15];
            cResult[15] = tmp15;
            cResult[16] = tmp4.rive;
            cResult[17] = items;
            tmp19 = items;
          }
          const obj7 = { DisplayValueString: StringResult, TextColor: color };
          cResult[10] = color;
          cResult[11] = StringResult;
          cResult[12] = obj7;
          tmp17 = obj7;
        }
      }
      const size1 = { top: result, height: num, width: bound };
      cResult[6] = num;
      cResult[7] = result;
      cResult[8] = bound;
      cResult[9] = size1;
      tmp15 = size1;
    }
    const size2 = { height: num, width: tmp8 };
    cResult[3] = num;
    cResult[4] = tmp8;
    cResult[5] = size2;
    tmp10 = size2;
  }
  let num3 = num;
  if (num === undefined) {
    num3 = 40;
  }
  const result1 = Math.min(tmp5(value), tmp7) * num3 * 0.08675000000000001;
  cResult[0] = num;
  cResult[1] = value;
  cResult[2] = result1;
  tmp8 = result1;
}) : (function CheckpointStatNumber(value) {
  let width;
  value = value.value;
  require = value;
  let color = value.color;
  if (color === undefined) {
    color = CHECKPOINT_PRIMARY;
  }
  let num = value.size;
  if (num === undefined) {
    num = 40;
  }
  let c4;
  const isStepHeading = value.isStepHeading;
  const tmp = closure_10();
  const tmp3 = getTextPixels(value);
  let num2 = 1;
  const tmp2 = getTextPixels;
  if (tmp3 > c8) {
    num2 = tmp4 / tmp3;
  }
  let num3 = num;
  if (num === undefined) {
    num3 = 40;
  }
  const result = Math.min(tmp2(value), tmp4) * num3 * 0.08675000000000001;
  c4 = result;
  const items = [num, result];
  const items1 = [num2, num, result];
  const memo = num2.useMemo(() => {
    size = { height: num, width };
    return size;
  }, items);
  const items2 = [color, value];
  const memo1 = num2.useMemo(() => {
    size = { top: (1 - num2) * num * 0.54, height: num, width: Math.max(num * c7, c4) };
    return size;
  }, items1);
  const items3 = [color];
  const memo2 = num2.useMemo(() => {
    const obj = { DisplayValueString: String(require), TextColor: color };
    return obj;
  }, items2);
  const items4 = [tmp.rive, memo1];
  const memo3 = num2.useMemo(() => ({ color }), items3);
  const CheckpointNumbersRive = require("CheckpointNumbersRive").CheckpointNumbersRive;
  return <c4 style={memo}>{null}</c4>;
});
function getCheckpointStatNumberWidth(end, size) {
  let num = size;
  if (size === undefined) {
    num = 40;
  }
  return Math.min(getTextPixels(end), c8) * num * 0.08675000000000001;
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStatNumber.tsx");

export default tmp2;
export function isCheckpointStatNumberShrunk(value) {
  const tmp = getTextPixels(value);
  let num = 1;
  if (tmp > c8) {
    num = c8 / tmp;
  }
  return num < 1;
}
export { getCheckpointStatNumberWidth };
