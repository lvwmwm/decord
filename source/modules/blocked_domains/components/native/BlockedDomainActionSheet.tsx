// Module ID: 12095
// Function ID: 93255
// Name: BlockedDomainActionSheet
// Dependencies: []
// Exports: default

// Module 12095 (BlockedDomainActionSheet)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { padding: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
obj.title = { textAlign: "center" };
obj.warningMessage = { textAlign: "center" };
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default function BlockedDomainActionSheet(url) {
  const tmp = callback3();
  let obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj = { "Bool(true)": -1304358556, "Bool(true)": 1912602892, "Bool(true)": 32 };
  const items = [callback(arg1(dependencyMap[6]).TrafficConeSpotIllustration, {}), , ];
  const obj1 = { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032834862514393, 9223372036854775807: 11753968623045495000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008935732565137, -9223372036854775808: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043458473819206, style: tmp.title };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.2B3wj8);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  const obj2 = { style: tmp.warningMessage, variant: "text-md/medium" };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[8]).t.jnHyYU, {});
  items[2] = callback(arg1(dependencyMap[7]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(arg1(dependencyMap[5]).Stack, obj), callback(arg1(dependencyMap[9]).URLCallout, { url: url.url }), ];
  const obj3 = { grow: true };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[8]).t./g10LC);
  obj3.onPress = function onPress() {
    return callback(closure_2[11]).hideActionSheet();
  };
  items1[2] = callback(arg1(dependencyMap[10]).Button, obj3);
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[5]).Stack, obj);
  return callback(arg1(dependencyMap[4]).BottomSheet, obj);
};
