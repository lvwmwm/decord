// Module ID: 7388
// Function ID: 7389
// Name: Form/FormRadio
// Dependencies: [19, 17, 21, 4756, 7389, 7390, 2]
// Exports: default

// Module 7388 (Form/FormRadio)
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_4 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: closure_4().radio, source: importDefault(selected.selected ? 7389 : 7390) };
  return <Image style={closure_4().radio} source={importDefault(arg0.selected ? 7389 : 7390)} />;
};
