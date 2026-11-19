// Module ID: 7390
// Function ID: 7391
// Name: FormRadio
// Dependencies: [19, 21, 4792, 5479, 7391, 7392, 2]
// Exports: default

// Module 7390 (FormRadio)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  selected = selected.selected;
  FastImageDefault;
  return <tmp5 style={closure_3().radio} source={importDefault(selected ? 7391 : 7392)} />;
};
