// Module ID: 14168
// Function ID: 14169
// Name: AvatarDuoPile
// Dependencies: [19, 21, 10635, 12287, 8441, 12, 12772, 2]
// Exports: AvatarDuoPile

// Module 14168 (AvatarDuoPile)
import ClipView from "ClipView" /* 8441 */;
import Pile from "Pile" /* 10635 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 12772 */;
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
    prop = tmp3(12287).getListSummaryLabel(merged.names);
    const tmp3Result = tmp3(12287);
  }
  const obj = { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  if (tmp3Result2.isArray(size)) {
    let mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
  } else {
    mapped = tmp3(12772).AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(Pile.Pile, { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};
