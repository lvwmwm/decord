// Module ID: 13215
// Function ID: 13216
// Name: AvatarDuoPile
// Dependencies: [19, 21, 9928, 11708, 7967, 12, 12015, 2]
// Exports: AvatarDuoPile

// Module 13215 (AvatarDuoPile)
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
    let tmp3Result = tmp3(11708);
    aria_label = tmp3Result.getListSummaryLabel(merged.names);
  }
  const obj = { aria-label, shape: require(7967) /* SolidCutout */.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  tmp3Result = tmp3(12);
  if (tmp3Result.isArray(size)) {
    let mapped = size.map((arg0) => callback(table[6]).AVATAR_SIZE_MAP[arg0]);
  } else {
    mapped = tmp3(12015).AVATAR_SIZE_MAP[size];
  }
  obj[2] = mapped;
  obj[6] = size.children;
  return jsx(require(9928) /* Pile */.Pile, { aria-label, shape: require(7967) /* SolidCutout */.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
};
