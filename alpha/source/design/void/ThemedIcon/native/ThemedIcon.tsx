// Module ID: 16636
// Function ID: 16637
// Name: ThemedIcon
// Dependencies: [19, 21, 5896, 5932, 2]
// Exports: default

// Module 16636 (ThemedIcon)
import Fragment from "Fragment" /* 21 */;
import useToken from "useToken" /* 5896 */;
import IconDefault from "Icon" /* 5932 */;
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
