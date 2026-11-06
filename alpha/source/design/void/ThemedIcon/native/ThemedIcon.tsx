// Module ID: 16237
// Function ID: 16238
// Name: ThemedIcon
// Dependencies: [19, 21, 5754, 5790, 2]
// Exports: default

// Module 16237 (ThemedIcon)
import Fragment from "Fragment" /* 21 */;
import useToken from "useToken" /* 5754 */;
import IconDefault from "Icon" /* 5790 */;
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
