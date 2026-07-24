// Module ID: 11077
// Function ID: 86204
// Name: AppealIngestionBreadcrumbs
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 2]
// Exports: default

// Module 11077 (AppealIngestionBreadcrumbs)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 0, alignSelf: "stretch", marginBottom: 8 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" } };
_createForOfIteratorHelperLoose = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.breadCrumbDot = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.breadCrumbBar = obj1;
_createForOfIteratorHelperLoose.breadCrumbText = { marginStart: 8, lineHeight: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: tmp.container };
    obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.eQg0Ck);
    let items = [
      callback(require(4126) /* Text */.Text, obj),
      reasons.map((children) => {
          let obj = { style: tmp.breadCrumbItemContainer };
          obj = { style: tmp.breadCrumbBar };
          const items = [outer1_3(outer1_2, obj), , ];
          obj = { style: tmp.breadCrumbDot };
          items[1] = outer1_3(outer1_2, obj);
          const obj1 = { lineClamp: 2, ellipsizeMode: "tail", style: tmp.breadCrumbText, variant: "text-md/medium", children };
          items[2] = outer1_3(tmp(outer1_1[5]).Text, obj1);
          obj.children = items;
          return outer1_4(outer1_2, obj, "" + children + "+" + arg1);
        })
    ];
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
