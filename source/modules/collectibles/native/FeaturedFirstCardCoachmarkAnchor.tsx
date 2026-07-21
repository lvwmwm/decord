// Module ID: 14362
// Function ID: 108455
// Name: FeaturedFirstCardCoachmarkAnchor
// Dependencies: []
// Exports: default

// Module 14362 (FeaturedFirstCardCoachmarkAnchor)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = React.useRef(null);
  const obj = { collapsable: false };
  const items = [callback(View, { ref, style: { <string:2925645288>: null, <string:122250322>: "Clear", <string:3933102829>: "absolute", <string:1644562769>: 0, <string:140752822>: 0 }, collapsable: false }), children.children, callback(importDefault(dependencyMap[3]), { anchorRef: ref })];
  obj.children = items;
  return callback2(View, obj);
};
