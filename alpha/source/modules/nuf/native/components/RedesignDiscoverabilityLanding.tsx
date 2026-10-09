// Module ID: 18073
// Function ID: 18074
// Name: RedesignDiscoverabilityLanding
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 1631, 6263, 1126, 5087, 18074, 12358, 5376, 2]

// Module 18073 (RedesignDiscoverabilityLanding)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import NavigatorConstants from "NavigatorConstants" /* 6263 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12358 */;
import LanternSpotIllustration from "LanternSpotIllustration" /* 18074 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, topContainer: obj3, growContainer: { flexGrow: 2 }, illustration: obj4, title: obj5, subtitle: obj6, info: { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
let closure_7 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignDiscoverabilityLanding(onNext) {
  let items;
  let items1;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp22;
  let tmp25;
  let tmp29;
  let tmp31;
  let tmp33;
  let tmp36;
  let tmp40;
  let tmp42;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(32);
  const tmp4 = closure_7();
  onNext = onNext.onNext;
  const sum = useSafeAreaInsetsDefault().bottom + 16;
  const container = tmp4.container;
  if (cResult[0] !== sum) {
    const obj2 = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: sum, paddingHorizontal: nativeDefault.space.PX_16 };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.topContainer) {
    const obj3 = { style: tmp4.topContainer };
    const tmp11 = hasOwnProperty(_false, obj3);
    cResult[2] = tmp4.topContainer;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  const title = tmp4.title;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl6.t.n8nw6j);
    cResult[4] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    const obj4 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp12 };
    const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[5] = tmp4.title;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  const subtitle = tmp4.subtitle;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl6.t.KMW0kP);
    cResult[7] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitle) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", style: subtitle, children: tmp17 };
    const tmp21 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[8] = tmp4.subtitle;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp24 = hasOwnProperty(LanternSpotIllustration.LanternSpotIllustration, { accessible: false });
    cResult[10] = tmp24;
    tmp22 = tmp24;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] !== tmp4.illustration) {
    const obj6 = { style: tmp4.illustration, children: tmp22 };
    const tmp28 = hasOwnProperty(_false, obj6);
    cResult[11] = tmp4.illustration;
    cResult[12] = tmp28;
    tmp25 = tmp28;
  } else {
    tmp25 = cResult[12];
  }
  const info = tmp4.info;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(intl6.t.ci12MJ);
    cResult[13] = stringResult2;
    tmp29 = stringResult2;
  } else {
    tmp29 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const obj7 = {
      learnMoreHook: function LearnMore(children, arg1) {
          const obj = { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
          const Text = Text_Text.Text;
          return closure_1_5(Text, obj, arg1);
        }
    };
    const formatResult = intl4.format(intl6.t.VcSQ4n, obj7);
    cResult[14] = formatResult;
    tmp31 = formatResult;
  } else {
    tmp31 = cResult[14];
  }
  if (cResult[15] !== tmp4.info) {
    const obj8 = { style: info, variant: "text-sm/medium", color: "text-default", children: items };
    items = [tmp29, " ", tmp31];
    const tmp35 = metroRequire(Text_Text.Text, obj8);
    cResult[15] = tmp4.info;
    cResult[16] = tmp35;
    tmp33 = tmp35;
  } else {
    tmp33 = cResult[16];
  }
  if (cResult[17] !== tmp4.growContainer) {
    const obj9 = { style: tmp4.growContainer };
    const tmp39 = hasOwnProperty(_false, obj9);
    cResult[17] = tmp4.growContainer;
    cResult[18] = tmp39;
    tmp36 = tmp39;
  } else {
    tmp36 = cResult[18];
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult3 = intl5.string(intl6.t.gHPk3I);
    cResult[19] = stringResult3;
    tmp40 = stringResult3;
  } else {
    tmp40 = cResult[19];
  }
  if (cResult[20] !== onNext) {
    const obj10 = { variant: "primary", size: "lg", text: tmp40, onPress: onNext };
    const tmp44 = hasOwnProperty(components_Button_Button.Button, obj10);
    cResult[20] = onNext;
    cResult[21] = tmp44;
    tmp42 = tmp44;
  } else {
    tmp42 = cResult[21];
  }
  if (cResult[22] === tmp4.container) {
    if (cResult[23] === tmp25) {
      if (cResult[24] === tmp33) {
        if (cResult[25] === tmp36) {
          if (cResult[26] === tmp42) {
            if (cResult[27] === tmp7) {
              if (cResult[28] === tmp8) {
                if (cResult[29] === tmp14) {
                  let tmp45;
                  if (cResult[30] === tmp19) {
                    tmp45 = cResult[31];
                  }
                  return tmp45;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj11 = { style: container, alwaysBounceVertical: false, contentContainerStyle: tmp7, children: items1 };
  items1 = [tmp8, tmp14, tmp19, tmp25, tmp33, tmp36, tmp42];
  const tmp46 = metroRequire(React3, obj11);
  cResult[22] = tmp4.container;
  cResult[23] = tmp25;
  cResult[24] = tmp33;
  cResult[25] = tmp36;
  cResult[26] = tmp42;
  cResult[27] = tmp7;
  cResult[28] = tmp8;
  cResult[29] = tmp14;
  cResult[30] = tmp19;
  cResult[31] = tmp46;
  tmp45 = tmp46;
}) : (function RedesignDiscoverabilityLanding(onNext) {
  let bottom;
  let intl;
  let intl2;
  let intl5;
  let items;
  let items1;
  let obj2;
  const tmp = closure_7();
  onNext = onNext.onNext;
  let obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: obj2, children: items };
  obj2 = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: bottom + 16, paddingHorizontal: nativeDefault.space.PX_16 };
  bottom = useSafeAreaInsetsDefault().bottom;
  items = [, , , , , , ];
  const obj3 = { style: tmp.topContainer };
  items[0] = hasOwnProperty(_false, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.n8nw6j) };
  let Text = Text_Text.Text;
  intl = intl6.intl;
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle, children: intl2.string(intl6.t.KMW0kP) };
  const Text2 = Text_Text.Text;
  intl2 = intl6.intl;
  items[2] = hasOwnProperty(Text2, obj5);
  const obj6 = { style: tmp.illustration, children: hasOwnProperty(LanternSpotIllustration.LanternSpotIllustration, { accessible: false }) };
  items[3] = hasOwnProperty(_false, obj6);
  const obj7 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: items1 };
  const Text3 = Text_Text.Text;
  const intl3 = intl6.intl;
  items1 = [intl3.string(intl6.t.ci12MJ), " ", ];
  const intl4 = intl6.intl;
  const obj8 = {
    learnMoreHook: function LearnMore(children, arg1) {
      const obj = { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      const Text = Text_Text.Text;
      return closure_1_5(Text, obj, arg1);
    }
  };
  items1[2] = intl4.format(intl6.t.VcSQ4n, obj8);
  items[4] = metroRequire(Text3, obj7);
  const obj9 = { style: tmp.growContainer };
  items[5] = hasOwnProperty(_false, obj9);
  const obj10 = { variant: "primary", size: "lg", text: intl5.string(intl6.t.gHPk3I), onPress: onNext };
  const Button = components_Button_Button.Button;
  intl5 = intl6.intl;
  items[6] = hasOwnProperty(Button, obj10);
  return metroRequire(React3, obj);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default tmp6;
