// Module ID: 13009
// Function ID: 100605
// Name: OverflowSquircle
// Dependencies: [31, 27, 33, 4130, 689, 4126, 2]
// Exports: OverflowCircle, OverflowText, OverflowTextSmall, default

// Module 13009 (OverflowSquircle)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function OverflowSquircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.overflowSquircleWrap, style];
  obj = { style: tmp.overflowSquircle };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj.children = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
}
_createForOfIteratorHelperLoose = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.overflowSquircleWrap = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
_createForOfIteratorHelperLoose.overflowSquircle = obj1;
let obj2 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.overflowTextOnly = obj2;
_createForOfIteratorHelperLoose.overflowCircleWrap = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 };
_createForOfIteratorHelperLoose.overflowCircle = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const result = require("jsxProd").fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(items) {
  let OverflowSquircle;
  let View;
  let _createForOfIteratorHelperLoose;
  let jsx;
  let overflowComponent;
  let style;
  items = items.items;
  let num = items.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: _createForOfIteratorHelperLoose, overflowStyle: OverflowSquircle, overflowComponent, style } = items);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  let c7;
  let closure_8;
  const tmp = _createForOfIteratorHelperLoose();
  c7 = tmp;
  closure_8 = Math.max(items.length - num, 0);
  let items1 = [tmp.container, style];
  return <View style={items1}>{items.map((arg0, arg1) => {
    if (arg1 < num) {
      if (arg1 === num - 1) {
        if (closure_8 > 0) {
          let obj = {};
          obj = { marginLeft: closure_3 };
          const items = [obj, closure_5];
          obj.style = items;
          obj.overflow = closure_8 + 1;
          let tmp6 = outer1_3(overflowComponent, obj, arg1);
        }
        return tmp6;
      }
      const _Math = Math;
      let diff = Math.min(items.length, num) - 1;
      tmp6 = null;
      if (arg0) {
        obj = {};
        const items1 = [_undefined.iconWrapper, closure_4, ];
        if (0 !== arg1) {
          const obj1 = { marginLeft: closure_3 };
          let obj2 = obj1;
        } else {
          obj2 = {};
        }
        items1[2] = obj2;
        obj.style = items1;
        diff = callback(arg0, arg1 === diff);
        obj.children = diff;
        outer1_3(outer1_2, obj, arg1);
        const tmp7 = outer1_3;
        const tmp8 = outer1_2;
      }
    }
  })}</View>;
};
export const OverflowText = function OverflowText(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().overflowTextOnly, style];
  obj.style = items;
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/medium", children: "+" + overflow });
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().overflowTextOnly, style];
  obj.style = items;
  obj = { variant: "text-xxs/medium", children: "+" + overflow };
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xxs/medium", children: "+" + overflow });
  return <View variant="text-xxs/medium">{"+" + overflow}</View>;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.overflowCircleWrap, style];
  obj = { style: tmp.overflowCircle };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/medium", children: "+" + overflow });
  obj.children = <View variant="text-xs/medium">{"+" + overflow}</View>;
  return <View variant="text-xs/medium">{"+" + overflow}</View>;
};
