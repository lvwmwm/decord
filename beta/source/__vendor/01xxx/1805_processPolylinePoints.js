// Module ID: 1805
// Function ID: 1806
// Name: processPolylinePoints
// Dependencies: [1806]
// Exports: processPolygonPoints, processPolylinePoints

// Module 1805 (processPolylinePoints)
import _mod1806 from "module_1806" /* 1806 */;


export const processPolylinePoints = (join) => {
  let parts;
  const processSVGPath = _mod1806.processSVGPath;
  let str = join;
  _mod1806;
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
  const processSVGPath = _mod1806.processSVGPath;
  let str = join;
  _mod1806;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj = { d: processSVGPath("M" + parts.join(" ") + "z") };
  const str3 = str.replace(/([^eE])-/g, "$1 -");
  parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return obj;
};
