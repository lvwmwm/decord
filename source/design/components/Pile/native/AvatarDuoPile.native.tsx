// Module ID: 12975
// Function ID: 98690
// Name: AvatarDuoPile
// Dependencies: []
// Exports: AvatarDuoPile

// Module 12975 (AvatarDuoPile)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  let obj = Object.create(null);
  obj.size = 0;
  obj.children = 0;
  const merged = Object.assign(size, obj);
  obj = { "Null": 256113, "Null": 57745920, "Null": 285212672, "Null": 342954241, "Null": 1375731712, "Null": -1655946005 };
  if ("aria-label" in merged) {
    aria-label = merged.aria-label;
  } else {
    aria-label = arg1(dependencyMap[3]).getListSummaryLabel(merged.names);
    const obj2 = arg1(dependencyMap[3]);
  }
  obj.aria-label = aria_label;
  obj.shape = arg1(dependencyMap[4]).CutoutShape.Circle;
  if (obj3.isArray(size)) {
    let mapped = size.map((arg0) => callback(closure_1[6]).AVATAR_SIZE_MAP[arg0]);
  } else {
    mapped = arg1(dependencyMap[6]).AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(arg1(dependencyMap[2]).Pile, obj);
};
