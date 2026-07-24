// Module ID: 8182
// Function ID: 64629
// Name: PremiumFeatureList
// Dependencies: [31, 27, 653, 33, 4130, 5052, 689, 7636, 2]
// Exports: default

// Module 8182 (PremiumFeatureList)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_NORMAL, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 14));
_createForOfIteratorHelperLoose.label = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconMargin = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginEnd: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("ME").fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  let View;
  let result;
  let dependencyMap;
  let features;
  let require;
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: result, rowStyle: View } = style);
  const callback = _createForOfIteratorHelperLoose();
  const found = features.filter((hidden) => !hidden.hidden);
  return callback(View, {
    style: style.style,
    children: found.map((color) => {
      let obj = {};
      obj = { style: items };
      items = [lib.item, closure_3];
      obj = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
      const items1 = [lib.iconMargin, closure_1];
      obj.children = lib(color.IconComponent, { size: "md", color: color.color, style: items1 });
      const items2 = [lib(outer1_3, obj), ];
      const items3 = [lib.label, result];
      items2[1] = lib(outer1_0(outer1_1[7]).FormRow.Label, { numberOfLines: 2, style: items3, text: color.label });
      obj.children = items2;
      const items4 = [outer1_5(outer1_3, obj, arg1), ];
      let tmp2 = null;
      if (null != closure_0) {
        tmp2 = null;
        if ("" !== closure_0) {
          tmp2 = null;
          if (color.renderSeparatorBelow) {
            tmp2 = closure_0;
          }
        }
      }
      items4[1] = tmp2;
      obj.children = items4;
      return outer1_5(outer1_2.Fragment, obj, arg1);
    })
  });
};
