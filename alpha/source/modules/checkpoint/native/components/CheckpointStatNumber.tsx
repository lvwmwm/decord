// Module ID: 14479
// Function ID: 14480
// Name: CheckpointStatNumber
// Dependencies: [19, 17, 6377, 21, 5306, 5459, 14271, 2]
// Exports: default, getCheckpointStatNumberDigitHeight, getCheckpointStatNumberShrinkRatio, getCheckpointStatNumberWidth, isCheckpointStatNumberShrunk

// Module 14479 (CheckpointStatNumber)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CheckpointNumbersRive2 from "CheckpointNumbersRive" /* 5459 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

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
let c7 = 0.08675000000000001;
let c8 = 28.7;
let closure_9 = { 1: 3, 2: 4, 3: 4, 5: 4, 7: 4, ".": 2, ",": 2, "\u00a0": 2, "\u202f": 2, ":": 2, A: 4, M: 6, P: 4, a: 4, m: 6, p: 4 };
let closure_10 = createStyles.createStyles({ rive: { position: "absolute", top: 0, left: 0 } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointStatNumber.tsx");

export default function CheckpointStatNumber(value) {
  value = value.value;
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
  const result = Math.min(tmp2(value), tmp4) * num3 * c7;
  c4 = result;
  const items = [num, result];
  const items1 = [num2, num, result];
  const memo = react.useMemo(() => {
    size = { height: num, width };
    return size;
  }, items);
  const items2 = [color, value];
  const memo1 = react.useMemo(() => {
    size = { top: (1 - num2) * num * 0.54, height: num, width: Math.max(2.5675675675675675 * num, c4) };
    return size;
  }, items1);
  const items3 = [color];
  const memo2 = react.useMemo(() => {
    const obj = { DisplayValueString: String(value), TextColor: color };
    return obj;
  }, items2);
  const items4 = [tmp.rive, memo1];
  const memo3 = react.useMemo(() => ({ color }), items3);
  const CheckpointNumbersRive = CheckpointNumbersRive2.CheckpointNumbersRive;
  return <View style={memo}>{null}</View>;
};
export function getCheckpointStatNumberShrinkRatio(c0) {
  const tmp = getTextPixels(c0);
  let num = 1;
  if (tmp > c8) {
    num = c8 / tmp;
  }
  return num;
}
export function isCheckpointStatNumberShrunk(result) {
  const tmp = getTextPixels(result);
  let num = 1;
  if (tmp > c8) {
    num = c8 / tmp;
  }
  return num < 1;
}
export function getCheckpointStatNumberWidth(c1, size) {
  let num = size;
  if (size === undefined) {
    num = 40;
  }
  return Math.min(getTextPixels(c1), c8) * num * c7;
}
export function getCheckpointStatNumberDigitHeight(c0, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 40;
  }
  const result = 7 * num;
  const tmp3 = getTextPixels(c0);
  let num2 = 1;
  const tmp2 = c7;
  if (tmp3 > c8) {
    num2 = c8 / tmp3;
  }
  return result * tmp2 * num2;
}
