// Module ID: 14565
// Function ID: 109751
// Name: ShopSkipCategoriesFilter
// Dependencies: []
// Exports: ShopSkipCategoriesFilter

// Module 14565 (ShopSkipCategoriesFilter)
importAll(dependencyMap[0]);
({ View: closure_2, Pressable: closure_3 } = arg1(dependencyMap[1]));
let closure_4 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.label = { marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.stepperContainer = { gap: importDefault(dependencyMap[5]).space.PX_12 };
const obj2 = { gap: importDefault(dependencyMap[5]).space.PX_12 };
obj.stepperButton = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj.stepperButtonDisabled = { opacity: 0.5 };
obj.valueText = {};
let closure_7 = obj.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  const arg1 = stateFromStores;
  obj = { style: tmp.container };
  obj = { spacing: 8 };
  const obj1 = { -9223372036854775808: false, 9223372036854775807: false, 0: false, style: tmp.label };
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj1), ];
  const obj2 = { style: tmp.stepperContainer };
  const obj3 = {};
  const items2 = [tmp.stepperButton, ];
  let stepperButtonDisabled = tmp3;
  if (stateFromStores <= 0) {
    stepperButtonDisabled = tmp.stepperButtonDisabled;
  }
  items2[1] = stepperButtonDisabled;
  obj3.style = items2;
  obj3.onPress = function onPress() {
    if (stateFromStores > 0) {
      stateFromStores(closure_1[9]).setSkipNumCategories(stateFromStores - 1);
      const obj = stateFromStores(closure_1[9]);
    }
  };
  obj3.disabled = stateFromStores <= 0;
  obj3.children = callback(arg1(dependencyMap[8]).Text, { "Null": -918421502, "Null": 603980195 });
  const items3 = [callback(closure_3, obj3), callback(arg1(dependencyMap[8]).Text, { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores }), ];
  const obj5 = {};
  const items4 = [tmp.stepperButton, ];
  let stepperButtonDisabled2 = tmp4;
  if (stateFromStores >= 100) {
    stepperButtonDisabled2 = tmp.stepperButtonDisabled;
  }
  items4[1] = stepperButtonDisabled2;
  obj5.style = items4;
  obj5.onPress = function onPress() {
    if (stateFromStores < 100) {
      stateFromStores(closure_1[9]).setSkipNumCategories(stateFromStores + 1);
      const obj = stateFromStores(closure_1[9]);
    }
  };
  obj5.disabled = stateFromStores >= 100;
  obj5.children = callback(arg1(dependencyMap[8]).Text, { "Null": false, "Null": false });
  items3[2] = callback(closure_3, obj5);
  obj2.children = items3;
  items1[1] = closure_6(closure_2, obj2);
  obj.children = items1;
  obj.children = closure_6(arg1(dependencyMap[7]).Stack, obj);
  return callback(closure_2, obj);
};
