// Module ID: 14691
// Function ID: 111990
// Name: ShopSkipCategoriesFilter
// Dependencies: [31, 27, 6774, 33, 4130, 689, 566, 4541, 4126, 6773, 2]
// Exports: ShopSkipCategoriesFilter

// Module 14691 (ShopSkipCategoriesFilter)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_2, Pressable: closure_3 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.label = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.stepperContainer = obj2;
let obj3 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.stepperButton = obj3;
_createForOfIteratorHelperLoose.stepperButtonDisabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose.valueText = { minWidth: 40, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.skipNumCategories);
  obj = { style: tmp.container };
  obj = { spacing: 8 };
  const obj1 = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  const items1 = [callback(stateFromStores(4126).Text, obj1), ];
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
      stateFromStores(outer1_1[9]).setSkipNumCategories(stateFromStores - 1);
      const obj = stateFromStores(outer1_1[9]);
    }
  };
  obj3.disabled = stateFromStores <= 0;
  obj3.children = callback(stateFromStores(4126).Text, { variant: "text-lg/semibold", children: "\u2212" });
  const items3 = [callback(closure_3, obj3), callback(stateFromStores(4126).Text, { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores }), ];
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
      stateFromStores(outer1_1[9]).setSkipNumCategories(stateFromStores + 1);
      const obj = stateFromStores(outer1_1[9]);
    }
  };
  obj5.disabled = stateFromStores >= 100;
  obj5.children = callback(stateFromStores(4126).Text, { variant: "text-lg/semibold", children: "+" });
  items3[2] = callback(closure_3, obj5);
  obj2.children = items3;
  items1[1] = closure_6(closure_2, obj2);
  obj.children = items1;
  obj.children = closure_6(stateFromStores(4541).Stack, obj);
  return callback(closure_2, obj);
};
