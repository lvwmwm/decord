// Module ID: 7924
// Function ID: 7925
// Name: extractPolyPoints
// Dependencies: []

// Module 7924 (extractPolyPoints)
arg5.default = function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
