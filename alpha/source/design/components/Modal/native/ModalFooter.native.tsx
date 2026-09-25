// Module ID: 11391
// Function ID: 11392
// Name: ModalFooter
// Dependencies: [19, 17, 21, 4829, 2]
// Exports: ModalFooter

// Module 11391 (ModalFooter)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_2 = createStyles.createStyles({ footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = function ModalFooter(children) {
  return <View style={closure_2().footer}>{arg0.children}</View>;
};
