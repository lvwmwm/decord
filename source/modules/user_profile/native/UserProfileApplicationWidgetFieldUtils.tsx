// Module ID: 12087
// Function ID: 94683
// Name: formatDurationNarrow
// Dependencies: [31, 27, 33, 4130, 689, 1212, 12088, 4126, 2]
// Exports: FieldText, formatDurationNarrow

// Module 12087 (formatDurationNarrow)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.fieldTextRow = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.fieldIcon = { width: 16, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export const formatDurationNarrow = function formatDurationNarrow(arg0) {
  let hours;
  let minutes;
  let seconds;
  let num = 0;
  if (Number.isFinite(arg0)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(arg0));
  }
  let obj = { hours: Math.floor(num / 3600000), minutes: Math.floor(num / 60000) % 60, seconds: Math.floor(num / 1000) % 60 };
  ({ hours, minutes, seconds } = obj);
  const items = [];
  if (hours > 0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { hours };
    items.push(intl.formatToPlainString(require(1212) /* getSystemLocale */.t.rhY1Rs, obj));
  }
  if (minutes > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { minutes };
    items.push(intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["XIGt+W"], obj));
  }
  if (tmp7) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { seconds };
    items.push(intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.pyvjRp, obj1));
  }
  return items.join(" ");
};
export const FieldText = function FieldText(arg0) {
  let color;
  let field;
  let skeletonWidthChars;
  let variant;
  ({ field, variant } = arg0);
  ({ color, skeletonWidthChars } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if ("hidden" === field.status) {
    return null;
  } else if ("skeleton" === field.status) {
    let obj = { variant, widthChars: skeletonWidthChars };
    let tmp10Result = callback(require(12088) /* ImageSkeleton */.TextSkeleton, obj);
  } else {
    obj = { style: tmp.fieldTextRow };
    const obj1 = { variant, color, lineClamp: 2, children: field.text };
    const items = [callback(require(4126) /* Text */.Text, obj1), ];
    let tmp4 = null != field.icon;
    if (tmp4) {
      obj = {};
      const obj2 = { uri: field.icon.url };
      obj.source = obj2;
      obj.style = tmp.fieldIcon;
      obj.resizeMode = "contain";
      tmp4 = callback(closure_2, obj);
    }
    items[1] = tmp4;
    obj.children = items;
    tmp10Result = closure_5(closure_3, obj);
    const tmp10 = closure_5;
    const tmp11 = closure_3;
  }
};
