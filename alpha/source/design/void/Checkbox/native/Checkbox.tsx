// Module ID: 16625
// Function ID: 16626
// Name: Checkbox
// Dependencies: [19, 21, 6014, 16626, 16627, 2]
// Exports: default

// Module 16625 (Checkbox)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 6014 */;
import AssetRegistryDefault from "AssetRegistry" /* 16626 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16627 */;
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
