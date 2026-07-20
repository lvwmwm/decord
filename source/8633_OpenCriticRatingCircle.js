// Module ID: 8633
// Function ID: 68368
// Name: OpenCriticRatingCircle
// Dependencies: [0, 0, 0]
// Exports: default

// Module 8633 (OpenCriticRatingCircle)
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/game_profile/native/components/OpenCriticRatingCircle.tsx");

export default function OpenCriticRatingCircle(size) {
  size = size.size;
  const result = size / 2;
  const result1 = (size - 4) / 2;
  const result2 = 2 * Math.PI * result1;
  const result3 = Math.min(Math.max(size.rating, 0), 100) / 100;
  let obj = { width: size, height: size };
  obj = {};
  const diff = 1 - result3;
  obj.transform = "rotate(" + 360 * diff / 2 + " " + result + " " + result + ")";
  obj.cx = result;
  obj.cy = result;
  obj.r = result1;
  obj.stroke = size.strokeColor;
  obj.strokeWidth = 2;
  obj.fill = "none";
  obj.strokeDasharray = result2;
  obj.strokeDashoffset = result2 * diff;
  obj.children = jsx(require(dependencyMap[1]).Circle, obj);
  return jsx(importDefault(dependencyMap[1]), obj);
};
