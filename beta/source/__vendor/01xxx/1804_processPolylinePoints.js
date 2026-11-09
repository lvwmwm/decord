// Module ID: 1804
// Function ID: 1805
// Name: processPolylinePoints
// Dependencies: [1805]
// Exports: processPolygonPoints, processPolylinePoints

// Module 1804 (processPolylinePoints)
import _mod1805 from "module_1805" /* 1805 */;


export const processPolylinePoints = (join) => {
  let parts;
  const processSVGPath = _mod1805.processSVGPath;
  let str = join;
  _mod1805;
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
  const processSVGPath = _mod1805.processSVGPath;
  let str = join;
  _mod1805;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj = { d: processSVGPath("M" + parts.join(" ") + "z") };
  const str3 = str.replace(/([^eE])-/g, "$1 -");
  parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return obj;
};
