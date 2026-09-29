// Module ID: 8849
// Function ID: 8850
// Name: extractPolyPoints
// Dependencies: []
// Exports: default

// Module 8849 (extractPolyPoints)

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
