// Module ID: 8742
// Function ID: 69129
// Name: FractionalNitroPreview
// Dependencies: []
// Exports: FractionalNitroPreview

// Module 8742 (FractionalNitroPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const VerticalGradient = arg1(dependencyMap[2]).VerticalGradient;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { ao: false, accessibilityRole: false, String: false, Array: false, channelId: false, shapes: false, ip: false, padding: importDefault(dependencyMap[5]).space.PX_24, borderRadius: importDefault(dependencyMap[5]).radii.lg, gap: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
obj.gradient = { left: "isArray", borderColor: "skuId", borderWidth: "T", backgroundColor: "r", borderRadius: "isArray" };
obj.headerImage = { "Null": null, "Null": null, "Null": null };
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
  obj = { colors: ["DEFAULT_ENABLE_DISMISS_ON_CLOSE", "QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
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
