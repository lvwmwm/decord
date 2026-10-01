// Module ID: 15320
// Function ID: 15321
// Name: ShopSkipCategoriesFilter
// Dependencies: [19, 17, 6962, 21, 4836, 576, 504, 5279, 4832, 6961, 2]
// Exports: ShopSkipCategoriesFilter

// Module 15320 (ShopSkipCategoriesFilter)
import nativeDefault from "native" /* 576 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ View: c2, Pressable: c3 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3, stepperContainer: obj4, stepperButton: size, stepperButtonDisabled: { opacity: 0.5 }, valueText: { minWidth: 40, textAlign: "center" } };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = function ShopSkipCategoriesFilter() {
  let Stack;
  let items3;
  let obj7;
  let skipNumCategories;
  let stateFromStores;
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [CollectiblesCategoryStore];
  stateFromStores = obj.useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  const obj2 = { style: tmp.container, children: closure_6(Stack, obj7) };
  Stack = stateFromStores(5279).Stack;
  const items1 = [, ];
  const obj3 = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  items1[0] = closure_5(stateFromStores(4832).Text, obj3);
  const items2 = [tmp.stepperButton, ];
  const obj4 = { style: tmp.stepperContainer, children: items3 };
  const tmp11 = stateFromStores <= 0 && tmp.stepperButtonDisabled;
  items2[1] = tmp11;
  items3 = [, , ];
  const obj5 = {
    style: items2,
    onPress() {
      if (stateFromStores > 0) {
        const obj = CollectiblesActionCreators;
        obj.setSkipNumCategories(tmp - 1);
      }
    },
    disabled: stateFromStores <= 0,
    children: closure_5(stateFromStores(4832).Text, { variant: "text-lg/semibold", children: "\u2212" })
  };
  items3[0] = closure_5(closure_3, obj5);
  const obj6 = { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores };
  items3[1] = closure_5(stateFromStores(4832).Text, obj6);
  const items4 = [tmp.stepperButton, ];
  obj7 = { spacing: 8, children: items1 };
  const tmp12 = stateFromStores >= 100 && tmp.stepperButtonDisabled;
  items4[1] = tmp12;
  const obj8 = {
    style: items4,
    onPress() {
      if (stateFromStores < 100) {
        const obj = CollectiblesActionCreators;
        obj.setSkipNumCategories(tmp + 1);
      }
    },
    disabled: stateFromStores >= 100,
    children: closure_5(stateFromStores(4832).Text, { variant: "text-lg/semibold", children: "+" })
  };
  items3[2] = closure_5(closure_3, obj8);
  items1[1] = closure_6(closure_2, obj4);
  return closure_5(closure_2, obj2);
};
