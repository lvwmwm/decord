// Module ID: 10889
// Function ID: 84641
// Name: PublicGuildAnnouncementProfile
// Dependencies: [31, 27, 33, 4130, 689, 5187, 5085, 7721, 1273, 10890, 4126, 1212, 2]
// Exports: default

// Module 10889 (PublicGuildAnnouncementProfile)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { content: { padding: 16 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, height: 80, width: 80, marginVertical: 16 };
_createForOfIteratorHelperLoose.avatar = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.nameWrapper = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.headerText = { marginLeft: 8 };
_createForOfIteratorHelperLoose.description = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { startExpanded: true };
  obj = { style: tmp.content };
  obj = { style: tmp.avatar };
  let obj3 = require(7721) /* isPublicSystemMessage */;
  obj.source = obj3.getPublicSystemMessageAvatar();
  const items = [callback(importDefault(5085), obj), , , ];
  const obj1 = { style: tmp.nameWrapper };
  const obj2 = { source: importDefault(10890), disableColor: true };
  const items1 = [callback(require(1273) /* Button */.Icon, obj2), ];
  obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t.xfAlNx);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.BUZ0sl);
  items[2] = callback(require(4126) /* Text */.Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl3.string(require(1212) /* getSystemLocale */.t.w5beJH);
  items[3] = callback(require(4126) /* Text */.Text, obj5);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
