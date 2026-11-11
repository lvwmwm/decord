// Module ID: 19155
// Function ID: 19156
// Name: SeparatorDot
// Dependencies: [19, 17, 21, 5243, 575, 2]
// Exports: default

// Module 19155 (SeparatorDot)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { separatorDot: size };
size = { width: 4, height: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_2 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default function SeparatorDot() {
  return <View style={closure_2().separatorDot} />;
};
