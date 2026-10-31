// Module ID: 8989
// Function ID: 8990
// Name: EditGuildEventStepContainer
// Dependencies: [32, 19, 17, 21, 5014, 575, 5607, 2]
// Exports: default

// Module 8989 (EditGuildEventStepContainer)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5607 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: rect };
obj2 = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default function EditGuildEventsStepContainer(arg0) {
  let action;
  let children;
  let closure_0;
  let first;
  let items;
  let items1;
  let items2;
  let ref;
  closure_0 = undefined;
  ({ children, action, ref } = arg0);
  let tmp = closure_8();
  [first, closure_0] = react.useState(32);
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let obj = { style: tmp.container, children: items1 };
  let obj2 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: items, contentContainerStyle: tmp.scroller, children };
  items = [tmp.flex, { marginBottom: first + insets.bottom }];
  const callback = react.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.height);
  }, []);
  items1 = [metroRequire(hasOwnProperty, obj2), ];
  let obj3 = { style: items2, onLayout: callback, children: action };
  items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  items1[1] = metroRequire(React3, obj3);
  return metroImportDefault(React3, obj);
};
