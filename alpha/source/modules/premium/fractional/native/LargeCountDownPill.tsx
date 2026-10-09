// Module ID: 13680
// Function ID: 13681
// Name: LargeCountDownPill
// Dependencies: [17, 21, 5091, 587, 558, 576, 4768, 1126, 5013, 5087, 2]

// Module 13680 (LargeCountDownPill)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
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
let tmp;
const CircleInformationIcon2 = tmp(5013);
const Text_Text = tmp(5087);
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { largeCountdownPill: obj2, largeCountdownPillText: obj3, iconStyle: { width: 16, height: 16 } };
obj2 = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: 8, color: nativeDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function LargeCountDownPill(countdownText) {
  let first;
  let items;
  let largeCountdownPill;
  let largeCountdownPillText;
  let obj4;
  let tmp6;
  let obj = react;
  const cResult = obj.c(12);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handlePress() {
      let intl;
      const obj = { text: intl.string(intl2.t["Mv4E/M"]), icon: CircleInformationIcon2.CircleInformationIcon, iconColor: nativeDefault.colors.STATUS_WARNING };
      const openMana = ToastActionCreatorsDefault.openMana;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      openMana("LARGE_COUNTDOWN_PILL_TOAST", obj);
    }
    cResult[0] = handlePress;
    first = handlePress;
  } else {
    first = cResult[0];
  }
  ({ largeCountdownPill, largeCountdownPillText } = tmp4);
  if (cResult[1] !== countdownText.countdownText) {
    const formatted = str.toUpperCase();
    cResult[1] = countdownText.countdownText;
    cResult[2] = formatted;
    tmp6 = formatted;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp4.largeCountdownPillText) {
    let tmp8;
    let tmp10;
    if (cResult[4] === tmp6) {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4.iconStyle) {
      const obj2 = { style: tmp4.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
      const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
      const tmp13 = hasOwnProperty(CircleInformationIcon, obj2);
      cResult[6] = tmp4.iconStyle;
      cResult[7] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === tmp4.largeCountdownPill) {
      if (cResult[9] === tmp8) {
        let tmp14;
        if (cResult[10] === tmp10) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
    const obj3 = { onPress: first, children: metroRequire(React3, obj4) };
    obj4 = { style: largeCountdownPill, children: items };
    items = [tmp8, tmp10];
    const tmp19 = hasOwnProperty(_false, obj3);
    cResult[8] = tmp4.largeCountdownPill;
    cResult[9] = tmp8;
    cResult[10] = tmp10;
    cResult[11] = tmp19;
    tmp14 = tmp19;
  }
  const tmp9 = hasOwnProperty(Text_Text.Text, { variant: "text-xs/bold", style: largeCountdownPillText, children: tmp6 });
  cResult[3] = tmp4.largeCountdownPillText;
  cResult[4] = tmp6;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function LargeCountDownPill(countdownText) {
  let items;
  let obj2;
  const str = countdownText.countdownText;
  const tmp = closure_7();
  let obj = {
    onPress: function handlePress() {
      let intl;
      const obj = { text: intl.string(intl2.t["Mv4E/M"]), icon: CircleInformationIcon2.CircleInformationIcon, iconColor: nativeDefault.colors.STATUS_WARNING };
      const openMana = ToastActionCreatorsDefault.openMana;
      ToastActionCreatorsDefault;
      intl = intl2.intl;
      openMana("LARGE_COUNTDOWN_PILL_TOAST", obj);
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
});
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default tmp5;
