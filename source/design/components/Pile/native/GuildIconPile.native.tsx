// Module ID: 11641
// Function ID: 90365
// Name: GuildIconPile
// Dependencies: []
// Exports: GuildIconPile

// Module 11641 (GuildIconPile)
let closure_2 = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = function GuildIconPile(arg0) {
  let children;
  let names;
  let size;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp2 = arg1(dependencyMap[2]).ImageSizes[size];
  let obj = { aria-label: arg1(dependencyMap[4]).getListSummaryLabel(names, totalCount), shape: arg1(dependencyMap[5]).CutoutShape.RoundedRect, size: tmp2 };
  let num = 3;
  if (tmp2 <= 40) {
    num = 2;
  }
  obj.gap = num;
  obj.depthX = 0.25;
  const items = [children, ];
  let tmp4 = null != totalCount && countResult < totalCount;
  if (tmp4) {
    obj = { size: tmp2, borderRadius: tmp2 / 3, value: totalCount - countResult };
    tmp4 = callback(arg1(dependencyMap[6]).PileOverflow, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(arg1(dependencyMap[3]).Pile, obj);
};
