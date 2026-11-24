// Module ID: 12507
// Function ID: 12508
// Name: CheckpointBackground
// Dependencies: [19, 5969, 1071, 21, 4913, 5468, 5600, 12499, 2]
// Exports: default

// Module 12507 (CheckpointBackground)
import Constants from "Constants" /* 1071 */;
import CheckpointConstants from "CheckpointConstants" /* 5969 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
  items1[0] = closure_5(gradientStartColor(5468), obj2);
  const obj3 = { source: obj4, style: tmp2.background, resizeMode: "cover" };
  obj4 = { uri: gradientStartColor(12499) };
  const tmp4 = gradientStartColor(5600);
  items1[1] = closure_5(tmp4, obj3);
  return closure_7(closure_6, obj);
};
