// Module ID: 8747
// Function ID: 69164
// Name: FractionalNitroPreview
// Dependencies: []
// Exports: FractionalNitroPreview

// Module 8747 (FractionalNitroPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const VerticalGradient = arg1(dependencyMap[2]).VerticalGradient;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { padding: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.lg, gap: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
obj.gradient = { left: "center", backgroundColor: -24, "Bool(true)": null, "Bool(true)": 1, "Bool(true)": "Malaysia" };
obj.headerImage = {};
obj.nitroIconContainer = { alignSelf: "flex-start" };
const obj1 = { position: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, location: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.benefits = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.benefitRow = { gap: importDefault(dependencyMap[5]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = callback3();
  const arg1 = tmp;
  const items = [arg1(dependencyMap[6]).t.E1NP2x, arg1(dependencyMap[6]).t.kpMomJ, arg1(dependencyMap[6]).t.xT1Vfn, arg1(dependencyMap[6]).t.myyAEr, arg1(dependencyMap[6]).t.zTk8Ul];
  let obj = { style: tmp.container };
  obj = { colors: ["MAXIMUM_KEY_BITS", "_clearAllPromise"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  const items1 = [callback(importDefault(dependencyMap[7]), obj), , , ];
  obj = {};
  const obj1 = { uri: importDefault(dependencyMap[9]) };
  obj.source = obj1;
  obj.style = tmp.headerImage;
  items1[1] = callback(importDefault(dependencyMap[8]), obj);
  const tmp2 = importDefault(dependencyMap[8]);
  items1[2] = callback(View, { style: tmp.nitroIconContainer, children: callback(importDefault(dependencyMap[10]), {}) });
  const obj2 = { style: tmp.nitroIconContainer, children: callback(importDefault(dependencyMap[10]), {}) };
  items1[3] = callback(View, {
    style: tmp.benefits,
    children: items.map((arg0, arg1) => {
      let obj = { style: tmp.benefitRow };
      obj = { color: callback(closure_2[5]).colors.WHITE };
      const items = [callback2(tmp(closure_2[11]).CheckmarkSmallIcon, obj), ];
      obj = {};
      const intl = tmp(closure_2[6]).intl;
      obj.children = intl.string(arg0);
      items[1] = callback2(tmp(closure_2[12]).Text, obj);
      obj.children = items;
      return callback3(closure_3, obj, arg1);
    })
  });
  obj.children = items1;
  return callback2(View, obj);
};
