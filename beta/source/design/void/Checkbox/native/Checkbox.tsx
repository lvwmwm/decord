// Module ID: 16313
// Function ID: 16314
// Name: Checkbox
// Dependencies: [19, 21, 5874, 16314, 16315, 2]
// Exports: default

// Module 16313 (Checkbox)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5874 */;
import AssetRegistryDefault from "AssetRegistry" /* 16314 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16315 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(arg0) {
  let selected;
  let style;
  let tmp5;
  ({ style, selected } = arg0);
  const obj = { style, source: null };
  const tmp = jsx;
  const tmp4 = FastImageDefault;
  if (selected) {
    obj.source = AssetRegistryDefault;
    tmp5 = obj;
  } else {
    obj.source = AssetRegistryDefault2;
    tmp5 = obj;
  }
  return tmp(tmp4, tmp5);
};
