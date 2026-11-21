// Module ID: 7591
// Function ID: 7592
// Name: IconButton
// Dependencies: [19, 21, 4913, 575, 5520, 7050, 5504, 2]
// Exports: IconButton

// Module 7591 (IconButton)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5504 */;
import Button_BaseButton from "Button/BaseButton" /* 5520 */;
import BaseIconButton3 from "BaseIconButton" /* 7050 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles((arg0) => {
  let num;
  const labelPressable = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: num };
  num = 0;
  if (arg0) {
    num = 1;
  }
  return { labelPressable, label: { textAlign: "center" } };
});
const result = size.fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export function IconButton(grow) {
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
  const tmp2 = closure_5(grow);
  if (null != label) {
    const obj2 = { style: tmp2.labelPressable, variant: "none", accessibilityLabel, accessibilityHint, children: items };
    const BaseButton = Button_BaseButton.BaseButton;
    const merged1 = Object.assign(merged);
    const obj3 = { ref, accessibilityRole: "none", accessibilityLabel: "", size: "lg", maxFontSizeMultiplier };
    const BaseIconButton2 = BaseIconButton3.BaseIconButton;
    const merged2 = Object.assign(merged);
    items = [_false(BaseIconButton2, obj3), ];
    const obj4 = { style: tmp2.label, variant: "body-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items[1] = _false(Text_Text.Text, obj4);
    tmp9 = React3(BaseButton, obj2);
  } else {
    const obj = { ref, accessibilityLabel, accessibilityHint, maxFontSizeMultiplier };
    const BaseIconButton = BaseIconButton3.BaseIconButton;
    const merged3 = Object.assign(merged);
    tmp9 = _false(BaseIconButton, obj);
  }
  return tmp9;
}
