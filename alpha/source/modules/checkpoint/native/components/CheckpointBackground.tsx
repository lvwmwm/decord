// Module ID: 12967
// Function ID: 12968
// Name: CheckpointBackground
// Dependencies: [19, 6015, 1087, 21, 4971, 558, 576, 5258, 12968, 5669, 2]

// Module 12967 (CheckpointBackground)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import LinearGradientDefault from "LinearGradient" /* 5258 */;
import FastImageDefault from "FastImage" /* 5669 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import _modDef12968 from "module_12968" /* 12968 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_4 = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointBackground(gradientStartColor) {
  let items1;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  gradientStartColor = gradientStartColor.gradientStartColor;
  if (undefined === gradientStartColor) {
    gradientStartColor = closure_4[0];
  }
  const tmp4 = closure_9();
  if (cResult[0] !== gradientStartColor) {
    const items = [gradientStartColor, closure_4[1]];
    cResult[0] = gradientStartColor;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp7;
    let tmp10;
    let tmp12;
    if (cResult[3] === tmp4.background) {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { uri: _modDef12968 };
      cResult[5] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== tmp4.background) {
      const obj3 = { source: tmp10, style: tmp4.background, resizeMode: "cover" };
      const tmp15 = metroRequire(FastImageDefault, obj3);
      cResult[6] = tmp4.background;
      cResult[7] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp7) {
      let tmp16;
      if (cResult[9] === tmp12) {
        tmp16 = cResult[10];
      }
      return tmp16;
    }
    const obj4 = { children: items1 };
    items1 = [tmp7, tmp12];
    const tmp19 = metroImportAll(metroImportDefault, obj4);
    cResult[8] = tmp7;
    cResult[9] = tmp12;
    cResult[10] = tmp19;
    tmp16 = tmp19;
  }
  const obj5 = { colors: tmp5, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp4.background };
  const tmp8 = metroRequire(LinearGradientDefault, obj5);
  cResult[2] = tmp5;
  cResult[3] = tmp4.background;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function CheckpointBackground(gradientStartColor) {
  let items1;
  let obj4;
  gradientStartColor = gradientStartColor.gradientStartColor;
  if (gradientStartColor === undefined) {
    gradientStartColor = closure_4[0];
  }
  const tmp2 = closure_9();
  let items = [gradientStartColor];
  const obj = { children: items1 };
  const memo = react.useMemo(() => {
    const items = [gradientStartColor, closure_4[1]];
    return items;
  }, items);
  items1 = [, ];
  const obj2 = { colors: memo, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp2.background };
  items1[0] = closure_6(LinearGradientDefault, obj2);
  const obj3 = { source: obj4, style: tmp2.background, resizeMode: "cover" };
  obj4 = { uri: _modDef12968 };
  const tmp4 = FastImageDefault;
  items1[1] = closure_6(tmp4, obj3);
  return closure_8(closure_7, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default tmp3;
