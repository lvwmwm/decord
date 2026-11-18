// Module ID: 7865
// Function ID: 7866
// Name: extractPolyPoints
// Dependencies: []
// Exports: default

// Module 7865 (extractPolyPoints)

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const str3 = str.replace(/[^eE]-/, " -");
  const parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
