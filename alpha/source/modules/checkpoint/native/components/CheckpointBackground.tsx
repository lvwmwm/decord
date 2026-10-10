// Module ID: 15991
// Function ID: 15992
// Name: CheckpointBackground
// Dependencies: [5437, 1085, 21, 5092, 558, 576, 5391, 15992, 6156, 2]

// Module 15991 (CheckpointBackground)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import CheckpointConstants from "CheckpointConstants" /* 5437 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef15992 from "module_15992" /* 15992 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointBackground() {
  let items;
  let tmp10;
  let tmp12;
  let tmp4;
  const obj = react;
  const cResult = obj.c(8);
  const tmp3 = closure_8();
  if (cResult[0] !== tmp3.background) {
    const obj3 = { colors, start: null, end: null, style: tmp3.background };
    ({ START: obj2.start, END: obj2.end } = VerticalGradient);
    const tmp9 = hasOwnProperty(LinearGradientDefault, obj3);
    cResult[0] = tmp3.background;
    cResult[1] = tmp9;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { uri: _modDef15992 };
    cResult[2] = obj4;
    tmp10 = obj4;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp3.background) {
    const obj5 = { source: tmp10, style: tmp3.background, resizeMode: "cover" };
    const tmp15 = hasOwnProperty(FastImageDefault, obj5);
    cResult[3] = tmp3.background;
    cResult[4] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    let tmp16;
    if (cResult[6] === tmp12) {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj9 = { children: items };
  items = [tmp4, tmp12];
  const tmp17 = metroImportDefault(metroRequire, obj9);
  cResult[5] = tmp4;
  cResult[6] = tmp12;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function CheckpointBackground() {
  let items;
  let obj4;
  const tmp = closure_8();
  const obj = { children: items };
  items = [, ];
  const obj2 = { colors, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.background };
  items[0] = hasOwnProperty(LinearGradientDefault, obj2);
  const obj3 = { source: obj4, style: tmp.background, resizeMode: "cover" };
  obj4 = { uri: _modDef15992 };
  const tmp2 = FastImageDefault;
  items[1] = hasOwnProperty(tmp2, obj3);
  return metroImportDefault(metroRequire, obj);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default tmp3;
