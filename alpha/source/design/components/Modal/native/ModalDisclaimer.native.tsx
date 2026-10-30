// Module ID: 15829
// Function ID: 15830
// Name: ModalDisclaimer
// Dependencies: [19, 17, 21, 5009, 5619, 2]
// Exports: ModalDisclaimer

// Module 15829 (ModalDisclaimer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
