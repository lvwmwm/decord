// Module ID: 14603
// Function ID: 14604
// Name: UserProfileReorderActionSheet
// Dependencies: [19, 21, 5043, 575, 1629, 6109, 7546, 5275, 5634, 1112, 2]
// Exports: default

// Module 14603 (UserProfileReorderActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileReorderActionSheet.tsx");

export default function UserProfileReorderActionSheet(returnFocusRef) {
  let BottomSheetScrollView;
  let children;
  let dismissAccessibilityLabel;
  let intl;
  let items1;
  let items2;
  let obj2;
  let scrollRef;
  returnFocusRef = returnFocusRef.returnFocusRef;
  ({ dismissAccessibilityLabel, children, scrollRef } = returnFocusRef);
  const items = [returnFocusRef];
  const tmp = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const effect = react.useEffect(() => {
    let ref;
    return () => {
      const obj = returnFocusRef(dependencyMap[5]);
      const obj2 = { ref, delay: 100 };
      return obj.setAccessibilityFocus(obj2);
    };
  }, items);
  let obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel, children: closure_5(BottomSheetScrollView, obj2) };
  const ActionSheet = returnFocusRef(7546).ActionSheet;
  obj2 = { ref: scrollRef, contentContainerStyle: items1, children: items2 };
  items1 = [tmp.content, { paddingBottom: bottom }];
  BottomSheetScrollView = returnFocusRef(5275).BottomSheetScrollView;
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: intl.string(returnFocusRef(1112).t["S7X7/T"]) };
  const Text = returnFocusRef(5634).Text;
  intl = returnFocusRef(1112).intl;
  items2 = [closure_4(Text, obj3), children];
  return closure_4(ActionSheet, obj);
};
