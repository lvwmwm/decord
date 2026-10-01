// Module ID: 12601
// Function ID: 12602
// Name: AvatarPile
// Dependencies: [19, 21, 12602, 10466, 12116, 8276, 10467, 2]
// Exports: AvatarPile

// Module 12601 (AvatarPile)
import ClipView from "ClipView" /* 8276 */;
import Pile2 from "Pile" /* 10466 */;
import ListUtils from "ListUtils" /* 12116 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 12602 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const PileOverflow = tmp2(10467);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarPile.native.tsx");

export const AvatarPile = function AvatarPile(arg0) {
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
};
