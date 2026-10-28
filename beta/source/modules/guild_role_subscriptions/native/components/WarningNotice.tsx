// Module ID: 19245
// Function ID: 19246
// Name: WarningNotice
// Dependencies: [19, 17, 21, 5003, 587, 558, 576, 7044, 5266, 5276, 2]

// Module 19245 (WarningNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5266 */;
import components_Button_Button from "components/Button/Button" /* 5276 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7044 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, horizontalContainer: { flexDirection: "row", alignItems: "center" }, message: { flex: 1, marginStart: 10, textAlignVertical: "center" }, actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" }, containerYellow: obj3, alertIcon: { alignSelf: "flex-start", width: 20, height: 20 } };
obj2 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function WarningNotice(arg0) {
  let ctaLabel;
  let disabled;
  let items;
  let items1;
  let notice;
  let obj5;
  let onClick;
  let style;
  let submitting;
  const obj = react2;
  const cResult = obj.c(23);
  ({ style, notice, ctaLabel, onClick, submitting, disabled } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      let tmp5;
      let tmp6;
      if (cResult[2] === tmp4.containerYellow) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp4.alertIcon) {
        const obj2 = { style: tmp4.alertIcon, size: "custom", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, secondaryColor: nativeDefault.colors.WHITE };
        const CircleErrorIcon = tmp(7044).CircleErrorIcon;
        const tmp9 = React3(CircleErrorIcon, obj2);
        cResult[4] = tmp4.alertIcon;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[6] === notice) {
        let tmp10;
        if (cResult[7] === tmp4.message) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp4.horizontalContainer) {
          if (cResult[10] === tmp6) {
            let tmp13;
            if (cResult[11] === tmp10) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === ctaLabel) {
              if (cResult[14] === disabled) {
                if (cResult[15] === onClick) {
                  if (cResult[16] === tmp4.actionButtonWrapper) {
                    let tmp17;
                    if (cResult[17] === submitting) {
                      tmp17 = cResult[18];
                    }
                    if (cResult[19] === tmp5) {
                      if (cResult[20] === tmp13) {
                        let tmp22;
                        if (cResult[21] === tmp17) {
                          tmp22 = cResult[22];
                        }
                        return tmp22;
                      }
                    }
                    const obj3 = { style: tmp5, children: items };
                    items = [tmp13, tmp17];
                    const tmp25 = hasOwnProperty(View, obj3);
                    cResult[19] = tmp5;
                    cResult[20] = tmp13;
                    cResult[21] = tmp17;
                    cResult[22] = tmp25;
                    tmp22 = tmp25;
                  }
                }
              }
            }
            let tmp19 = null != onClick && null != ctaLabel;
            if (tmp19) {
              const obj4 = { style: tmp4.actionButtonWrapper, children: React3(components_Button_Button.Button, obj5) };
              obj5 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
              tmp19 = React3(View, obj4);
            }
            cResult[13] = ctaLabel;
            cResult[14] = disabled;
            cResult[15] = onClick;
            cResult[16] = tmp4.actionButtonWrapper;
            cResult[17] = submitting;
            cResult[18] = tmp19;
            tmp17 = tmp19;
          }
        }
        const obj6 = { style: tmp4.horizontalContainer, children: items1 };
        items1 = [tmp6, tmp10];
        const tmp16 = hasOwnProperty(View, obj6);
        cResult[9] = tmp4.horizontalContainer;
        cResult[10] = tmp6;
        cResult[11] = tmp10;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      const obj7 = { style: tmp4.message, variant: "text-sm/medium", color: "text-feedback-warning", children: notice };
      const tmp12 = React3(Text_Text.Text, obj7);
      cResult[6] = notice;
      cResult[7] = tmp4.message;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
  }
  const items2 = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp4);
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = tmp4.containerYellow;
  cResult[3] = items2;
  tmp5 = items2;
}) : (function WarningNotice(arg0) {
  let ctaLabel;
  let disabled;
  let items;
  let items1;
  let items2;
  let notice;
  let obj6;
  let onClick;
  let style;
  let submitting;
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: items2 };
  items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  const obj2 = { style: tmp.horizontalContainer, children: items1 };
  const obj3 = { style: tmp.alertIcon, size: "custom", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, secondaryColor: nativeDefault.colors.WHITE };
  const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
  items1 = [React3(CircleErrorIcon, obj3), ];
  const obj4 = { style: tmp.message, variant: "text-sm/medium", color: "text-feedback-warning", children: notice };
  items1[1] = React3(Text_Text.Text, obj4);
  items2 = [hasOwnProperty(View, obj2), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  const tmp2 = hasOwnProperty;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: React3(components_Button_Button.Button, obj6) };
    obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    tmp4Result = tmp4(tmp3, obj5);
  }
  items2[1] = tmp4Result;
  return tmp2(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default tmp5;
