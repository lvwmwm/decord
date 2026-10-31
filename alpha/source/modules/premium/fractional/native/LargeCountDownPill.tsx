// Module ID: 15348
// Function ID: 15349
// Name: LargeCountDownPill
// Dependencies: [17, 21, 5014, 575, 5712, 1113, 5735, 5624, 2]
// Exports: default

// Module 15348 (LargeCountDownPill)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 5735 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

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
  let items;
  let obj2;
  const str = countdownText.countdownText;
  const tmp = closure_7();
  let obj = {
    onPress: function handlePress() {
      let intl;
      const obj = { text: intl.string(intl2.t["Mv4E/M"]), icon: CircleInformationIcon2.CircleInformationIcon, iconColor: nativeDefault.colors.STATUS_WARNING };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      open("LARGE_COUNTDOWN_PILL_TOAST", obj);
    },
    children: metroRequire(React3, obj2)
  };
  obj2 = { style: tmp.largeCountdownPill, children: items };
  const obj3 = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: str.toUpperCase() };
  const Text = Text_Text.Text;
  items = [hasOwnProperty(Text, obj3), ];
  const obj4 = { style: tmp.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items[1] = hasOwnProperty(CircleInformationIcon, obj4);
  return hasOwnProperty(_false, obj);
};
