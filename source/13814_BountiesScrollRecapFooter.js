// Module ID: 13814
// Function ID: 104481
// Name: BountiesScrollRecapFooter
// Dependencies: []
// Exports: BountiesScrollRecapFooter, BountiesScrollRecapFooterGradient

// Module 13814 (BountiesScrollRecapFooter)
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
  obj = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[5]).space.PX_4 };
  obj.orbRow = obj;
  obj.rive = {};
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
  obj = { get: null, enumerable: "76e12fa5305b436abd63e2faeb40e327", configurable: "ic_unmute_channel_24px", value: "png", style: tmp.headerLabel, children: stringResult };
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  obj = { 0: false, 9223372036854775807: false, 0: false, style: tmp.orbRow };
  const items1 = [callback(arg1(dependencyMap[9]).OrbsIcon, {}), ];
  const obj1 = { style: tmp.orbAmount, children: "+" + orbAmount };
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
  obj = { 1632892437: null, 1505116984: null, 1559978715: null };
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj.withReducedMotion = str;
  obj.children = closure_5(arg1(dependencyMap[11]).BountiesScrollGradientRive, obj);
  return closure_5(View, obj);
};
