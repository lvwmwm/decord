// Module ID: 14574
// Function ID: 109798
// Name: DevToolsShopScreen
// Dependencies: []
// Exports: default

// Module 14574 (DevToolsShopScreen)
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.wrap = obj;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
  let handleToggleDismissState;
  let isDismissed;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => store.get("shop_disable_cache"));
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.get("shop_include_unpublished"));
  let obj2 = arg1(dependencyMap[7]);
  const items2 = [closure_4];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.get("shop_show_debug_overlay"));
  let obj3 = arg1(dependencyMap[7]);
  const items3 = [closure_4];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => store.get("bypass_google_sku_sync"));
  const tmp = callback3();
  const tmp6 = importDefault(dependencyMap[8]);
  obj = { style: tmp.wrap };
  obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 + importDefault(dependencyMap[6])({ includeKeyboardHeight: true }).insets.bottom };
  ({ isDismissed, handleToggleDismissState } = importDefault(dependencyMap[8])(arg1(dependencyMap[9]).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  obj.contentContainerStyle = obj;
  obj1 = { spacing: 16 };
  obj2 = {};
  obj3 = {
    9223372036854775807: false,
    9223372036854775807: "Reward Configuration",
    9223372036854775807: false,
    trailing: callback(arg1(dependencyMap[13]).FormSwitch, {
      value: stateFromStores,
      onValueChange(arg0) {
        return callback(closure_2[14]).toggle("shop_disable_cache", arg0);
      }
    })
  };
  const items4 = [callback(arg1(dependencyMap[12]).TableRow, obj3), , , , ];
  const obj5 = {
    trailing: callback(arg1(dependencyMap[13]).FormSwitch, {
      value: stateFromStores1,
      onValueChange(arg0) {
        return callback(closure_2[14]).toggle("shop_include_unpublished", arg0);
      }
    })
  };
  items4[1] = callback(arg1(dependencyMap[12]).TableRow, obj5);
  const obj7 = { 9223372036854775807: "medium", 9223372036854775807: "Medium", 9223372036854775807: "NebulaWanderer", value: isDismissed, onValueChange: handleToggleDismissState };
  items4[2] = callback(arg1(dependencyMap[15]).TableSwitchRow, obj7);
  const obj8 = {
    9223372036854775807: "GESTURE_FULL",
    9223372036854775807: "%AsyncFunctionPrototype%",
    9223372036854775807: "targetFrames",
    trailing: callback(arg1(dependencyMap[13]).FormSwitch, {
      value: stateFromStores2,
      onValueChange(arg0) {
        return callback(closure_2[14]).toggle("shop_show_debug_overlay", arg0);
      }
    })
  };
  items4[3] = callback(arg1(dependencyMap[12]).TableRow, obj8);
  const obj10 = {
    trailing: callback(arg1(dependencyMap[13]).FormSwitch, {
      value: stateFromStores3,
      onValueChange(arg0) {
        return callback(closure_2[14]).toggle("bypass_google_sku_sync", arg0);
      }
    })
  };
  items4[4] = callback(arg1(dependencyMap[12]).TableRow, obj10);
  obj2.children = items4;
  obj1.children = callback2(arg1(dependencyMap[11]).TableRowGroup, obj2);
  obj.children = callback(arg1(dependencyMap[10]).Stack, obj1);
  return callback(ScrollView, obj);
};
