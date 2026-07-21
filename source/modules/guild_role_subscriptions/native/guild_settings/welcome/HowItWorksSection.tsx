// Module ID: 16264
// Function ID: 125641
// Name: HowItWorksCard
// Dependencies: []
// Exports: default

// Module 16264 (HowItWorksCard)
function HowItWorksCard(iconSource) {
  let cardNumber;
  let description;
  ({ cardNumber, description } = iconSource);
  const tmp = callback3();
  let obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description };
  obj = { delete: 369098752, dispatch: 16777216, raw: 882, style: tmp.cardNumber, children: cardNumber };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), , ];
  obj = { style: tmp.container, children: callback(importDefault(dependencyMap[6]), obj1) };
  items[1] = callback(View, obj);
  const obj2 = { delete: true, dispatch: true, raw: true, style: tmp.howItWorksCardDescription, children: description };
  items[2] = callback(arg1(dependencyMap[5]).Text, obj2);
  obj.children = items;
  return callback2(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { flex: 1 }, horizontalContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.card = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.cardNumber = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
const obj2 = { <string:2892040516>: "isArray", <string:2181768798>: "accessibilityRole", <string:3077029956>: "create", <string:1168209776>: "registerAsset", <string:2626528002>: "key", <string:3456357378>: "Text", <string:1949136993>: "ks", <string:436357352>: "bind", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL };
obj.howItWorksCardDescription = obj2;
obj.howItWorksCardIcon = { marginVertical: 24 };
let closure_6 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.horizontalContainer };
  obj = { cardNumber: 1 };
  const intl = arg1(dependencyMap[7]).intl;
  obj.description = intl.string(arg1(dependencyMap[7]).t.lT0ZNS);
  obj.iconSource = importDefault(dependencyMap[8]);
  const items = [callback(HowItWorksCard, obj), callback(arg1(dependencyMap[9]).Spacer, { size: 12 }), ];
  const obj1 = { cardNumber: 2 };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj1.description = intl2.string(arg1(dependencyMap[7]).t.ihN2Wb);
  obj1.iconSource = importDefault(dependencyMap[10]);
  items[2] = callback(HowItWorksCard, obj1);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { cardNumber: 3 };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj2.description = intl3.string(arg1(dependencyMap[7]).t.c8krDQ);
  obj2.iconSource = importDefault(dependencyMap[11]);
  items1[1] = callback(HowItWorksCard, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
