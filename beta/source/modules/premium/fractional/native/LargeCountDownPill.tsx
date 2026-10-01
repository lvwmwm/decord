// Module ID: 13003
// Function ID: 13004
// Name: LargeCountDownPill
// Dependencies: [17, 21, 4836, 576, 4528, 1115, 4787, 4832, 2]
// Exports: default

// Module 13003 (LargeCountDownPill)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { largeCountdownPill: obj2, largeCountdownPillText: obj3, iconStyle: { width: 16, height: 16 } };
obj2 = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: 8, color: nativeDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  let closure_0;
  let items;
  let obj2;
  const str = countdownText.countdownText;
  const tmp = closure_7();
  _require = tmp;
  let obj = {
    onPress() {
      let intl;
      let obj = {
        key: "LARGE_COUNTDOWN_PILL_TOAST",
        content: intl.string(intl2.t["Mv4E/M"]),
        icon() {
          const obj = { style: closure_1_0.iconStyle, color: nativeDefault.colors.STATUS_WARNING };
          const CircleInformationIcon = closure_0(dependencyMap[6]).CircleInformationIcon;
          return closure_2_5(CircleInformationIcon, obj);
        },
        iconColor: nativeDefault.colors.STATUS_WARNING
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open(obj);
    },
    children: closure_6(closure_4, obj2)
  };
  obj2 = { style: tmp.largeCountdownPill, children: items };
  const obj3 = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: str.toUpperCase() };
  const Text = require("Text/Text").Text;
  items = [closure_5(Text, obj3), ];
  const obj4 = { style: tmp.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
  let CircleInformationIcon = require("CircleInformationIcon").CircleInformationIcon;
  items[1] = closure_5(CircleInformationIcon, obj4);
  return closure_5(closure_3, obj);
};
