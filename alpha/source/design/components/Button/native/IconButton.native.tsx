// Module ID: 7573
// Function ID: 7574
// Name: IconButton
// Dependencies: [109, 19, 21, 5092, 587, 558, 576, 7574, 5088, 5387, 2]

// Module 7573 (IconButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import Button_BaseButton from "Button/BaseButton" /* 5387 */;
import BaseIconButton3 from "BaseIconButton" /* 7574 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_3 = ["label", "grow", "accessibilityLabel", "maxFontSizeMultiplier", "accessibilityHint", "ref"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  let num;
  const labelPressable = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: num };
  num = 0;
  if (arg0) {
    num = 1;
  }
  return { labelPressable, label: { textAlign: "center" } };
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function IconButton(arg0) {
  let accessibilityHint;
  let accessibilityLabel;
  let grow;
  let items;
  let label;
  let maxFontSizeMultiplier;
  let ref;
  let tmp10;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(29);
  if (cResult[0] !== arg0) {
    ({ label, grow, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint, ref } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityHint;
    cResult[2] = accessibilityLabel;
    cResult[3] = grow;
    cResult[4] = label;
    cResult[5] = maxFontSizeMultiplier;
    cResult[6] = tmp13;
    cResult[7] = ref;
    tmp10 = ref;
    tmp9 = tmp13;
    tmp8 = maxFontSizeMultiplier;
    tmp7 = label;
    tmp6 = grow;
    tmp5 = accessibilityLabel;
    tmp4 = accessibilityHint;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp14 = closure_7(tmp6);
  if (null != tmp7) {
    if (cResult[8] === tmp8) {
      if (cResult[9] === tmp9) {
        let tmp21;
        if (cResult[10] === tmp10) {
          tmp21 = cResult[11];
        }
        if (cResult[12] === tmp7) {
          if (cResult[13] === tmp8) {
            let tmp27;
            if (cResult[14] === tmp14.label) {
              tmp27 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp9) {
                  if (cResult[19] === tmp14.labelPressable) {
                    if (cResult[20] === tmp21) {
                      let tmp30;
                      if (cResult[21] === tmp27) {
                        tmp30 = cResult[22];
                      }
                      tmp15 = tmp30;
                    }
                  }
                }
              }
            }
            const obj2 = { style: tmp14.labelPressable, variant: "none", accessibilityLabel: tmp5, accessibilityHint: tmp4, children: items };
            const BaseButton = tmp(5387).BaseButton;
            const merged = Object.assign(tmp9);
            items = [tmp21, tmp27];
            const tmp35 = metroRequire(BaseButton, obj2);
            cResult[16] = tmp4;
            cResult[17] = tmp5;
            cResult[18] = tmp9;
            cResult[19] = tmp14.labelPressable;
            cResult[20] = tmp21;
            cResult[21] = tmp27;
            cResult[22] = tmp35;
            tmp30 = tmp35;
          }
        }
        const obj3 = { style: tmp14.label, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: tmp8, children: tmp7 };
        const tmp29 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[12] = tmp7;
        cResult[13] = tmp8;
        cResult[14] = tmp14.label;
        cResult[15] = tmp29;
        tmp27 = tmp29;
      }
    }
    const obj4 = { ref: tmp10, accessibilityRole: "none", accessibilityLabel: "", size: "lg", maxFontSizeMultiplier: tmp8 };
    const BaseIconButton2 = tmp(7574).BaseIconButton;
    const merged1 = Object.assign(tmp9);
    const tmp26 = hasOwnProperty(BaseIconButton2, obj4);
    cResult[8] = tmp8;
    cResult[9] = tmp9;
    cResult[10] = tmp10;
    cResult[11] = tmp26;
    tmp21 = tmp26;
  } else {
    if (cResult[23] === tmp4) {
      if (cResult[24] === tmp5) {
        if (cResult[25] === tmp8) {
          if (cResult[26] === tmp9) {
            if (cResult[27] === tmp10) {
              tmp15 = cResult[28];
            }
          }
        }
      }
    }
    const obj5 = { ref: tmp10, accessibilityLabel: tmp5, accessibilityHint: tmp4, maxFontSizeMultiplier: tmp8 };
    const BaseIconButton = tmp(7574).BaseIconButton;
    const merged2 = Object.assign(tmp9);
    const tmp20 = hasOwnProperty(BaseIconButton, obj5);
    cResult[23] = tmp4;
    cResult[24] = tmp5;
    cResult[25] = tmp8;
    cResult[26] = tmp9;
    cResult[27] = tmp10;
    cResult[28] = tmp20;
    tmp15 = tmp20;
  }
  return tmp15;
}) : (function IconButton(grow) {
  let accessibilityHint;
  let accessibilityLabel;
  let items;
  let label;
  let maxFontSizeMultiplier;
  let ref;
  let tmp9;
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint, ref } = grow);
  grow = grow.grow;
  const merged = Object.assign(grow, Object.assign({ label: 0, grow: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, accessibilityHint: 0, ref: 0 }));
  const tmp2 = closure_7(grow);
  if (null != label) {
    const obj2 = { style: tmp2.labelPressable, variant: "none", accessibilityLabel, accessibilityHint, children: items };
    const BaseButton = Button_BaseButton.BaseButton;
    const merged1 = Object.assign(merged);
    const obj3 = { ref, accessibilityRole: "none", accessibilityLabel: "", size: "lg", maxFontSizeMultiplier };
    const BaseIconButton2 = BaseIconButton3.BaseIconButton;
    const merged2 = Object.assign(merged);
    items = [hasOwnProperty(BaseIconButton2, obj3), ];
    const obj4 = { style: tmp2.label, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    tmp9 = metroRequire(BaseButton, obj2);
  } else {
    const obj = { ref, accessibilityLabel, accessibilityHint, maxFontSizeMultiplier };
    const BaseIconButton = BaseIconButton3.BaseIconButton;
    const merged3 = Object.assign(merged);
    tmp9 = hasOwnProperty(BaseIconButton, obj);
  }
  return tmp9;
});
const result = size.fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = tmp4;
