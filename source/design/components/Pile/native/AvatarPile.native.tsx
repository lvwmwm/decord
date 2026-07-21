// Module ID: 11937
// Function ID: 92314
// Name: AvatarPile
// Dependencies: []
// Exports: AvatarPile

// Module 11937 (AvatarPile)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export const AvatarPile = function AvatarPile(arg0) {
  let children;
  let names;
  let size;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp2 = arg1(dependencyMap[2]).AVATAR_SIZE_MAP[size];
  let num = 3;
  let obj = { aria-label: arg1(dependencyMap[4]).getListSummaryLabel(names, totalCount), shape: arg1(dependencyMap[5]).CutoutShape.Circle, size: tmp2 };
  if (tmp2 <= 40) {
    num = 2;
  }
  obj.gap = num;
  obj.depthX = 0.4;
  const items = [children, ];
  let tmp4 = null != totalCount && countResult < totalCount;
  if (tmp4) {
    obj = { size: tmp2, borderRadius: tmp2 / 2, value: totalCount - countResult };
    tmp4 = callback(arg1(dependencyMap[6]).PileOverflow, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(arg1(dependencyMap[3]).Pile, obj);
};
