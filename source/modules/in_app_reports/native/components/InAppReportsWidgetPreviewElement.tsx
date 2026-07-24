// Module ID: 12354
// Function ID: 96180
// Name: WidgetPreview
// Dependencies: [31, 27, 33, 4130, 689, 8282, 6857, 4126, 1212, 12014, 2]
// Exports: default

// Module 12354 (WidgetPreview)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, title: { lineHeight: 16, marginBottom: 8 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.USER_PROFILE_CONTAINER_BACKGROUND };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsWidgetPreviewElement.tsx");

export default function WidgetPreview(widget) {
  widget = widget.widget;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(6857) /* items */;
  let tmp3 = null;
  if (obj.isGameWidget(widget)) {
    tmp3 = null;
    if (0 !== widget.games.length) {
      obj = { style: tmp.container };
      obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.children = intl.string(require(1212) /* getSystemLocale */.t.SpsnDY).toUpperCase();
      const items = [callback(require(4126) /* Text */.Text, obj), ];
      const obj1 = { userId: widget.userId, widget, disableInteraction: true };
      const items1 = [tmp2.card, tmp.card];
      obj1.cardStyle = items1;
      items[1] = callback(require(12014) /* useGamePress */.WidgetSection, obj1);
      obj.children = items;
      tmp3 = callback2(View, obj);
      const str = intl.string(require(1212) /* getSystemLocale */.t.SpsnDY);
    }
  }
  return tmp3;
};
