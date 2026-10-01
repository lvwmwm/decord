// Module ID: 8191
// Function ID: 8192
// Name: OpenCriticRatingCircle
// Dependencies: [21, 7909, 2]
// Exports: default

// Module 8191 (OpenCriticRatingCircle)
import Fragment from "Fragment" /* 21 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

const jsx = Fragment.jsx;
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default function OpenCriticRatingCircle(size) {
  let diff;
  size = size.size;
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const strokeColor = size.strokeColor;
  const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
  ({ transform: "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")", cx: result, cy: result, r: result1, stroke: strokeColor, strokeWidth: 2, fill: "none", strokeDasharray: result2, strokeDashoffset: result2 * diff });
  diff = 1 - result3;
  inlineStylesDefault;
  const Circle = inlineStyles.Circle;
  return <tmp5 width={size} height={size}>{null}</tmp5>;
};
