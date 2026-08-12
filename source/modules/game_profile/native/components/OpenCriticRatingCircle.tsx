// Module ID: 9372
// Function ID: 9373
// Name: OpenCriticRatingCircle
// Dependencies: [21, 7876, 2]
// Exports: default

// Module 9372 (OpenCriticRatingCircle)
import { jsx } from "jsxProd";

let result = require("set").fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default function OpenCriticRatingCircle(size) {
  size = size.size;
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
  let obj = { width: size, height: size, children: null };
  obj = { transform: null, cx: null, cy: null, r: null, stroke: null, strokeWidth: 2, fill: "none", strokeDasharray: null, strokeDashoffset: null };
  const diff = 1 - result3;
  obj[0] = "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")";
  obj[1] = result;
  obj[2] = result;
  obj[3] = result1;
  obj[4] = size.strokeColor;
  obj[7] = result2;
  obj[8] = result2 * diff;
  obj[2] = jsx(require(7876) /* inlineStyles */.Circle, { transform: null, cx: null, cy: null, r: null, stroke: null, strokeWidth: 2, fill: "none", strokeDasharray: null, strokeDashoffset: null });
  return jsx(importDefault(7876), { transform: null, cx: null, cy: null, r: null, stroke: null, strokeWidth: 2, fill: "none", strokeDasharray: null, strokeDashoffset: null });
};
