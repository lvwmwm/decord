// Module ID: 11193
// Function ID: 87201
// Name: BrokenImage
// Dependencies: []
// Exports: default

// Module 11193 (BrokenImage)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default function BrokenImage(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["children"] = jsx(arg1(dependencyMap[2]).Path, { d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z" });
  return jsx(importDefault(dependencyMap[2]), obj);
};
