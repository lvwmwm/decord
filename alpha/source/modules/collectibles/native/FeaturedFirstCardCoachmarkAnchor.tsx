// Module ID: 17846
// Function ID: 17847
// Name: FeaturedFirstCardCoachmarkAnchor
// Dependencies: [19, 17, 21, 17847, 2]
// Exports: default

// Module 17846 (FeaturedFirstCardCoachmarkAnchor)
import react_native from "react-native" /* 17 */;
import WishlistButtonCoachmarkDefault from "WishlistButtonCoachmark" /* 17847 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  let items;
  children = children.children;
  const ref = react.useRef(null);
  const obj = { collapsable: false, children: items };
  items = [React3(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }), children, React3(WishlistButtonCoachmarkDefault, { anchorRef: ref })];
  return hasOwnProperty(View, obj);
};
