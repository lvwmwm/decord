// Module ID: 8339
// Function ID: 8340
// Name: extractPolyPoints
// Dependencies: []

// Module 8339 (extractPolyPoints)
arg5.default = function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
