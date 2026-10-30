// Module ID: 15937
// Function ID: 15938
// Name: ThemedIcon
// Dependencies: [19, 21, 5591, 5631, 2]
// Exports: default

// Module 15937 (ThemedIcon)
import Fragment from "Fragment" /* 21 */;
import useToken from "useToken" /* 5591 */;
import IconDefault from "Icon" /* 5631 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  themedColor = themedColor.themedColor;
  const merged = Object.assign(themedColor, Object.assign({ themedColor: 0 }));
  const obj = useToken;
  const token = obj.useToken(themedColor);
  IconDefault;
  const merged1 = Object.assign(merged);
  return <tmp3 color={token} />;
};
