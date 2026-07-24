// Module ID: 12370
// Function ID: 96248
// Name: ExternalLinkItem
// Dependencies: [27, 33, 4130, 4126, 1212, 7639, 5170, 12371, 3827, 2]
// Exports: default

// Module 12370 (ExternalLinkItem)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
function ExternalLinkItem(data) {
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = { label: tmp, subLabel: tmp2 };
    obj = { IconComponent: url(12371).LinkExternalMediumIcon };
    obj.trailing = callback(url(5170).TableRowIcon, obj);
    obj.onPress = function onPress() {
      outer1_1(outer1_2[8]).openURL(url);
    };
    obj.arrow = false;
    obj.accessibilityRole = "link";
    tmp3 = callback(url(7639).RowButton, obj);
  }
  return tmp3;
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerText: { marginBottom: 8 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default function ExternalLinksElement(elements) {
  elements = elements.elements;
  const tmp = callback2();
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        let obj = { style: tmp.linksContainer };
        let tmp5 = !elements.some((data) => data.data.is_header_hidden);
        if (tmp5) {
          obj = { style: tmp.headerText, variant: "heading-deprecated-12/extrabold", color: "text-default", accessibilityRole: "header" };
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.children = intl.string(require(1212) /* getSystemLocale */.t.hvVgAZ).toUpperCase();
          tmp5 = callback(require(4126) /* Text */.Text, obj);
          const str = intl.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
        }
        const items = [tmp5, elements.map((data) => outer1_4(outer1_7, { data: data.data }, "external-link-" + arg1))];
        obj.children = items;
        return closure_5(View, obj);
      }
    }
  }
  return null;
};
