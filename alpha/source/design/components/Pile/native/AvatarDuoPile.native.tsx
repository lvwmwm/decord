// Module ID: 16128
// Function ID: 16129
// Name: AvatarDuoPile
// Dependencies: [19, 21, 13631, 12993, 9611, 12, 15086, 2]
// Exports: AvatarDuoPile

// Module 16128 (AvatarDuoPile)
import _mod12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import ClipView from "ClipView" /* 9611 */;
import ListUtils from "ListUtils" /* 12993 */;
import Pile2 from "Pile" /* 13631 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 15086 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export function AvatarDuoPile(size) {
  let mapped;
  let prop;
  size = size.size;
  const children = size.children;
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0 }));
  const Pile = Pile2.Pile;
  const tmp2 = jsx;
  if ("aria-label" in merged) {
    prop = merged["aria-label"];
  } else {
    const tmp3Result = ListUtils;
    prop = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: mapped, gap: 4, depthX: 0.5, depthY: 0.5, children };
  const tmp3Result2 = _mod12;
  if (tmp3Result2.isArray(size)) {
    mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
  } else {
    mapped = tmp3(15086).AVATAR_SIZE_MAP[size];
  }
  return tmp2(Pile, obj);
}
