// Module ID: 15256
// Function ID: 15257
// Name: CheckpointBackground
// Dependencies: [17, 5061, 1074, 21, 4836, 5293, 15257, 2]
// Exports: default

// Module 15256 (CheckpointBackground)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import _modDef15257 from "module_15257" /* 15257 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
const colors = CheckpointConstants.CHECKPOINT_BACKGROUND_GRADIENT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ background: { position: "absolute", width: "100%", height: "100%" } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointBackground.tsx");

export default function CheckpointBackground() {
  let items;
  const tmp = closure_8();
  const obj = { children: items };
  items = [, ];
  const obj2 = { colors, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.background };
  items[0] = hasOwnProperty(LinearGradientDefault, obj2);
  const obj3 = { source: { uri: _modDef15257 }, style: tmp.background, resizeMode: "cover" };
  ({ uri: _modDef15257 });
  items[1] = hasOwnProperty(Image, obj3);
  return metroImportDefault(metroRequire, obj);
};
