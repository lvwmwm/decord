// Module ID: 14940
// Function ID: 14941
// Name: SafetyHubErrorActionSheet
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 14939, 4998, 5087, 1126, 11427, 5376, 6836, 2]

// Module 14940 (SafetyHubErrorActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import CircleXIcon2 from "CircleXIcon" /* 4998 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11427 */;
import useSafetyHubLoadingDefault from "useSafetyHubLoading" /* 14939 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { errorContainer: obj2, redesignErrorIconContainer: size, redesignErrorIcon: { height: 50, width: 50 } };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, minHeight: 120 };
createStyles = createStyles.createStyles;
size = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyHubErrorActionSheet() {
  let intl;
  let items;
  let items1;
  let tmp25;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(16);
  const tmp4 = closure_7();
  const tmp6 = useSafetyHubLoadingDefault();
  if (cResult[0] !== tmp4.redesignErrorIcon) {
    const obj2 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: tmp4.redesignErrorIcon };
    const CircleXIcon = tmp(4998).CircleXIcon;
    const tmp9 = hasOwnProperty(CircleXIcon, obj2);
    cResult[0] = tmp4.redesignErrorIcon;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp4.redesignErrorIconContainer) {
    let tmp10;
    let tmp13;
    if (cResult[3] === tmp7) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "heading-lg/normal", children: intl.string(intl3.t.TDRvqs) };
      const Text = tmp(5087).Text;
      intl = tmp(1126).intl;
      const tmp15 = hasOwnProperty(Text, obj3);
      cResult[5] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp4.errorContainer) {
      let tmp16;
      let tmp21;
      let tmp20;
      if (cResult[7] === tmp10) {
        tmp16 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(intl3.t.R1AN4F);
        cResult[9] = C;
        cResult[10] = stringResult;
        tmp21 = stringResult;
        tmp20 = C;
      } else {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        tmp21 = cResult[10];
      }
      if (cResult[11] !== tmp6) {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        const obj4 = { onPress: tmp20, text: tmp21, loading: tmp6, disabled: tmp6 };
        cResult[11] = tmp6;
        cResult[12] = hasOwnProperty(components_Button_Button.Button, obj4);
        const tmp24 = hasOwnProperty(components_Button_Button.Button, obj4);
      } else {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
      }
      if (cResult[13] === tmp16) {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        return tmp25;
      }
      const obj5 = { children: items };
      items = [tmp16, tmp23];
      const tmp27 = metroRequire(Sheet_BottomSheet.BottomSheet, obj5);
      cResult[13] = tmp16;
      cResult[14] = tmp23;
      cResult[15] = tmp27;
      tmp25 = tmp27;
    }
    const obj6 = { style: tmp4.errorContainer, children: items1 };
    items1 = [tmp10, tmp13];
    const tmp19 = metroRequire(View, obj6);
    cResult[6] = tmp4.errorContainer;
    cResult[7] = tmp10;
    cResult[8] = tmp19;
    tmp16 = tmp19;
  }
  const obj7 = { style: tmp4.redesignErrorIconContainer, children: tmp7 };
  const tmp11 = hasOwnProperty(View, obj7);
  cResult[2] = tmp4.redesignErrorIconContainer;
  cResult[3] = tmp7;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function SafetyHubErrorActionSheet(arg0) {
  let CircleXIcon;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj4;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const tmp2 = closure_7();
    const tmp5 = useSafetyHubLoadingDefault();
    let obj = { children: items1 };
    const obj2 = { style: tmp2.errorContainer, children: items };
    const obj3 = { style: tmp2.redesignErrorIconContainer, children: hasOwnProperty(CircleXIcon, obj4) };
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    obj4 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: tmp2.redesignErrorIcon };
    CircleXIcon = CircleXIcon2.CircleXIcon;
    items = [hasOwnProperty(View, obj3), ];
    const obj5 = { variant: "heading-lg/normal", children: intl.string(intl3.t.TDRvqs) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    items[1] = hasOwnProperty(Text, obj5);
    items1 = [metroRequire(View, obj2), ];
    const obj6 = {
      onPress() {
          const obj = SafetyHubActionCreatorsAll;
          return obj.getSafetyHubData();
        },
      text: intl2.string(intl3.t.R1AN4F),
      loading: tmp5,
      disabled: tmp5
    };
    const Button = components_Button_Button.Button;
    intl2 = intl3.intl;
    items1[1] = hasOwnProperty(Button, obj6);
    return metroRequire(BottomSheet, obj);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default tmp5;
