// Module ID: 5780
// Function ID: 5781
// Name: react-native
// Dependencies: [17, 2]

// Module 5780 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const Platform = react_native.Platform;
let str = "pointer";
if ("isPad" in Platform) {
  str = "pointer";
  if (Platform.isPad) {
    str = "auto";
  }
}
const result = size.fileFinishedImporting("design/components/Styles/native/styleConstants.tsx");

export const IOS_POINTER_STYLE = { cursor: str };
