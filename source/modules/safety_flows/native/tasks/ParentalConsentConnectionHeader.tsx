// Module ID: 16571
// Function ID: 129250
// Name: ParentalConsentConnectionNavbar
// Dependencies: [31, 27, 1849, 33, 4130, 5084, 689, 1557, 566, 4126, 5590, 1212, 2460, 2]
// Exports: ParentalConsentConnectionNavbar

// Module 16571 (ParentalConsentConnectionNavbar)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.row = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.logOut = { position: "absolute", left: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { position: "absolute", left: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    let username;
    if (null != currentUser) {
      username = currentUser.username;
    }
    return username;
  });
  obj = { style: { paddingTop: importDefault(1557)().top } };
  obj = { style: tmp.row };
  const obj1 = {
    accessibilityRole: "button",
    variant: "text-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      return outer1_1(outer1_2[10]).logout("safety_flows_parental_consent_connection");
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(importDefault(2460)["3HuGuY"]);
  const items1 = [callback(require(4126) /* Text */.Text, obj1), ];
  let tmp6 = null != stateFromStores;
  if (tmp6) {
    const obj2 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores };
    tmp6 = callback(require(4126) /* Text */.Text, obj2);
  }
  items1[1] = tmp6;
  obj.children = items1;
  obj.children = closure_6(View, obj);
  return callback(View, obj);
};
