// Module ID: 12868
// Function ID: 98320
// Name: Checkbox
// Dependencies: []
// Exports: default

// Module 12868 (Checkbox)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style };
  if (style.selected) {
    obj.source = tmp3(tmp4[3]);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(tmp4[4]);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
