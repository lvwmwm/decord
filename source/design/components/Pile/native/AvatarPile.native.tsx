// Module ID: 12020
// Function ID: 12021
// Name: AvatarPile
// Dependencies: [19, 21, 12021, 9931, 11712, 7970, 9932, 2]
// Exports: AvatarPile

// Module 12020 (AvatarPile)
import noop from "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
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
  const tmp4 = require(12021) /* StaticNativeCutoutAvatarImage */.AVATAR_SIZE_MAP[size];
  let obj = { "aria-label": null, shape: null, size: null, gap: null, depthX: 0.4, children: null };
  obj[0] = require(11712) /* getListSummaryLabel */.getListSummaryLabel(names, totalCount);
  obj[1] = require(7970) /* SolidCutout */.CutoutShape.Circle;
  obj[2] = tmp4;
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj[3] = num;
  const items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    obj = { size: null, borderRadius: null, value: null };
    obj[0] = tmp4;
    obj[1] = tmp4 / 2;
    obj[2] = totalCount - countResult;
    tmp6 = callback(require(9932) /* map */.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj[5] = items;
  return closure_4(require(9931) /* Pile */.Pile, obj);
};
