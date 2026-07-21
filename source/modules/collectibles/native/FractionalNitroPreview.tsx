// Module ID: 8746
// Function ID: 69141
// Name: FractionalNitroPreview
// Dependencies: []
// Exports: FractionalNitroPreview

// Module 8746 (FractionalNitroPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const VerticalGradient = arg1(dependencyMap[2]).VerticalGradient;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { eachRight: 0.0000000000000000000000000017165658239579442, boxedNitroProxy: -0.0000000000000000000000000000000000001266642667965841, RESPONSE_EVENT_TYPES: -0.00000000000000000000000000000000000000000008974740175381657, sy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023780677603566327, hideModal: 0.00000000000012085106314181957, MOBILE_FLOATING_ACCESSORY_BACKGROUND: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023534381978645607, Bounty Scroll Gradient: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008932009021698, padding: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.lg, gap: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
obj.gradient = { o: "center", concat: null, o: 4, borderRadius: 4, position: "rgba(0, 0, 0, 0.75)" };
obj.headerImage = { "Null": null, "Null": 1, "Null": null };
obj.nitroIconContainer = { alignSelf: "flex-start" };
const tmp3 = arg1(dependencyMap[3]);
obj.benefits = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.benefitRow = { gap: importDefault(dependencyMap[5]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = callback3();
  const arg1 = tmp;
  const items = [arg1(dependencyMap[6]).t.E1NP2x, arg1(dependencyMap[6]).t.kpMomJ, arg1(dependencyMap[6]).t.xT1Vfn, arg1(dependencyMap[6]).t.myyAEr, arg1(dependencyMap[6]).t.zTk8Ul];
  let obj = { style: tmp.container };
  obj = { colors: ["accent_color", "QUEST_APP_UPSELL"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
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
