// Module ID: 11678
// Function ID: 90652
// Name: GuildIconPile
// Dependencies: [31, 33, 5513, 9941, 11679, 7961, 9942, 2]
// Exports: GuildIconPile

// Module 11678 (GuildIconPile)
import result from "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("makeSizeStyle").fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = function GuildIconPile(arg0) {
  let children;
  let names;
  let size;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp2 = require(5513) /* makeSizeStyle */.ImageSizes[size];
  let obj = { "aria-label": require(11679) /* getListSummaryLabel */.getListSummaryLabel(names, totalCount), shape: require(7961) /* SolidCutout */.CutoutShape.RoundedRect, size: tmp2 };
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
    tmp4 = callback(require(9942) /* map */.PileOverflow, obj);
  }
  items[1] = tmp4;
  obj.children = items;
  return closure_4(require(9941) /* Pile */.Pile, obj);
};
