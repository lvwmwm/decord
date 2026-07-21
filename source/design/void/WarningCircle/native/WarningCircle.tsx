// Module ID: 12893
// Function ID: 98432
// Name: WarningCircle
// Dependencies: []
// Exports: default

// Module 12893 (WarningCircle)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/void/WarningCircle/native/WarningCircle.tsx");

export default function WarningCircle(width) {
  let num = width.width;
  if (num === undefined) {
    num = 20;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 20;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  let obj = { 9223372036854775807: false, 9223372036854775807: false, -9223372036854775808: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 20 20";
  obj = { fill: str };
  obj["children"] = jsx(arg1(dependencyMap[2]).Path, obj);
  return jsx(arg1(dependencyMap[2]).Svg, obj);
};
