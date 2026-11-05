// Module ID: 7454
// Function ID: 7455
// Name: FormRadio
// Dependencies: [19, 21, 5143, 5854, 7455, 7456, 2]
// Exports: default

// Module 7454 (FormRadio)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  selected = selected.selected;
  FastImageDefault;
  return <tmp5 style={closure_3().radio} source={importDefault(selected ? 7455 : 7456)} />;
};
