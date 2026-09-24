// Module ID: 17275
// Function ID: 17276
// Name: YouScreenNavIcon
// Dependencies: [19, 17, 21, 16758, 580, 9124, 4790, 558, 568, 1119, 4786, 9214, 2]

// Module 17275 (YouScreenNavIcon)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import ClipViewDefault from "ClipView" /* 9124 */;
import native from "native" /* 9214 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const md = fn(16758).ICON_SIZE.md;
const result = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
let c7 = "text-default";
const point = { shape: fn(9124).CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
const createStyles = fn(4790);
const obj = { container: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result }, label: null, dot: null };
let obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
obj.label = { marginTop: nativeDefault.space.PX_4 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
obj.dot = size;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_4 };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default noop.memo(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(19);
  ({ onPress, IconComponent, accessibilityLabel, label, showRedDot } = arg0);
  const tmp5 = closure_9();
  if (cResult[0] !== IconComponent) {
    const obj2 = { size: "md", color: TEXT_DEFAULT };
    const tmp9 = React4(IconComponent, obj2);
    cResult[0] = IconComponent;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp5.dot) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        let tmp18;
        if (tmp4) {
          const obj3 = { text: null };
          const intl = tmp(1119).intl;
          obj3.text = intl.string(tmp(1119).t.y2b7CA);
          tmp18 = obj3;
        }
        cResult[6] = tmp4;
        cResult[7] = tmp18;
        let tmp17 = tmp18;
      } else {
        tmp17 = cResult[7];
      }
      if (label == null) {
        label = accessibilityLabel;
      }
      if (cResult[8] === tmp5.label) {
        if (cResult[9] === label) {
          let tmp20 = cResult[10];
        }
        if (cResult[11] === accessibilityLabel) {
          if (cResult[12] === tmp17) {
            if (cResult[13] === tmp10) {
              if (cResult[14] === onPress) {
                if (cResult[15] === ref) {
                  if (cResult[16] === tmp5.container) {
                    if (cResult[17] === tmp20) {
                      let tmp25 = cResult[18];
                    }
                    return tmp25;
                  }
                }
              }
            }
          }
        }
        const obj4 = { ref, style: tmp5.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp17, onPress, hitSlop: nativeDefault.space.PX_8, children: null };
        items = [tmp10, tmp20];
        obj4.children = items;
        const tmp28 = hasOwnProperty(tmp(9214).PressableScale, obj4);
        cResult[11] = accessibilityLabel;
        cResult[12] = tmp17;
        cResult[13] = tmp10;
        cResult[14] = onPress;
        cResult[15] = ref;
        cResult[16] = tmp5.container;
        cResult[17] = tmp20;
        cResult[18] = tmp28;
        tmp25 = tmp28;
      }
      const obj5 = { style: tmp5.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, children: label };
      const tmp23 = React4(tmp(4786).Text, obj5);
      cResult[8] = tmp5.label;
      cResult[9] = label;
      cResult[10] = tmp23;
      tmp20 = tmp23;
    }
  }
  let tmp11 = tmp6;
  if (undefined !== showRedDot && showRedDot) {
    const obj6 = { children: null };
    const obj7 = { cutouts: items, children: tmp6 };
    const items1 = [React4(ClipViewDefault, obj7), ];
    const obj8 = { style: tmp5.dot };
    items1[1] = React4(View, obj8);
    obj6.children = items1;
    tmp11 = hasOwnProperty(View, obj6);
  }
  cResult[2] = tmp6;
  cResult[3] = undefined !== showRedDot && showRedDot;
  cResult[4] = tmp5.dot;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0, ref) => {
  ({ accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const tmp = closure_9();
  const tmp3 = React4(IconComponent, { size: "md", color: TEXT_DEFAULT });
  let tmp4 = tmp3;
  if (showRedDot) {
    const obj2 = { children: null };
    const obj3 = { cutouts: items, children: tmp3 };
    items = [tmp2(ClipViewDefault, obj3), ];
    const obj4 = { style: tmp.dot };
    items[1] = tmp2(View, obj4);
    obj2.children = items;
    tmp4 = hasOwnProperty(View, obj2);
  }
  let tmp10;
  if (showRedDot) {
    const obj5 = { text: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t.y2b7CA);
    tmp10 = obj5;
  }
  const obj6 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: nativeDefault.space.PX_8, children: null };
  const items1 = [tmp4, ];
  const obj7 = { style: tmp.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj7.children = label;
  items1[1] = React4(Text_Text.Text, obj7);
  obj6.children = items1;
  return hasOwnProperty(native.PressableScale, obj6);
})));
