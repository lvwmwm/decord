// Module ID: 6564
// Function ID: 6565
// Name: FormRadio
// Dependencies: [19, 17, 21, 4836, 6565, 6566, 2]
// Exports: default

// Module 6564 (FormRadio)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  selected = selected.selected;
  return <Image style={closure_4().radio} source={importDefault(selected ? 6565 : 6566)} />;
};
