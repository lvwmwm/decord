// Module ID: 13628
// Function ID: 13629
// Name: Checkbox
// Dependencies: [19, 17, 21, 13629, 13630, 2]
// Exports: default

// Module 13628 (Checkbox)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AssetRegistryDefault from "AssetRegistry" /* 13629 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13630 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  let tmp5;
  const obj = { style: style.style, source: null };
  const tmp = jsx;
  const tmp2 = Image;
  if (style.selected) {
    obj.source = AssetRegistryDefault;
    tmp5 = obj;
  } else {
    obj.source = AssetRegistryDefault2;
    tmp5 = obj;
  }
  return tmp(tmp2, tmp5);
};
