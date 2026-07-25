// Module ID: 12112
// Function ID: 94906
// Name: UserProfilePrivateInfoBanner
// Dependencies: [27, 33, 4131, 689, 4127, 1212, 2]
// Exports: default

// Module 12112 (UserProfilePrivateInfoBanner)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.banner = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/UserProfilePrivateInfoBanner.tsx");

export default function UserProfilePrivateInfoBanner(username) {
  const containerBackground = username.containerBackground;
  let obj = {};
  const items = [callback().banner, ];
  let tmp3 = null != containerBackground;
  if (tmp3) {
    obj = { backgroundColor: containerBackground };
    tmp3 = obj;
  }
  items[1] = tmp3;
  obj.style = items;
  obj = { variant: "text-sm/normal" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.P8ij6Z, { username: username.username });
  obj.children = jsx(require(4127) /* Text */.Text, { variant: "text-sm/normal" });
  return <View variant="text-sm/normal" />;
};
