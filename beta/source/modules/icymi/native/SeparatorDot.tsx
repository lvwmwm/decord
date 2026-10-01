// Module ID: 16151
// Function ID: 16152
// Name: SeparatorDot
// Dependencies: [19, 17, 21, 4836, 576, 2]
// Exports: default

// Module 16151 (SeparatorDot)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
  const items = [closure_2().separatorDot];
  return <View style={items} />;
};
