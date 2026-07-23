// Module ID: 8627
// Function ID: 68360
// Name: ObscuredSurface
// Dependencies: [31, 27, 33, 4130, 689, 8628, 4639, 4126, 1212, 2]
// Exports: default

// Module 8627 (ObscuredSurface)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { position: "relative", overflow: "hidden" }, content: { pointerEvents: "none", userSelect: "none" } };
_createForOfIteratorHelperLoose = { position: "absolute", inset: 0, zIndex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.SPOILER_HIDDEN_BACKGROUND };
_createForOfIteratorHelperLoose.cover = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", insetInlineStart: "50%", top: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center", userSelect: "none", zIndex: 2 };
_createForOfIteratorHelperLoose.warning = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default function ObscuredSurface(obscured) {
  let children;
  let description;
  let heading;
  ({ heading, description, children } = obscured);
  const tmp = _createForOfIteratorHelperLoose();
  let tmp3Result = children;
  if (obscured.obscured) {
    let obj = { value: require(8628) /* context */.OBSCURED_VALUE };
    obj = { style: tmp.container };
    obj = { style: tmp.content, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessible: false, "aria-hidden": true, children };
    const items = [callback(View, obj), , ];
    const obj1 = { style: tmp.cover };
    items[1] = callback(View, obj1);
    const obj2 = { style: tmp.warning };
    const obj3 = { size: "lg", color: importDefault(689).colors.TEXT_DEFAULT };
    const items1 = [callback(require(4639) /* ImageWarningIcon */.ImageWarningIcon, obj3), , ];
    const obj4 = { variant: "heading-md/semibold", color: "text-strong" };
    if (null == heading) {
      const intl = require(1212) /* getSystemLocale */.intl;
      heading = intl.string(require(1212) /* getSystemLocale */.t.xC8Saf);
    }
    obj4.children = heading;
    items1[1] = callback(require(4126) /* Text */.Text, obj4);
    const obj5 = { variant: "text-sm/normal", color: "text-muted" };
    if (null == description) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      description = intl2.string(require(1212) /* getSystemLocale */.t["0fc/DG"]);
    }
    obj5.children = description;
    items1[2] = callback(require(4126) /* Text */.Text, obj5);
    obj2.children = items1;
    items[2] = closure_5(View, obj2);
    obj.children = items;
    obj.children = closure_5(View, obj);
    tmp3Result = tmp3(require(8628) /* context */.ObscuredSurfaceContext.Provider, obj);
    const tmp12 = callback;
  }
  return tmp3Result;
};
