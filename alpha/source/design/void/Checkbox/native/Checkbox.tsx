// Module ID: 15294
// Function ID: 15295
// Name: Checkbox
// Dependencies: [19, 21, 5479, 15295, 15296, 2]
// Exports: default

// Module 15294 (Checkbox)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5479 */;
import AssetRegistryDefault from "AssetRegistry" /* 15295 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15296 */;
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
