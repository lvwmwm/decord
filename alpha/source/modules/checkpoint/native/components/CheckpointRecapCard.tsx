// Module ID: 12660
// Function ID: 12661
// Name: CheckpointRecapCard
// Dependencies: [19, 17, 21, 575, 12384, 5874, 6216, 12396, 12400, 2]
// Exports: default

// Module 12660 (CheckpointRecapCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6216 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 12384 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const CheckpointCardFrameDefault = tmp(12396);
const CheckpointShareCardYearDefault = tmp(12400);
const View = react_native.View;
const jsx = Fragment.jsx;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default function CheckpointRecapCard(character) {
  let maxHeight;
  let maxScale;
  let obj7;
  character = character.character;
  ({ maxHeight, maxScale } = character);
  if (maxScale === undefined) {
    maxScale = 1;
  }
  let flag = character.isStepFocusTarget;
  if (flag === undefined) {
    flag = false;
  }
  let obj = react;
  const tmp = importDefault;
  let bound = maxScale;
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(maxHeight / 268, 0.75), maxScale);
  }
  const obj2 = character(5874);
  const characterCardColorPalette = obj2.getCharacterCardColorPalette(character);
  const items = [character];
  const obj3 = character(5874);
  const primaryBackgroundColor = obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const memo = obj.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      const obj = CheckpointCharacterAccessibilityUtils;
      checkpointCharacterAccessibilityLabel = obj.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  ({ path: character(12400).YEAR_PATH, x: 200 - character(12400).YEAR_WIDTH, color: primaryBackgroundColor });
  CheckpointCardFrameDefault;
  CheckpointShareCardYearDefault;
  const tmp11 = <tmpResult character={character} cardColorPalette={characterCardColorPalette} canvasWidth={200} canvasHeight={268} scale={bound} clydeSize={28} characterLayout={rect}>{null}</tmpResult>;
  const tmp12 = View;
  const tmp8 = jsx;
  if (null == memo) {
    obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp11 };
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp11 };
  } else {
    let tmp13;
    if (flag) {
      tmp13 = context;
    }
    obj7 = { ref: tmp13, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp11 };
  }
  return tmp8(tmp12, obj7);
};
export const CARD_WIDTH = 200;
export const CARD_HEIGHT = 268;
