// Module ID: 14065
// Function ID: 14066
// Name: Checkpoint2026ForwardPreview
// Dependencies: [17, 21, 5012, 6738, 6391, 12603, 12605, 1653, 12600, 14066, 575, 2]
// Exports: default

// Module 14065 (Checkpoint2026ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6391 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6738 */;
import useCheckpointCharacterImagesDefault from "useCheckpointCharacterImages" /* 12603 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let items;
let obj2;
let tmp2;
const ExperimentalCheckpointIcon2 = tmp2(14066);
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let obj = { preview: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, layer: obj2 };
obj2 = { transform: items };
items = [{ translateY: -2 }];
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx");

export default function Checkpoint2026ForwardPreview(checkpointData) {
  let items;
  let items1;
  let tmp9Result;
  checkpointData = checkpointData.checkpointData;
  const tmp = closure_6();
  const character = checkpointData.character;
  const obj = CheckpointExperiments;
  const isCheckpointCardEnabled = obj.useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  const obj2 = CheckpointCardColors;
  const secondaryBackgroundColor = obj2.getCardColors(checkpointData.cardColorPalette).secondaryBackgroundColor;
  let tmp9Result2 = null;
  const tmp6 = useCheckpointCharacterImagesDefault(character, 56);
  if (isCheckpointCardEnabled) {
    const obj3 = { style: items, children: tmp9Result };
    items = [tmp.preview, ];
    const obj4 = { backgroundColor: secondaryBackgroundColor };
    items[1] = obj4;
    const tmp10 = React3;
    if (null != character) {
      const obj5 = { style: items1, children: null };
      items1 = [absoluteFill.absoluteFill, tmp.layer, tmp7];
      const View = tmp5(1653).View;
      tmp9Result = tmp9(View, obj5);
    } else {
      const obj7 = { color: nativeDefault.colors.BLACK };
      const ExperimentalCheckpointIcon = ExperimentalCheckpointIcon2.ExperimentalCheckpointIcon;
      tmp9Result = tmp9(ExperimentalCheckpointIcon, obj7);
    }
    tmp9Result2 = tmp9(tmp10, obj3);
  }
  return tmp9Result2;
};
