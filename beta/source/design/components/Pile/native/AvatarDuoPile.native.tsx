// Module ID: 14457
// Function ID: 14458
// Name: AvatarDuoPile
// Dependencies: [19, 21, 11269, 12872, 9094, 12, 13321, 2]
// Exports: AvatarDuoPile

// Module 14457 (AvatarDuoPile)
import ClipView from "ClipView" /* 9094 */;
import Pile from "Pile" /* 11269 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 13321 */;
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
    prop = tmp3(12872).getListSummaryLabel(merged.names);
    const tmp3Result = tmp3(12872);
  }
  const obj = { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  if (tmp3Result2.isArray(size)) {
    let mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
  } else {
    mapped = tmp3(13321).AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(Pile.Pile, { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};
