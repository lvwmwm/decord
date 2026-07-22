// Module ID: 11194
// Function ID: 87226
// Name: BrokenImage
// Dependencies: []
// Exports: default

// Module 11194 (BrokenImage)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/image/native/BrokenImage.tsx");

export default function BrokenImage(arg0) {
  const obj = { <string:2247508462>: null, <string:1146159108>: null, <string:2693882816>: null };
  const merged = Object.assign(arg0);
  obj["children"] = jsx(arg1(dependencyMap[2]).Path, { d: "M21 5v6.59l-3-3-4 4-4-4-4 4-3-3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Zm-3 6.42 3 3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 3 4-4 4 4 4-4Z" });
  return jsx(importDefault(dependencyMap[2]), obj);
};
