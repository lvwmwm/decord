// Module ID: 8817
// Function ID: 8818
// Name: extractPolyPoints
// Dependencies: []
// Exports: default

// Module 8817 (extractPolyPoints)

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
