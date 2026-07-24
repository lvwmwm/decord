// Module ID: 5088
// Function ID: 44318
// Name: useHeaderDebugOverlay
// Dependencies: [31, 27, 33, 4130, 689, 5089, 4126, 2]
// Exports: default

// Module 5088 (useHeaderDebugOverlay)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { "os-drawn": "OS-Drawn", "custom-drawn": "Custom-Drawn", "js-stack": "JS Stack", sheet: "Sheet", bespoke: "Bespoke" };
_createForOfIteratorHelperLoose = { tintWash: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.15 }, badgeContainer: { position: "absolute", bottom: 2, right: 4, pointerEvents: "none" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: 4, paddingVertical: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.badge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose["color-os-drawn"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK };
_createForOfIteratorHelperLoose["color-custom-drawn"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_DANGER };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_DANGER };
_createForOfIteratorHelperLoose["color-js-stack"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose["color-sheet"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
_createForOfIteratorHelperLoose["color-bespoke"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
const result = require("jsxProd").fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default function useHeaderDebugOverlay(arg0, arg1) {
  let tmp = arg1;
  const tmp3 = _createForOfIteratorHelperLoose();
  if (tmp2) {
    const _HermesInternal = HermesInternal;
    const tmp6 = tmp3["color-" + arg0];
    if (null == tmp) {
      tmp = table[arg0];
    }
    let obj = {};
    obj = {};
    const items = [tmp3.tintWash, tmp6];
    obj.style = items;
    const items1 = [callback(View, obj), ];
    obj = { style: tmp3.badgeContainer };
    const obj1 = {};
    const items2 = [tmp3.badge, tmp6];
    obj1.style = items2;
    const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp };
    obj1.children = callback(require(4126) /* Text */.Text, obj2);
    obj.children = callback(View, obj1);
    items1[1] = callback(View, obj);
    obj.children = items1;
    return callback2(closure_5, obj);
  } else {
    return null;
  }
  tmp2 = importDefault(5089)("show_header_debug_info");
};
