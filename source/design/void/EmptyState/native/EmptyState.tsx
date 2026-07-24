// Module ID: 13090
// Function ID: 101007
// Name: EmptyState
// Dependencies: [31, 27, 33, 4130, 689, 3976, 4126, 2]
// Exports: default

// Module 13090 (EmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_2, Image: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyImage = { flex: 1, maxWidth: 300, maxHeight: 200 };
_createForOfIteratorHelperLoose.emptyTitle = { marginTop: 20, textTransform: "uppercase" };
_createForOfIteratorHelperLoose.emptyBody = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  let body;
  let bodyStyle;
  let children;
  let title;
  const tmp = _createForOfIteratorHelperLoose();
  require(3976) /* AccessibilityAnnouncer */;
  if (null != Illustration.Illustration) {
    let obj = { accessible: false, importantForAccessibility: "no", accessibilityRole: "none", resizeMode: "contain" };
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj.style = items;
    let tmp6Result = callback(Illustration.Illustration, obj);
  } else {
    tmp6Result = null;
    if (tmp4) {
      obj = { resizeMode: "contain" };
      let obj1 = require(3976) /* AccessibilityAnnouncer */;
      obj.source = obj1.isThemeLight(tmp3) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj.style = items1;
      tmp6Result = callback(closure_3, obj);
      const tmp6 = callback;
      const tmp7 = closure_3;
    }
    tmp4 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  obj = { style: items2, accessible: true };
  items2 = [tmp.container, Illustration.style];
  const items3 = [tmp6Result, , , ];
  let tmp14 = null;
  ({ children, bodyStyle } = Illustration);
  if (null != title) {
    obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2 };
    const items4 = [tmp.emptyTitle, tmp11];
    obj1.style = items4;
    obj1.children = title;
    tmp14 = callback(require(4126) /* Text */.Text, obj1);
  }
  items3[1] = tmp14;
  let tmp18 = null;
  if (null != body) {
    const obj2 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2 };
    const items5 = [tmp.emptyBody, bodyStyle];
    obj2.style = items5;
    obj2.children = body;
    tmp18 = callback(require(4126) /* Text */.Text, obj2);
  }
  items3[2] = tmp18;
  items3[3] = children;
  obj.children = items3;
  return closure_5(closure_2, obj);
};
