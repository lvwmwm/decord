// Module ID: 12116
// Function ID: 94927
// Name: UserProfileApplicationWidgetBottomStatsLayout
// Dependencies: [31, 27, 33, 4130, 689, 12026, 12113, 4126, 12114, 2]
// Exports: default

// Module 12116 (UserProfileApplicationWidgetBottomStatsLayout)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", flexWrap: "wrap", rowGap: require("_createForOfIteratorHelperLoose").space.PX_16, columnGap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.statsGrid = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.stat = { width: "47%", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { width: "47%", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx");

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  let View;
  let dependencyMap;
  let require;
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const callback = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((arg0) => outer1_0(outer1_1[5]).resolveStatComponentValues(components.components["stat_" + arg0], closure_1, closure_2, outer1_0(outer1_1[6]).formatDurationNarrow, true));
  return callback(View, {
    style: tmp.statsGrid,
    children: mapped.map((arg0, arg1) => {
      let iter = arg0;
      if (null == arg0) {
        return tmp;
      } else {
        let obj = { style: tmp.stat };
        obj = { field: iter.value, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        let items = [tmp(outer1_0(outer1_1[6]).FieldText, obj), ];
        if ("value" === iter.label.status) {
          obj = { variant: "text-xs/normal", color: "text-muted" };
          iter = iter.label.text;
          obj.children = iter;
          let tmp8 = tmp(outer1_0(outer1_1[7]).Text, obj);
        } else {
          tmp8 = null;
          if ("skeleton" === iter.label.status) {
            tmp8 = tmp(outer1_0(outer1_1[8]).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
          }
        }
        items[1] = tmp8;
        obj.children = items;
        items = arg1;
        outer1_4(outer1_2, obj, arg1);
        const tmp2 = outer1_4;
        const tmp3 = outer1_2;
      }
    })
  });
};
