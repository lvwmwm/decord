// Module ID: 7993
// Function ID: 7994
// Name: EditGuildEventStepContainer
// Dependencies: [19, 17, 21, 5306, 575, 7994, 5913, 2]
// Exports: default

// Module 7993 (EditGuildEventStepContainer)
import nativeDefault from "native" /* 575 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7994 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let rect;
let tmp2;
const useSafeAreaInsetsKeyboardAwareDefault = tmp2(5913);
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: rect };
obj2 = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default function EditGuildEventsStepContainer(arg0) {
  let action;
  let children;
  let items;
  let items1;
  let items2;
  let onLayout;
  let ref;
  let ref2;
  ({ children, action, ref } = arg0);
  const tmp = closure_6();
  const tmp4 = useMeasuredLayoutDefault();
  const height = tmp4.height;
  let num = 32;
  ({ ref: ref2, onLayout } = tmp4);
  if (undefined !== height) {
    num = height;
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj2 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: items, contentContainerStyle: tmp.scroller, children };
  items = [tmp.flex, { marginBottom: num + insets.bottom }];
  const obj = { style: tmp.container, children: items1 };
  items1 = [React3(_false, obj2), ];
  const obj3 = { style: items2, ref: ref2, onLayout, children: action };
  items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  items1[1] = React3(React2, obj3);
  return hasOwnProperty(React2, obj);
};
