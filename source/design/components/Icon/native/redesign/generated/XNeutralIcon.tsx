// Module ID: 7762
// Function ID: 61666
// Name: XNeutralIcon
// Dependencies: []
// Exports: XNeutralIcon

// Module 7762 (XNeutralIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: arg1(dependencyMap[3]), color: str, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[2]).BaseIconImage, obj);
};
