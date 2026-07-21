// Module ID: 10145
// Function ID: 78473
// Name: SafetyTipsContainer
// Dependencies: []
// Exports: default

// Module 10145 (SafetyTipsContainer)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { image: { backgroundColor: null, paddingVertical: null } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.lg, overflow: "hidden" };
obj.tips = obj;
obj.text = { textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default function SafetyTipsContainer(safetyTips) {
  safetyTips = safetyTips.safetyTips;
  const arg1 = safetyTips;
  let showHeader = safetyTips.showHeader;
  const tmp = callback2();
  let obj = { spacing: 16 };
  obj = { style: tmp.image, children: callback(arg1(dependencyMap[6]).SafetyBookletSpotIllustration, {}) };
  const items = [callback(View, obj), , ];
  obj = {};
  if (showHeader) {
    const obj1 = { style: tmp.text, variant: "heading-xl/semibold" };
    const intl = arg1(dependencyMap[8]).intl;
    obj1.children = intl.string(arg1(dependencyMap[8]).t.eAbVfS);
    showHeader = callback(arg1(dependencyMap[7]).Text, obj1);
  }
  const items1 = [showHeader, ];
  const obj2 = { Opened: 75, marginVertical: null, marginStart: 1, marginEnd: "100%", style: tmp.text, children: safetyTips.description };
  items1[1] = callback(arg1(dependencyMap[7]).Text, obj2);
  obj.children = items1;
  items[1] = closure_5(arg1(dependencyMap[5]).Stack, obj);
  items[2] = callback(View, { style: tmp.tips, children: safetyTips.map((tip) => callback2(callback(closure_2[9]), { index: arg1 + 1, tip, end: arg1 === safetyTips.length - 1 }, arg1)) });
  obj.children = items;
  return closure_5(arg1(dependencyMap[5]).Stack, obj);
};
