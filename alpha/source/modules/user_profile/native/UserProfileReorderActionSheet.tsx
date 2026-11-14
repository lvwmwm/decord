// Module ID: 12122
// Function ID: 12123
// Name: UserProfileReorderActionSheet
// Dependencies: [19, 17, 21, 5306, 575, 1630, 6331, 7951, 5570, 5929, 1113, 2]
// Exports: default

// Module 12122 (UserProfileReorderActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, list: obj3 };
obj2 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileReorderActionSheet.tsx");

export default function UserProfileReorderActionSheet(returnFocusRef) {
  let BottomSheetScrollView;
  let children;
  let dismissAccessibilityLabel;
  let intl;
  let items1;
  let items2;
  let obj2;
  returnFocusRef = returnFocusRef.returnFocusRef;
  ({ dismissAccessibilityLabel, children } = returnFocusRef);
  const tmp = closure_7();
  const items = [returnFocusRef];
  const bottom = useSafeAreaInsetsDefault().bottom;
  const effect = react.useEffect(() => {
    let ref;
    return () => {
      const obj = returnFocusRef(dependencyMap[6]);
      const obj2 = { ref, delay: 100 };
      return obj.setAccessibilityFocus(obj2);
    };
  }, items);
  let obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel, children: closure_6(BottomSheetScrollView, obj2) };
  const ActionSheet = returnFocusRef(7951).ActionSheet;
  obj2 = { contentContainerStyle: items1, children: items2 };
  items1 = [tmp.content, { paddingBottom: bottom }];
  BottomSheetScrollView = returnFocusRef(5570).BottomSheetScrollView;
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: intl.string(returnFocusRef(1113).t["S7X7/T"]) };
  const Text = returnFocusRef(5929).Text;
  intl = returnFocusRef(1113).intl;
  items2 = [closure_5(Text, obj3), ];
  const obj4 = { accessibilityRole: "list", style: tmp.list, children };
  items2[1] = closure_5(View, obj4);
  return closure_5(ActionSheet, obj);
};
