// Module ID: 12162
// Function ID: 95277
// Name: UserProfilePrivateBanner
// Dependencies: [31, 27, 5510, 33, 4130, 689, 665, 4652, 4126, 1212, 2]
// Exports: default

// Module 12162 (UserProfilePrivateBanner)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: require("ARBITRARY_LARGE_OFFSET").PROFILE_TOP_LAYER_Z_INDEX };
_createForOfIteratorHelperLoose.banner = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().banner, ];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    obj = { backgroundColor: require(665) /* pad2 */.int2hex(primaryColor) };
    tmp3 = obj;
    const obj3 = require(665) /* pad2 */;
  }
  items[1] = tmp3;
  obj.style = items;
  obj = { size: "xs", color: importDefault(689).colors.TEXT_DEFAULT };
  const items1 = [callback(require(4652) /* LockIcon */.LockIcon, obj), ];
  const obj1 = { variant: "text-sm/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.KPnd2O);
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return closure_5(View, obj);
};
