// Module ID: 15926
// Function ID: 15927
// Name: Checkbox
// Dependencies: [19, 21, 5712, 15927, 15928, 2]
// Exports: default

// Module 15926 (Checkbox)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AssetRegistryDefault from "AssetRegistry" /* 15927 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15928 */;
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
