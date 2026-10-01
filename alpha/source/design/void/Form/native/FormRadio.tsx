// Module ID: 6750
// Function ID: 6751
// Name: Form/FormRadio
// Dependencies: [19, 17, 21, 4845, 6751, 6752, 2]
// Exports: default

// Module 6750 (Form/FormRadio)
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let closure_4 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: closure_4().radio, source: importDefault(selected.selected ? 6751 : 6752) };
  return <Image style={closure_4().radio} source={importDefault(arg0.selected ? 6751 : 6752)} />;
};
