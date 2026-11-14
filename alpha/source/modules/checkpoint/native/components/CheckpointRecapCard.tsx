// Module ID: 14532
// Function ID: 14533
// Name: CheckpointRecapCard
// Dependencies: [19, 17, 21, 575, 14479, 5306, 14266, 6401, 6743, 14279, 2]
// Exports: default

// Module 14532 (CheckpointRecapCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6743 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 14266 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 14279 */;
import react from "react" /* 19 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 14479 */;
import createStyles from "createStyles" /* 5306 */;
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
  const tmp = closure_7();
  let bound = maxScale;
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(maxHeight / 268, 0.75), maxScale);
  }
  const obj2 = character(6401);
  const characterCardColorPalette = obj2.getCharacterCardColorPalette(character);
  const items = [character];
  const obj3 = character(6401);
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
  const tmp12 = <tmp2Result character={character} cardColorPalette={characterCardColorPalette} canvasWidth={200} canvasHeight={268} scale={bound} clydeSize={28} characterLayout={rect}>{null}</tmp2Result>;
  const tmp11 = View;
  const tmp9 = jsx;
  if (null == memo) {
    obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp12 };
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp12 };
  } else {
    let tmp13;
    if (flag) {
      tmp13 = context;
    }
    obj7 = { ref: tmp13, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp12 };
  }
  return tmp9(tmp11, obj7);
};
