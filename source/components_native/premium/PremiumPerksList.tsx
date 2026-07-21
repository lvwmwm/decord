// Module ID: 14539
// Function ID: 109543
// Name: PremiumPerksList
// Dependencies: []
// Exports: default

// Module 14539 (PremiumPerksList)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { perkInfoContainer: { "Null": "center", "Null": "center", "Bool(false)": "100%" }, perkInfoTextContainer: {}, perkListContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.perkIconContainer = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  const tmp = callback2();
  const arg1 = tmp;
  return callback(View, {
    style: tmp.perkListContainer,
    children: perks.map((children) => {
      let obj = { style: tmp.perkInfoContainer };
      obj = { style: tmp.perkIconContainer, children: callback(children.IconComponent, { size: "md" }) };
      const items = [callback(closure_2, obj), ];
      obj = { style: tmp.perkInfoTextContainer };
      const items1 = [callback(tmp(closure_1[5]).Text, { children: children.label }), callback(tmp(closure_1[5]).Text, { children: children.description })];
      obj.children = items1;
      items[1] = callback2(closure_2, obj);
      obj.children = items;
      return callback2(closure_2, obj, arg1);
    })
  });
};
