// Module ID: 15633
// Function ID: 120476
// Name: Settings
// Dependencies: [31, 27, 33, 4130, 689, 15519, 1557, 7423, 4110, 3991, 15634, 2]
// Exports: default

// Module 15633 (Settings)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { containerOuter: { flex: 1, overflow: "hidden" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, flex: 1 };
_createForOfIteratorHelperLoose.containerOuterTablet = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { flex: 1 };
const obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", flex: 1 };
_createForOfIteratorHelperLoose.containerTablet = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  let obj = top(right[5]);
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
  const rect = left(right[6])();
  top = rect.top;
  left = rect.left;
  right = rect.right;
  let tmp2 = left(right[7])();
  if (tmp2) {
    tmp2 = !top(right[8]).isIpadOS();
    const obj2 = top(right[8]);
  }
  const React = tmp2;
  const tmp5 = _createForOfIteratorHelperLoose();
  const View = tmp5;
  let items = [tmp5, tmp2, top, left, right];
  obj = {
    style: React.useMemo(() => {
      if (result) {
        const items = [tmp.containerOuterTablet, ];
        let obj = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj;
        let items1 = items;
      } else {
        items1 = [tmp.containerOuter, ];
        obj = { paddingLeft: left, paddingRight: right };
        items1[1] = obj;
      }
      return items1;
    }, items)
  };
  obj = { style: tmp2 ? tmp5.containerTablet : tmp5.container, children: jsx(left(right[10]), {}) };
  obj.children = jsx(left(right[9]).View, { style: tmp2 ? tmp5.containerTablet : tmp5.container, children: jsx(left(right[10]), {}) });
  return <View style={tmp2 ? tmp5.containerTablet : tmp5.container}>{jsx(left(right[10]), {})}</View>;
};
