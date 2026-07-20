// Module ID: 5354
// Function ID: 45825
// Name: useHeaderDebugOverlay
// Dependencies: []
// Exports: default

// Module 5354 (useHeaderDebugOverlay)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = { nativeGesture: "<string:3227506016>", renderSettingSearchResultItem: 10, useApplicationId: "absolute", borderWidth: -3, TV: -3 };
let obj = arg1(dependencyMap[3]);
obj = { tintWash: { left: "isArray", borderColor: "skuId", borderWidth: "T", backgroundColor: "r", borderRadius: "isArray", position: "description", top: "now" }, badgeContainer: { justifyContent: "ECD_DISABLED", paddingRight: "Cannot collect customer data when ECD is disabled. Enable this feature in the Control Panel to collect this data.", height: null, gap: "VISA_CHECKOUT_NOT_ENABLED" } };
obj = { color: "<string:16777735>", backgroundColor: "<string:37775937>", borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.badge = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.color-os-drawn = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_LINK };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_LINK };
obj.color-custom-drawn = { backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_DANGER };
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_DANGER };
obj.color-js-stack = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
const obj3 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.color-sheet = { backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_POSITIVE };
const obj4 = { backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_POSITIVE };
obj.color-bespoke = { backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING };
let closure_8 = obj.createStyles(obj);
const obj5 = { backgroundColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default function useHeaderDebugOverlay(arg0, arg1) {
  let tmp = arg1;
  const tmp3 = callback3();
  if (tmp2) {
    const _HermesInternal = HermesInternal;
    if (null == tmp) {
      tmp = closure_7[arg0];
    }
    let obj = {};
    obj = {};
    const items = [tmp3.tintWash, tmp3["color-" + arg0]];
    obj.style = items;
    const items1 = [callback(View, obj), ];
    obj = { style: tmp3.badgeContainer };
    const obj1 = {};
    const items2 = [tmp3.badge, tmp3["color-" + arg0]];
    obj1.style = items2;
    const obj2 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: tmp };
    obj1.children = callback(arg1(dependencyMap[6]).Text, obj2);
    obj.children = callback(View, obj1);
    items1[1] = callback(View, obj);
    obj.children = items1;
    return callback2(closure_5, obj);
  } else {
    return null;
  }
  const tmp2 = importDefault(dependencyMap[5])("show_header_debug_info");
};
