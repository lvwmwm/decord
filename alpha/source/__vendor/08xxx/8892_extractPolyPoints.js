// Module ID: 8892
// Function ID: 8893
// Name: extractPolyPoints
// Dependencies: []
// Exports: default

// Module 8892 (extractPolyPoints)

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
