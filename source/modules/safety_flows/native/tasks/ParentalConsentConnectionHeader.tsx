// Module ID: 17098
// Function ID: 17099
// Name: ParentalConsentConnectionNavbar
// Dependencies: [19, 17, 1922, 21, 4661, 6370, 712, 1629, 589, 4734, 5256, 1236, 2597, 2]
// Exports: ParentalConsentConnectionNavbar

// Module 17098 (ParentalConsentConnectionNavbar)
import "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { row: null, logOut: null };
createCacheKey = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", left: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { position: "absolute", left: require("Themes").space.PX_16 };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
  const tmp = createCacheKey();
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let username;
    if (currentUser != null) {
      username = currentUser.username;
    }
    return username;
  });
  obj = { style: { paddingTop: importDefault(1629)().top }, children: null };
  obj = { style: tmp.row, children: null };
  const obj1 = {
    accessibilityRole: "button",
    variant: "text-md/medium",
    color: "text-link",
    style: tmp.logOut,
    onPress() {
      return callback(table[10]).logout("safety_flows_parental_consent_connection");
    },
    children: null
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[5] = intl.string(importDefault(2597)["3HuGuY"]);
  const items1 = [callback(require(4734) /* Text */.Text, obj1), ];
  let tmp5Result = null != stateFromStores;
  if (tmp5Result) {
    const obj2 = { accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj2[3] = stateFromStores;
    tmp5Result = tmp5(require(4734) /* Text */.Text, obj2);
  }
  items1[1] = tmp5Result;
  obj[1] = items1;
  obj[1] = closure_6(View, obj);
  return callback(View, obj);
};
