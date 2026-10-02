// Module ID: 8002
// Function ID: 8003
// Name: extractPolyPoints
// Dependencies: []
// Exports: default

// Module 8002 (extractPolyPoints)

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const str3 = str.replace(/[^eE]-/, " -");
  const parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
