// Module ID: 14142
// Function ID: 14143
// Name: GuildIconPile
// Dependencies: [19, 21, 6951, 13374, 12764, 9487, 13375, 2]
// Exports: GuildIconPile

// Module 14142 (GuildIconPile)
import GuildIcon from "GuildIcon" /* 6951 */;
import ClipView from "ClipView" /* 9487 */;
import ListUtils from "ListUtils" /* 12764 */;
import Pile2 from "Pile" /* 13374 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const PileOverflow = tmp2(13375);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export function GuildIconPile(arg0) {
  let children;
  let items;
  let names;
  let num;
  let obj2;
  let totalCount;
  ({ totalCount, children } = arg0);
  const Children = react.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = GuildIcon.ImageSizes[size];
  const obj = { "aria-label": obj2.getListSummaryLabel(names, totalCount), shape: ClipView.CutoutShape.RoundedRect, size: tmp4, gap: num, depthX: 0.25, children: items };
  const Pile = Pile2.Pile;
  num = 3;
  obj2 = ListUtils;
  const tmp5 = React3;
  if (tmp4 <= 40) {
    num = 2;
  }
  items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    const obj3 = { size: tmp4, borderRadius: tmp4 / 3, value: totalCount - countResult };
    tmp6 = _false(PileOverflow.PileOverflow, obj3);
  }
  items[1] = tmp6;
  return tmp5(Pile, obj);
}
