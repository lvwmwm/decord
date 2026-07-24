// Module ID: 11976
// Function ID: 92617
// Name: AvatarPile
// Dependencies: [31, 33, 11977, 9941, 11679, 7961, 9942, 2]
// Exports: AvatarPile

// Module 11976 (AvatarPile)
import result from "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("StaticNativeCutoutAvatarImage").fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export const AvatarPile = function AvatarPile(arg0) {
  let children;
  let names;
  let size;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp2 = require(11977) /* StaticNativeCutoutAvatarImage */.AVATAR_SIZE_MAP[size];
  let num = 3;
  let obj = { "aria-label": require(11679) /* getListSummaryLabel */.getListSummaryLabel(names, totalCount), shape: require(7961) /* SolidCutout */.CutoutShape.Circle, size: tmp2 };
  if (tmp2 <= 40) {
    num = 2;
  }
  obj.gap = num;
  obj.depthX = 0.4;
  const items = [children, ];
  let tmp4 = null != totalCount && countResult < totalCount;
  if (tmp4) {
    obj = { size: tmp2, borderRadius: tmp2 / 2, value: totalCount - countResult };
    tmp4 = callback(require(9942) /* map */.PileOverflow, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(require(9941) /* Pile */.Pile, obj);
};
