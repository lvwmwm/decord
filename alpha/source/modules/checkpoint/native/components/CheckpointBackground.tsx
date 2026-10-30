// Module ID: 13581
// Function ID: 13582
// Name: CheckpointBackground
// Dependencies: [19, 6061, 1072, 21, 5009, 5582, 5712, 13582, 2]
// Exports: default

// Module 13581 (CheckpointBackground)
import Constants from "Constants" /* 1072 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let closure_3 = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default function CheckpointBackground(gradientStartColor) {
  let items1;
  let obj4;
  gradientStartColor = gradientStartColor.gradientStartColor;
  if (gradientStartColor === undefined) {
    gradientStartColor = closure_3[0];
  }
  const tmp2 = closure_8();
  let items = [gradientStartColor];
  const obj = { children: items1 };
  const memo = react.useMemo(() => {
    const items = [gradientStartColor, closure_3[1]];
    return items;
  }, items);
  items1 = [, ];
  const obj2 = { colors: memo, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp2.background };
  items1[0] = closure_5(gradientStartColor(5582), obj2);
  const obj3 = { source: obj4, style: tmp2.background, resizeMode: "cover" };
  obj4 = { uri: gradientStartColor(13582) };
  const tmp4 = gradientStartColor(5712);
  items1[1] = closure_5(tmp4, obj3);
  return closure_7(closure_6, obj);
};
