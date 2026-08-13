// Module ID: 12038
// Function ID: 12039
// Name: GuildIconPile
// Dependencies: [19, 21, 5819, 11154, 12039, 8341, 11155, 2]
// Exports: GuildIconPile

// Module 12038 (GuildIconPile)
import noop from "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("GuildIconSizes").fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = function GuildIconPile(arg0) {
  let children;
  let names;
  let size;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = require(5819) /* GuildIconSizes */.ImageSizes[size];
  let obj = { "aria-label": null, shape: null, size: null, gap: null, depthX: 0.25, children: null };
  obj[0] = require(12039) /* getListSummaryLabel */.getListSummaryLabel(names, totalCount);
  obj[1] = require(8341) /* SolidCutout */.CutoutShape.RoundedRect;
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
    obj[1] = tmp4 / 3;
    obj[2] = totalCount - countResult;
    tmp6 = callback(require(11155) /* map */.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj[5] = items;
  return closure_4(require(11154) /* Pile */.Pile, obj);
};
