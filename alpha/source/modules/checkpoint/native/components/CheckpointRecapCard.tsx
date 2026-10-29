// Module ID: 13487
// Function ID: 13488
// Name: CheckpointRecapCard
// Dependencies: [19, 17, 21, 587, 13440, 5005, 558, 576, 13259, 6079, 6421, 13239, 2]

// Module 13487 (CheckpointRecapCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6079 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6421 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 13239 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 13259 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13440 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointStatNumber = CheckpointStatNumberDefault;

let items;
let rect1;
const View = react_native.View;
const jsx = Fragment.jsx;
let c6 = 268;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
let c8 = 2026;
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
let obj = { year: rect1 };
rect1 = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: items };
items = [{ rotate: "90deg" }];
let closure_9 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointRecapCard(arg0) {
  let character;
  let isStepFocusTarget;
  let maxHeight;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp16;
  const obj = react2;
  const cResult = obj.c(21);
  ({ character, maxHeight, isStepFocusTarget } = arg0);
  const tmp4 = undefined !== isStepFocusTarget && isStepFocusTarget;
  const tmp5 = closure_9();
  let num = 1;
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
  }
  if (cResult[0] !== character) {
    const tmpResult = CheckpointCardColors;
    const characterCardColorPalette = tmpResult.getCharacterCardColorPalette(character);
    const tmpResult3 = CheckpointCardColors;
    const cardColors = tmpResult3.getCardColors(characterCardColorPalette);
    cResult[0] = character;
    cResult[1] = characterCardColorPalette;
    cResult[2] = cardColors;
    tmp11 = cardColors;
    tmp10 = characterCardColorPalette;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const primaryBackgroundColor = tmp11.primaryBackgroundColor;
  if (cResult[3] !== character) {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      const tmpResult4 = CheckpointCharacterAccessibilityUtils;
      checkpointCharacterAccessibilityLabel = tmpResult4.getCheckpointCharacterAccessibilityLabel(character);
    }
    cResult[3] = character;
    cResult[4] = checkpointCharacterAccessibilityLabel;
    tmp14 = checkpointCharacterAccessibilityLabel;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== primaryBackgroundColor) {
    const tmp19 = jsx(CheckpointStatNumberDefault, { value, color: primaryBackgroundColor, size: 64 });
    cResult[5] = primaryBackgroundColor;
    cResult[6] = tmp19;
    tmp16 = tmp19;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === tmp5.year) {
    let tmp20;
    if (cResult[8] === tmp16) {
      tmp20 = cResult[9];
    }
    if (cResult[10] === tmp10) {
      if (cResult[11] === character) {
        if (cResult[12] === num) {
          let tmp22;
          if (cResult[13] === tmp20) {
            tmp22 = cResult[14];
          }
          if (null == tmp14) {
            let tmp32;
            if (cResult[15] !== tmp22) {
              const tmp35 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp22}</View>;
              cResult[15] = tmp22;
              cResult[16] = tmp35;
              tmp32 = tmp35;
            } else {
              tmp32 = cResult[16];
            }
            return tmp32;
          } else {
            let tmp27;
            if (tmp4) {
              tmp27 = context;
            }
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp22) {
                let tmp28;
                if (cResult[19] === tmp27) {
                  tmp28 = cResult[20];
                }
                return tmp28;
              }
            }
            const tmp31 = <View ref={tmp27} accessible accessibilityRole="image" accessibilityLabel={tmp14}>{tmp22}</View>;
            cResult[17] = tmp14;
            cResult[18] = tmp22;
            cResult[19] = tmp27;
            cResult[20] = tmp31;
            tmp28 = tmp31;
          }
        }
      }
    }
    const tmp26 = jsx(CheckpointCardFrameDefault, { character, cardColorPalette: tmp10, canvasWidth: 200, canvasHeight, scale: num, clydeSize: 28, characterLayout: rect, children: tmp20 });
    cResult[10] = tmp10;
    cResult[11] = character;
    cResult[12] = num;
    cResult[13] = tmp20;
    cResult[14] = tmp26;
    tmp22 = tmp26;
  }
  const tmp21 = <View style={tmp5.year}>{tmp16}</View>;
  cResult[7] = tmp5.year;
  cResult[8] = tmp16;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : (function CheckpointRecapCard(character) {
  let isStepFocusTarget;
  let maxHeight;
  let obj8;
  character = character.character;
  ({ maxHeight, isStepFocusTarget } = character);
  if (isStepFocusTarget === undefined) {
    isStepFocusTarget = false;
  }
  let obj = react;
  const tmp = closure_9();
  let num = 1;
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
  }
  const obj2 = character(6079);
  const characterCardColorPalette = obj2.getCharacterCardColorPalette(character);
  const items = [character];
  const obj3 = character(6079);
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
  const tmp12 = <tmp2Result character={character} cardColorPalette={characterCardColorPalette} canvasWidth={200} canvasHeight={canvasHeight} scale={num} clydeSize={28} characterLayout={rect}>{null}</tmp2Result>;
  const tmp11 = View;
  const tmp9 = jsx;
  if (null == memo) {
    obj8 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp12 };
    const obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp12 };
  } else {
    let tmp13;
    if (isStepFocusTarget) {
      tmp13 = context;
    }
    obj8 = { ref: tmp13, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp12 };
  }
  return tmp9(tmp11, obj8);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default tmp3;
