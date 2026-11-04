// Module ID: 16892
// Function ID: 16893
// Name: SafetyHubErrorActionSheet
// Dependencies: [19, 17, 21, 5141, 575, 16891, 5396, 7233, 5761, 1113, 5768, 13535, 2]
// Exports: default

// Module 16892 (SafetyHubErrorActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5396 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import CircleXIcon2 from "CircleXIcon" /* 7233 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 13535 */;
import useSafetyHubLoadingDefault from "useSafetyHubLoading" /* 16891 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

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
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
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
    const BottomSheet = Sheet_BottomSheet.BottomSheet;
    obj4 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: tmp2.redesignErrorIcon };
    CircleXIcon = CircleXIcon2.CircleXIcon;
    items = [hasOwnProperty(View, obj3), ];
    const obj5 = { variant: "heading-lg/medium", children: intl.string(intl3.t.TDRvqs) };
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
};
