// Module ID: 13307
// Function ID: 13308
// Name: AvatarDuoPile
// Dependencies: [19, 21, 10156, 11860, 8075, 12, 12187, 2]
// Exports: AvatarDuoPile

// Module 13307 (AvatarDuoPile)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Pile").fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  const merged = Object.assign(size, Object.create(null));
  if ("aria-label" in merged) {
    aria_label = merged["aria-label"];
  } else {
    let tmp3Result = tmp3(11860);
    aria_label = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { aria-label, shape: require(8075) /* SolidCutout */.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  tmp3Result = tmp3(12);
  if (tmp3Result.isArray(size)) {
    let mapped = size.map((arg0) => callback(table[6]).AVATAR_SIZE_MAP[arg0]);
  } else {
    mapped = tmp3(12187).AVATAR_SIZE_MAP[size];
  }
  obj[2] = mapped;
  obj[6] = size.children;
  return jsx(require(10156) /* Pile */.Pile, { aria-label, shape: require(8075) /* SolidCutout */.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};
