// Module ID: 8107
// Function ID: 64231
// Name: extractPolyPoints
// Dependencies: []

// Module 8107 (extractPolyPoints)
arg5.default = function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
