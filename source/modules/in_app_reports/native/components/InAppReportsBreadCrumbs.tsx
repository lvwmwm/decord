// Module ID: 12359
// Function ID: 96193
// Name: Breadcrumbs
// Dependencies: [31, 27, 33, 4130, 689, 22, 4126, 7692, 1212, 2298, 2]
// Exports: default

// Module 12359 (Breadcrumbs)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 0, alignSelf: "stretch", marginBottom: 16, paddingHorizontal: 16 }, title: { lineHeight: 16, marginBottom: 8 }, breadCrumbItemContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 8, marginEnd: 32, overflow: "visible" } };
_createForOfIteratorHelperLoose = { marginStart: 2, marginTop: 8, width: 4, height: 4, borderRadius: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.breadCrumbDot = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", width: 2, top: 10, bottom: -12, left: 3, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.breadCrumbBar = obj1;
_createForOfIteratorHelperLoose.breadCrumbText = { marginStart: 8, lineHeight: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default function Breadcrumbs(element) {
  element = element.element;
  let obj = Object.create(null);
  obj.element = 0;
  obj.menuName = 0;
  let found;
  const merged = Object.assign(element, obj);
  let tmp3 = _createForOfIteratorHelperLoose();
  const require = tmp3;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      obj = found(22);
      found = obj.flatMap(merged.history, (destination) => {
        let tmp;
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        const items = [null, null];
        let state;
        if (null != multiSelect) {
          state = multiSelect.state;
        }
        if (null == state) {
          state = {};
        }
        const values = Object.values(state);
        if (values.length > 0) {
          items[0] = values.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      }).filter((arg0) => null != arg0);
      if (0 === found.length) {
        return null;
      } else {
        obj = { style: tmp3.container };
        let map = require(4126) /* Text */.Text;
        let obj1 = { style: tmp3.title, accessibilityRole: "header", variant: "text-xs/bold" };
        const REPORT_TO_MOD = require(7692) /* set */.ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(element.menuName);
        const intl = require(1212) /* getSystemLocale */.intl;
        const string = intl.string;
        if (hasItem) {
          let stringResult = string(found(2298)["6mx/DP"]);
        } else {
          stringResult = string(tmp17(1212).t["+3V9Tp"]);
        }
        obj1.children = stringResult;
        obj1 = [, ];
        obj1[0] = closure_4(map, obj1);
        map = found.map;
        obj1[1] = map((children) => {
          let obj = { style: tmp3.breadCrumbItemContainer };
          tmp3 = null;
          if (arg1 !== found.length - 1) {
            obj = { style: tmp3.breadCrumbBar };
            tmp3 = outer1_4(outer1_3, obj);
          }
          const items = [tmp3, , ];
          obj = { style: tmp3.breadCrumbDot };
          items[1] = outer1_4(outer1_3, obj);
          const obj1 = { lineClamp: 2, ellipsizeMode: "tail", style: tmp3.breadCrumbText, variant: "text-md/medium", children };
          items[2] = outer1_4(tmp3(outer1_2[6]).Text, obj1);
          obj.children = items;
          return outer1_5(outer1_3, obj, "" + children + "+" + arg1);
        });
        obj.children = obj1;
        closure_5(View, obj);
        const tmp11 = closure_5;
        const tmp12 = View;
        const tmp13 = closure_4;
        const tmp13Result = closure_4(map, obj1);
        tmp17 = require;
      }
      const flatMapResult = obj.flatMap(merged.history, (destination) => {
        let tmp;
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        const items = [null, null];
        let state;
        if (null != multiSelect) {
          state = multiSelect.state;
        }
        if (null == state) {
          state = {};
        }
        const values = Object.values(state);
        if (values.length > 0) {
          items[0] = values.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      });
    }
  }
  return null;
};
