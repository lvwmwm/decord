// Module ID: 13193
// Function ID: 13194
// Name: ModalFooter
// Dependencies: [19, 17, 21, 5014, 2]
// Exports: ModalFooter

// Module 13193 (ModalFooter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_2 = createStyles.createStyles({ footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 } });
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export function ModalFooter(children) {
  return <View style={closure_2().footer}>{arg0.children}</View>;
}
