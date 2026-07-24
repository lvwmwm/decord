// Module ID: 12353
// Function ID: 96178
// Name: UserPreview
// Dependencies: [31, 27, 33, 4130, 689, 3974, 4126, 1212, 1273, 2]
// Exports: default

// Module 12353 (UserPreview)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.borderColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { lineHeight: 16, marginBottom: 8 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, padding: 12 };
_createForOfIteratorHelperLoose.userContainer = obj1;
_createForOfIteratorHelperLoose.userProfileInfo = { marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3974) /* hexToRgb */;
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.Rsth7z).toUpperCase();
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { style: items1 };
  items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = { size: require(1273) /* Button */.AvatarSizes.LARGE_48, user, guildId: undefined };
  const items2 = [callback(require(1273) /* Button */.Avatar, obj2), ];
  const obj3 = { style: tmp.userProfileInfo };
  let tmp5 = null != user.globalName;
  if (tmp5) {
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp5 = callback(require(4126) /* Text */.Text, obj4);
  }
  const items3 = [tmp5, ];
  const obj5 = { color: "text-default", variant: "text-sm/normal", children: user.username };
  items3[1] = callback(require(4126) /* Text */.Text, obj5);
  obj3.children = items3;
  items2[1] = closure_4(View, obj3);
  obj1.children = items2;
  items[1] = closure_4(View, obj1);
  obj.children = items;
  return closure_4(View, obj);
};
