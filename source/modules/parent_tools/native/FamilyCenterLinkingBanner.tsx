// Module ID: 13867
// Function ID: 106171
// Name: FamilyCenterLinkingBannerParentContent
// Dependencies: [31, 27, 33, 4130, 689, 7123, 11091, 1212, 2198, 13868, 4126, 13830, 2]
// Exports: default

// Module 13867 (FamilyCenterLinkingBannerParentContent)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function FamilyCenterLinkingBannerParentContent() {
  let obj = { style: callback3().container };
  obj = { index: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.header = intl.string(importDefault(2198)["7xxAni"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(importDefault(2198)["1M9So2"]);
  const items = [callback(FamilyCenterLinkingInstructionsRow, obj), , , ];
  obj = { index: 2 };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.header = intl3.string(importDefault(2198)["AXgx+a"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl4.string(importDefault(2198).GzMFnb);
  items[1] = callback(FamilyCenterLinkingInstructionsRow, obj);
  const obj1 = { index: 3 };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj1.header = intl5.string(importDefault(2198).MZn1tG);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj1.description = intl6.string(importDefault(2198)["8rLBxD"]);
  obj1.isLast = true;
  items[2] = callback(FamilyCenterLinkingInstructionsRow, obj1);
  items[3] = callback(require(13830) /* FamilyCenterTeenQRCodeButtonInner */.FamilyCenterParentQRCodeButton, {});
  obj.children = items;
  return callback2(closure_3, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return callback(closure_3, { style: _createForOfIteratorHelperLoose().container, children: callback(require(13830) /* FamilyCenterTeenQRCodeButtonInner */.FamilyCenterTeenQRCodeButton, {}) });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  let description;
  let header;
  let index;
  let isLast;
  ({ header, description, index, isLast } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.row };
  obj = { style: tmp.circle, children: callback(require(4126) /* Text */.Text, obj) };
  obj = { variant: "heading-md/semibold", color: "text-brand", children: index };
  const items = [callback(closure_3, obj), ];
  const obj1 = {};
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  items1[1] = gap;
  obj1.style = items1;
  const items2 = [callback(require(4126) /* Text */.Text, { variant: "heading-sm/bold", children: header }), ];
  const obj2 = { variant: "text-sm/medium", color: "text-muted", children: description };
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj1.children = items2;
  items[1] = closure_6(closure_3, obj1);
  obj.children = items;
  return closure_6(closure_3, obj);
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: 0, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md, elevation: 2, overflow: "hidden" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { width: "100%", height: 175, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.art = obj2;
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj4 = {};
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj4.container = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj4);
_createForOfIteratorHelperLoose = {};
const obj5 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, width: "100%" };
_createForOfIteratorHelperLoose.container = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj8 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
obj8.circle = _createForOfIteratorHelperLoose;
obj8.rowContent = { marginLeft: 12, flex: 1 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj8);
const obj7 = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(11091) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  const tmp2 = importDefault(7123)();
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(2198).zUCWEL), intl2.string(importDefault(2198).B0NPbp));
  let obj1 = require(11091) /* useAgeSpecificText */;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2198).zUCWEL);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj = { style: tmp.container };
  obj = {};
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.format(importDefault(2198).yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(importDefault(2198).JsAEDi));
  obj.source = importDefault(13868);
  obj.style = tmp.art;
  obj.resizeMethod = "resize";
  const items = [callback(closure_4, obj), , ];
  obj1 = { style: tmp.content };
  const items1 = [callback(require(4126) /* Text */.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), ];
  const obj3 = { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items1;
  items[1] = callback2(closure_3, obj1);
  items[2] = callback(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj.children = items;
  return callback2(closure_3, obj);
};
