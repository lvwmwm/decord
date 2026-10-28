// Module ID: 13253
// Function ID: 13254
// Name: CheckpointRecapCard
// Dependencies: [19, 17, 21, 587, 13213, 5004, 558, 576, 8661, 6397, 13254, 2]

// Module 13253 (CheckpointRecapCard)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6397 */;
import CheckpointCardColors from "CheckpointCardColors" /* 8661 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13213 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 13254 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
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
  let maxHeight;
  let tmp11;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(18);
  ({ character, maxHeight } = arg0);
  const tmp4 = closure_9();
  let num = 1;
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
  }
  if (cResult[0] !== character) {
    const tmpResult = CheckpointCardColors;
    const cardColors = tmpResult.getCardColors(character);
    cResult[0] = character;
    cResult[1] = cardColors;
    tmp7 = cardColors;
  } else {
    tmp7 = cResult[1];
  }
  const primaryBackgroundColor = tmp7.primaryBackgroundColor;
  if (cResult[2] !== character) {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      const tmpResult2 = CheckpointCharacterAccessibilityUtils;
      checkpointCharacterAccessibilityLabel = tmpResult2.getCheckpointCharacterAccessibilityLabel(character);
    }
    cResult[2] = character;
    cResult[3] = checkpointCharacterAccessibilityLabel;
    tmp9 = checkpointCharacterAccessibilityLabel;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== primaryBackgroundColor) {
    const tmp15 = jsx(CheckpointStatNumberDefault, { value, color: primaryBackgroundColor, size: 64 });
    cResult[4] = primaryBackgroundColor;
    cResult[5] = tmp15;
    tmp11 = tmp15;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp4.year) {
    let tmp16;
    if (cResult[7] === tmp11) {
      tmp16 = cResult[8];
    }
    if (cResult[9] === character) {
      if (cResult[10] === num) {
        let tmp18;
        let tmp24;
        if (cResult[11] === tmp16) {
          tmp18 = cResult[12];
        }
        if (null == tmp9) {
          let tmp28;
          if (cResult[13] !== tmp18) {
            const tmp31 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp18}</View>;
            cResult[13] = tmp18;
            cResult[14] = tmp31;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[14];
          }
          tmp24 = tmp28;
        } else {
          if (cResult[15] === tmp9) {
            if (cResult[16] === tmp18) {
              tmp24 = cResult[17];
            }
          }
          const tmp27 = <View accessible accessibilityRole="image" accessibilityLabel={tmp9}>{tmp18}</View>;
          cResult[15] = tmp9;
          cResult[16] = tmp18;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
        return tmp24;
      }
    }
    const tmp23 = jsx(CheckpointCardFrameDefault, { character, canvasWidth: 200, canvasHeight, scale: num, clydeSize: 28, characterLayout: rect, children: tmp16 });
    cResult[9] = character;
    cResult[10] = num;
    cResult[11] = tmp16;
    cResult[12] = tmp23;
    tmp18 = tmp23;
  }
  const tmp17 = <View style={tmp4.year}>{tmp11}</View>;
  cResult[6] = tmp4.year;
  cResult[7] = tmp11;
  cResult[8] = tmp17;
  tmp16 = tmp17;
}) : (function CheckpointRecapCard(character) {
  let obj6;
  character = character.character;
  const maxHeight = character.maxHeight;
  let num = 1;
  const tmp = closure_9();
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
  }
  let obj = character(8661);
  const items = [character];
  const primaryBackgroundColor = obj.getCardColors(character).primaryBackgroundColor;
  const memo = react.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      const obj = CheckpointCharacterAccessibilityUtils;
      checkpointCharacterAccessibilityLabel = obj.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  CheckpointCardFrameDefault;
  const tmp8 = <tmp6 character={character} canvasWidth={200} canvasHeight={canvasHeight} scale={num} clydeSize={28} characterLayout={rect}>{null}</tmp6>;
  const tmp5 = jsx;
  const tmp7 = View;
  if (null == memo) {
    obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp8 };
    const obj5 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp8 };
  } else {
    obj6 = { accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp8 };
  }
  return tmp5(tmp7, obj6);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default tmp3;
