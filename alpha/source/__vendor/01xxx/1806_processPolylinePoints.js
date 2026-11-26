// Module ID: 1806
// Function ID: 1807
// Name: processPolylinePoints
// Dependencies: [1807]
// Exports: processPolygonPoints, processPolylinePoints

// Module 1806 (processPolylinePoints)
import _mod1807 from "module_1807" /* 1807 */;


export const processPolylinePoints = (join) => {
  let parts;
  const processSVGPath = _mod1807.processSVGPath;
  let str = join;
  _mod1807;
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
  const processSVGPath = _mod1807.processSVGPath;
  let str = join;
  _mod1807;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj = { d: processSVGPath("M" + parts.join(" ") + "z") };
  const str3 = str.replace(/([^eE])-/g, "$1 -");
  parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return obj;
};
