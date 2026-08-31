// Module ID: 8298
// Function ID: 8299
// Name: extractPolyPoints
// Dependencies: []

// Module 8298 (extractPolyPoints)
arg5.default = function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
