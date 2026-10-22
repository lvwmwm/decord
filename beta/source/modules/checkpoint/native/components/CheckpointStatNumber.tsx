// Module ID: 12777
// Function ID: 12778
// Name: CheckpointStatNumber
// Dependencies: [19, 17, 5537, 21, 5191, 558, 576, 12759, 5009, 2]

// Module 12777 (CheckpointStatNumber)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 5537 */;
import CheckpointTextDefault from "CheckpointText" /* 12759 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const CheckpointNumbersRive2 = tmp(5009);
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let c7 = 0.3625;
let c8 = 2.4774774774774775;
let closure_9 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointStatNumber(arg0) {
  let color;
  let value;
  const obj = react2;
  const cResult = obj.c(26);
  ({ value, color, size } = arg0);
  if (undefined === color) {
    color = CHECKPOINT_PRIMARY;
  }
  let num = 40;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_9();
  const result = String(value).length * num * c7;
  if (cResult[0] === num) {
    let tmp6;
    if (cResult[1] === result) {
      tmp6 = cResult[2];
    }
    const result1 = num * c8;
    if (cResult[3] === num) {
      let tmp9;
      if (cResult[4] === result1) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === color) {
        let tmp10;
        let tmp11;
        if (cResult[7] === value) {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== color) {
          const obj2 = { color };
          cResult[9] = color;
          cResult[10] = obj2;
          tmp11 = obj2;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          let tmp12;
          if (cResult[12] === tmp4.rive) {
            tmp12 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            let tmp13;
            if (cResult[15] === value) {
              tmp13 = cResult[16];
            }
            if (cResult[17] === tmp10) {
              let tmp17;
              if (cResult[18] === tmp13) {
                tmp17 = cResult[19];
              }
              if (cResult[20] === tmp17) {
                let tmp20;
                if (cResult[21] === tmp12) {
                  tmp20 = cResult[22];
                }
                if (cResult[23] === tmp6) {
                  let tmp24;
                  if (cResult[24] === tmp20) {
                    tmp24 = cResult[25];
                  }
                  return tmp24;
                }
                const tmp27 = <View style={tmp6}>{tmp20}</View>;
                cResult[23] = tmp6;
                cResult[24] = tmp20;
                cResult[25] = tmp27;
                tmp24 = tmp27;
              }
              const tmp23 = <View style={tmp12}>{tmp17}</View>;
              cResult[20] = tmp17;
              cResult[21] = tmp12;
              cResult[22] = tmp23;
              tmp20 = tmp23;
            }
            const tmp19 = jsx(CheckpointNumbersRive2.CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp10, fallback: tmp13 });
            cResult[17] = tmp10;
            cResult[18] = tmp13;
            cResult[19] = tmp19;
            tmp17 = tmp19;
          }
          const tmp16 = jsx(CheckpointTextDefault, { variant: "heading-xl/bold", style: tmp11, children: value });
          cResult[14] = tmp11;
          cResult[15] = value;
          cResult[16] = tmp16;
          tmp13 = tmp16;
        }
        const items = [tmp4.rive, tmp9];
        cResult[11] = tmp9;
        cResult[12] = tmp4.rive;
        cResult[13] = items;
        tmp12 = items;
      }
      const obj7 = { DisplayValue: value, TextColor: color };
      cResult[6] = color;
      cResult[7] = value;
      cResult[8] = obj7;
      tmp10 = obj7;
    }
    const size1 = { height: num, width: result1 };
    cResult[3] = num;
    cResult[4] = result1;
    cResult[5] = size1;
    tmp9 = size1;
  }
  const size2 = { height: num, width: result };
  cResult[0] = num;
  cResult[1] = result;
  cResult[2] = size2;
  tmp6 = size2;
}) : (function CheckpointStatNumber(value) {
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
  const items = [num, value];
  const items1 = [num];
  const tmp = closure_9();
  const memo = react.useMemo(() => {
    size = { height: num, width: String(require).length * num * c7 };
    return size;
  }, items);
  const items2 = [color, value];
  const memo1 = react.useMemo(() => {
    size = { height: num, width: num * c8 };
    return size;
  }, items1);
  const items3 = [color];
  const memo2 = react.useMemo(() => ({ DisplayValue: require, TextColor: color }), items2);
  const items4 = [tmp.rive, memo1];
  const memo3 = react.useMemo(() => ({ color }), items3);
  const CheckpointNumbersRive = require("CheckpointNumbersRive").CheckpointNumbersRive;
  return <View style={memo}>{null}</View>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStatNumber.tsx");

export default tmp2;
