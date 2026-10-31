// Module ID: 13672
// Function ID: 13673
// Name: CheckpointRecapCard
// Dependencies: [19, 17, 21, 575, 13627, 5014, 13614, 6091, 6433, 13424, 2]
// Exports: default

// Module 13672 (CheckpointRecapCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6433 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 13424 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 13614 */;
import react from "react" /* 19 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 13627 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let items;
let rect1;
const View = react_native.View;
const jsx = Fragment.jsx;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
let obj = { year: rect1 };
rect1 = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: items };
items = [{ rotate: "90deg" }];
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default function CheckpointRecapCard(character) {
  let isStepFocusTarget;
  let maxHeight;
  let obj7;
  character = character.character;
  ({ maxHeight, isStepFocusTarget } = character);
  if (isStepFocusTarget === undefined) {
    isStepFocusTarget = false;
  }
  let obj = react;
  const tmp = closure_7();
  let num = 1;
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / 268, 0.75), 1);
  }
  const obj2 = character(6091);
  const characterCardColorPalette = obj2.getCharacterCardColorPalette(character);
  const items = [character];
  const obj3 = character(6091);
  const primaryBackgroundColor = obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  const memo = obj.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      const obj = CheckpointCharacterAccessibilityUtils;
      checkpointCharacterAccessibilityLabel = obj.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  CheckpointCardFrameDefault;
  const tmp11 = <tmp2Result character={character} cardColorPalette={characterCardColorPalette} canvasWidth={200} canvasHeight={268} scale={num} clydeSize={28} characterLayout={rect}>{null}</tmp2Result>;
  const tmp10 = View;
  const tmp8 = jsx;
  if (null == memo) {
    obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp11 };
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp11 };
  } else {
    let tmp12;
    if (isStepFocusTarget) {
      tmp12 = context;
    }
    obj7 = { ref: tmp12, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp11 };
  }
  return tmp8(tmp10, obj7);
};
