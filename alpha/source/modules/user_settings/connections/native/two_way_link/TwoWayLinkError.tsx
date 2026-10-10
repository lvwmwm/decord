// Module ID: 12913
// Function ID: 12914
// Name: TwoWayLinkError
// Dependencies: [19, 17, 21, 5092, 558, 576, 9214, 6156, 12914, 5088, 1126, 5379, 5377, 6813, 2]

// Module 12913 (TwoWayLinkError)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6813 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9214 */;
import AssetRegistryDefault from "AssetRegistry" /* 12914 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoWayLinkError(arg0) {
  let body;
  let footerButton;
  let footerContainer;
  let items;
  let items1;
  let items2;
  let onClose;
  let onRetry;
  let title;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(30);
  ({ onClose, title, body, onRetry } = arg0);
  const tmp4 = closure_6();
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  const container = twoWayLinkStyles.container;
  if (cResult[0] !== tmp4.image) {
    const obj3 = { source: AssetRegistryDefault, style: tmp4.image };
    const tmp9 = FastImageDefault;
    const tmp10 = React3(tmp9, obj3);
    cResult[0] = tmp4.image;
    cResult[1] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === twoWayLinkStyles.title) {
    let tmp11;
    if (cResult[3] === title) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === body) {
      let tmp13;
      if (cResult[6] === twoWayLinkStyles.body) {
        tmp13 = cResult[7];
      }
      if (cResult[8] === twoWayLinkStyles.content) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp11) {
            let tmp16;
            let tmp21;
            let tmp23;
            let tmp26;
            let tmp28;
            if (cResult[11] === tmp13) {
              tmp16 = cResult[12];
            }
            const _Symbol = Symbol;
            ({ footerContainer, footerButton } = twoWayLinkStyles);
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(intl3.t["5911Lb"]);
              cResult[13] = stringResult;
              tmp21 = stringResult;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[14] !== onRetry) {
              const obj4 = { size: "lg", variant: "primary", text: tmp21, onPress: onRetry };
              const tmp25 = React3(components_Button_Button.Button, obj4);
              cResult[14] = onRetry;
              cResult[15] = tmp25;
              tmp23 = tmp25;
            } else {
              tmp23 = cResult[15];
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(intl3.t["ETE/oC"]);
              cResult[16] = stringResult1;
              tmp26 = stringResult1;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] !== onClose) {
              const obj5 = { size: "lg", variant: "secondary", text: tmp26, onPress: onClose };
              const tmp30 = React3(components_Button_Button.Button, obj5);
              cResult[17] = onClose;
              cResult[18] = tmp30;
              tmp28 = tmp30;
            } else {
              tmp28 = cResult[18];
            }
            if (cResult[19] === twoWayLinkStyles.footerButton) {
              if (cResult[20] === tmp28) {
                let tmp31;
                if (cResult[21] === tmp23) {
                  tmp31 = cResult[22];
                }
                if (cResult[23] === twoWayLinkStyles.footerContainer) {
                  let tmp34;
                  if (cResult[24] === tmp31) {
                    tmp34 = cResult[25];
                  }
                  if (cResult[26] === twoWayLinkStyles.container) {
                    if (cResult[27] === tmp34) {
                      let tmp37;
                      if (cResult[28] === tmp16) {
                        tmp37 = cResult[29];
                      }
                      return tmp37;
                    }
                  }
                  const obj6 = { style: container, children: items };
                  items = [tmp16, tmp34];
                  const tmp40 = hasOwnProperty(View, obj6);
                  cResult[26] = twoWayLinkStyles.container;
                  cResult[27] = tmp34;
                  cResult[28] = tmp16;
                  cResult[29] = tmp40;
                  tmp37 = tmp40;
                }
                const obj7 = { bottom: true, style: footerContainer, children: tmp31 };
                const tmp36 = React3(common_SafeAreaView.SafeAreaPaddingView, obj7);
                cResult[23] = twoWayLinkStyles.footerContainer;
                cResult[24] = tmp31;
                cResult[25] = tmp36;
                tmp34 = tmp36;
              }
            }
            const obj8 = { spacing: 8, direction: "vertical", style: footerButton, children: items1 };
            items1 = [tmp23, tmp28];
            const tmp33 = hasOwnProperty(Stack_Stack.Stack, obj8);
            cResult[19] = twoWayLinkStyles.footerButton;
            cResult[20] = tmp28;
            cResult[21] = tmp23;
            cResult[22] = tmp33;
            tmp31 = tmp33;
          }
        }
      }
      const obj9 = { style: twoWayLinkStyles.content, children: items2 };
      items2 = [tmp6, tmp11, tmp13];
      const tmp19 = hasOwnProperty(View, obj9);
      cResult[8] = twoWayLinkStyles.content;
      cResult[9] = tmp6;
      cResult[10] = tmp11;
      cResult[11] = tmp13;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
    const obj10 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body };
    const tmp15 = React3(Text_Text.Text, obj10);
    cResult[5] = body;
    cResult[6] = twoWayLinkStyles.body;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  }
  const obj11 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title };
  const tmp12 = React3(Text_Text.Text, obj11);
  cResult[2] = twoWayLinkStyles.title;
  cResult[3] = title;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function TwoWayLinkError(arg0) {
  let Stack;
  let body;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj8;
  let onClose;
  let onRetry;
  let title;
  ({ onClose, title, body, onRetry } = arg0);
  const tmp = closure_6();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj4), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: title };
  items[1] = React3(Text_Text.Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items[2] = React3(Text_Text.Text, obj6);
  items1 = [hasOwnProperty(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: hasOwnProperty(Stack, obj8) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: items2 };
  Stack = Stack_Stack.Stack;
  const obj9 = { size: "lg", variant: "primary", text: intl.string(intl3.t["5911Lb"]), onPress: onRetry };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items2 = [React3(Button, obj9), ];
  const obj10 = { size: "lg", variant: "secondary", text: intl2.string(intl3.t["ETE/oC"]), onPress: onClose };
  const Button2 = components_Button_Button.Button;
  intl2 = intl3.intl;
  items2[1] = React3(Button2, obj10);
  items1[1] = React3(SafeAreaPaddingView, obj7);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = tmp4;
