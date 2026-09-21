// Module ID: 14460
// Function ID: 14461
// Name: AvatarDuoPile
// Dependencies: [109, 19, 21, 558, 568, 11303, 12783, 12, 13324, 9092, 2]

// Module 14460 (AvatarDuoPile)
import c from "c" /* 568 */;
import ClipView from "ClipView" /* 9092 */;
import Pile2 from "Pile" /* 11303 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 13324 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["size", "children"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Pile/native/AvatarDuoPile.native.tsx");

export const AvatarDuoPile = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  if (cResult[0] !== arg0) {
    ({ size, children } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    const Pile = tmp(11303).Pile;
    if ("aria-label" in tmp9) {
      let prop = tmp9["aria-label"];
    } else {
      prop = tmp(12783).getListSummaryLabel(tmp9.names);
      const tmpResult = tmp(12783);
    }
    cResult[0] = arg0;
    cResult[1] = Pile;
    cResult[2] = children;
    cResult[3] = size;
    cResult[4] = prop;
  } else if (cResult[5] !== cResult[3]) {
    if (tmpResult2.isArray(arr)) {
      let mapped = arr.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
    } else {
      mapped = tmp(13324).AVATAR_SIZE_MAP[arr];
    }
    cResult[5] = arr;
    cResult[6] = mapped;
    tmpResult2 = tmp(12);
  } else {
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp15) {
            let tmp18 = cResult[11];
          }
          return tmp18;
        }
      }
    }
    const obj2 = { "aria-label": tmp6, shape: tmp(9092).CutoutShape.Circle, size: cResult[6], gap: 4, depthX: 0.5, depthY: 0.5, children: tmp5 };
    const tmp20 = <tmp4 aria-label={tmp6} shape={tmp(9092).CutoutShape.Circle} size={cResult[6]} gap={4} depthX={0.5} depthY={0.5}>{tmp5}</tmp4>;
    cResult[7] = tmp4;
    cResult[8] = tmp5;
    cResult[9] = tmp6;
    cResult[10] = cResult[6];
    cResult[11] = tmp20;
    tmp18 = tmp20;
  }
}) : ((size) => {
  size = size.size;
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0 }));
  if ("aria-label" in merged) {
    let prop = merged["aria-label"];
  } else {
    prop = tmp3(12783).getListSummaryLabel(merged.names);
    const tmp3Result = tmp3(12783);
  }
  const obj = { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null };
  if (tmp3Result2.isArray(size)) {
    let mapped = size.map((item) => CutoutableAvatarImage.AVATAR_SIZE_MAP[item]);
  } else {
    mapped = tmp3(13324).AVATAR_SIZE_MAP[size];
  }
  obj.size = mapped;
  obj.children = size.children;
  return jsx(Pile2.Pile, { "aria-label": prop, shape: ClipView.CutoutShape.Circle, size: null, gap: 4, depthX: 0.5, depthY: 0.5, children: null });
});
