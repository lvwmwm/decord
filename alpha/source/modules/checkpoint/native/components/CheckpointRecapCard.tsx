// Module ID: 12699
// Function ID: 12700
// Name: CheckpointRecapCard
// Dependencies: [19, 17, 21, 575, 12439, 12441, 12422, 6296, 6638, 1653, 12434, 12442, 2]
// Exports: default

// Module 12699 (CheckpointRecapCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6638 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 12422 */;
import useCheckpointCharacterImagesDefault from "useCheckpointCharacterImages" /* 12439 */;
import useCheckpointCompositeRevealStyleDefault from "useCheckpointCompositeRevealStyle" /* 12441 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const _modDef1653 = tmp(1653);
const CheckpointCardFrameDefault = tmp(12434);
const CheckpointShareCardYearDefault = tmp(12442);
let View = react_native.View;
const jsx = Fragment.jsx;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default function CheckpointRecapCard(character) {
  let maxHeight;
  let maxScale;
  let obj8;
  character = character.character;
  ({ maxHeight, maxScale } = character);
  if (maxScale === undefined) {
    maxScale = 1;
  }
  let flag = character.isStepFocusTarget;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = importDefault;
  const tmp3 = useCheckpointCharacterImagesDefault(character, 240);
  let obj = react;
  let bound = maxScale;
  const tmp4 = useCheckpointCompositeRevealStyleDefault(tmp3);
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(maxHeight / 268, 0.75), maxScale);
  }
  const obj2 = character(6296);
  const characterCardColorPalette = obj2.getCharacterCardColorPalette(character);
  const items = [character];
  const obj3 = character(6296);
  const primaryBackgroundColor = obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const memo = obj.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      const obj = CheckpointCharacterAccessibilityUtils;
      checkpointCharacterAccessibilityLabel = obj.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  View = _modDef1653.View;
  ({ path: character(12442).YEAR_PATH, x: 200 - character(12442).YEAR_WIDTH, color: primaryBackgroundColor });
  CheckpointCardFrameDefault;
  CheckpointShareCardYearDefault;
  const tmp13 = <View style={tmp4}>{null}</View>;
  const tmp10 = jsx;
  const tmp14 = View;
  if (null == memo) {
    obj8 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp13 };
    const obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp13 };
  } else {
    let tmp15;
    if (flag) {
      tmp15 = context;
    }
    obj8 = { ref: tmp15, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp13 };
  }
  return tmp10(tmp14, obj8);
};
export const CARD_WIDTH = 200;
export const CARD_HEIGHT = 268;
