// Module ID: 13997
// Function ID: 13998
// Name: AvatarDuoPile
// Dependencies: [19, 21, 10466, 12116, 8276, 12, 12584, 2]
// Exports: AvatarDuoPile

// Module 13997 (AvatarDuoPile)
import ClipView from "ClipView" /* 8276 */;
import Pile from "Pile" /* 10466 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 12584 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0 }));
  if ("aria-label" in merged) {
    let prop = merged["aria-label"];
  } else {
    prop = tmp3(12116).getListSummaryLabel(merged.names);
    const tmp3Result = tmp3(12116);
  }
  const obj = { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  if (tmp3Result2.isArray(size)) {
    let mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
  } else {
    mapped = tmp3(12584).AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(Pile.Pile, { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};
