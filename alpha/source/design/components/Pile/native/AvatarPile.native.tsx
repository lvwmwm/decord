// Module ID: 15014
// Function ID: 15015
// Name: AvatarPile
// Dependencies: [19, 21, 15015, 13560, 12938, 9637, 13561, 2]
// Exports: AvatarPile

// Module 15014 (AvatarPile)
import ClipView from "ClipView" /* 9637 */;
import ListUtils from "ListUtils" /* 12938 */;
import Pile2 from "Pile" /* 13560 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 15015 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const PileOverflow = tmp2(13561);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export function AvatarPile(arg0) {
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
  const tmp4 = CutoutableAvatarImage.AVATAR_SIZE_MAP[size];
  const obj = { "aria-label": obj2.getListSummaryLabel(names, totalCount), shape: ClipView.CutoutShape.Circle, size: tmp4, gap: num, depthX: 0.4, children: items };
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
    const obj3 = { size: tmp4, borderRadius: tmp4 / 2, value: totalCount - countResult };
    tmp6 = _false(PileOverflow.PileOverflow, obj3);
  }
  items[1] = tmp6;
  return tmp5(Pile, obj);
}
