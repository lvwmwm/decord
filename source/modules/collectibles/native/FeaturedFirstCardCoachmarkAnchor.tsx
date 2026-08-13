// Module ID: 14908
// Function ID: 14909
// Name: FeaturedFirstCardCoachmarkAnchor
// Dependencies: [19, 17, 21, 14909, 2]
// Exports: default

// Module 14908 (FeaturedFirstCardCoachmarkAnchor)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = React.useRef(null);
  const obj = { collapsable: false, children: null };
  const items = [callback(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }), children.children, callback(importDefault(14909), { anchorRef: ref })];
  obj[1] = items;
  return callback2(View, obj);
};
