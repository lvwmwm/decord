// Module ID: 12880
// Function ID: 98369
// Name: Close
// Dependencies: []
// Exports: default

// Module 12880 (Close)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/void/CloseIcon/native/CloseIcon.tsx");

export default function Close(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
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
  obj["viewBox"] = "0 0 24 24";
  obj = { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" };
  obj["children"] = jsx(arg1(dependencyMap[2]).Path, obj);
  return jsx(arg1(dependencyMap[2]).Svg, obj);
};
