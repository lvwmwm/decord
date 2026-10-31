// Module ID: 15870
// Function ID: 15871
// Name: AvatarDuoPile
// Dependencies: [19, 21, 13409, 12799, 9509, 12, 14880, 2]
// Exports: AvatarDuoPile

// Module 15870 (AvatarDuoPile)
import _mod12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import ClipView from "ClipView" /* 9509 */;
import ListUtils from "ListUtils" /* 12799 */;
import Pile2 from "Pile" /* 13409 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 14880 */;
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
    mapped = tmp3(14880).AVATAR_SIZE_MAP[size];
  }
  return tmp2(Pile, obj);
}
