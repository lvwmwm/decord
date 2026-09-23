// Module ID: 14542
// Function ID: 14543
// Name: ModalDisclaimer
// Dependencies: [19, 17, 21, 4827, 4823, 2]
// Exports: ModalDisclaimer

// Module 14542 (ModalDisclaimer)
import Text_Text from "Text/Text" /* 4823 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_4 = createStyles.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children }) };
  return <View style={tmp.container}>{jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: arg0.children })}</View>;
};
