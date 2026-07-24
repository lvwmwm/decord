// Module ID: 13141
// Function ID: 101169
// Name: AvatarDuoPile
// Dependencies: [31, 33, 9941, 11679, 7961, 22, 11977, 2]
// Exports: AvatarDuoPile

// Module 13141 (AvatarDuoPile)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Pile").fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = function AvatarDuoPile(size) {
  size = size.size;
  let obj = Object.create(null);
  obj.size = 0;
  obj.children = 0;
  const merged = Object.assign(size, obj);
  obj = { "aria-label": null, shape: null, size: null, gap: 4, depthX: 0.5, depthY: 0.5 };
  if ("aria-label" in merged) {
    aria_label = merged["aria-label"];
  } else {
    aria_label = require(11679) /* getListSummaryLabel */.getListSummaryLabel(merged.names);
    const obj2 = require(11679) /* getListSummaryLabel */;
  }
  obj["aria-label"] = aria_label;
  obj.shape = require(7961) /* SolidCutout */.CutoutShape.Circle;
  if (obj3.isArray(size)) {
    let mapped = size.map((arg0) => outer1_0(outer1_1[6]).AVATAR_SIZE_MAP[arg0]);
  } else {
    mapped = require(11977) /* StaticNativeCutoutAvatarImage */.AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(require(9941) /* Pile */.Pile, { "aria-label": null, shape: null, size: null, gap: 4, depthX: 0.5, depthY: 0.5 });
};
