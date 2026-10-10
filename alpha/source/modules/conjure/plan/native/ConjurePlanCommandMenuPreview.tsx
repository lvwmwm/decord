// Module ID: 17164
// Function ID: 17165
// Name: ConjurePlanCommandMenuPreview
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 12831, 1126, 5088, 6156, 1415, 2]

// Module 17164 (ConjurePlanCommandMenuPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import ArrowAngleLeftUpIcon2 from "ArrowAngleLeftUpIcon" /* 12831 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheet: obj2, row: obj3, muted: { opacity: 0.5 }, highlighted: obj4, label: { flexShrink: 1 }, appIcon: size };
obj2 = { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
obj4 = { borderColor: nativeDefault.colors.BORDER_FOCUS };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.sm };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandMenuPreview(target) {
  let appIconSrc;
  let commandName;
  let items;
  let items1;
  let items3;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(30);
  ({ commandName, appIconSrc } = target);
  target = target.target;
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.muted) {
    let tmp6;
    let tmp8;
    let tmp12;
    let tmp14;
    if (cResult[1] === tmp4.row) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== ("message" === target)) {
      let tmp9 = null;
      if ("message" === target) {
        const obj2 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
        const ArrowAngleLeftUpIcon = tmp(12831).ArrowAngleLeftUpIcon;
        tmp9 = React3(ArrowAngleLeftUpIcon, obj2);
      }
      cResult[3] = "message" === target;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== ("message" === target)) {
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      const stringResult = string("message" === target ? t["5IEsGx"] : t.LYju5J);
      cResult[5] = "message" === target;
      cResult[6] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== tmp12) {
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: tmp12 };
      const tmp16 = React3(Text_Text.Text, obj3);
      cResult[7] = tmp12;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      if (cResult[10] === tmp8) {
        let tmp17;
        if (cResult[11] === tmp14) {
          tmp17 = cResult[12];
        }
        if (cResult[13] === tmp4.highlighted) {
          let tmp21;
          if (cResult[14] === tmp4.row) {
            tmp21 = cResult[15];
          }
          if (cResult[16] === appIconSrc) {
            let tmp22;
            if (cResult[17] === tmp4.appIcon) {
              tmp22 = cResult[18];
            }
            if (cResult[19] === commandName) {
              let tmp27;
              if (cResult[20] === tmp4.label) {
                tmp27 = cResult[21];
              }
              if (cResult[22] === tmp21) {
                if (cResult[23] === tmp22) {
                  let tmp30;
                  if (cResult[24] === tmp27) {
                    tmp30 = cResult[25];
                  }
                  if (cResult[26] === tmp4.sheet) {
                    if (cResult[27] === tmp30) {
                      let tmp34;
                      if (cResult[28] === tmp17) {
                        tmp34 = cResult[29];
                      }
                      return tmp34;
                    }
                  }
                  const obj4 = { style: tmp5, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
                  items = [tmp17, tmp30];
                  const tmp37 = hasOwnProperty(View, obj4);
                  cResult[26] = tmp4.sheet;
                  cResult[27] = tmp30;
                  cResult[28] = tmp17;
                  cResult[29] = tmp37;
                  tmp34 = tmp37;
                }
              }
              const obj5 = { style: tmp21, children: items1 };
              items1 = [tmp22, tmp27];
              const tmp33 = hasOwnProperty(View, obj5);
              cResult[22] = tmp21;
              cResult[23] = tmp22;
              cResult[24] = tmp27;
              cResult[25] = tmp33;
              tmp30 = tmp33;
            }
            const obj6 = { variant: "text-sm/medium", color: "text-strong", style: tmp4.label, children: commandName };
            const tmp29 = React3(Text_Text.Text, obj6);
            cResult[19] = commandName;
            cResult[20] = tmp4.label;
            cResult[21] = tmp29;
            tmp27 = tmp29;
          }
          let tmp23 = null;
          if (null != appIconSrc) {
            const obj7 = { source: tmpResult.makeSource(appIconSrc), style: tmp4.appIcon };
            const tmp26 = FastImageDefault;
            tmpResult = AvatarUtils;
            tmp23 = React3(tmp26, obj7);
          }
          cResult[16] = appIconSrc;
          cResult[17] = tmp4.appIcon;
          cResult[18] = tmp23;
          tmp22 = tmp23;
        }
        const items2 = [, ];
        ({ row: arr3[0], highlighted: arr3[1] } = tmp4);
        cResult[13] = tmp4.highlighted;
        cResult[14] = tmp4.row;
        cResult[15] = items2;
        tmp21 = items2;
      }
    }
    const obj8 = { style: tmp6, children: items3 };
    items3 = [tmp8, tmp14];
    const tmp20 = hasOwnProperty(View, obj8);
    cResult[9] = tmp6;
    cResult[10] = tmp8;
    cResult[11] = tmp14;
    cResult[12] = tmp20;
    tmp17 = tmp20;
  }
  const items4 = [, ];
  ({ row: arr[0], muted: arr[1] } = tmp4);
  cResult[0] = tmp4.muted;
  cResult[1] = tmp4.row;
  cResult[2] = items4;
  tmp6 = items4;
}) : (function ConjurePlanCommandMenuPreview(appIconSrc) {
  let commandName;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let target;
  let tmp11Result;
  appIconSrc = appIconSrc.appIconSrc;
  ({ target, commandName } = appIconSrc);
  const tmp = closure_6();
  const obj2 = { style: items, children: items1 };
  items = [, ];
  const obj = { style: tmp.sheet, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  ({ row: arr[0], muted: arr[1] } = tmp);
  let tmp5 = null;
  if ("message" === target) {
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
    const ArrowAngleLeftUpIcon = ArrowAngleLeftUpIcon2.ArrowAngleLeftUpIcon;
    tmp5 = React3(ArrowAngleLeftUpIcon, obj3);
  }
  items1 = [tmp5, ];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  const obj4 = { variant: "text-sm/medium", color: "text-default", children: string("message" === target ? t["5IEsGx"] : t.LYju5J) };
  items1[1] = React3(Text, obj4);
  items2 = [hasOwnProperty(View, obj2), ];
  const obj5 = { style: items3, children: items4 };
  items3 = [, ];
  ({ row: arr4[0], highlighted: arr4[1] } = tmp);
  let tmp10Result = null;
  if (null != appIconSrc) {
    const obj6 = { source: tmp11Result.makeSource(appIconSrc), style: tmp.appIcon };
    const tmp15 = FastImageDefault;
    tmp11Result = AvatarUtils;
    tmp10Result = tmp10(tmp15, obj6);
  }
  items4 = [tmp10Result, ];
  const obj7 = { variant: "text-sm/medium", color: "text-strong", style: tmp.label, children: commandName };
  items4[1] = React3(Text_Text.Text, obj7);
  items2[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandMenuPreview.tsx");

export default tmp5;
