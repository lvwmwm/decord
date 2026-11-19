// Module ID: 15199
// Function ID: 15200
// Name: ModalDisclaimer
// Dependencies: [19, 17, 21, 4792, 5383, 2]
// Exports: ModalDisclaimer

// Module 15199 (ModalDisclaimer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export function ModalDisclaimer(children) {
  children = children.children;
  const tmp = closure_4();
  return <View style={tmp.container}>{null}</View>;
}
