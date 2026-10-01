// Module ID: 13663
// Function ID: 13664
// Name: Spacer
// Dependencies: [19, 17, 21, 12, 2]
// Exports: default

// Module 13663 (Spacer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import module_12 from "module_12" /* 12 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_2 = module_12.memoize((width) => {
  size = { width, height: width };
  return size;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={closure_2(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};
