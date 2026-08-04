// Module ID: 8526
// Function ID: 8527
// Name: extractPolyPoints
// Dependencies: []

// Module 8526 (extractPolyPoints)
arg5.default = function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
