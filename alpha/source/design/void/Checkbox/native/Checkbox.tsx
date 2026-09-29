// Module ID: 13797
// Function ID: 13798
// Name: Checkbox/Checkbox
// Dependencies: [19, 17, 21, 13798, 13799, 2]
// Exports: default

// Module 13797 (Checkbox/Checkbox)
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = tmp3(13798);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(13799);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
