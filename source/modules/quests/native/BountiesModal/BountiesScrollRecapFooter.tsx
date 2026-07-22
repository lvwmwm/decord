// Module ID: 13831
// Function ID: 104576
// Name: BountiesScrollRecapFooter
// Dependencies: []
// Exports: BountiesScrollRecapFooter, BountiesScrollRecapFooterGradient

// Module 13831 (BountiesScrollRecapFooter)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = {};
  obj = { gap: importDefault(dependencyMap[5]).space.PX_4 };
  obj.container = obj;
  obj.headerLabel = { textTransform: "uppercase" };
  obj = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[5]).space.PX_4 };
  obj.orbRow = obj;
  obj.rive = { backgroundColor: false, borderRadius: false };
  const obj1 = {};
  let num = 0;
  if (obj5.isIOS()) {
    num = 6;
  }
  obj1.marginTop = num;
  obj.orbAmount = obj1;
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback3();
  const intl = arg1(dependencyMap[7]).intl;
  const stringResult = intl.string(arg1(dependencyMap[7]).t.d6Rrn6);
  let obj = { style: tmp.container, accessibilityLabel: "" + stringResult + ", +" + orbAmount };
  obj = { style: tmp.headerLabel, children: stringResult };
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj = { <string:3798542332>: 48, <string:2195412909>: 12, <string:1614302748>: 4, style: tmp.orbRow };
  const items1 = [callback(arg1(dependencyMap[9]).OrbsIcon, { "Bool(true)": 1948506963, "Bool(true)": 19127130, "Bool(true)": 564779089 }), ];
  const obj1 = { NOT_FOUND_ERR: null, NOT_SUPPORTED_ERR: "secondary", INUSE_ATTRIBUTE_ERR: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  obj = { style: callback3().rive };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = {};
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj.withReducedMotion = str;
  obj.children = closure_5(arg1(dependencyMap[11]).BountiesScrollGradientRive, obj);
  return closure_5(View, obj);
};
