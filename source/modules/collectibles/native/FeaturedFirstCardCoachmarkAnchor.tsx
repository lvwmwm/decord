// Module ID: 14359
// Function ID: 108423
// Name: FeaturedFirstCardCoachmarkAnchor
// Dependencies: []
// Exports: default

// Module 14359 (FeaturedFirstCardCoachmarkAnchor)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = React.useRef(null);
  const obj = { collapsable: false };
  const items = [callback(View, { ref, style: { "Bool(true)": null, "Bool(true)": "Clear", "Bool(true)": "absolute", "Bool(true)": 0, "Bool(true)": 0 }, collapsable: false }), children.children, callback(importDefault(dependencyMap[3]), { anchorRef: ref })];
  obj.children = items;
  return callback2(View, obj);
};
