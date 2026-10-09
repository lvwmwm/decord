// Module ID: 10744
// Function ID: 10745
// Name: SummaryActionSheetButton
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 1200, 5087, 6191, 2]

// Module 10744 (SummaryActionSheetButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingVertical: 8, width: 78 }, iconBox: obj2, icon: obj3, name: { textAlign: "center", marginTop: 8 } };
obj2 = { borderRadius: nativeDefault.radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { margin: 12, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_5 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SummaryActionSheetButton(arg0) {
  let iconSource;
  let items;
  let label;
  let onPress;
  const obj = react2;
  const cResult = obj.c(15);
  ({ label, iconSource, onPress } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === iconSource) {
    let tmp5;
    if (cResult[1] === tmp4.icon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.iconBox) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === label) {
        let tmp11;
        if (cResult[7] === tmp4.name) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === label) {
          if (cResult[10] === onPress) {
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp7) {
                let tmp14;
                if (cResult[13] === tmp11) {
                  tmp14 = cResult[14];
                }
                return tmp14;
              }
            }
          }
        }
        const obj2 = { style: tmp4.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: items };
        items = [tmp7, tmp11];
        const tmp16 = React3(Pressables.PressableOpacity, obj2);
        cResult[9] = label;
        cResult[10] = onPress;
        cResult[11] = tmp4.container;
        cResult[12] = tmp7;
        cResult[13] = tmp11;
        cResult[14] = tmp16;
        tmp14 = tmp16;
      }
      const obj3 = { style: tmp4.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
      const tmp13 = _false(Text_Text.Text, obj3);
      cResult[6] = label;
      cResult[7] = tmp4.name;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
    const obj4 = { style: tmp4.iconBox, children: tmp5 };
    const tmp10 = _false(View, obj4);
    cResult[3] = tmp4.iconBox;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const obj5 = { style: tmp4.icon, source: iconSource };
  const tmp6 = _false(native.Icon, obj5);
  cResult[0] = iconSource;
  cResult[1] = tmp4.icon;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function SummaryActionSheetButton(label) {
  let iconSource;
  let items;
  let obj3;
  let onPress;
  label = label.label;
  ({ iconSource, onPress } = label);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, accessibilityRole: "button", accessibilityLabel: label, children: items };
  const obj2 = { style: tmp.iconBox, children: _false(native.Icon, obj3) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj3 = { style: tmp.icon, source: iconSource };
  items = [_false(View, obj2), ];
  const obj4 = { style: tmp.name, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: label };
  items[1] = _false(Text_Text.Text, obj4);
  return React3(PressableOpacity, obj);
});
const result = size.fileFinishedImporting("modules/summaries/native/SummaryActionSheetButton.tsx");

export const SummaryActionSheetButton = tmp6;
