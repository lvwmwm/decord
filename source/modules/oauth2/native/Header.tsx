// Module ID: 9070
// Function ID: 71208
// Name: Header
// Dependencies: [31, 27, 653, 33, 4130, 689, 1392, 1273, 4126, 8568, 1360, 1212, 2]
// Exports: default

// Module 9070 (Header)
import "result";
import { View } from "get ActivityIndicator";
import { UserFlags } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.applicationNameWrapper = { flexDirection: "row" };
_createForOfIteratorHelperLoose.headerIcons = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 };
_createForOfIteratorHelperLoose.ellipseGroup = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 };
let obj1 = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
_createForOfIteratorHelperLoose.ellipse = obj1;
_createForOfIteratorHelperLoose.botTag = { marginTop: 4, marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  let application;
  let bot;
  let user;
  ({ user, application, bot } = accountScopes);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importDefault(1392);
  obj = { id: application.id, icon: application.icon };
  let userAvatarSource;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  if (null != user) {
    let obj2 = importDefault(1392);
    userAvatarSource = obj2.getUserAvatarSource(user);
  }
  obj = { style: tmp.header };
  const obj1 = { style: tmp.headerIcons };
  obj2 = { source: applicationIconSource, size: require(1273) /* Button */.AvatarSizes.XLARGE };
  const items = [callback(require(1273) /* Button */.Avatar, obj2), , ];
  const obj3 = { style: tmp.ellipseGroup };
  const items1 = [callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse })];
  obj3.children = items1;
  items[1] = callback2(View, obj3);
  const obj7 = { source: userAvatarSource, size: require(1273) /* Button */.AvatarSizes.XLARGE };
  items[2] = callback(require(1273) /* Button */.Avatar, obj7);
  obj1.children = items;
  const items2 = [callback2(View, obj1), , ];
  const obj8 = { style: tmp.applicationNameWrapper };
  const obj9 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name };
  const items3 = [callback(require(4126) /* Text */.Text, obj9), ];
  let tmp9Result = null;
  if (null != bot) {
    const obj10 = { style: tmp.botTag };
    let hasFlagResult = null != bot.public_flags;
    if (hasFlagResult) {
      hasFlagResult = require(1360) /* hasFlag */.hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const obj15 = require(1360) /* hasFlag */;
    }
    obj10.verified = hasFlagResult;
    tmp9Result = callback(importDefault(8568), obj10);
    const tmp12 = importDefault(8568);
    const tmp9 = callback;
  }
  items3[1] = tmp9Result;
  obj8.children = items3;
  items2[1] = callback2(View, obj8);
  const obj11 = { variant: "heading-md/normal", color: "text-default" };
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.jFbDnJ);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["X+Fdpo"]);
  }
  obj11.children = stringResult;
  items2[2] = callback(require(4126) /* Text */.Text, obj11);
  obj.children = items2;
  return callback2(View, obj);
};
