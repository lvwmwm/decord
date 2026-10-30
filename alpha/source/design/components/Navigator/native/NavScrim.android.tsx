// Module ID: 5601
// Function ID: 5602
// Name: NavScrim
// Dependencies: [19, 17, 21, 5009, 575, 5602, 2]

// Module 5601 (NavScrim)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let obj2;
({ View: c2, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { androidNavScrim: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_SCRIM_BACKGROUND, top: undefined };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_4 = createStyles(obj);
const memoResult = react.memo(function NavScrim() {
  const tmp = closure_4();
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeCustomKeyboardHeight: false }).insets;
  let tmp2 = null;
  if (0 !== insets.bottom) {
    const items = [tmp.androidNavScrim, ];
    const obj2 = { height: insets.bottom };
    items[1] = obj2;
    tmp2 = <React2 style={items} pointerEvents="none" />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("design/components/Navigator/native/NavScrim.android.tsx");

export const NavScrim = memoResult;
