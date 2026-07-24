// Module ID: 13708
// Function ID: 105200
// Name: SafetyHubAccountStandingSubwayMarker
// Dependencies: [31, 27, 33, 4130, 689, 1212, 4126, 2]
// Exports: default

// Module 13708 (SafetyHubAccountStandingSubwayMarker)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { width: 56, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", rowGap: 8, flex: 1 } };
_createForOfIteratorHelperLoose = { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.marker = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.empty = obj1;
_createForOfIteratorHelperLoose.label = { textAlign: "center" };
_createForOfIteratorHelperLoose.firstOption = { alignItems: "flex-start", textAlign: "left" };
_createForOfIteratorHelperLoose.lastOption = { alignItems: "flex-end", textAlign: "right" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default function SafetyHubAccountStandingSubwayMarker(arg0) {
  let index;
  let isSelected;
  let numOptions;
  let onLayout;
  let require;
  let selectedIcon;
  let size;
  let status;
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = {};
  const merged = Object.assign(tmp.container);
  const merged1 = Object.assign(0 === index ? tmp.firstOption : {});
  const merged2 = Object.assign(index === numOptions - 1 ? tmp.lastOption : {});
  obj = { style: obj, onLayout };
  if (!isSelected) {
    obj = {};
    const obj1 = {};
    const merged3 = Object.assign(tmp.marker);
    obj1["width"] = size;
    obj1["height"] = size;
    let num = 0;
    if (tmp3) {
      num = -isSelected(689).space.PX_4;
    }
    obj1["marginLeft"] = num;
    let num3 = 0;
    if (index === numOptions - 1) {
      num3 = -isSelected(689).space.PX_4;
    }
    obj1["marginRight"] = num3;
    obj.style = obj1;
    const obj2 = { style: tmp.empty };
    obj.children = callback(View, obj2);
    selectedIcon = callback(View, obj);
    const tmp10 = callback;
    const tmp11 = View;
  }
  const items = [selectedIcon, ];
  const intl = require(1212) /* getSystemLocale */.intl;
  items[1] = intl.format(status, {
    hook(children) {
      if (isSelected) {
        let obj = {};
        obj = { color: color.color };
        obj.style = obj;
        obj.variant = "text-xxs/bold";
        obj.children = children;
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: tmp.label, children };
      }
      return outer1_4(outer1_0(outer1_4[6]).Text, obj, arg1);
    }
  });
  obj.children = items;
  return closure_5(View, obj);
};
export const SUBWAY_MARKER_WIDTH = 56;
