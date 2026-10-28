// Module ID: 16848
// Function ID: 16849
// Name: LabeledDataBlock
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 5270, 6944, 1199, 2]

// Module 16848 (LabeledDataBlock)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1199 */;
import Text_Text from "Text/Text" /* 5270 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { marginRight: 4 }, titleSection: { flexDirection: "row", alignItems: "center", marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function LabeledDataBlock(arg0) {
  let Icon;
  let children;
  let icon;
  let items;
  let items1;
  let obj6;
  let onPressIcon;
  let style;
  let title;
  const obj = react2;
  const cResult = obj.c(19);
  ({ children, title, style, icon, onPressIcon } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.title) {
      let tmp6;
      if (cResult[4] === title) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === icon) {
        let tmp9;
        if (cResult[7] === onPressIcon) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.titleSection) {
          if (cResult[10] === tmp6) {
            let tmp13;
            let tmp17;
            if (cResult[11] === tmp9) {
              tmp13 = cResult[12];
            }
            if (cResult[13] !== children) {
              let tmp18 = children;
              if (typeof children === "string") {
                const obj2 = { variant: "heading-xl/medium", color: "mobile-text-heading-primary", children };
                tmp18 = _false(tmp(5270).Text, obj2);
              }
              cResult[13] = children;
              cResult[14] = tmp18;
              tmp17 = tmp18;
            } else {
              tmp17 = cResult[14];
            }
            if (cResult[15] === tmp5) {
              if (cResult[16] === tmp13) {
                let tmp19;
                if (cResult[17] === tmp17) {
                  tmp19 = cResult[18];
                }
                return tmp19;
              }
            }
            const obj3 = { style: tmp5, children: items };
            items = [tmp13, tmp17];
            const tmp22 = React3(View, obj3);
            cResult[15] = tmp5;
            cResult[16] = tmp13;
            cResult[17] = tmp17;
            cResult[18] = tmp22;
            tmp19 = tmp22;
          }
        }
        const obj4 = { style: tmp4.titleSection, children: items1 };
        items1 = [tmp6, tmp9];
        const tmp16 = React3(View, obj4);
        cResult[9] = tmp4.titleSection;
        cResult[10] = tmp6;
        cResult[11] = tmp9;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      let tmp11 = null != icon;
      if (tmp11) {
        const obj5 = { accessibilityRole: "button", onPress: onPressIcon, children: _false(Icon, obj6) };
        const PressableOpacity = tmp(6944).PressableOpacity;
        obj6 = { size: native.Icon.Sizes.SMALL, source: icon };
        Icon = tmp(1199).Icon;
        tmp11 = _false(PressableOpacity, obj5);
      }
      cResult[6] = icon;
      cResult[7] = onPressIcon;
      cResult[8] = tmp11;
      tmp9 = tmp11;
    }
    const obj7 = { style: tmp4.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
    const tmp8 = _false(Text_Text.Text, obj7);
    cResult[3] = tmp4.title;
    cResult[4] = title;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items2 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items2;
  tmp5 = items2;
}) : (function LabeledDataBlock(arg0) {
  let Icon;
  let children;
  let icon;
  let items;
  let items1;
  let items2;
  let obj5;
  let onPressIcon;
  let style;
  let title;
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = closure_5();
  const obj = { style: items, children: items2 };
  items = [tmp.container, style];
  const obj2 = { style: tmp.titleSection, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  items1[0] = _false(Text_Text.Text, obj3);
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj4 = { accessibilityRole: "button", onPress: onPressIcon, children: _false(Icon, obj5) };
    const PressableOpacity = tmp5(6944).PressableOpacity;
    obj5 = { size: native.Icon.Sizes.SMALL, source: icon };
    Icon = tmp5(1199).Icon;
    tmp4Result = tmp4(PressableOpacity, obj4);
  }
  items1[1] = tmp4Result;
  items2 = [React3(View, obj2), ];
  let tmp4Result2 = children;
  if (typeof children === "string") {
    const obj6 = { variant: "heading-xl/medium", color: "mobile-text-heading-primary", children };
    tmp4Result2 = tmp4(tmp5(5270).Text, obj6);
  }
  items2[1] = tmp4Result2;
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default tmp4;
