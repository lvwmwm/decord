// Module ID: 14534
// Function ID: 110974
// Name: FeaturedFirstCardCoachmarkAnchor
// Dependencies: [31, 27, 33, 14535, 2]
// Exports: default

// Module 14534 (FeaturedFirstCardCoachmarkAnchor)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = React.useRef(null);
  const obj = { collapsable: false };
  const items = [callback(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }), children.children, callback(importDefault(14535), { anchorRef: ref })];
  obj.children = items;
  return callback2(View, obj);
};
