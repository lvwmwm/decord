// Module ID: 15728
// Function ID: 15729
// Name: MessagesItemSeparator
// Dependencies: [19, 17, 21, 576, 4836, 2]

// Module 15728 (MessagesItemSeparator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let _window;
let obj2;
({ StyleSheet, View: _window } = react_native);
const jsx = Fragment.jsx;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
const obj = { container: { height: PX_12 }, separator: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth, top: undefined };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_2 = createStyles(obj);
const memoResult = react.memo(function MessagesItemSeperator() {
  const tmp = closure_2();
  return <React style={tmp.container} collapsable={false}>{null}</React>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default memoResult;
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;
