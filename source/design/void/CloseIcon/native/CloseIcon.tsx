// Module ID: 13053
// Function ID: 100881
// Name: Close
// Dependencies: [31, 33, 8063, 2]
// Exports: default

// Module 13053 (Close)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("inlineStyles").fileFinishedImporting("design/void/CloseIcon/native/CloseIcon.tsx");

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
  let obj = { width: 0, height: 0, color: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj["viewBox"] = "0 0 24 24";
  obj = { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" };
  obj["children"] = jsx(require(8063) /* inlineStyles */.Path, { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" });
  return jsx(require(8063) /* inlineStyles */.Svg, { fill: str, d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" });
};
