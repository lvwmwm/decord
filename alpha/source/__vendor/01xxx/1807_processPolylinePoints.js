// Module ID: 1807
// Function ID: 1808
// Name: processPolylinePoints
// Dependencies: [1808]
// Exports: processPolygonPoints, processPolylinePoints

// Module 1807 (processPolylinePoints)
import _mod1808 from "module_1808" /* 1808 */;


export const processPolylinePoints = (join) => {
  let parts;
  const processSVGPath = _mod1808.processSVGPath;
  let str = join;
  _mod1808;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj = { d: processSVGPath("M" + parts.join(" ")) };
  const str3 = str.replace(/([^eE])-/g, "$1 -");
  parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return obj;
};
export const processPolygonPoints = (join) => {
  let parts;
  const processSVGPath = _mod1808.processSVGPath;
  let str = join;
  _mod1808;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj = { d: processSVGPath("M" + parts.join(" ") + "z") };
  const str3 = str.replace(/([^eE])-/g, "$1 -");
  parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return obj;
};
