// Module ID: 12888
// Function ID: 12889
// Name: CrunchyrollLinkSuccess
// Dependencies: [19, 17, 21, 5091, 558, 576, 9187, 6163, 12889, 1126, 5087, 5376, 6810, 2]

// Module 12888 (CrunchyrollLinkSuccess)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import FastImageDefault from "FastImage" /* 6163 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6810 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9187 */;
import AssetRegistryDefault from "AssetRegistry" /* 12889 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CrunchyrollLinkDiscordSuccess(onClose) {
  let container;
  let content;
  let footerButton;
  let footerContainer;
  let items;
  let items1;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(26);
  onClose = onClose.onClose;
  const tmp4 = closure_6();
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  ({ container, content } = twoWayLinkStyles);
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
  const title = twoWayLinkStyles.title;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t.Fnvxvk);
    cResult[2] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== twoWayLinkStyles.title) {
    const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: title, children: tmp11 };
    const tmp15 = React3(Text_Text.Text, obj4);
    cResult[3] = twoWayLinkStyles.title;
    cResult[4] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  const body = twoWayLinkStyles.body;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl4.t.YwXceg);
    cResult[5] = stringResult1;
    tmp16 = stringResult1;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== twoWayLinkStyles.body) {
    const obj5 = { variant: "text-md/normal", color: "text-default", style: body, children: tmp16 };
    const tmp20 = React3(Text_Text.Text, obj5);
    cResult[6] = twoWayLinkStyles.body;
    cResult[7] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === twoWayLinkStyles.content) {
    if (cResult[9] === tmp6) {
      if (cResult[10] === tmp13) {
        let tmp21;
        let tmp23;
        let tmp25;
        if (cResult[11] === tmp18) {
          tmp21 = cResult[12];
        }
        const _Symbol = Symbol;
        ({ footerContainer, footerButton } = twoWayLinkStyles);
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult2 = intl3.string(intl4.t.i4jeWR);
          cResult[13] = stringResult2;
          tmp23 = stringResult2;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] !== onClose) {
          const obj6 = { size: "md", text: tmp23, onPress: onClose };
          const tmp27 = React3(components_Button_Button.Button, obj6);
          cResult[14] = onClose;
          cResult[15] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[15];
        }
        if (cResult[16] === twoWayLinkStyles.footerButton) {
          let tmp28;
          if (cResult[17] === tmp25) {
            tmp28 = cResult[18];
          }
          if (cResult[19] === twoWayLinkStyles.footerContainer) {
            let tmp32;
            if (cResult[20] === tmp28) {
              tmp32 = cResult[21];
            }
            if (cResult[22] === twoWayLinkStyles.container) {
              if (cResult[23] === tmp21) {
                let tmp35;
                if (cResult[24] === tmp32) {
                  tmp35 = cResult[25];
                }
                return tmp35;
              }
            }
            const obj7 = { style: container, children: items };
            items = [tmp21, tmp32];
            const tmp38 = hasOwnProperty(View, obj7);
            cResult[22] = twoWayLinkStyles.container;
            cResult[23] = tmp21;
            cResult[24] = tmp32;
            cResult[25] = tmp38;
            tmp35 = tmp38;
          }
          const obj8 = { bottom: true, style: footerContainer, children: tmp28 };
          const tmp34 = React3(common_SafeAreaView.SafeAreaPaddingView, obj8);
          cResult[19] = twoWayLinkStyles.footerContainer;
          cResult[20] = tmp28;
          cResult[21] = tmp34;
          tmp32 = tmp34;
        }
        const obj9 = { style: footerButton, children: tmp25 };
        const tmp31 = React3(View, obj9);
        cResult[16] = twoWayLinkStyles.footerButton;
        cResult[17] = tmp25;
        cResult[18] = tmp31;
        tmp28 = tmp31;
      }
    }
  }
  const obj10 = { style: content, children: items1 };
  items1 = [tmp6, tmp13, tmp18];
  const tmp22 = hasOwnProperty(View, obj10);
  cResult[8] = twoWayLinkStyles.content;
  cResult[9] = tmp6;
  cResult[10] = tmp13;
  cResult[11] = tmp18;
  cResult[12] = tmp22;
  tmp21 = tmp22;
}) : (function CrunchyrollLinkDiscordSuccess(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj8;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_6();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj4), , ];
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.Fnvxvk) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = React3(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(intl4.t.YwXceg) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text2, obj6);
  items1 = [hasOwnProperty(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: React3(View, obj8) };
  obj8 = { style: twoWayLinkStyles.footerButton, children: React3(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = { size: "md", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = React3(SafeAreaPaddingView, obj7);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default tmp4;
